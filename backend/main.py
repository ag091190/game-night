from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr, StringConstraints
from passlib.context import CryptContext
from datetime import datetime, timezone
from typing import Annotated

app = FastAPI()

origins = [
    "http://localhost:5173"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def hash_password(password: str) -> str:
    return pwd_context.hash(password)

class UserCreate(BaseModel):
    name: Annotated[str, StringConstraints(strip_whitespace=True, min_length=1)]
    email: EmailStr
    password: Annotated[str, StringConstraints(min_length=6)]

class UserPublic(BaseModel):
    id: int
    name: str
    email: EmailStr
    created_at: datetime

fake_user_db: list[dict] = []

@app.post("/api/register", response_model=UserPublic, status_code=201)
def register_user(user: UserCreate):
    normalized_email = user.email.lower()
    
    for existing in fake_user_db:
        if existing["email"] == normalized_email:
            raise HTTPException(
                status_code=409,
                detail="Email is already registered"
            )
    
    hashed_password = hash_password(user.password)
    
    new_user = {
        "id": len(fake_user_db) + 1,
        "name": user.name,
        "email": user.email,
        "password_hash": hashed_password,
        "created_at": datetime.now(timezone.utc)
    }
    
    fake_user_db.append(new_user)
    
    return {
        "id": new_user["id"],
        "name": new_user["name"],
        "email": new_user["email"],
        "created_at": new_user["created_at"],
    }