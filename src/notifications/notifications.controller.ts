import {Controller} from "@nestjs/common";
import {Client, ClientKafka, MessagePattern, Payload, Transport} from "@nestjs/microservices";
import {NotificationsService} from "./notifications.service"
import {Message} from "./notifications.model";
import {Logger} from "@nestjs/common";

@Controller('Notifications')
export class NotificationsController {
    private logger = new Logger('notificationController')
    constructor(private notificationsService: NotificationsService) {}


    @MessagePattern('notification')
    getMessage(@Payload() originMessage){
        const parsedMessage = originMessage.split("/")
        let message:Message = {
            payload: parsedMessage[0],
            deviceToken: parsedMessage[1],
            createdAt: parsedMessage[2]
        };
        this.logger.verbose(`message '${message.payload}' will be sent to '${message.deviceToken}'`);
        this.notificationsService.sendNotification(message);
    }
}
