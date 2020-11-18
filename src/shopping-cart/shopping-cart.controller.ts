import { Body, Controller, Delete, Get, Logger, Post, Req, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { ShoppingCartService } from './shopping-cart.service';
import { AddToShoppingCartDto } from './dtos/add-to-shopping-cart.dto';


@ApiTags('shopping-cart')
@ApiBearerAuth()
@Controller('shopping-cart')
export class ShoppingCartController {
  constructor(private readonly shoppingCartService: ShoppingCartService) {}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  findAll() {
    return this.shoppingCartService.findAll();
  }

  @Post()
  @UseGuards(AuthGuard('jwt'))
  add(@Req() req, @Body() addToShoppingCartDto: AddToShoppingCartDto) {
    const owner = req.user.googleId;
    return this.shoppingCartService.add(owner, addToShoppingCartDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  remove() {
    return 'remove';
  }
}
