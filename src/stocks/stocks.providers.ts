import { Connection } from 'mongoose';
import { StockSchema } from './schemas/stock.schema';

export const stocksProviders = [
  {
    provide: 'StockModelToken',
    useFactory: (connection: Connection) =>
      connection.model('Stock', StockSchema),
    inject: ['DbConnectionToken'],
  },
];
