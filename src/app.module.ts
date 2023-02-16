import { Module } from '@nestjs/common';
import {ConfigModule} from "@nestjs/config";
import { NotifiationsModule } from './notifiations/notifiations.module';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath:'.database.env'
  }), NotifiationsModule],
})
export class AppModule {}
