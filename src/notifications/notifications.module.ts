import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from "@nestjs/microservices";
import {NotificationsController} from "./notifications.controller";
import {NotificationsService} from "./notifications.service";



@Module({
    imports:[],
    controllers: [NotificationsController],
    providers: [NotificationsService],
})
export class NotificationsModule {}


