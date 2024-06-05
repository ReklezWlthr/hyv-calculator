import { Element, Stats, WeaponType } from '@src/domain/constant'

export const Resonance = [
  {
    name: 'Fervent Flames',
    element: Element.PYRO,
    desc: `Affected by <b class="text-genshin-cryo">Cryo</b> for 40% less time. Increases ATK by 25%.`,
  },
  {
    name: 'Soothing Water',
    element: Element.HYDRO,
    desc: `Affected by <b class="text-genshin-pyro">Pyro</b> for 40% less time. Increases Max HP by 25%.`,
  },
  {
    name: 'High Voltage',
    element: Element.ELECTRO,
    desc: `Affected by <b class="text-genshin-hydro">Hydro</b> for 40% less time. Superconduct, Overloaded, Electro-Charged, Quicken, Aggravate, or Hyperbloom have a 100% chance to generate an <b class="text-genshin-electro">Electro</b> Elemental Particle (CD: 5s).`,
  },
  {
    name: 'Shattering Ice',
    element: Element.CRYO,
    desc: `Affected by <b class="text-genshin-electro">Electro</b> for 40% less time. Increases CRIT Rate against enemies that are Frozen or affected by <b class="text-genshin-cryo">Cryo</b> by 15%.`,
  },
  {
    name: 'Impetuous Winds',
    element: Element.ANEMO,
    desc: `Decreases Stamina Consumption by 15%. Increases Movement SPD by 10%. Shortens Skill CD by 5%.`,
  },
  {
    name: 'Enduring Rock',
    element: Element.GEO,
    desc: `Increases shield strength by 15%. Additionally, characters protected by a shield will have the following special characteristics: DMG dealt increased by 15%, dealing DMG to enemies will decrease their <b class="text-genshin-geo">Geo RES</b> by 20% for 15s.`,
  },
  {
    name: 'Sprawling Greenery',
    element: Element.DENDRO,
    desc: `Elemental Mastery increased by 50. After triggering Burning, Quicken, or Bloom reactions, all nearby party members gain 30 Elemental Mastery for 6s. After triggering Aggravate, Spread, Hyperbloom, or Burgeon reactions, all nearby party members gain 20 Elemental Mastery for 6s. The durations of the aforementioned effects will be counted independently.`,
  },
  {
    name: 'Protective Canopy',
    element: 'Unique',
    desc: `All Elemental RES +15%, Physical RES +15%.`,
  },
]

