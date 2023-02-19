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
        console.log(data);
    }

}
