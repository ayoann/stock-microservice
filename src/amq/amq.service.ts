import { Injectable } from '@nestjs/common';
import {RabbitMQClient} from './rabbitmq-client';

@Injectable()
export class AMQService {

  private client = new RabbitMQClient('amqp://localhost', 'notif');

  public getClient() {
    return this.client;
  }
}