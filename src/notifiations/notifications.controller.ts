import {Controller} from "@nestjs/common";
import {Client, ClientKafka, EventPattern, Payload, Transport} from "@nestjs/microservices";

@Controller('Notifications')
export class NotificationsController {
    @Client({
        transport: Transport.KAFKA,
        options: {
            client: {
                clientId: 'console-consumer', // notification-client
                brokers: ['3.36.212.116:9092'],
            },
            consumer: {
                groupId: 'notification-consumer', // notification-consumer-client
                topic: 'notification-events'

            }정
        }
    })
    client: ClientKafka;
    client.
}
