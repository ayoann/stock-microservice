import { Document } from 'mongoose';

export interface Stock extends Document {
  readonly id: number;
  readonly idUser: number;
  readonly name: string;
}
