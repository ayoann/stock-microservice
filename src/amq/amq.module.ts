import { Module } from '@nestjs/common';
import {AMQService} from './amq.service';

@Module({
  imports: [],
  controllers: [],
  providers: [AMQService],
})
export class AMQModule {}
