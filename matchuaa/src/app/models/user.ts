export interface UserCredentials {
    email?: string | undefined | null;
    password?: string | undefined | null;
}

export interface LoginResponse {
    id: number
}

export interface UserRegister {
    user?: string | undefined | null,
    email?: string | undefined | null,
    pass?: string | undefined | null,
    date?: string | undefined | null
}