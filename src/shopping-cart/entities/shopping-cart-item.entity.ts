import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum ShoppingCartItemType {
  Book = 'Book',
  Item = 'Item',
}

@Entity()
export class ShoppingCartItem {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  referenceId: string;

  @Column()
  type: ShoppingCartItemType;

  @Column()
  owner: string;

  @Column()
  title: string;

  @Column()
  referenceUrl: string;

  @Column({ name: 'created_at' })
  createdAt: Date;

  @Column({ name: 'updated_at' })
  updatedAt: Date;
}


