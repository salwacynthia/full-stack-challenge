import { VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { DependencyInjectionModule } from './Module/DependencyInjectionModule';
import { UserController } from 'Domain/Controllers/user.controller';
import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(DependencyInjectionModule, {
    logger: ['verbose'],
    snapshot: true,
    cors: true,
  });

  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  });
  const config = new DocumentBuilder()
    .setTitle('Challenge API')
    .setDescription('Good Luck Fellow!')
    .setContact(
      'Tom Kunzemann',
      'https://www.oetkerdigital.de',
      'tom.kunzemann@oetkerdigital.com',
    )
    .setVersion('3.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.use('/users', UserController); 

  await app.listen(3000);
}
bootstrap();
