export interface RegisterPayload {
    name: String
    email: String
    password: String
}

export async function registerUser(payload: RegisterPayload): Promise<void> {
    console.log("Registering user:", payload.email)

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, 800)
    })
}