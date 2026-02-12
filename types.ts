
export interface Product {
  id: string;
  name: string;
  series: AnimeSeries;
  price: number;
  image: string;
  description: string;
  stock: number;
  rarity: 'Common' | 'Rare' | 'Limited Edition';
  scale: '1/7' | '1/8' | '1/4' | 'Non-scale';
  keywords: string[];
}

export enum AnimeSeries {
  ALL = 'All Series',
  JJK = 'Jujutsu Kaisen',
  DEMON_SLAYER = 'Demon Slayer',
  ONE_PIECE = 'One Piece',
  BLUE_LOCK = 'Blue Lock',
  BERSERK = 'Berserk',
  AOT = 'Attack on Titan',
  SOLO_LEVELING = 'Solo Leveling',
  FFVII = 'Final Fantasy VII',
  DARK_SOULS = 'Dark Souls',
  CHAINSAW_MAN = 'Chainsaw Man',
  MY_HERO = 'My Hero Academia'
}

export type View = { type: 'home' } | { type: 'shop' } | { type: 'product'; id: string };

export interface CartItem extends Product {
  quantity: number;
}

export interface UserSession {
  cart: CartItem[];
}
