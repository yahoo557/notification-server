import { Module } from '@nestjs/common';
import {NotificationsModule} from './notifications/notifications.module';
import { ClientsModule, Transport } from "@nestjs/microservices";
import { AppService } from "./app.service";
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    NotificationsModule,
      ConfigModule.forRoot({
        isGlobal:true,
        envFilePath: `.env`
      })
  ],

})

export class AppModule {}
