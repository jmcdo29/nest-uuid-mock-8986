import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FooInterceptor } from './foo.interceptor';
import { FooModule } from './foo/foo.module';

@Module({
  imports: [FooModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: FooInterceptor,
    },
  ],
})
export class AppModule {}
