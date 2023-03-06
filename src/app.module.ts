import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersService } from './domains/users/users.service';
import { UsersModule } from './domains/users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [AppController],
  providers: [AppService, UsersService],
})
export class AppModule {}
