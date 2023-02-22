import {Module} from '@nestjs/common';
import {NotificationsModule} from './notifications/notifications.module';
import {ClientsModule, Transport} from "@nestjs/microservices";
import {TestModule} from './test/test.module';

@Module({
  imports: [
      ClientsModule.register([
          {
              name: 'any_name_i_want',
              transport: Transport.KAFKA,
              options: {
                  client: {
                      clientId: 'any_client_id_i_want',
                      brokers: ['localhost:9092'],
                  },
                  consumer: {
                      groupId: 'an_unique_string_id',
                  },
              },
          },
      ]),
  ],

})

export class AppModule {}
