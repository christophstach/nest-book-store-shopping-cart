import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3334;

  app.enableCors();

  const options = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Nest Bookstore Shopping Cart API')
    .setDescription(
      'Use these endpoints to add items to the shopping cart.',
    )
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(port, () => {
    Logger.log(`Listening at http://localhost:${port}/`, 'Bootstrap');
  });
}
bootstrap();
