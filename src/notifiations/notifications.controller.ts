import {Controller} from "@nestjs/common";
import {Client, ClientKafka, EventPattern, Payload, Transport} from "@nestjs/microservices";

@Controller()
export class HeroesController {
    @Client({
        transport: Transport.KAFKA,
        options: {
            client: {
                clientId: 'notification', // hero-client
                brokers: ['localhost:9092'],
            },
            consumer: {
                groupId: 'hero-consumer' // hero-consumer-client
            }
        }
    })
    client: ClientKafka;
}
