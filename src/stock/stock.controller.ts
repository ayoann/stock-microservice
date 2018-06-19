import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateStockDto } from './dto/create-stock.dto';
import { StockService } from './stock.service';
import { Stock } from './interfaces/stock.interface';

@Controller('stock')
export class StockController {
    constructor(private readonly catsService: StockService) {}

    @Post()
    async create(@Body() createCatDto: CreateStockDto) {
        this.catsService.create(createCatDto);
    }

    @Get()
    async findAll(): Promise<Stock[]> {
        return this.catsService.findAll();
    }
}