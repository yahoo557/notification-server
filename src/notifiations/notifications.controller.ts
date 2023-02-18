import {Controller} from "@nestjs/common";
import {EventPattern, Payload} from "@nestjs/microservices";

interface notificationEvent {
    token:String
    sender:String
}

@Controller()
export class notificationsController {
    constructor(private readonly ) {}

    @EventPattern('like_notification_created')
    async handleNotificationCreate(@Payload()data: notificationEvent) {
        admin.messaging()
            .send(replyMessage)
            .then(function (response) {
                console.log('Successfully sent message: : ', response)

            })
            .catch(function (err) {
                console.log('Error Sending message!!! : ', err)

            })
        return res.status(200).send("Notification Reply API")
    }

}
