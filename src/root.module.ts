import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { config } from 'process';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    UsersModule,
    ConfigModule.forRoot({
      isGlobal: true,
      // envFilePath: '.env.loacal',
    }),
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class RootModule {
  constructor() {
    console.log('App module');
  }
}
