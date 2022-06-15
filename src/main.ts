import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle(' API - Ação Entre Amigos ')
    .setDescription(
      'Gerenciamento de sorteios entre amigos. Desenvolvido com Nest, Prisma, JWt e Postgres',
    )
    .setVersion('1.0.0')
    .addTag('aEa')
    .addBearerAuth()
    .build();

    const document = SwaggerModule.createDocument(app, config)

    SwaggerModule.setup('api', app, document)
    const porta = 3000;
  await app.listen( process.env.PORT || porta, () => {
    console.log(` Aplicação rodando neste endereço: http://localhost:${porta}/api ` );
    
  });
}
bootstrap();
