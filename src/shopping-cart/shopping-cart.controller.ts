import { Controller, Delete, Get, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@Controller('shopping-cart')
@ApiTags('shopping-cart')
export class ShoppingCartController {
  @Get()
  @UseGuards(AuthGuard('jwt'))
  findAll() {
    return 'findAll';
  }

  @Post()
  @UseGuards(AuthGuard('jwt'))
  add() {
    return 'add';
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  remove() {
    return 'remove';
  }
}
