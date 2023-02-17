import {NestFactory} from '@nestjs/core';
import {ClientsModule, MicroserviceOptions, Transport} from "@nestjs/microservices";
import {AppModule} from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
      AppModule,
      {
        transport: Transport.KAFKA,
          options:{
            client:{
                clientId:'notification', //notification-server
                brokers:['localhost:9092'],
            },
              consumer:{
                groupId: 'notification-consumer' //notification-consumer0server
              }
          }
      });
  console.log()
  await app.listen();
}
bootstrap();
