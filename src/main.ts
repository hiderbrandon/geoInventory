import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule );

  app.enableCors({
    origin: "*",
    methods: ["GET","HEAD","PUT","PATCH","POST","DELETE"],
    preflightContinue: false,
    optionsSuccessStatus: 204
  });
  
  const config = new DocumentBuilder()
  .setTitle('inventory example')
  .setDescription('API for manage an visualization')
  .setVersion('1.0')
  .addTag('inventory')
  .build();
const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3001);
}
bootstrap();
