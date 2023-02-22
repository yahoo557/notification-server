import {Controller} from "@nestjs/common";
import {EventPattern, MessagePattern, Payload} from "@nestjs/microservices";

@Controller()
export class notificationsController {
    @MessagePattern('notification-events')
    getMessage(@Payload() message){
        console.log(message.value);
    }
}
