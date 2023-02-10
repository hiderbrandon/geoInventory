import { ApiKeyGuard } from './api-key.guard';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import config from 'src/config';
import { ConfigType } from '@nestjs/config';

describe('ApiKeyGuard', () => {
  let guard: ApiKeyGuard;
  let reflector: Reflector;
  let configService: ConfigType<typeof config>

  beforeEach(() => {
    reflector = new Reflector();
    guard = new ApiKeyGuard(reflector, configService );
  });

  it('should be defined', () => {
    expect(guard).toBeDefined();
  });
});
