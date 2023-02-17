import {Inject, Injectable} from "@nestjs/common";
import { ClientKafka} from "@nestjs/microservices";

@Injectable()
export class NotificationsService {
    constructor(
        @Inject('NOTIFICATION_MICROSERVICE') private readonly notificationClient : ClientKafka
    ) {}

    // createNotification(createNotificationDto)
}
