import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  // @docs https://docs.nestjs.com/microservices/basics
  // Décommenter quand le server MQTT sera disponible
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP,
    options: {
      host: 'localhost',
      port: 5672,
    },
  });

  await app.listen(3000);
}

bootstrap();
