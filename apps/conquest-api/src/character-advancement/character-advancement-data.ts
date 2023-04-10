export interface ICharacterAdvancement {
  level: number;
  xpStart: number;
  xpEnd: number;
  xpNeeded: number;
  xpTotal: number;
}

export class CharacterAdvancement implements ICharacterAdvancement {
  level: number;
  xpStart: number;
  xpEnd: number;
  xpNeeded: number;
  xpTotal: number;
}

export const characterAdvancementData: ICharacterAdvancement[] = [
  { level: 1, xpStart: 0, xpEnd: 299, xpNeeded: 300, xpTotal: 299 },
  { level: 2, xpStart: 300, xpEnd: 899, xpNeeded: 600, xpTotal: 1199 },
  { level: 3, xpStart: 900, xpEnd: 2699, xpNeeded: 1800, xpTotal: 3599 },
  { level: 4, xpStart: 2700, xpEnd: 6499, xpNeeded: 3800, xpTotal: 9199 },
  { level: 5, xpStart: 6500, xpEnd: 13999, xpNeeded: 7500, xpTotal: 20499 },
  { level: 6, xpStart: 14000, xpEnd: 22999, xpNeeded: 9000, xpTotal: 36999 },
  { level: 7, xpStart: 23000, xpEnd: 33999, xpNeeded: 11000, xpTotal: 56999 },
  { level: 8, xpStart: 34000, xpEnd: 47999, xpNeeded: 14000, xpTotal: 81999 },
  {
    level: 9,
    xpStart: 48000,
    xpEnd: 63999,
    xpNeeded: 16000,
    xpTotal: 111999,
  },
  {
    level: 10,
    xpStart: 64000,
    xpEnd: 84999,
    xpNeeded: 21000,
    xpTotal: 148999,
  },
  {
    level: 11,
    xpStart: 85000,
    xpEnd: 99999,
    xpNeeded: 15000,
    xpTotal: 184999,
  },
  {
    level: 12,
    xpStart: 100000,
    xpEnd: 119999,
    xpNeeded: 20000,
    xpTotal: 219999,
  },
  {
    level: 13,
    xpStart: 120000,
    xpEnd: 139999,
    xpNeeded: 20000,
    xpTotal: 259999,
  },
  {
    level: 14,
    xpStart: 140000,
    xpEnd: 164999,
    xpNeeded: 25000,
    xpTotal: 304999,
  },
  {
    level: 15,
    xpStart: 165000,
    xpEnd: 194999,
    xpNeeded: 30000,
    xpTotal: 359999,
  },
  {
    level: 16,
    xpStart: 195000,
    xpEnd: 224999,
    xpNeeded: 30000,
    xpTotal: 419999,
  },
  {
    level: 17,
    xpStart: 225000,
    xpEnd: 264999,
    xpNeeded: 40000,
    xpTotal: 489999,
  },
  {
    level: 18,
    xpStart: 265000,
    xpEnd: 304999,
    xpNeeded: 40000,
    xpTotal: 569999,
  },
  {
    level: 19,
    xpStart: 305000,
    xpEnd: 354999,
    xpNeeded: 50000,
    xpTotal: 659999,
  },
  { level: 20, xpStart: 355000, xpEnd: null, xpNeeded: null, xpTotal: null },
];