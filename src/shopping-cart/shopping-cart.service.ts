import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ShoppingCartItem } from './entities/shopping-cart-item.entity';
import { Repository } from 'typeorm';
import { AddToShoppingCartDto } from './dtos/add-to-shopping-cart.dto';

@Injectable()
export class ShoppingCartService {
  constructor(
    @InjectRepository(ShoppingCartItem)
    private readonly shoppingCartItemRepository: Repository<ShoppingCartItem>,
  ) {}

  findAll() {
    return this.shoppingCartItemRepository.find();
  }

  findOne(id: string) {
    return this.shoppingCartItemRepository.findOneOrFail(id);
  }

  findByOwner(owner: string) {
    return this.shoppingCartItemRepository.find({ where: { owner } });
  }

  add(owner: string, addToShoppingCartDto: AddToShoppingCartDto) {
    const { type, referenceId, referenceUrl, title } = addToShoppingCartDto;

    return this.shoppingCartItemRepository.save({
      type,
      referenceId,
      referenceUrl,
      title,
      owner,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }

  async remove(owner: string, id: string) {
    const item = await this.shoppingCartItemRepository.findOneOrFail({
      where: { owner, id },
    });

    await this.shoppingCartItemRepository.delete({ owner, id });

    return item;
  }
}
