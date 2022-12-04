/**
 * @ Author: ZhengHui
 * @ Create Time: 2022-11-24 21:01:20
 * @ Modified by: ZhengHui
 * @ Modified time: 2022-12-04 11:17:27
 * @ Description:
 */

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './config/db/database.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
