var PE;
(function (PE) {
    var Types;
    (function (Types) {
        Types[Types["NORMAL"] = 0] = "NORMAL";
        Types[Types["GRASS"] = 1] = "GRASS";
        Types[Types["FIRE"] = 2] = "FIRE";
        Types[Types["WATER"] = 3] = "WATER";
        Types[Types["FIGHTING"] = 4] = "FIGHTING";
        Types[Types["FLYING"] = 5] = "FLYING";
        Types[Types["POISON"] = 6] = "POISON";
        Types[Types["GROUND"] = 7] = "GROUND";
        Types[Types["ROCK"] = 8] = "ROCK";
        Types[Types["BUG"] = 9] = "BUG";
        Types[Types["GHOST"] = 10] = "GHOST";
        Types[Types["ELECTRIC"] = 11] = "ELECTRIC";
        Types[Types["PSYCHIC"] = 12] = "PSYCHIC";
        Types[Types["ICE"] = 13] = "ICE";
        Types[Types["DRAGON"] = 14] = "DRAGON";
        Types[Types["DARK"] = 15] = "DARK";
        Types[Types["STEEL"] = 16] = "STEEL";
        Types[Types["FAIRY"] = 17] = "FAIRY";
    })(Types = PE.Types || (PE.Types = {}));
})(PE || (PE = {}));
(function (PE) {
    var Types;
    (function (Types) {
        var TYPE_CHART = {
            NORMAL: { NORMAL: 1, FIGHTING: 1, FLYING: 1, POISON: 1, GROUND: 1, ROCK: 0.5, BUG: 1, GHOST: 0, STEEL: 0.5, FIRE: 1, WATER: 1, GRASS: 1, ELECTRIC: 1, PSYCHIC: 1, ICE: 1, DRAGON: 1, DARK: 1, FAIRY: 1 },
            GRASS: { NORMAL: 1, FIGHTING: 1, FLYING: 0.5, POISON: 0.5, GROUND: 2, ROCK: 2, BUG: 0.5, GHOST: 1, STEEL: 0.5, FIRE: 0.5, WATER: 2, GRASS: 0.5, ELECTRIC: 1, PSYCHIC: 1, ICE: 1, DRAGON: 0.5, DARK: 1, FAIRY: 1 },
            FIRE: { NORMAL: 1, FIGHTING: 1, FLYING: 1, POISON: 1, GROUND: 1, ROCK: 0.5, BUG: 2, GHOST: 1, STEEL: 2, FIRE: 0.5, WATER: 0.5, GRASS: 2, ELECTRIC: 1, PSYCHIC: 1, ICE: 2, DRAGON: 0.5, DARK: 1, FAIRY: 1 },
            WATER: { NORMAL: 1, FIGHTING: 1, FLYING: 1, POISON: 1, GROUND: 2, ROCK: 2, BUG: 1, GHOST: 1, STEEL: 1, FIRE: 2, WATER: 0.5, GRASS: 0.5, ELECTRIC: 1, PSYCHIC: 1, ICE: 1, DRAGON: 0.5, DARK: 1, FAIRY: 1 },
            FIGHTING: { NORMAL: 2, FIGHTING: 1, FLYING: 0.5, POISON: 0.5, GROUND: 1, ROCK: 2, BUG: 0.5, GHOST: 0, STEEL: 2, FIRE: 1, WATER: 1, GRASS: 1, ELECTRIC: 1, PSYCHIC: 0.5, ICE: 2, DRAGON: 1, DARK: 2, FAIRY: 0.5 },
            FLYING: { NORMAL: 1, FIGHTING: 2, FLYING: 1, POISON: 1, GROUND: 1, ROCK: 0.5, BUG: 2, GHOST: 1, STEEL: 0.5, FIRE: 1, WATER: 1, GRASS: 2, ELECTRIC: 0.5, PSYCHIC: 1, ICE: 1, DRAGON: 1, DARK: 1, FAIRY: 1 },
            POISON: { NORMAL: 1, FIGHTING: 1, FLYING: 1, POISON: 0.5, GROUND: 0.5, ROCK: 0.5, BUG: 1, GHOST: 0.5, STEEL: 0, FIRE: 1, WATER: 1, GRASS: 2, ELECTRIC: 1, PSYCHIC: 1, ICE: 1, DRAGON: 1, DARK: 1, FAIRY: 2 },
            GROUND: { NORMAL: 1, FIGHTING: 1, FLYING: 0, POISON: 2, GROUND: 1, ROCK: 2, BUG: 0.5, GHOST: 1, STEEL: 2, FIRE: 2, WATER: 1, GRASS: 0.5, ELECTRIC: 2, PSYCHIC: 1, ICE: 1, DRAGON: 1, DARK: 1, FAIRY: 1 },
            ROCK: { NORMAL: 1, FIGHTING: 0.5, FLYING: 2, POISON: 1, GROUND: 0.5, ROCK: 1, BUG: 2, GHOST: 1, STEEL: 0.5, FIRE: 2, WATER: 1, GRASS: 1, ELECTRIC: 1, PSYCHIC: 1, ICE: 2, DRAGON: 1, DARK: 1, FAIRY: 1 },
            BUG: { NORMAL: 1, FIGHTING: 0.5, FLYING: 0.5, POISON: 0.5, GROUND: 1, ROCK: 1, BUG: 1, GHOST: 0.5, STEEL: 0.5, FIRE: 0.5, WATER: 1, GRASS: 2, ELECTRIC: 1, PSYCHIC: 2, ICE: 1, DRAGON: 1, DARK: 2, FAIRY: 0.5 },
            GHOST: { NORMAL: 0, FIGHTING: 1, FLYING: 1, POISON: 1, GROUND: 1, ROCK: 1, BUG: 1, GHOST: 2, STEEL: 1, FIRE: 1, WATER: 1, GRASS: 1, ELECTRIC: 1, PSYCHIC: 2, ICE: 1, DRAGON: 1, DARK: 0.5, FAIRY: 1 },
            ELECTRIC: { NORMAL: 1, FIGHTING: 1, FLYING: 2, POISON: 1, GROUND: 0, ROCK: 1, BUG: 1, GHOST: 1, STEEL: 1, FIRE: 1, WATER: 2, GRASS: 0.5, ELECTRIC: 0.5, PSYCHIC: 1, ICE: 1, DRAGON: 0.5, DARK: 1, FAIRY: 1 },
            PSYCHIC: { NORMAL: 1, FIGHTING: 2, FLYING: 1, POISON: 2, GROUND: 1, ROCK: 1, BUG: 1, GHOST: 1, STEEL: 0.5, FIRE: 1, WATER: 1, GRASS: 1, ELECTRIC: 1, PSYCHIC: 0.5, ICE: 1, DRAGON: 1, DARK: 0, FAIRY: 1 },
            ICE: { NORMAL: 1, FIGHTING: 1, FLYING: 2, POISON: 1, GROUND: 2, ROCK: 1, BUG: 1, GHOST: 1, STEEL: 0.5, FIRE: 0.5, WATER: 0.5, GRASS: 2, ELECTRIC: 1, PSYCHIC: 1, ICE: 0.5, DRAGON: 2, DARK: 1, FAIRY: 1 },
            DRAGON: { NORMAL: 1, FIGHTING: 1, FLYING: 1, POISON: 1, GROUND: 1, ROCK: 1, BUG: 1, GHOST: 1, STEEL: 0.5, FIRE: 1, WATER: 1, GRASS: 1, ELECTRIC: 1, PSYCHIC: 1, ICE: 1, DRAGON: 2, DARK: 1, FAIRY: 0 },
            DARK: { NORMAL: 1, FIGHTING: 0.5, FLYING: 1, POISON: 1, GROUND: 1, ROCK: 1, BUG: 1, GHOST: 2, STEEL: 1, FIRE: 1, WATER: 1, GRASS: 1, ELECTRIC: 1, PSYCHIC: 2, ICE: 1, DRAGON: 1, DARK: 0.5, FAIRY: 0.5 },
            STEEL: { NORMAL: 1, FIGHTING: 1, FLYING: 1, POISON: 1, GROUND: 1, ROCK: 2, BUG: 1, GHOST: 1, STEEL: 0.5, FIRE: 0.5, WATER: 0.5, GRASS: 1, ELECTRIC: 0.5, PSYCHIC: 1, ICE: 2, DRAGON: 1, DARK: 1, FAIRY: 2 },
            FAIRY: { NORMAL: 1, FIGHTING: 2, FLYING: 1, POISON: 0.5, GROUND: 1, ROCK: 1, BUG: 1, GHOST: 1, STEEL: 0.5, FIRE: 0.5, WATER: 1, GRASS: 1, ELECTRIC: 1, PSYCHIC: 1, ICE: 1, DRAGON: 2, DARK: 2, FAIRY: 1 },
        };
        var COLORS = {
            NORMAL: '#c0baa1',
            GRASS: '#a3d88a',
            FIRE: '#dfa782',
            WATER: '#82aadf',
            FIGHTING: '#df8882',
            FLYING: '#b3a5bc',
            POISON: '#cc97c8',
            GROUND: '#dac887',
            ROCK: '#ccbe95',
            BUG: '#cad88a',
            GHOST: '#b0a1c0',
            ELECTRIC: '#e7de7a',
            PSYCHIC: '#df82a1',
            ICE: '#99c8c7',
            DRAGON: '#998dd4',
            DARK: '#5e5954',
            STEEL: '#b1b1b1',
            FAIRY: '#d59bbd'
        };
        function TypeChart(type) {
            return TYPE_CHART[type];
        }
        Types.TypeChart = TypeChart;
        function effectiveness(userType, targetTypes, targetType3) {
            var typeChart = Types.TypeChart(userType);
            var effectiveness = 1;
            for (var _i = 0, targetTypes_1 = targetTypes; _i < targetTypes_1.length; _i++) {
                var t = targetTypes_1[_i];
                effectiveness *= typeChart[t];
            }
            if (targetType3)
                effectiveness *= typeChart[targetType3];
            return effectiveness;
        }
        Types.effectiveness = effectiveness;
        function color(type) {
            return COLORS[type];
        }
        Types.color = color;
    })(Types = PE.Types || (PE.Types = {}));
})(PE || (PE = {}));
