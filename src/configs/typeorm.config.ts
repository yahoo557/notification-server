import {TypeOrmModuleOptions} from "@nestjs/typeorm";

export const typeORMConfig : TypeOrmModuleOptions ={

    type:'mysql',
    host: process.env.D
}
