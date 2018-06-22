import { Injectable } from '@nestjs/common';
import {RabbitMQClient} from './rabbitmq-client';

@Injectable()
export class AMQService {

  private client = new RabbitMQClient('amqp://stock:stockPassword@amazoom-rabbit', 'Delivery mail');

  public getClient() {
    return this.client;
  }
}
