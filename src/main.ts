import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    forbidNonWhitelisted: true
  }))
  const corsOptions = {
    origin: "*"
  }
  app.enableCors(corsOptions)
  const config = new DocumentBuilder()
    .setTitle('test technique')
    .setDescription('verification competence')
    .setVersion('1.0')
    .addTag('test')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document)

  const port = process.env.PORT || 3001;
  await app.listen(port);
}
bootstrap();
