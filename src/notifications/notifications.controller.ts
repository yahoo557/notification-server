import {Controller} from "@nestjs/common";
import {Client, ClientKafka, Transport} from "@nestjs/microservices";
import {NotificationsService} from "./notifications.service"


@Controller('Notifications')
export class NotificationsController {
    constructor(private notificationsService: NotificationsService) {

    }

}
