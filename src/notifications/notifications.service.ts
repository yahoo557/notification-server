import { Injectable } from '@nestjs/common';
import { Message } from "./notifications.model"
import { Provider,ProviderOptions, Notification,NotificationAlertOptions } from "apn"
import {providerToken} from "./notifications.model";

@Injectable()
export class NotificationsService {
    connectApn():boolean{
        const options = {
            token:providerToken,
            production:false
        };
        // const apnProvider = new Provider(options);
        return true
    }


    sendNotification(option:ProviderOptions){
        this.connectApn();


    }


    insertMessage(message:Message){

    }
}
