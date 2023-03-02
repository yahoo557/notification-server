import { Module } from '@nestjs/common';
import {NotificationsModule} from './notifications/notifications.module';
import { ClientsModule, Transport } from "@nestjs/microservices";
import { AppController } from "./app.controller"
import { AppService } from "./app.service";


@Module({
  imports: [
    NotificationsModule
  ],
    controllers:[AppController],
})

export class AppModule {}
