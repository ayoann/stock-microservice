import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from 'mqtt';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // https://docs.nestjs.com/microservices/basics
  // Décommenter quand le server MQTT sera disponible
  // const app = await NestFactory.createMicroservice(AppModule, {
  //   transport: Transport.MQTT,
  //   options: {
  //     host: 'localhost',
  //     port: 1883,
  //   },
  // });

  await app.listen(3000);
}

bootstrap();
