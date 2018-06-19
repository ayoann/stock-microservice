import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateStockDto } from './dto/create-stock.dto';
import { Stock } from './interfaces/stock.interface';
import { StockService } from './stock.service';

@Controller('stock')
export class StockController {
<<<<<<< HEAD
    constructor(private catsService: StockService) {}
=======

    private stockService: StockService;

    constructor(private readonly stockService: StockService) {
    }
>>>>>>> e606529f60de10d887412a9f5e633f5adacc7882

    @Post()
    async create(@Body() createStockDto: CreateStockDto) {
        this.stockService.create(createStockDto);
    }

    @Get()
    async findAll(): Promise<Stock[]> {
        return this.stockService.findAll();
    }
}