/**
 * @ Author: ZhengHui
 * @ Create Time: 2022-12-04 11:16:29
 * @ Modified by: ZhengHui
 * @ Modified time: 2022-12-04 11:53:31
 * @ Description:
 */

import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
