import { ApiKeyGuard } from './api-key.guard';

import { Reflector } from '@nestjs/core';
import { Request } from 'express';


describe('ApiKeyGuard', () => {
  let guard: ApiKeyGuard;
  let reflector: Reflector;

  beforeEach(() => {
    reflector = new Reflector();
    guard = new ApiKeyGuard(reflector);
  });

  it('should be defined', () => {
    expect(guard).toBeDefined();
  });
});
