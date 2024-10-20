import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OpenaiModule } from './modules/openai/openai.module';
import { SessionsModule } from './modules/sessions/sessions.module';
import { UserModule } from './modules/users/user.module';
import { TabsModule } from './modules/tabs/tabs.module';

@Module({
  imports: [OpenaiModule, SessionsModule, UserModule, TabsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
