export interface UserCredentials {
    email?: string | undefined | null;
    password?: string | undefined | null;
}

export interface LoginResponse {
    id: number,
    user_type: number
}

export interface UserRegister {
    user?: string | undefined | null,
    email?: string | undefined | null,
    pass?: string | undefined | null,
    date?: string | undefined | null
}

export interface UserInformation {
    id: number,
    birthdate: string,
    description: string | null,
    zodiac_sign: number | null,
    username: string | null,
    email: string | null
    location: string | null,
    id_sexual_orientation: number | null | undefined,
    gender: number | null,
    show_me: number | null,
    user_type: number
}

export interface UpdateProfile {
    birthdate: string,
    description: string | null,
    zodiac_sign: number | null,
    username: string | null,
    email: string | null
    location: string | null,
    id_sexual_orientation: number | null | undefined,
    interests?: number[] | undefined,
    gender: number | null,
    show_me: number | null
}

export interface UserInterest {
    id: number,
    name: string
}

export interface UserPhoto {
    id_photo: number,
    id_user: number,
    path: string
}

export interface UserProfile {
    user: UserInformation,
    interest: UserInterest[],
    photos: UserPhoto[]
}