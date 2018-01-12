namespace PE {
  export enum Types {
    NORMAL,
    FIGHTING,
    FLYING,
    POISON,
    GROUND,
    ROCK,
    BUG,
    GHOST,
    STEEL,
    FIRE,
    WATER,
    GRASS,
    ELECTRIC,
    PSYCHIC,
    ICE,
    DRAGON,
    DARK,
    FAIRY,
  }
}

namespace PE.Types {
  const TYPE_CHART = [
    // Normal
    { NORMAL: 1, FIGHTING: 1, FLYING: 1, POISON: 1, GROUND: 1, ROCK: 0.5, BUG: 1, GHOST: 0, STEEL: 0.5, FIRE: 1, WATER: 1, GRASS: 1, ELECTRIC: 1, PSYCHIC: 1, ICE: 1, DRAGON: 1, DARK: 1, FAIRY: 1 },
    // FIGHTING
    { NORMAL: 1, FIGHTING: 1, FLYING: 0.5, POISON: 0.5, GROUND: 2, ROCK: 2, BUG: 0.5, GHOST: 1, STEEL: 0.5, FIRE: 0.5, WATER: 2, GRASS: 0.5, ELECTRIC: 1, PSYCHIC: 1, ICE: 1, DRAGON: 0.5, DARK: 1, FAIRY: 1 },
    // FLYING
    { NORMAL: 1, FIGHTING: 1, FLYING: 1, POISON: 1, GROUND: 1, ROCK: 0.5, BUG: 2, GHOST: 1, STEEL: 2, FIRE: 0.5, WATER: 0.5, GRASS: 2, ELECTRIC: 1, PSYCHIC: 1, ICE: 2, DRAGON: 0.5, DARK: 1, FAIRY: 1 },
    // POISON
    { NORMAL: 1, FIGHTING: 1, FLYING: 1, POISON: 1, GROUND: 2, ROCK: 2, BUG: 1, GHOST: 1, STEEL: 1, FIRE: 2, WATER: 0.5, GRASS: 0.5, ELECTRIC: 1, PSYCHIC: 1, ICE: 1, DRAGON: 0.5, DARK: 1, FAIRY: 1 },
    // GROUND
    { NORMAL: 2, FIGHTING: 1, FLYING: 0.5, POISON: 0.5, GROUND: 1, ROCK: 2, BUG: 0.5, GHOST: 0, STEEL: 2, FIRE: 1, WATER: 1, GRASS: 1, ELECTRIC: 1, PSYCHIC: 0.5, ICE: 2, DRAGON: 1, DARK: 2, FAIRY: 0.5 },
    // ROCK
    { NORMAL: 1, FIGHTING: 2, FLYING: 1, POISON: 1, GROUND: 1, ROCK: 0.5, BUG: 2, GHOST: 1, STEEL: 0.5, FIRE: 1, WATER: 1, GRASS: 2, ELECTRIC: 0.5, PSYCHIC: 1, ICE: 1, DRAGON: 1, DARK: 1, FAIRY: 1 },
    // BUG
    { NORMAL: 1, FIGHTING: 1, FLYING: 1, POISON: 0.5, GROUND: 0.5, ROCK: 0.5, BUG: 1, GHOST: 0.5, STEEL: 0, FIRE: 1, WATER: 1, GRASS: 2, ELECTRIC: 1, PSYCHIC: 1, ICE: 1, DRAGON: 1, DARK: 1, FAIRY: 2 },
    // GHOST
    { NORMAL: 1, FIGHTING: 1, FLYING: 0, POISON: 2, GROUND: 1, ROCK: 2, BUG: 0.5, GHOST: 1, STEEL: 2, FIRE: 2, WATER: 1, GRASS: 0.5, ELECTRIC: 2, PSYCHIC: 1, ICE: 1, DRAGON: 1, DARK: 1, FAIRY: 1 },
    // STEEL
    { NORMAL: 1, FIGHTING: 0.5, FLYING: 2, POISON: 1, GROUND: 0.5, ROCK: 1, BUG: 2, GHOST: 1, STEEL: 0.5, FIRE: 2, WATER: 1, GRASS: 1, ELECTRIC: 1, PSYCHIC: 1, ICE: 2, DRAGON: 1, DARK: 1, FAIRY: 1 },
    // FIRE
    { NORMAL: 1, FIGHTING: 0.5, FLYING: 0.5, POISON: 0.5, GROUND: 1, ROCK: 1, BUG: 1, GHOST: 0.5, STEEL: 0.5, FIRE: 0.5, WATER: 1, GRASS: 2, ELECTRIC: 1, PSYCHIC: 2, ICE: 1, DRAGON: 1, DARK: 2, FAIRY: 0.5 },
    // WATER
    { NORMAL: 0, FIGHTING: 1, FLYING: 1, POISON: 1, GROUND: 1, ROCK: 1, BUG: 1, GHOST: 2, STEEL: 1, FIRE: 1, WATER: 1, GRASS: 1, ELECTRIC: 1, PSYCHIC: 2, ICE: 1, DRAGON: 1, DARK: 0.5, FAIRY: 1 },
    // GRASS
    { NORMAL: 1, FIGHTING: 1, FLYING: 2, POISON: 1, GROUND: 0, ROCK: 1, BUG: 1, GHOST: 1, STEEL: 1, FIRE: 1, WATER: 2, GRASS: 0.5, ELECTRIC: 0.5, PSYCHIC: 1, ICE: 1, DRAGON: 0.5, DARK: 1, FAIRY: 1 },
    // ELECTRIC
    { NORMAL: 1, FIGHTING: 2, FLYING: 1, POISON: 2, GROUND: 1, ROCK: 1, BUG: 1, GHOST: 1, STEEL: 0.5, FIRE: 1, WATER: 1, GRASS: 1, ELECTRIC: 1, PSYCHIC: 0.5, ICE: 1, DRAGON: 1, DARK: 0, FAIRY: 1 },
    // PSYCHIC
    { NORMAL: 1, FIGHTING: 1, FLYING: 2, POISON: 1, GROUND: 2, ROCK: 1, BUG: 1, GHOST: 1, STEEL: 0.5, FIRE: 0.5, WATER: 0.5, GRASS: 2, ELECTRIC: 1, PSYCHIC: 1, ICE: 0.5, DRAGON: 2, DARK: 1, FAIRY: 1 },
    // ICE
    { NORMAL: 1, FIGHTING: 1, FLYING: 1, POISON: 1, GROUND: 1, ROCK: 1, BUG: 1, GHOST: 1, STEEL: 0.5, FIRE: 1, WATER: 1, GRASS: 1, ELECTRIC: 1, PSYCHIC: 1, ICE: 1, DRAGON: 2, DARK: 1, FAIRY: 0 },
    // DRAGON
    { NORMAL: 1, FIGHTING: 0.5, FLYING: 1, POISON: 1, GROUND: 1, ROCK: 1, BUG: 1, GHOST: 2, STEEL: 1, FIRE: 1, WATER: 1, GRASS: 1, ELECTRIC: 1, PSYCHIC: 2, ICE: 1, DRAGON: 1, DARK: 0.5, FAIRY: 0.5 },
    // DARK
    { NORMAL: 1, FIGHTING: 1, FLYING: 1, POISON: 1, GROUND: 1, ROCK: 2, BUG: 1, GHOST: 1, STEEL: 0.5, FIRE: 0.5, WATER: 0.5, GRASS: 1, ELECTRIC: 0.5, PSYCHIC: 1, ICE: 2, DRAGON: 1, DARK: 1, FAIRY: 2 },
    // FAIRY
    { NORMAL: 1, FIGHTING: 2, FLYING: 1, POISON: 0.5, GROUND: 1, ROCK: 1, BUG: 1, GHOST: 1, STEEL: 0.5, FIRE: 0.5, WATER: 1, GRASS: 1, ELECTRIC: 1, PSYCHIC: 1, ICE: 1, DRAGON: 2, DARK: 2, FAIRY: 1 }
  ];
  export function TypeChart(type: PE.Types) {
    return TYPE_CHART[type];
  }

  export function effectiveness(userType, targetTypes, targetType3) {
    let typeChart = PE.Types.TypeChart[userType];
    let effectiveness = 1;
    for (const t of targetTypes) {
      effectiveness *= typeChart(t);
    }
    if (targetType3) effectiveness *= typeChart(targetType3);
    return effectiveness;
  }
}
