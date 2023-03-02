import {NestFactory} from '@nestjs/core';
import {MicroserviceOptions, Transport} from "@nestjs/microservices";
import {AppModule} from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
      AppModule,
      {
          transport: Transport.KAFKA,
          options: {
              client:{
                  clientId:'notifications',
                  brokers:['15.165.177.220:9092'],
              },
              consumer: {
                  groupId: 'notifications-consumer-1',
              },
          }

      });
    await app.listen()
    console.log('Kafka consumer is listening')
}
bootstrap();
