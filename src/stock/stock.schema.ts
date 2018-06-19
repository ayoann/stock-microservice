import * as mongoose from 'mongoose';

export const StockSchema = new mongoose.Schema({
    id: Number,
    name: String
});