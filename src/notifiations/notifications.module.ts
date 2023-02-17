import { Module } from '@nestjs/common';
import {ClientsModule, Transport} from "@nestjs/microservices";
import {notificationsController} from "./notifications.controller";

@Module({
    imports:[
        ClientsModule.register([
        {
            name: 'NOTIFICATION_MICROSERVICE',
            transport: Transport.KAFKA,
            options:{
                client:{
                    clientId: 'notification',
                    brokers:['localhost:9092'],
                },
                consumer:{
                    groupId:'notification-consumer'
                }
            }
        }]
    )],
    providers: [],
    controllers: [notificationsController],
})

export class NotificationsModule {}


