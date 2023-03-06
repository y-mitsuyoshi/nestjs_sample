import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './domains/users/users.module';
import { ItemsModule } from './domains/items/items.module';

@Module({
  imports: [UsersModule, ItemsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
