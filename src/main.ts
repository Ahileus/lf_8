import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function start() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);

  //Documetation
  const config = new DocumentBuilder()
    .setTitle('Backend für die Aufgabe von LF 8')
    .setDescription('Dokumetation REST API')
    .setVersion('1.0.0')
    .addTag('Backend')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  //Start Server
  await app.listen(PORT, () => `Server started on port: ${PORT}`);
}

start();
