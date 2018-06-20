import { Injectable } from '@nestjs/common';
import {RabbitMQClient} from './rabbitmq-client';

@Injectable()
export class AMQService {

  private client = new RabbitMQClient('amqp://localhost', 'Delivery mail');

  public getClient() {
    return this.client;
  }
}