export const Characters = [
  {
    id: '10000038',
    name: 'Albedo',
    stat: {
      baseAtk: 19.551,
      baseHp: 1029.5856,
      baseDef: 68.2062,
      ascAtk: 80.28111,
      ascHp: 4228.035,
      ascDef: 280.098,
      ascStat: Stats.GEO_DMG,
    },
    rarity: 5,
    region: 'Monstadt',
    constellation: 'Princeps Cretaceus',
    weapon: WeaponType.SWORD,
    element: Element.GEO,
    codeName: 'Albedo',
  },
  {
    id: '10000078',
    name: 'Alhaitham',
    stat: {
      baseAtk: 24.3922,
      baseHp: 1039.1188,
      baseDef: 60.84711,
      ascAtk: 100.16024,
      ascHp: 4267.1836,
      ascDef: 249.8769,
      ascStat: Stats.DENDRO_DMG,
    },
    rarity: 5,
    region: 'Sumeru',
    constellation: 'Vultur Volans',
    weapon: WeaponType.SWORD,
    element: Element.DENDRO,
    codeName: 'Alhatham',
  },
  {
    id: '10000090',
    name: 'Chevreuse',
    stat: {
      baseAtk: 16.2052803,
      baseHp: 1002.970093,
      baseDef: 50.70135117,
      ascAtk: 57.98356247,
      ascHp: 3588.609131,
      ascDef: 181.408493,
      ascStat: Stats.P_HP,
    },
    rarity: 4,
    region: 'Fontaine',
    constellation: 'Sclopetum Ensiferum',
    weapon: WeaponType.POLEARM,
    element: Element.PYRO,
    codeName: 'Chevreuse',
  },
  {
    id: '10000054',
    name: 'Sangonomiya Kokomi',
    stat: {
      baseAtk: 18.2476,
      baseHp: 1048.652,
      baseDef: 51.15465,
      ascAtk: 74.92904,
      ascHp: 4306.332,
      ascDef: 210.0735,
      ascStat: Stats.HYDRO_DMG,
    },
    rarity: 5,
    region: 'Inazuma',
    constellation: 'Dracaena Somnolenta',
    weapon: WeaponType.CATALYST,
    element: Element.HYDRO,
    codeName: 'Kokomi',
  },
  {
    id: '10000031',
    name: 'Fischl',
    stat: {
      baseAtk: 20.4792,
      baseHp: 770.4634,
      baseDef: 49.78575,
      ascAtk: 73.27593,
      ascHp: 2756.704,
      ascDef: 178.1325,
      ascStat: Stats.P_ATK,
    },
    rarity: 4,
    region: 'Monstadt',
    constellation: 'Corvus',
    weapon: WeaponType.BOW,
    element: Element.ELECTRO,
    codeName: 'Fischl',
  },
  {
    id: '10000051',
    name: 'Eula',
    stat: {
      baseAtk: 26.6266,
      baseHp: 1029.5856,
      baseDef: 58.45391,
      ascAtk: 109.33523,
      ascHp: 4228.035,
      ascDef: 240.0489,
      ascStat: Stats.CRIT_DMG,
    },
    rarity: 5,
    region: 'Monstadt',
    constellation: 'Aphros Delos',
    weapon: WeaponType.CLAYMORE,
    element: Element.CRYO,
    codeName: 'Eula',
  },
  {
    id: '10000075',
    name: 'Wanderer',
    stat: {
      baseAtk: 25.5094,
      baseHp: 791.2556,
      baseDef: 47.2657,
      ascAtk: 104.747734,
      ascHp: 3249.3232,
      ascDef: 194.103,
      ascStat: Stats.CRIT_RATE,
    },
    rarity: 5,
    region: 'Sumeru',
    constellation: 'Peregrinus',
    weapon: WeaponType.CATALYST,
    element: Element.ANEMO,
    codeName: 'Wanderer',
  },
  {
    id: '10000061',
    name: 'Kirara',
    stat: {
      baseAtk: 18.6984,
      baseHp: 1021.2059,
      baseDef: 45.78,
      ascAtk: 66.90411377,
      ascHp: 3653.856445,
      ascDef: 163.8,
      ascStat: Stats.P_HP,
    },
    rarity: 4,
    region: 'Inazuma',
    constellation: 'Arcella',
    weapon: WeaponType.SWORD,
    element: Element.DENDRO,
    codeName: 'Momoka',
  },
  {
    id: '10000089',
    name: 'Furina',
    stat: {
      baseAtk: 18.9924,
      baseHp: 1191.65,
      baseDef: 54.14614868,
      ascAtk: 77.98736572,
      ascHp: 4893.559082,
      ascDef: 222.3585052,
      ascStat: Stats.CRIT_RATE,
    },
    rarity: 5,
    region: 'Fontaine',
    constellation: 'Animula Choragi',
    weapon: WeaponType.SWORD,
    element: Element.HYDRO,
    codeName: 'Furina',
  },
  {
    id: '10000096',
    name: 'Arlecchino',
    stat: {
      baseAtk: 26.6266002655029,
      baseHp: 1020.0524291992188,
      baseDef: 59.5308494567871,
      ascAtk: 109.3352279663086,
      ascHp: 4188.88671875,
      ascDef: 244.4714965820313,
      ascStat: Stats.CRIT_DMG,
    },
    rarity: 5,
    region: 'Snezhnaya',
    constellation: 'Ignis Purgatorius',
    weapon: WeaponType.POLEARM,
    element: Element.PYRO,
    codeName: 'Arlecchino',
  },
  {
    id: '10000032',
    name: 'Bennett',
    stat: {
      baseAtk: 16.0272,
      baseHp: 1039.4418,
      baseDef: 64.66425,
      ascAtk: 57.34638,
      ascHp: 3719.104,
      ascDef: 231.3675,
      ascStat: Stats.ER,
    },
    rarity: 4,
    region: 'Monstadt',
    constellation: 'Rota Calamitas',
    weapon: WeaponType.SWORD,
    element: Element.PYRO,
    codeName: 'Bennett',
  },
  {
    id: '10000062',
    name: 'Aloy',
    stat: {
      baseAtk: 18.21036,
      baseHp: 848.4548,
      baseDef: 52.6504,
      ascAtk: 74.77612,
      ascHp: 3484.214,
      ascDef: 216.216,
      ascStat: Stats.CRYO_DMG,
    },
    rarity: 5,
    region: 'Unknown',
    constellation: 'Nora Fortis',
    weapon: WeaponType.BOW,
    element: Element.CRYO,
    codeName: 'Aloy',
  },
  {
    id: '10000021',
    name: 'Amber',
    stat: {
      baseAtk: 18.6984,
      baseHp: 793.2582,
      baseDef: 50.358,
      ascAtk: 66.90411,
      ascHp: 2838.2634,
      ascDef: 180.18,
      ascStat: Stats.P_ATK,
    },
    rarity: 4,
    region: 'Monstadt',
    constellation: 'Lepus',
    weapon: WeaponType.BOW,
    element: Element.PYRO,
    codeName: 'Ambor',
  },
  {
    id: '10000057',
    name: 'Arataki Itto',
    stat: {
      baseAtk: 17.689,
      baseHp: 1000.986,
      baseDef: 74.66784,
      ascAtk: 72.63529,
      ascHp: 4110.59,
      ascDef: 306.6336,
      ascStat: Stats.CRIT_RATE,
    },
    rarity: 5,
    region: 'Inazuma',
    constellation: 'Taurus Iracundus',
    weapon: WeaponType.CLAYMORE,
    element: Element.GEO,
    codeName: 'Itto',
  },
  {
    id: '10000082',
    name: 'Baizhu',
    stat: {
      baseAtk: 14.9891,
      baseHp: 1039.1188,
      baseDef: 38.8895,
      ascAtk: 61.54885,
      ascHp: 4267.1836,
      ascDef: 159.705,
      ascStat: Stats.P_HP,
    },
    rarity: 5,
    region: 'Liyue',
    constellation: 'Lagenaria',
    weapon: WeaponType.CATALYST,
    element: Element.DENDRO,
    codeName: 'Baizhuer',
  },
  {
    id: '10000014',
    name: 'Barbara',
    stat: {
      baseAtk: 13.356,
      baseHp: 820.6119,
      baseDef: 56.0805,
      ascAtk: 47.78865,
      ascHp: 2936.1348,
      ascDef: 200.655,
      ascStat: Stats.P_HP,
    },
    rarity: 4,
    region: 'Monstadt',
    constellation: 'Crater',
    weapon: WeaponType.CATALYST,
    element: Element.HYDRO,
    codeName: 'Barbara',
  },
  {
    id: '10000024',
    name: 'Beidou',
    stat: {
      baseAtk: 18.87648,
      baseHp: 1094.1492,
      baseDef: 54.36375,
      ascAtk: 67.54129,
      ascHp: 3914.8462,
      ascDef: 194.5125,
      ascStat: Stats.ELECTRO_DMG,
    },
    rarity: 4,
    region: 'Liyue',
    constellation: 'Victor Mare',
    weapon: WeaponType.CLAYMORE,
    element: Element.ELECTRO,
    codeName: 'Beidou',
  },
  {
    id: '10000072',
    name: 'Candace',
    stat: {
      baseAtk: 17.808,
      baseHp: 911.791,
      baseDef: 57.225,
      ascAtk: 63.7182,
      ascHp: 3262.3718,
      ascDef: 204.75,
      ascStat: Stats.P_HP,
    },
    rarity: 4,
    region: 'Sumeru',
    constellation: 'Sagitta Scutum',
    weapon: WeaponType.POLEARM,
    element: Element.HYDRO,
    codeName: 'Candace',
  },
  {
    id: '10000088',
    name: 'Charlotte',
    stat: {
      baseAtk: 14.51352024,
      baseHp: 902.6730957,
      baseDef: 45.78,
      ascAtk: 51.93033218,
      ascHp: 3229.748047,
      ascDef: 163.8,
      ascStat: Stats.P_ATK,
    },
    rarity: 4,
    region: 'Fontaine',
    constellation: 'Hualina Veritas',
    weapon: WeaponType.CATALYST,
    element: Element.CRYO,
    codeName: 'Charlotte',
  },
  {
    id: '10000094',
    name: 'Chiori',
    stat: {
      baseAtk: 25.137,
      baseHp: 890.4,
      baseDef: 74.19,
      ascAtk: 103.2185669,
      ascHp: 3656.467285,
      ascDef: 304.6679993,
      ascStat: Stats.CRIT_DMG,
    },
    rarity: 5,
    region: 'Inazuma',
    constellation: 'Cisoria',
    weapon: WeaponType.SWORD,
    element: Element.GEO,
    codeName: 'Chiori',
  },
  {
    id: '10000036',
    name: 'Chongyun',
    stat: {
      baseAtk: 18.6984,
      baseHp: 920.90894,
      baseDef: 54.36375,
      ascAtk: 66.90411,
      ascHp: 3294.9956,
      ascDef: 194.5125,
      ascStat: Stats.P_ATK,
    },
    rarity: 4,
    region: 'Liyue',
    constellation: 'Nubis Caesor',
    weapon: WeaponType.CLAYMORE,
    element: Element.CRYO,
    codeName: 'Chongyun',
  },
  {
    id: '10000067',
    name: 'Collei',
    stat: {
      baseAtk: 16.73952,
      baseHp: 820.6119,
      baseDef: 50.358,
      ascAtk: 59.895107,
      ascHp: 2936.1348,
      ascDef: 180.18,
      ascStat: Stats.P_ATK,
    },
    rarity: 4,
    region: 'Sumeru',
    constellation: 'Leptailurus Cervarius',
    weapon: WeaponType.BOW,
    element: Element.DENDRO,
    codeName: 'Collei',
  },
  {
    id: '10000071',
    name: 'Cyno',
    stat: {
      baseAtk: 24.7646,
      baseHp: 972.3864,
      baseDef: 66.88994,
      ascAtk: 101.68941,
      ascHp: 3993.1443,
      ascDef: 274.6926,
      ascStat: Stats.CRIT_DMG,
    },
    rarity: 5,
    region: 'Sumeru',
    constellation: 'Lupus Aureus',
    weapon: WeaponType.POLEARM,
    element: Element.ELECTRO,
    codeName: 'Cyno',
  },
  {
    id: '10000079',
    name: 'Dehya',
    stat: {
      baseAtk: 20.6682,
      baseHp: 1220.2496,
      baseDef: 48.88111,
      ascAtk: 84.8686,
      ascHp: 5011.0044,
      ascDef: 200.7369,
      ascStat: Stats.P_HP,
    },
    rarity: 5,
    region: 'Sumeru',
    constellation: 'Mantichora',
    weapon: WeaponType.CLAYMORE,
    element: Element.PYRO,
    codeName: 'Dehya',
  },
  {
    id: '10000016',
    name: 'Diluc',
    stat: {
      baseAtk: 26.068,
      baseHp: 1010.5192,
      baseDef: 61.0266,
      ascAtk: 107.04148,
      ascHp: 4149.7383,
      ascDef: 250.614,
      ascStat: Stats.CRIT_RATE,
    },
    rarity: 5,
    region: 'Monstadt',
    constellation: 'Noctua',
    weapon: WeaponType.CLAYMORE,
    element: Element.PYRO,
    codeName: 'Diluc',
  },
  {
    id: '10000039',
    name: 'Diona',
    stat: {
      baseAtk: 17.808,
      baseHp: 802.3761,
      baseDef: 50.358,
      ascAtk: 63.7182,
      ascHp: 2870.8872,
      ascDef: 180.18,
      ascStat: Stats.CRYO_DMG,
    },
    rarity: 4,
    region: 'Monstadt',
    constellation: 'Feles',
    weapon: WeaponType.BOW,
    element: Element.CRYO,
    codeName: 'Diona',
  },
  {
    id: '10000068',
    name: 'Dori',
    stat: {
      baseAtk: 18.6984,
      baseHp: 1039.4418,
      baseDef: 60.6585,
      ascAtk: 66.90411,
      ascHp: 3719.104,
      ascDef: 217.035,
      ascStat: Stats.P_HP,
    },
    rarity: 4,
    region: 'Sumeru',
    constellation: 'Magicae Lucerna',
    weapon: WeaponType.CLAYMORE,
    element: Element.ELECTRO,
    codeName: 'Dori',
  },
  {
    id: '10000076',
    name: 'Faruzan',
    stat: {
      baseAtk: 16.4724,
      baseHp: 802.3761,
      baseDef: 52.647,
      ascAtk: 58.939335,
      ascHp: 2870.8872,
      ascDef: 188.37,
      ascStat: Stats.P_ATK,
    },
    rarity: 4,
    region: 'Sumeru',
    constellation: 'Flosculi Implexi',
    weapon: WeaponType.BOW,
    element: Element.ANEMO,
    codeName: 'Faruzan',
  },
  {
    id: '10000085',
    name: 'Freminet',
    stat: {
      baseAtk: 21.3696003,
      baseHp: 1012.088013,
      baseDef: 59.39955139,
      ascAtk: 76.46183777,
      ascHp: 3621.232666,
      ascDef: 212.5305023,
      ascStat: Stats.P_ATK,
    },
    rarity: 4,
    region: 'Fontaine',
    constellation: 'Automaton',
    weapon: WeaponType.CLAYMORE,
    element: Element.CRYO,
    codeName: 'Freminet',
  },
  {
    id: '10000092',
    name: 'Gaming',
    stat: {
      baseAtk: 25.28735924,
      baseHp: 957.3805542,
      baseDef: 58.94174957,
      ascAtk: 90.47984314,
      ascHp: 3425.490479,
      ascDef: 210.8925018,
      ascStat: Stats.P_ATK,
    },
    rarity: 4,
    region: 'Liyue',
    constellation: 'Leo Expergiscens',
    weapon: WeaponType.CLAYMORE,
    element: Element.PYRO,
    codeName: 'Gaming',
  },
  {
    id: '10000037',
    name: 'Ganyu',
    stat: {
      baseAtk: 26.068,
      baseHp: 762.656,
      baseDef: 49.0606,
      ascAtk: 107.04148,
      ascHp: 3131.878,
      ascDef: 201.474,
      ascStat: Stats.CRIT_DMG,
    },
    rarity: 5,
    region: 'Liyue',
    constellation: 'Sinae Unicornis',
    weapon: WeaponType.BOW,
    element: Element.CRYO,
    codeName: 'Ganyu',
  },
  {
    id: '10000055',
    name: 'Gorou',
    stat: {
      baseAtk: 15.31488,
      baseHp: 802.3761,
      baseDef: 54.36375,
      ascAtk: 54.797653,
      ascHp: 2870.8872,
      ascDef: 194.5125,
      ascStat: Stats.GEO_DMG,
    },
    rarity: 4,
    region: 'Inazuma',
    constellation: 'Canis Bellatoris',
    weapon: WeaponType.BOW,
    element: Element.GEO,
    codeName: 'Gorou',
  },
  {
    id: '10000046',
    name: 'Hu Tao',
    stat: {
      baseAtk: 8.2859,
      baseHp: 1210.7164,
      baseDef: 68.2062,
      ascAtk: 34.0239,
      ascHp: 4971.856,
      ascDef: 280.098,
      ascStat: Stats.CRIT_DMG,
    },
    rarity: 5,
    region: 'Liyue',
    constellation: 'Papilio Charontis',
    weapon: WeaponType.POLEARM,
    element: Element.PYRO,
    codeName: 'Hutao',
  },
  {
    id: '10000003',
    name: 'Jean',
    stat: {
      baseAtk: 18.62,
      baseHp: 1143.984,
      baseDef: 59.83,
      ascAtk: 76.4582,
      ascHp: 4697.817,
      ascDef: 245.7,
      ascStat: Stats.HEAL,
    },
    rarity: 5,
    region: 'Monstadt',
    constellation: 'Leo Minor',
    weapon: WeaponType.SWORD,
    element: Element.ANEMO,
    codeName: 'Qin',
  },
  {
    id: '10000047',
    name: 'Kaedehara Kazuha',
    stat: {
      baseAtk: 23.0888,
      baseHp: 1039.1188,
      baseDef: 62.8215,
      ascAtk: 94.80817,
      ascHp: 4267.1836,
      ascDef: 257.985,
      ascStat: Stats.EM,
    },
    rarity: 5,
    region: 'Inazuma',
    constellation: 'Acer Palmatum',
    weapon: WeaponType.SWORD,
    element: Element.ANEMO,
    codeName: 'Kazuha',
  },
  {
    id: '10000015',
    name: 'Kaeya',
    stat: {
      baseAtk: 18.6984,
      baseHp: 975.6164,
      baseDef: 66.381,
      ascAtk: 66.90411,
      ascHp: 3490.7378,
      ascDef: 237.51,
      ascStat: Stats.ER,
    },
    rarity: 4,
    region: 'Monstadt',
    constellation: 'Pavo Ocellus',
    weapon: WeaponType.SWORD,
    element: Element.CRYO,
    codeName: 'Kaeya',
  },
  {
    id: '10000002',
    name: 'Kamisato Ayaka',
    stat: {
      baseAtk: 26.6266,
      baseHp: 1000.986,
      baseDef: 61.0266,
      ascAtk: 109.33523,
      ascHp: 4110.59,
      ascDef: 250.614,
      ascStat: Stats.CRIT_DMG,
    },
    rarity: 5,
    region: 'Inazuma',
    constellation: 'Grus Nivis',
    weapon: WeaponType.SWORD,
    element: Element.CRYO,
    codeName: 'Ayaka',
  },
  {
    id: '10000066',
    name: 'Kamisato Ayato',
    stat: {
      baseAtk: 23.275,
      baseHp: 1067.7184,
      baseDef: 59.83,
      ascAtk: 95.57275,
      ascHp: 4384.629,
      ascDef: 245.7,
      ascStat: Stats.CRIT_DMG,
    },
    rarity: 5,
    region: 'Inazuma',
    constellation: 'Cypressus Custos',
    weapon: WeaponType.SWORD,
    element: Element.HYDRO,
    codeName: 'Ayato',
  },
  {
    id: '10000081',
    name: 'Kaveh',
    stat: {
      baseAtk: 19.5888,
      baseHp: 1002.9701,
      baseDef: 62.9475,
      ascAtk: 70.09002,
      ascHp: 3588.6091,
      ascDef: 225.225,
      ascStat: Stats.EM,
    },
    rarity: 4,
    region: 'Sumeru',
    constellation: 'Paradisaea',
    weapon: WeaponType.CLAYMORE,
    element: Element.DENDRO,
    codeName: 'Kaveh',
  },
  {
    id: '10000042',
    name: 'Keqing',
    stat: {
      baseAtk: 25.137,
      baseHp: 1020.0524,
      baseDef: 62.2232,
      ascAtk: 103.21857,
      ascHp: 4188.8867,
      ascDef: 255.528,
      ascStat: Stats.CRIT_DMG,
    },
    rarity: 5,
    region: 'Liyue',
    constellation: 'Trulla Cementarii',
    weapon: WeaponType.SWORD,
    element: Element.ELECTRO,
    codeName: 'Keqing',
  },
  {
    id: '10000029',
    name: 'Klee',
    stat: {
      baseAtk: 24.206,
      baseHp: 800.7888,
      baseDef: 47.864,
      ascAtk: 99.39566,
      ascHp: 3288.4717,
      ascDef: 196.56,
      ascStat: Stats.PYRO_DMG,
    },
    rarity: 5,
    region: 'Monstadt',
    constellation: 'Trifolium',
    weapon: WeaponType.CATALYST,
    element: Element.PYRO,
    codeName: 'Klee',
  },
  {
    id: '10000056',
    name: 'Kujou Sara',
    stat: {
      baseAtk: 16.38336,
      baseHp: 802.3761,
      baseDef: 52.647,
      ascAtk: 58.620743,
      ascHp: 2870.8872,
      ascDef: 188.37,
      ascStat: Stats.P_ATK,
    },
    rarity: 4,
    region: 'Inazuma',
    constellation: 'Flabellum',
    weapon: WeaponType.BOW,
    element: Element.ELECTRO,
    codeName: 'Sara',
  },
  {
    id: '10000065',
    name: 'Kuki Shinobu',
    stat: {
      baseAtk: 17.808,
      baseHp: 1030.3239,
      baseDef: 62.9475,
      ascAtk: 63.7182,
      ascHp: 3686.4802,
      ascDef: 225.225,
      ascStat: Stats.P_HP,
    },
    rarity: 4,
    region: 'Inazuma',
    constellation: 'Tribulatio Demptio',
    weapon: WeaponType.SWORD,
    element: Element.ELECTRO,
    codeName: 'Shinobu',
  },
  {
    id: '10000074',
    name: 'Layla',
    stat: {
      baseAtk: 18.16416,
      baseHp: 930.0268,
      baseDef: 54.936,
      ascAtk: 64.99256,
      ascHp: 3327.6194,
      ascDef: 196.56,
      ascStat: Stats.P_HP,
    },
    rarity: 4,
    region: 'Sumeru',
    constellation: 'Luscinia',
    weapon: WeaponType.SWORD,
    element: Element.CRYO,
    codeName: 'Layla',
  },
  {
    id: '10000006',
    name: 'Lisa',
    stat: {
      baseAtk: 19.41072,
      baseHp: 802.3761,
      baseDef: 48.069,
      ascAtk: 69.452835,
      ascHp: 2870.8872,
      ascDef: 171.99,
      ascStat: Stats.EM,
    },
    rarity: 4,
    region: 'Monstadt',
    constellation: 'Tempus Fugit',
    weapon: WeaponType.CATALYST,
    element: Element.ELECTRO,
    codeName: 'Lisa',
  },
  {
    id: '10000083',
    name: 'Lynette',
    stat: {
      baseAtk: 19.41072,
      baseHp: 1039.441772,
      baseDef: 59.68567657,
      ascAtk: 69.45283508,
      ascHp: 3719.104,
      ascDef: 213.554245,
      ascStat: Stats.ANEMO_DMG,
    },
    rarity: 4,
    region: 'Fontaine',
    constellation: 'Felis Alba',
    weapon: WeaponType.SWORD,
    element: Element.ANEMO,
    codeName: 'Linette',
  },
  {
    id: '10000084',
    name: 'Lyney',
    stat: {
      baseAtk: 24.7646,
      baseHp: 857.987976,
      baseDef: 41.881,
      ascAtk: 101.6894,
      ascHp: 3523.362549,
      ascDef: 171.99,
      ascStat: Stats.CRIT_RATE,
    },
    rarity: 5,
    region: 'Fontaine',
    constellation: 'Felis Fuscus',
    weapon: WeaponType.BOW,
    element: Element.PYRO,
    codeName: 'Liney',
  },
  {
    id: '10000080',
    name: 'Mika',
    stat: {
      baseAtk: 18.6984,
      baseHp: 1048.5597,
      baseDef: 59.800125,
      ascAtk: 66.90411,
      ascHp: 3751.7275,
      ascDef: 213.96375,
      ascStat: Stats.P_HP,
    },
    rarity: 4,
    region: 'Monstadt',
    constellation: 'Palumbus',
    weapon: WeaponType.POLEARM,
    element: Element.CRYO,
    codeName: 'Mika',
  },
  {
    id: '10000041',
    name: 'Mona',
    stat: {
      baseAtk: 22.344,
      baseHp: 810.322,
      baseDef: 50.8555,
      ascAtk: 91.74984,
      ascHp: 3327.62,
      ascDef: 208.845,
      ascStat: Stats.ER,
    },
    rarity: 5,
    region: 'Monstadt',
    constellation: 'Astrolabos',
    weapon: WeaponType.CATALYST,
    element: Element.HYDRO,
    codeName: 'Mona',
  },
  {
    id: '10000073',
    name: 'Nahida',
    stat: {
      baseAtk: 23.275,
      baseHp: 806.5087,
      baseDef: 49.0606,
      ascAtk: 95.57275,
      ascHp: 3311.961,
      ascDef: 201.474,
      ascStat: Stats.EM,
    },
    rarity: 5,
    region: 'Sumeru',
    constellation: 'Sapientia Oromasdis',
    weapon: WeaponType.CATALYST,
    element: Element.DENDRO,
    codeName: 'Nahida',
  },
  {
    id: '10000091',
    name: 'Navia',
    stat: {
      baseAtk: 27.3714,
      baseHp: 984.78,
      baseDef: 61.74456,
      ascAtk: 112.3935547,
      ascHp: 4044.037354,
      ascDef: 253.5623932,
      ascStat: Stats.CRIT_DMG,
    },
    rarity: 5,
    region: 'Fontaine',
    constellation: 'Rosa Multiflora',
    weapon: WeaponType.CLAYMORE,
    element: Element.GEO,
    codeName: 'Navia',
  },
  {
    id: '10000087',
    name: 'Neuvillette',
    stat: {
      baseAtk: 16.218,
      baseHp: 1143.984,
      baseDef: 44.8725,
      ascAtk: 66.595,
      ascHp: 4697.8169,
      ascDef: 184.275,
      ascStat: Stats.CRIT_DMG,
    },
    rarity: 5,
    region: 'Fontaine',
    constellation: 'Leviathan Judicator',
    weapon: WeaponType.CATALYST,
    element: Element.HYDRO,
    codeName: 'Neuvillette',
  },
  {
    id: '10000070',
    name: 'Nilou',
    stat: {
      baseAtk: 17.8752,
      baseHp: 1182.1168,
      baseDef: 56.71884,
      ascAtk: 73.39987,
      ascHp: 4854.4106,
      ascDef: 232.9236,
      ascStat: Stats.P_HP,
    },
    rarity: 5,
    region: 'Sumeru',
    constellation: 'Lotos Somno',
    weapon: WeaponType.SWORD,
    element: Element.HYDRO,
    codeName: 'Nilou',
  },
  {
    id: '10000027',
    name: 'Ningguang',
    stat: {
      baseAtk: 17.808,
      baseHp: 820.6119,
      baseDef: 48.069,
      ascAtk: 63.7182,
      ascHp: 2936.1348,
      ascDef: 171.99,
      ascStat: Stats.GEO_DMG,
    },
    rarity: 4,
    region: 'Liyue',
    constellation: 'Opus Aequilibrium',
    weapon: WeaponType.CATALYST,
    element: Element.GEO,
    codeName: 'Ningguang',
  },
  {
    id: '10000034',
    name: 'Noelle',
    stat: {
      baseAtk: 16.0272,
      baseHp: 1012.088,
      baseDef: 66.95325,
      ascAtk: 57.34638,
      ascHp: 3621.2327,
      ascDef: 239.5575,
      ascStat: Stats.P_DEF,
    },
    rarity: 4,
    region: 'Monstadt',
    constellation: 'Parma Cordis',
    weapon: WeaponType.CLAYMORE,
    element: Element.GEO,
    codeName: 'Noel',
  },
  {
    id: '10000035',
    name: 'Qiqi',
    stat: {
      baseAtk: 22.344,
      baseHp: 962.8532,
      baseDef: 71.796,
      ascAtk: 91.74984,
      ascHp: 3953.9958,
      ascDef: 294.84,
      ascStat: Stats.HEAL,
    },
    rarity: 5,
    region: 'Liyue',
    constellation: 'Pristina Nola',
    weapon: WeaponType.SWORD,
    element: Element.CRYO,
    codeName: 'Qiqi',
  },
  {
    id: '10000052',
    name: 'Raiden Shogun',
    stat: {
      baseAtk: 26.2542,
      baseHp: 1004.79926,
      baseDef: 61.44541,
      ascAtk: 107.80606,
      ascHp: 4126.249,
      ascDef: 252.3339,
      ascStat: Stats.ER,
    },
    rarity: 5,
    region: 'Inazuma',
    constellation: 'Imperatrix Umbrosa',
    weapon: WeaponType.POLEARM,
    element: Element.ELECTRO,
    codeName: 'Shougun',
  },
  {
    id: '10000020',
    name: 'Razor',
    stat: {
      baseAtk: 19.5888,
      baseHp: 1002.9701,
      baseDef: 62.9475,
      ascAtk: 70.09002,
      ascHp: 3588.6091,
      ascDef: 225.225,
      ascStat: Stats.PHYSICAL_DMG,
    },
    rarity: 4,
    region: 'Monstadt',
    constellation: 'Lupus Minor',
    weapon: WeaponType.CLAYMORE,
    element: Element.ELECTRO,
    codeName: 'Razor',
  },
  {
    id: '10000045',
    name: 'Rosaria',
    stat: {
      baseAtk: 20.12304,
      baseHp: 1030.3239,
      baseDef: 59.514,
      ascAtk: 72.001564,
      ascHp: 3686.4802,
      ascDef: 212.94,
      ascStat: Stats.P_ATK,
    },
    rarity: 4,
    region: 'Monstadt',
    constellation: 'Spinea Corona',
    weapon: WeaponType.POLEARM,
    element: Element.CRYO,
    codeName: 'Rosaria',
  },
  {
    id: '10000053',
    name: 'Sayu',
    stat: {
      baseAtk: 20.4792,
      baseHp: 993.8522,
      baseDef: 62.432476,
      ascAtk: 73.27593,
      ascHp: 3555.9854,
      ascDef: 223.38225,
      ascStat: Stats.EM,
    },
    rarity: 4,
    region: 'Inazuma',
    constellation: 'Nyctereutes Minor',
    weapon: WeaponType.CLAYMORE,
    element: Element.ANEMO,
    codeName: 'Sayu',
  },
  {
    id: '10000063',
    name: 'Shenhe',
    stat: {
      baseAtk: 23.6474,
      baseHp: 1011.47253,
      baseDef: 64.6164,
      ascAtk: 97.10191,
      ascHp: 4153.653,
      ascDef: 265.356,
      ascStat: Stats.P_ATK,
    },
    rarity: 5,
    region: 'Liyue',
    constellation: 'Crista Doloris',
    weapon: WeaponType.POLEARM,
    element: Element.CRYO,
    codeName: 'Shenhe',
  },
  {
    id: '10000059',
    name: 'Shikanoin Heizou',
    stat: {
      baseAtk: 18.87648,
      baseHp: 893.5552,
      baseDef: 57.33945,
      ascAtk: 67.54129,
      ascHp: 3197.1245,
      ascDef: 205.1595,
      ascStat: Stats.ANEMO_DMG,
    },
    rarity: 4,
    region: 'Inazuma',
    constellation: 'Cervus Minor',
    weapon: WeaponType.CATALYST,
    element: Element.ANEMO,
    codeName: 'Heizo',
  },
  {
    id: '10000043',
    name: 'Sucrose',
    stat: {
      baseAtk: 14.2464,
      baseHp: 775.02234,
      baseDef: 58.94175,
      ascAtk: 50.97456,
      ascHp: 2773.016,
      ascDef: 210.8925,
      ascStat: Stats.ANEMO_DMG,
    },
    rarity: 4,
    region: 'Monstadt',
    constellation: 'Ampulla',
    weapon: WeaponType.CATALYST,
    element: Element.ANEMO,
    codeName: 'Sucrose',
  },
  {
    id: '10000033',
    name: 'Tartaglia',
    stat: {
      baseAtk: 23.4612,
      baseHp: 1020.0524,
      baseDef: 63.4198,
      ascAtk: 96.33733,
      ascHp: 4188.8867,
      ascDef: 260.442,
      ascStat: Stats.HYDRO_DMG,
    },
    rarity: 5,
    region: 'Snezhnaya',
    constellation: 'Monoceros Caeli',
    weapon: WeaponType.BOW,
    element: Element.HYDRO,
    codeName: 'Tartaglia',
  },
  {
    id: '10000050',
    name: 'Thoma',
    stat: {
      baseAtk: 16.9176,
      baseHp: 866.2015,
      baseDef: 62.9475,
      ascAtk: 60.53229,
      ascHp: 3099.2532,
      ascDef: 225.225,
      ascStat: Stats.P_ATK,
    },
    rarity: 4,
    region: 'Inazuma',
    constellation: 'Rubeum Scutum',
    weapon: WeaponType.POLEARM,
    element: Element.PYRO,
    codeName: 'Tohma',
  },
  {
    id: '10000069',
    name: 'Tighnari',
    stat: {
      baseAtk: 20.8544,
      baseHp: 844.64154,
      baseDef: 49.0606,
      ascAtk: 85.63319,
      ascHp: 3468.5547,
      ascDef: 201.474,
      ascStat: Stats.DENDRO_DMG,
    },
    rarity: 5,
    region: 'Sumeru',
    constellation: 'Vulpes Zerda',
    weapon: WeaponType.BOW,
    element: Element.DENDRO,
    codeName: 'Tighnari',
  },
  {
    id: '10000022',
    name: 'Venti',
    stat: {
      baseAtk: 20.482,
      baseHp: 819.8552,
      baseDef: 52.0521,
      ascAtk: 84.10402,
      ascHp: 3366.7688,
      ascDef: 213.759,
      ascStat: Stats.ER,
    },
    rarity: 5,
    region: 'Monstadt',
    constellation: 'Carmen Dei',
    weapon: WeaponType.BOW,
    element: Element.ANEMO,
    codeName: 'Venti',
  },
  {
    id: '10000086',
    name: 'Wriothesley',
    stat: {
      baseAtk: 24.206,
      baseHp: 1058.18518,
      baseDef: 59.41119,
      ascAtk: 99.39566,
      ascHp: 4345.48,
      ascDef: 243.9801,
      ascStat: Stats.CRIT_DMG,
    },
    rarity: 5,
    region: 'Fontaine',
    constellation: 'Cerberus',
    weapon: WeaponType.CATALYST,
    element: Element.CRYO,
    codeName: 'Wriothesley',
  },
  {
    id: '10000023',
    name: 'Xiangling',
    stat: {
      baseAtk: 18.87648,
      baseHp: 911.791,
      baseDef: 56.0805,
      ascAtk: 67.54129,
      ascHp: 3262.3718,
      ascDef: 200.655,
      ascStat: Stats.EM,
    },
    rarity: 4,
    region: 'Liyue',
    constellation: 'Trulla',
    weapon: WeaponType.POLEARM,
    element: Element.PYRO,
    codeName: 'Xiangling',
  },
  {
    id: '10000093',
    name: 'Xianyun',
    stat: {
      baseAtk: 26.06800079,
      baseHp: 810.3220215,
      baseDef: 44.573349,
      ascAtk: 107.041481,
      ascHp: 3327.620117,
      ascDef: 183.0464935,
      ascStat: Stats.P_ATK,
    },
    rarity: 5,
    region: 'Liyue',
    constellation: 'Grus Serena',
    weapon: WeaponType.CATALYST,
    element: Element.ANEMO,
    codeName: 'Liuyun',
  },
  {
    id: '10000026',
    name: 'Xiao',
    stat: {
      baseAtk: 27.1852,
      baseHp: 991.4528,
      baseDef: 62.2232,
      ascAtk: 111.628975,
      ascHp: 4071.4412,
      ascDef: 255.528,
      ascStat: Stats.CRIT_RATE,
    },
    rarity: 5,
    region: 'Liyue',
    constellation: 'Alatus Nemeseos',
    weapon: WeaponType.POLEARM,
    element: Element.ANEMO,
    codeName: 'Xiao',
  },
  {
    id: '10000025',
    name: 'Xingqiu',
    stat: {
      baseAtk: 16.9176,
      baseHp: 857.08356,
      baseDef: 63.51975,
      ascAtk: 60.53229,
      ascHp: 3066.6296,
      ascDef: 227.2725,
      ascStat: Stats.P_ATK,
    },
    rarity: 4,
    region: 'Liyue',
    constellation: 'Fabulae Textile',
    weapon: WeaponType.SWORD,
    element: Element.HYDRO,
    codeName: 'Xingqiu',
  },
  {
    id: '10000044',
    name: 'Xinyan',
    stat: {
      baseAtk: 20.83536,
      baseHp: 939.1447,
      baseDef: 66.95325,
      ascAtk: 74.55029,
      ascHp: 3360.243,
      ascDef: 239.5575,
      ascStat: Stats.P_ATK,
    },
    rarity: 4,
    region: 'Liyue',
    constellation: 'Fila Ignium',
    weapon: WeaponType.CLAYMORE,
    element: Element.PYRO,
    codeName: 'Xinyan',
  },
  {
    id: '10000058',
    name: 'Yae Miko',
    stat: {
      baseAtk: 26.4404,
      baseHp: 807.46204,
      baseDef: 44.2742,
      ascAtk: 108.57064,
      ascHp: 3315.8757,
      ascDef: 181.818,
      ascStat: Stats.CRIT_RATE,
    },
    rarity: 5,
    region: 'Inazuma',
    constellation: 'Divina Vulpes',
    weapon: WeaponType.CATALYST,
    element: Element.ELECTRO,
    codeName: 'Yae',
  },
  {
    id: '10000048',
    name: 'Yanfei',
    stat: {
      baseAtk: 20.12304,
      baseHp: 784.14026,
      baseDef: 49.2135,
      ascAtk: 72.001564,
      ascHp: 2805.64,
      ascDef: 176.085,
      ascStat: Stats.PYRO_DMG,
    },
    rarity: 4,
    region: 'Liyue',
    constellation: 'Bestia Iustitia',
    weapon: WeaponType.CATALYST,
    element: Element.PYRO,
    codeName: 'Feiyan',
  },
  {
    id: '10000077',
    name: 'Yaoyao',
    stat: {
      baseAtk: 17.808,
      baseHp: 1030.3239,
      baseDef: 62.9475,
      ascAtk: 63.7182,
      ascHp: 3686.4802,
      ascDef: 225.225,
      ascStat: Stats.P_HP,
    },
    rarity: 4,
    region: 'Liyue',
    constellation: 'Osmanthus',
    weapon: WeaponType.POLEARM,
    element: Element.DENDRO,
    codeName: 'Yaoyao',
  },
  {
    id: '10000060',
    name: 'Yelan',
    stat: {
      baseAtk: 18.9924,
      baseHp: 1124.9176,
      baseDef: 42.65879,
      ascAtk: 77.987366,
      ascHp: 4619.52,
      ascDef: 175.1841,
      ascStat: Stats.CRIT_RATE,
    },
    rarity: 5,
    region: 'Liyue',
    constellation: 'Umbrabilis Orchis',
    weapon: WeaponType.BOW,
    element: Element.HYDRO,
    codeName: 'Yelan',
  },
  {
    id: '10000049',
    name: 'Yoimiya',
    stat: {
      baseAtk: 25.137,
      baseHp: 791.2556,
      baseDef: 47.864,
      ascAtk: 103.21857,
      ascHp: 3249.3232,
      ascDef: 196.56,
      ascStat: Stats.CRIT_RATE,
    },
    rarity: 5,
    region: 'Inazuma',
    constellation: 'Carassius Auratus',
    weapon: WeaponType.BOW,
    element: Element.PYRO,
    codeName: 'Yoimiya',
  },
  {
    id: '10000064',
    name: 'Yun Jin',
    stat: {
      baseAtk: 16.0272,
      baseHp: 893.5552,
      baseDef: 61.5741,
      ascAtk: 57.34638,
      ascHp: 3197.1245,
      ascDef: 220.311,
      ascStat: Stats.ER,
    },
    rarity: 4,
    region: 'Liyue',
    constellation: 'Opera Grandis',
    weapon: WeaponType.POLEARM,
    element: Element.GEO,
    codeName: 'Yunjin',
  },
  {
    id: '10000030',
    name: 'Zhongli',
    stat: {
      baseAtk: 19.551,
      baseHp: 1143.984,
      baseDef: 57.4368,
      ascAtk: 80.2811,
      ascHp: 4697.817,
      ascDef: 235.872,
      ascStat: Stats.GEO_DMG,
    },
    rarity: 5,
    region: 'Liyue',
    constellation: 'Lapis Dei',
    weapon: WeaponType.POLEARM,
    element: Element.GEO,
    codeName: 'Zhongli',
  },
  {
    id: '10000098',
    name: 'Clorinde',
    stat: {
      baseAtk: 26.2542,
      baseHp: 1008.61255,
      baseDef: 61.0266,
      ascAtk: 107.80606,
      ascHp: 4141.908,
      ascDef: 250.614,
      ascStat: Stats.CRIT_RATE,
    },
    rarity: 5,
    region: 'Fontaine',
    constellation: 'Rapperia',
    weapon: WeaponType.SWORD,
    element: Element.ELECTRO,
    codeName: 'Clorinde',
  },
  {
    id: '10000097',
    name: 'Sethos',
    stat: {
      baseAtk: 19.05456,
      baseHp: 820.6119,
      baseDef: 46.9245,
      ascAtk: 68.178474,
      ascHp: 2936.1348,
      ascDef: 167.895,
      ascStat: Stats.EM,
    },
    rarity: 4,
    region: 'Sumeru',
    constellation: 'Basileos Delta',
    weapon: WeaponType.BOW,
    element: Element.ELECTRO,
    codeName: 'Sethos',
  },
  {
    id: '10000095',
    name: 'Sigewinne',
    stat: {
      baseAtk: 14.9891,
      baseHp: 1039.1188,
      baseDef: 38.8895,
      ascAtk: 68.178474,
      ascHp: 2936.1348,
      ascDef: 167.895,
      ascStat: Stats.P_HP,
    },
    rarity: 5,
    region: 'Fontaine',
    constellation: 'Nereides',
    weapon: WeaponType.BOW,
    element: Element.HYDRO,
    codeName: 'Sigewinne',
  },
  // Boy will be 50x, female 70x
  {
    id: '10000005-504',
    name: 'Traveler (Anemo)',
    stat: {
      baseAtk: 17.808,
      baseHp: 911.791,
      baseDef: 57.225,
      ascAtk: 63.7182,
      ascHp: 3262.3718,
      ascDef: 204.75,
      ascStat: Stats.P_ATK,
    },
    rarity: 5,
    region: 'Unknown',
    constellation: 'Viatrix',
    weapon: WeaponType.SWORD,
    element: Element.ANEMO,
    codeName: 'Player',
  },
  {
    id: '10000005-506',
    name: 'Traveler (Geo)',
    stat: {
      baseAtk: 17.808,
      baseHp: 911.791,
      baseDef: 57.225,
      ascAtk: 63.7182,
      ascHp: 3262.3718,
      ascDef: 204.75,
      ascStat: Stats.P_ATK,
    },
    rarity: 5,
    region: 'Unknown',
    constellation: 'Viatrix',
    weapon: WeaponType.SWORD,
    element: Element.GEO,
    codeName: 'Player',
  },
  {
    id: '10000005-507',
    name: 'Traveler (Electro)',
    stat: {
      baseAtk: 17.808,
      baseHp: 911.791,
      baseDef: 57.225,
      ascAtk: 63.7182,
      ascHp: 3262.3718,
      ascDef: 204.75,
      ascStat: Stats.P_ATK,
    },
    rarity: 5,
    region: 'Unknown',
    constellation: 'Viatrix',
    weapon: WeaponType.SWORD,
    element: Element.ELECTRO,
    codeName: 'Player',
  },
  {
    id: '10000005-508',
    name: 'Traveler (Dendro)',
    stat: {
      baseAtk: 17.808,
      baseHp: 911.791,
      baseDef: 57.225,
      ascAtk: 63.7182,
      ascHp: 3262.3718,
      ascDef: 204.75,
      ascStat: Stats.P_ATK,
    },
    rarity: 5,
    region: 'Unknown',
    constellation: 'Viatrix',
    weapon: WeaponType.SWORD,
    element: Element.DENDRO,
    codeName: 'Player',
  },
  {
    id: '10000005-503',
    name: 'Traveler (Hydro)',
    stat: {
      baseAtk: 17.808,
      baseHp: 911.791,
      baseDef: 57.225,
      ascAtk: 63.7182,
      ascHp: 3262.3718,
      ascDef: 204.75,
      ascStat: Stats.P_ATK,
    },
    rarity: 5,
    region: 'Unknown',
    constellation: 'Viatrix',
    weapon: WeaponType.SWORD,
    element: Element.HYDRO,
    codeName: 'Player',
  },
]
