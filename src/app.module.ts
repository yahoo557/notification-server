import { Module } from '@nestjs/common';
import {ConfigModule} from "@nestjs/config";
import { NotificationsModule } from './notifiations/notifications.module';
import {ClientsModule, Transport} from "@nestjs/microservices";
import { TestModule } from './test/test.module';

@Module({
  imports: [
      NotificationsModule,
      TestModule
  ]

})

export class AppModule {}
