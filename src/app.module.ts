import { Module } from '@nestjs/common';
import {ConfigModule} from "@nestjs/config";
import { NotificationsModule } from './notifiations/notifications.module';
import {ClientsModule, Transport} from "@nestjs/microservices";

@Module({
  imports: [
      NotificationsModule
  ],
})

export class AppModule {}
