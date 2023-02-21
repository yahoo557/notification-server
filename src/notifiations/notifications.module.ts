import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from "@nestjs/microservices";
정import {NotificationsController} from "./notifications.controller";



@Module({
    imports:[],
    providers: [],
    controllers: [NotificationsController],
})
export class NotificationsModule {}


