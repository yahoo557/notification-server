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
                brokers:['3.36.212.116:9092'],
            },
          }
      });
    await app.listen()
    console.log('Kafka consumer is listening')
}
bootstrap();
