import {NestFactory} from '@nestjs/core';
import {MicroserviceOptions, Transport} from "@nestjs/microservices";
import {AppModule} from './app.module';

import {Logger} from "@nestjs/common";

const bootstrap = async () => {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
      AppModule,
      {
          transport: Transport.KAFKA,
          options: {
              client:{
                  clientId:'notifications',
                  brokers:[`${process.env.BROKER_CLUSTER_IP}:${process.env.BROKER_PORT||9092}`],
              },
              consumer: {
                  groupId: 'notifications-consumer-1',
              },
          }

      });
    await app.listen()
    Logger.log(`Nest microservice is subscribing brokers on ${process.env.BROKER_CLUSTER_IP}:${process.env.BROKER_PORT||9092}`, 'main')
}
bootstrap();
