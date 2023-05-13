interface TCar {
  id: number;
  img: string;
  name: string;
  year: number;
  make: string;
  category: string;
  rarity: number;
  price: number;
  sources: string[];
  score: number;
  transmission: string;
  power: number;
  weight: number;
  stats: {
    speed: number;
    handling: number;
    acceleration: number;
    launch: number;
    braking: number;
    offroad: number;
  };
  perfs: {
    top_speed: number;
    to60: number;
    to100: number;
    lateral_g: number;
  };
}

export type { TCar }