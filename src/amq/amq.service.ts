import { Injectable } from '@nestjs/common';
import {RabbitMQClient} from './rabbitmq-client';

@Injectable()
export class AMQService {

  private client = new RabbitMQClient('amqp://209.97.135.3', 'Delivery mail');

  public getClient() {
    return this.client;
  }
}
