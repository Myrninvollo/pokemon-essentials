namespace PE.Abilities {
  export function name(id: string) {
    return i18n._($PE_ABILITIES[id].name);
  }

  /**
   * Activate the Pokémon **Switch in** abilities effects.
   * @param pokemon the switch in Pokémon
   * @param onactive
   */
  export function onSwitchInEffects(pokemon: PE.Battle.Battler, onactive: boolean) {
    if (pokemon.isFainted()) return;
    // if (onactive) {
    //   battler.battle.pbPrimalReversion(battler.index);
    // }

    //------------------------------------------------------------------------------------------------------------------
    // #region Wheaters abilities
    if (onactive) {
      if (pokemon.hasAbility('PRIMORDIALSEA') && $Battle.weather != PE.Weather.HeavyRain) {
        $Battle.weather = PE.Weather.HeavyRain;
        $Battle.weatherduration = -1;
        // battler.battle.pbCommonAnimation("HeavyRain",null,null)
        let msg = "%1's %2 made a heavy rain begin to fall!";
        $Battle.showMessage(i18n._(msg, pokemon.name, PE.Abilities.name(pokemon.ability)));
        console.log("[Ability triggered] ${this.name}'s Primordial Sea made it rain heavily");
      }
      if (pokemon.hasAbility('DESOLATELAND') && $Battle.weather != PE.Weather.HarshSun) {
        $Battle.weather = PE.Weather.HarshSun;
        $Battle.weatherduration = -1;
        // battler.battle.pbCommonAnimation("HarshSun",null,null)
        let msg = "%!'s %2 turned the sunlight extremely harsh!"
        $Battle.showMessage(i18n._(msg, pokemon.name, PE.Abilities.name(pokemon.ability)));
        console.log("[Ability triggered] ${this.name} Desolate Land made the sun shine harshly")
      }
      if (pokemon.hasAbility('DELTASTREAM') && $Battle.weather != PE.Weather.StrongWinds) {
        $Battle.weather = PE.Weather.StrongWinds;
        $Battle.weatherduration = -1;
        // battler.battle.pbCommonAnimation("StrongWinds",null,null)
        let msg = "%1's %2 caused a mysterious air current that protects Flying-type Pokémon!";
        $Battle.showMessage(i18n._(msg, pokemon.name, PE.Abilities.name(pokemon.ability)));
        console.log("[Ability triggered] ${this.name} Delta Stream made an air current blow")
      }
      if (!($Battle.weather in PE.PrimalWeather)) {
        if (pokemon.hasAbility('DRIZZLE') && ($Battle.weather !== PE.Weather.RainDance || $Battle.weatherduration !== -1)) {
          $Battle.weather = PE.Weather.RainDance;
          $Battle.weatherduration = 5;
          if (pokemon.hasItem('DAMPROCK')) $Battle.weatherduration = 8;
          // battler.battle.pbCommonAnimation("Rain",null,null)
          let msg = "%1's %2 made it rain!";
          $Battle.showMessage(i18n._(msg, pokemon.name, PE.Abilities.name(pokemon.ability)));
          console.log("[Ability triggered] ${this.name} Drizzle made it rain");
        }
        if (pokemon.hasAbility('DROUGHT') && ($Battle.weather !== PE.Weather.SunnyDay || $Battle.weatherduration !== -1)) {
          $Battle.weather = PE.Weather.SunnyDay;
          $Battle.weatherduration = 5;
          if (pokemon.hasItem('HEATROCK')) $Battle.weatherduration = 8;
          // battler.battle.pbCommonAnimation("Sunny",null,null)
          let msg = "%1's %2 intensified the sun's rays!";
          $Battle.showMessage(i18n._(msg, pokemon.name, PE.Abilities.name(pokemon.ability)));
          console.log("[Ability triggered] ${this.name} Drought made it sunny")
        }
        if (pokemon.hasAbility('SANDSTREAM') && ($Battle.weather !== PE.Weather.SandStorm || $Battle.weatherduration !== -1)) {
          $Battle.weather = PE.Weather.SandStorm;
          $Battle.weatherduration = 5;
          if (pokemon.hasItem('SMOOTHROCK')) $Battle.weatherduration = 8;
          // battler.battle.pbCommonAnimation("Sandstorm",null,null)
          let msg = "%1's %2 whipped up a sandstorm!";
          $Battle.showMessage(i18n._(msg, pokemon.name, PE.Abilities.name(pokemon.ability)));
          console.log("[Ability triggered] ${this.name} Sand Stream made it sandstorm")
        }
        if (pokemon.hasAbility('SNOWWARNING') && ($Battle.weather != PE.Weather.Hail || $Battle.weatherduration != -1)) {
          $Battle.weather = PE.Weather.Hail;
          $Battle.weatherduration = 5;
          if (pokemon.hasItem('ICYROCK')) $Battle.weatherduration = 8;
          // battler.battle.pbCommonAnimation("Hail",null,null)
          $Battle.showMessage(i18n._("%1's %2 made it hail!", pokemon.name, PE.Abilities.name(pokemon.ability)));
          console.log("[Ability triggered] ${this.name} Snow Warning made it hail")
        }
      }
      if (pokemon.hasAbility('AIRLOCK') || pokemon.hasAbility('CLOUDNINE')) {
        $Battle.showMessage(i18n._("%1 has %2", pokemon.name, PE.Abilities.name(pokemon.ability)));
        $Battle.showMessage(i18n._("The effects of the weather disappeared."))
      }
    }
    // #endregion
    //------------------------------------------------------------------------------------------------------------------

    //------------------------------------------------------------------------------------------------------------------========
    // Trace - When it enters a battle, the Pokémon copies an opposing Pokémon's Ability.
    if (pokemon.hasAbility('TRACE')) {
      let choices: PE.Battle.Battler[] = [];
      for (const battler of $Battle.battlers) {
        if (pokemon.isOpossing(battler)) {
          if (!battler.hasAbilityIn(['TRACE', 'MULTITYPE', 'FLOWERGIFT', 'IMPOSTER', 'STANCECHANGE', 'RKSSYSTEMS',
            'ILLUSION', 'ZENMODE', 'STANGECHANGE', 'POWEROFALCHEMY', 'RECEIVER', 'SCHOOLING', 'COMATOSE', 'SHIELDDOWN',
            'DISGUISE', 'BATTLEBOND', 'POWERCONSTRUCT'])) {
            choices.push(battler);
          }
        }
      }
      if (choices.length > 0) {
        let choice = choices[Math.randomInt(choices.length)];
        pokemon.ability = choice.ability;
        $Battle.showMessage(i18n._("%1 traced %2's %3", pokemon.name, choice.name, PE.Abilities.name(choice.ability)));
        console.log("[Ability triggered] ${this.name} Trace turned into #{abilityname} from #{battlername}");
      }
    }
    //------------------------------------------------------------------------------------------------------------------

    //------------------------------------------------------------------------------------------------------------------
    // Intimidate - Intimidates opposing Pokémon upon entering battle, lowering their Attack stat.
    if (pokemon.hasAbility('INTIMIDATE') && onactive) {
      console.log("[Ability triggered] ${this.name} Intimidate");
      for (const battler of $Battle.battlers) {
        if (pokemon.isOpossing(battler) && !battler.hasAbility('FULLMETALBODY')) {
          battler.reduceAttackStatIntimidate(pokemon);
        }
      }
    }
    //------------------------------------------------------------------------------------------------------------------

    //------------------------------------------------------------------------------------------------------------------
    // Download - Compares an opposing Pokémon's Defense and Sp. Def stats before raising its own Attack or Sp. Atk stat
    // whichever will be more effective.
    if (pokemon.hasAbility('DOWNLOAD') && onactive) {
      let odef = 0, ospd = 0;
      for (const battler of $Battle.battlers) {
        if (pokemon.isOpossing(battler)) {
          odef += battler.defense;
          ospd += battler.spdef;
        }
      }
      if (ospd > odef) {
        if (pokemon.increaseStatWithCause(PE.Stats.Attack, 1, pokemon, PE.Abilities.name(pokemon.ability))) {
          console.log(`[Ability triggered] ${this.name} Download (raising Attack)`);
        }
      } else {
        if (pokemon.increaseStatWithCause(PE.Stats.SpAtk, 1, pokemon, PE.Abilities.name(pokemon.ability))) {
          console.log(`[Ability triggered] ${this.name} Download (raising SpAtk)`);
        }
      }
    }
    //------------------------------------------------------------------------------------------------------------------

    //------------------------------------------------------------------------------------------------------------------
    // Frisk - When it enters a battle, the Pokémon can check an opposing Pokémon's held item.
    if (pokemon.hasAbility('FRISK') && $Battle.ownedByPlayer(pokemon.index) && onactive) {
      for (const battler of $Battle.battlers) {
        if (pokemon.isOpossing(battler) && battler.item && !battler.isFainted()) {
          console.log("[Ability triggered] ${this.name} Frisk")
          $Battle.showMessage(i18n._(`%1 frisked the foe and found one %2!`, pokemon.name, PE.Items.name(battler.item)));
        }
      }
    }
    //------------------------------------------------------------------------------------------------------------------

    //------------------------------------------------------------------------------------------------------------------
    // Anticipation - The Pokémon can sense an opposing Pokémon's dangerous moves.
    if (pokemon.hasAbility('ANTICIPATION') && $Battle.ownedByPlayer(pokemon.index) && onactive) {
      console.log("[Ability triggered] #{pbThis} has Anticipation");
      let found = false;
      for (const battler of $Battle.battlers) {
        if (pokemon.isOpossing(battler) && !battler.isFainted()) {
          for (const move of battler.moveset) {
            let effectiveness = PE.Types.effectiveness(move.type, pokemon.types, pokemon.effects[PE.Effects.Type3]);
            if ((effectiveness => 2 && move.basePower > 0) || PE.Moves.isOHKOMove(move.id)) {
              found = true;
              break;
            }
          }
          if (found) break;
        }
      }
      if (found) {
        $Battle.showMessage(i18n._(`${pokemon.name} shuddered with anticipation!`));
      }
    }
    //------------------------------------------------------------------------------------------------------------------

    //------------------------------------------------------------------------------------------------------------------
    // Forewarn - The Pokémon transforms with the weather to change its type to Water, Fire, or Ice.
    // if battler.hasAbility('FOREWARN') && $Battle.pbOwnedByPlayer?(@index) && onactive
    //   console.log("[Ability triggered] #{pbThis} has Forewarn")
    //   highpower=0
    //   fwmoves=[]
    //   for foe in [pbOpposing1,pbOpposing2]
    //     next if foe.isFainted?
    //     for j in foe.moves
    //       movedata=PBMoveData.new(j.id)
    //       power=movedata.basedamage
    //       power=160 if movedata.function==0x70// OHKO
    //       power=150 if movedata.function==0x8B// Eruption
    //       power=120 if movedata.function==0x71 || # Counter
    //                    movedata.function==0x72 || # Mirror Coat
    //                    movedata.function==0x73 || # Metal Burst
    //       power=80 if movedata.function==0x6A ||  # SonicBoom
    //                   movedata.function==0x6B ||  # Dragon Rage
    //                   movedata.function==0x6D ||  # Night Shade
    //                   movedata.function==0x6E ||  # Endeavor
    //                   movedata.function==0x6F ||  # Psywave
    //                   movedata.function==0x89 ||  # Return
    //                   movedata.function==0x8A ||  # Frustration
    //                   movedata.function==0x8C ||  # Crush Grip
    //                   movedata.function==0x8D ||  # Gyro Ball
    //                   movedata.function==0x90 ||  # Hidden Power
    //                   movedata.function==0x96 ||  # Natural Gift
    //                   movedata.function==0x97 ||  # Trump Card
    //                   movedata.function==0x98 ||  # Flail
    //                   movedata.function==0x9A // Grass Knot
    //       if power>highpower
    //         fwmoves=[j.id]; highpower=power
    //       elsif power==highpower
    //         fwmoves.push(j.id)
    //       end
    //     end
    //   end
    //   if fwmoves.length>0
    //     fwmove=fwmoves[Math.randomInt(fwmoves.length)]
    //     movename=PBMoves.getName(fwmove)
    //     $Battle.showMessage(i18n._("${battler.name}'s Forewarn alerted it to {2}!",pbThis,movename))
    //   end
    // end
    //------------------------------------------------------------------------------------------------------------------

    //------------------------------------------------------------------------------------------------------------------
    // Pressure message
    if (pokemon.hasAbility('PRESSURE') && onactive) {
      $Battle.showMessage(i18n._(`${pokemon.name} is exerting its pressure!`));
    }
    //------------------------------------------------------------------------------------------------------------------

    //------------------------------------------------------------------------------------------------------------------
    // Mold Breaker message
    if (pokemon.hasAbility('MOLDBREAKER') && onactive) {
      $Battle.showMessage(i18n._(`${pokemon.name} breaks the mold!`));
    }
    //------------------------------------------------------------------------------------------------------------------

    //------------------------------------------------------------------------------------------------------------------
    // Turboblaze message
    if (pokemon.hasAbility('TURBOBLAZE') && onactive) {
      $Battle.showMessage(i18n._(`${pokemon.name} is radiating a blazing aura!`));
    }
    //------------------------------------------------------------------------------------------------------------------

    //------------------------------------------------------------------------------------------------------------------
    // Teravolt message
    if (pokemon.hasAbility('TERAVOLT') && onactive) {
      $Battle.showMessage(i18n._(`${pokemon.name} is radiating a bursting aura!`));
    }
    //------------------------------------------------------------------------------------------------------------------

    //------------------------------------------------------------------------------------------------------------------
    // Dark Aura message
    if (pokemon.hasAbility('DARKAURA') && onactive) {
      $Battle.showMessage(i18n._(`${pokemon.name} is radiating a dark aura!`));
    }
    //------------------------------------------------------------------------------------------------------------------

    //------------------------------------------------------------------------------------------------------------------
    // Fairy Aura message
    if (pokemon.hasAbility('FAIRYAURA') && onactive) {
      $Battle.showMessage(i18n._(`${pokemon.name} is radiating a fairy aura!`));
    }
    //------------------------------------------------------------------------------------------------------------------

    //------------------------------------------------------------------------------------------------------------------
    // Aura Break message
    if (pokemon.hasAbility('AURABREAK') && onactive) {
      $Battle.showMessage(i18n._(`${pokemon.name} reversed all other Pokémon's auras!`))
    }
    //------------------------------------------------------------------------------------------------------------------

    //------------------------------------------------------------------------------------------------------------------
    // Slow Start message
    if (pokemon.hasAbility('SLOWSTART') && onactive) {
      let msg = `${pokemon.name} can't get it going because of its ${PE.Abilities.name(pokemon.ability)}!`;
      $Battle.showMessage(i18n._(msg));
    }
    //------------------------------------------------------------------------------------------------------------------

    //------------------------------------------------------------------------------------------------------------------
    // Imposter - The Pokémon transforms itself into the Pokémon it's facing.
    // if battler.hasAbility('IMPOSTER') && !@effects[PBEffects::Transform] && onactive
    //   choice=pbOppositeOpposing
    //   blacklist=[
    //      0xC9,// Fly
    //      0xCA,// Dig
    //      0xCB,// Dive
    //      0xCC,// Bounce
    //      0xCD,// Shadow Force
    //      0xCE,// Sky Drop
    //      0x14D// Phantom Force
    //   ]
    //   if choice.effects[PBEffects::Transform] ||
    //      choice.effects[PBEffects::Illusion] ||
    //      choice.effects[PBEffects::Substitute]>0 ||
    //      choice.effects[PBEffects::SkyDrop] ||
    //      blacklist.include?(PBMoveData.new(choice.effects[PBEffects::TwoTurnAttack]).function)
    //     console.log("[Ability triggered] ${this.name} Imposter couldn't transform")
    //   else
    //     console.log("[Ability triggered] ${this.name} Imposter")
    //     $Battle.pbAnimation(getConst(PBMoves,:TRANSFORM),self,choice)
    //     @effects[PBEffects::Transform]=true
    //     @type1=choice.type1
    //     @type2=choice.type2
    //     @effects[PBEffects::Type3]=-1
    //     @ability=choice.ability
    //     @attack=choice.attack
    //     @defense=choice.defense
    //     @speed=choice.speed
    //     @spatk=choice.spatk
    //     @spdef=choice.spdef
    //     for i in [PBStats::ATTACK,PBStats::DEFENSE,PBStats::SPEED,
    //               PBStats::SPATK,PBStats::SPDEF,PBStats::ACCURACY,PBStats::EVASION]
    //       @stages[i]=choice.stages[i]
    //     end
    //     for i in 0...4
    //       @moves[i]=PokeBattle_Move.pbFromPBMove($Battle,PBMove.new(choice.moves[i].id))
    //       @moves[i].pp=5
    //       @moves[i].totalpp=5
    //     end
    //     @effects[PBEffects::Disable]=0
    //     @effects[PBEffects::DisableMove]=0
    //     $Battle.showMessage(i18n._("${battler.name} transformed into {2}!",pbThis,choice.pbThis(true)))
    //     console.log("[Pokémon transformed] #{pbThis} transformed into #{choice.pbThis(true)}")
    //   end
    // end
    //------------------------------------------------------------------------------------------------------------------

    //------------------------------------------------------------------------------------------------------------------
    // Air Balloon message
    if (pokemon.hasItem('AIRBALLOON') && onactive) {
      $Battle.showMessage(i18n._(`${pokemon.name} floats in the air with its ${PE.Items.name(pokemon.item)}!`));
    }
    //------------------------------------------------------------------------------------------------------------------


  }
}