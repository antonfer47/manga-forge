
import { Product, AnimeSeries } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'jjk-01',
    name: 'Gojo Satoru: Infinite Void 1/7 Scale',
    series: AnimeSeries.JJK,
    price: 189.99,
    image: 'https://images.unsplash.com/photo-1618336753974-aae8e04506aa?auto=format&fit=crop&q=80&w=800',
    description: 'Breathtaking 1/7 scale figure of the strongest sorcerer, featuring high-quality translucent parts for the Infinite Void effect. This masterpiece captures Gojo during his most iconic domain expansion, showcasing his effortless power and striking blue eyes.',
    stock: 5,
    rarity: 'Limited Edition',
    scale: '1/7',
    keywords: ['Gojo Satoru', 'Jujutsu Kaisen', 'Infinity', 'Sorcerer', 'Infinite Void', 'High-end']
  },
  {
    id: 'op-01',
    name: 'Monkey D. Luffy Gear 5 "Sun God"',
    series: AnimeSeries.ONE_PIECE,
    price: 145.00,
    image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?auto=format&fit=crop&q=80&w=800',
    description: 'The Warrior of Liberation in his peak form. Highly detailed smoke effects and vibrant colors represent the freedom and joy of Luffy\'s Nika awakening. A centerpiece for any One Piece collection.',
    stock: 12,
    rarity: 'Rare',
    scale: 'Non-scale',
    keywords: ['Luffy', 'Gear 5', 'Nika', 'Joyboy', 'One Piece', 'Straw Hat']
  },
  {
    id: 'aot-01',
    name: 'Eren Yeager: Attack Titan Form',
    series: AnimeSeries.AOT,
    price: 249.99,
    image: 'https://images.unsplash.com/photo-1541562232579-512a21360020?auto=format&fit=crop&q=80&w=800',
    description: 'A massive 1/7 scale representation of Eren\'s Attack Titan amidst the ruins of Shiganshina. Features incredibly detailed muscle anatomy and a thematic debris base.',
    stock: 4,
    rarity: 'Limited Edition',
    scale: '1/7',
    keywords: ['Eren Yeager', 'Attack on Titan', 'Shingeki no Kyojin', 'Titan', 'Rumbling']
  },
  {
    id: 'sl-01',
    name: 'Sung Jin-Woo: Shadow Monarch',
    series: AnimeSeries.SOLO_LEVELING,
    price: 175.00,
    image: 'https://images.unsplash.com/photo-1620336655055-088d06e79bf0?auto=format&fit=crop&q=80&w=800',
    description: 'The Shadow Monarch arises. This figure captures Sung Jin-Woo summoning his shadows, with translucent purple energy effects and his signature twin daggers.',
    stock: 10,
    rarity: 'Rare',
    scale: '1/8',
    keywords: ['Sung Jin-Woo', 'Solo Leveling', 'Shadow Monarch', 'Igris', 'Arise']
  },
  {
    id: 'ff-01',
    name: 'Cloud Strife & Fenrir (Remake Ver.)',
    series: AnimeSeries.FFVII,
    price: 389.99,
    image: 'https://images.unsplash.com/photo-1605806616949-1e87b487fc2f?auto=format&fit=crop&q=80&w=800',
    description: 'The definitive Cloud Strife figure. Features the Buster Sword and his iconic Fenrir motorcycle from the Remake series. Incredible mechanical detailing on the bike.',
    stock: 2,
    rarity: 'Limited Edition',
    scale: 'Non-scale',
    keywords: ['Cloud Strife', 'Final Fantasy VII', 'Buster Sword', 'Fenrir', 'Shinra']
  },
  {
    id: 'ds-01',
    name: 'Artorias the Abysswalker',
    series: AnimeSeries.DARK_SOULS,
    price: 275.50,
    image: 'https://images.unsplash.com/photo-1519669556878-63bdad8a1a49?auto=format&fit=crop&q=80&w=800',
    description: 'The legendary knight corrupted by the Abyss. This statue features realistic armor weathering and the Greatsword of Artorias. A dark masterpiece for Souls fans.',
    stock: 6,
    rarity: 'Rare',
    scale: '1/4',
    keywords: ['Artorias', 'Dark Souls', 'Abyss', 'Sif', 'Knight']
  },
  {
    id: 'csm-01',
    name: 'Denji: Chainsaw Devil Unleashed',
    series: AnimeSeries.CHAINSAW_MAN,
    price: 130.00,
    image: 'https://images.unsplash.com/photo-1634157703702-3c124b455499?auto=format&fit=crop&q=80&w=800',
    description: 'Blood-spattered and ready for the hunt. Denji in his full Chainsaw Devil form with rotating blade textures and visceral gore effects.',
    stock: 15,
    rarity: 'Common',
    scale: '1/8',
    keywords: ['Denji', 'Chainsaw Man', 'Pochita', 'Devil Hunter', 'Makima']
  },
  {
    id: 'mha-01',
    name: 'Izuku Midoriya: Shoot Style',
    series: AnimeSeries.MY_HERO,
    price: 75.00,
    image: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&q=80&w=800',
    description: 'Deku utilizing his Shoot Style technique. Includes green "One For All" lightning effects that glow under UV light.',
    stock: 25,
    rarity: 'Common',
    scale: 'Non-scale',
    keywords: ['Deku', 'Midoriya', 'My Hero Academia', 'All Might', 'Quirk']
  },
  {
    id: 'br-01',
    name: 'Guts: Berserker Armor Unleashed',
    series: AnimeSeries.BERSERK,
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1615592389070-bcc97e05ad01?auto=format&fit=crop&q=80&w=800',
    description: 'A heavy, detailed statue representing the sheer grit of the Black Swordsman. The Berserker Armor is sculpted with weathered texture, standing atop a base littered with the remains of apostles.',
    stock: 3,
    rarity: 'Limited Edition',
    scale: '1/4',
    keywords: ['Guts', 'Berserk', 'Beast of Darkness', 'Dragonslayer', 'Seinen', 'Kentaro Miura']
  },
  {
    id: 'bl-01',
    name: 'Isagi Yoichi: Egoist Strike',
    series: AnimeSeries.BLUE_LOCK,
    price: 65.50,
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800',
    description: 'The ace of Blue Lock in a powerful striking pose. Captures the intensity of the "Metavision" state with unique blue crystalline effects around the base.',
    stock: 15,
    rarity: 'Common',
    scale: 'Non-scale',
    keywords: ['Isagi', 'Blue Lock', 'Soccer', 'Metavision', 'Egoist']
  }
];
