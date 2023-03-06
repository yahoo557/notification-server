import { Injectable } from '@nestjs/common';
import { Message } from "./notifications.model"
import { Provider,ProviderOptions, Notification,NotificationAlertOptions,  } from "apn"
import {providerToken} from "./notifications.model";

@Injectable()
export class NotificationsService {
    sendNotification(message:Message){
        const options = {
            token:providerToken,
            production:false
        };

        const apnProvider = new Provider(options);

        const note = new Notification()

        note.expiry = Math.floor(Date.now() / 1000) + 3600; // Expires 1 hour from now.
        note.badge = 3;
        note.sound = "ping.aiff";
        note.alert = "\uD83D\uDCE7 \u2709 You have a new message";
        note.payload = {'messageFrom': 'John Appleseed'};
        note.topic = "<your-app-bundle-id>";

        apnProvider.send(note, message.deviceToken).then( (result)=>{

            }
        ).catch((err)=>{

        })

    }


    insertMessage(message:Message){

    }
}
