import { ShoppingCartItemType } from '../entities/shopping-cart-item.entity';
import { ApiProperty } from '@nestjs/swagger';

export class AddToShoppingCartDto {
  @ApiProperty({ default: 'The title comes here' })
  title: string;

  @ApiProperty({ default: 'uuid' })
  referenceId: string;

  @ApiProperty({ required: false, default: 'https://' })
  referenceUrl: string;

  @ApiProperty({
    enum: ShoppingCartItemType,
    default: ShoppingCartItemType.Item,
  })
  type: ShoppingCartItemType;
}

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJnb29nbGVJZCI6IjExMzY4NDU0NTQxMzkyMDI5NTUyMSIsImVtYWlsIjoiY2hyaXN0b3BoLnN0YWNoQGdtYWlsLmNvbSIsImZpcnN0TmFtZSI6IkNocmlzdG9waCIsImxhc3ROYW1lIjoiU3RhY2giLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EtL0FPaDE0R2h1dGlTbHV3aGVoSXUzeFFhWUVwY2VOUDlRdjlGcWpTa21UZWRQRnB3PXM5Ni1jIiwiYWNjZXNzVG9rZW4iOiJ5YTI5LmEwQWZINlNNQ1Baa2ptcjQyMndrd0pRUTljR196aWVFMXpmMEJrSkN5MW05ZDJ5bnh6MVl3ZXMweG93dFZROWpEVkVBWmpIT0htMnhRRWtNNEFKQW5RVXhmUjdQVDZzSVFlWFNWRjd6Qm1hYXZlTjU5cHA0RXVXV2ZPNlptb3RRZ0l6allUdXNmYTA3MDNpY0MzZ3dWZ1k3Q2FvSW1fOHBPUks4dnVLamlnZnNiaSIsImlhdCI6MTYwNTY2MjcxM30.C0sakqgTHW7Q2FMy7wEvGCTmCaS7jesfyKAWttHPPqc
