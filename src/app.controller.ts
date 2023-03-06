import {Controller} from "@nestjs/common";
import {EventPattern, MessagePattern, Payload} from "@nestjs/microservices";
import {NotificationsService} from "./notifications/notifications.service"
import {NotificationsModule} from "./notifications/notifications.module";
@Controller()
export class AppController {


    //kafka message 는 payload:String/deviceToken:String/date:DateTime 으로 되어있음
    @MessagePattern('notification')
    getMessage(@Payload() message){
        const notificationService = new NotificationsService()
        const parsedMessage = message.split("/");
        console.log(parsedMessage)
    }
}
