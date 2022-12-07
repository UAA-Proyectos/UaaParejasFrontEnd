export interface Chat{
    match: Match,
    user: UserChat
}

export interface Match{
    id_match: number,
    idInteraction: number,
    id_user1: number,
    id_user2: number
}

export interface UserChat{
    id: number,
    username: string,
    path: string,
    last_message: string | undefined,
    sent_at: string | undefined
}

export interface MessageRequest{
    id_user: number,
    message: string,
    id_match: number
}

export interface Message{
    idMessage: number,
    id_user: number,
    sent_at: string,
    content: string,
    id_match: number
}