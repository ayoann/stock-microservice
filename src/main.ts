import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {RabbitMQServer} from './amq/rabbitmq-server';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    // @docs https://docs.nestjs.com/microservices/basics
    // Décommenter quand le server MQTT sera disponible

    // const ms = await NestFactory.createMicroservice(AppModule, {
    //     strategy: new RabbitMQServer('amqp://localhost', 'stock'),
    // });

    await app.listen(3000);
    //await ms.listen(3001);
}

bootstrap();
