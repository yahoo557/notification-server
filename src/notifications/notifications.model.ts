export interface Message {
    id: string;
    type: MessageType;
    sender: string;
    token: string;
    createdAt: Date;
}
export enum MessageType{
    REPLY = 'REPLY',
    LIKE =  'LIKE',
}
