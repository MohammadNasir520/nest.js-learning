import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';
import { Observable } from 'rxjs';

@Injectable()
export class UserGuards implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    return true;
  }
}
