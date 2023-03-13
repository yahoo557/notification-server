import { Injectable } from '@nestjs/common';
import { Message } from "./notifications.model"
import { Provider, ProviderOptions, Notification,NotificationAlertOptions  } from "apn"
import {providerToken} from "./notifications.model";
import {Logger} from "@nestjs/common";

@Injectable()
export class NotificationsService {
    sendNotification(message:Message){
        const options = {
            token:providerToken,
            production:false
        };
        const apnProvider = new Provider(options);
        const notificationAlert : NotificationAlertOptions = {
            title: "왓쏭",
            subtitle: "알림",
            body:message.payload
        };
        const note = new Notification()
        note.expiry = Math.floor(Date.now() / 1000) + 3600;
        note.badge = 1;
        note.sound = "ping.aiff";
        note.alert = notificationAlert;
        note.payload = {}
        note.topic = process.env.BUNDLE_ID;

        apnProvider.send(note, message.deviceToken).then( (result)=>{
                Logger.log(result, 'notificationService')
            }
        ).catch((err)=>{
            Logger.log(err,'notificationService')
        })

    }

    insertMessage(message:Message){

    }
}
