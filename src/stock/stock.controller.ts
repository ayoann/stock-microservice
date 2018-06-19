import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateStockDto } from './dto/create-stock.dto';
import { Stock } from './interfaces/stock.interface';
import { StockService } from './stock.service';

@Controller('stock')
export class StockController {
    constructor(private catsService: StockService) {}

    @Post()
    async create(@Body() createCatDto: CreateStockDto) {
        this.catsService.create(createCatDto);
    }

    @Get()
    async findAll(): Promise<Stock[]> {
        return this.catsService.findAll();
    }
}