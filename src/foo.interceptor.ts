import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { FooService } from './foo/foo.service';

@Injectable()
export class FooInterceptor implements NestInterceptor {
  constructor(
    private readonly foo: FooService,
    private readonly reflector: Reflector,
  ) {}
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle();
  }
}
