import { Injectable } from '@nestjs/common';
import {RabbitMQClient} from './rabbitmq-client';

@Injectable()
export class AMQService {

  private client = new RabbitMQClient('amqp://localhost', 'channel');

  public getClient() {
    return this.client;
  }
}
