import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class AppService implements OnModuleInit {
    constructor(@Inject() private readonly notificationClient: ClientKafka) {}

    onModuleInit() {
        this.notificationClient.subscribeToResponseOf('notification-events');
    }
}
