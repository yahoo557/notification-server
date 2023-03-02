import {ProviderToken} from "apn"

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

export const providerToken: ProviderToken = {
    key:process.env.APN_KEY,
    keyId:process.env.APN_KEY_ID,
    teamId:process.env.TEAM_ID
}
