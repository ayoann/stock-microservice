import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {RabbitMQServer} from './amq/rabbitmq-server';

declare const module: any;

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  const app = await NestFactory.createMicroservice(AppModule, {
    strategy: new RabbitMQServer('amqp://localhost', 'stock'),
  });
  await app.listen(3000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
