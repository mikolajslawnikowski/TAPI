export const characters = [
  {
    id: "1",
    firstName: "Luffy",
    lastName: "Monkey",
    fullName: "Monkey D. Luffy",
    nickname: "Straw Hat Luffy",
    affiliation: "Straw Hat Pirates",
    occupancy: "Pirate",
    alive: true,
    bounty: 3000000000,
    haki: [
      {
        type: "Observation",
        description:
          "Allows user to sense others' presence, strength, and emotions.",
      },
      {
        type: "Armament",
        description:
          "Coats user's body or attacks in an invisible armor of willpower.",
      },
      {
        type: "Conqueror's",
        description:
          "Overpowers the will of others, capable of knocking out weaker opponents.",
      },
    ],
    abilities: [
      {
        name: "Gear Second",
        description: "Enhances speed and power by accelerating blood flow.",
      },
      {
        name: "Gear Third",
        description: "Inflates bones to deliver massive, powerful blows.",
      },
      {
        name: "Gear Fourth",
        description:
          "Combines elasticity and haki for overwhelming combat techniques.",
      },
    ],
    devilFruits: [
      {
        fruit: { id: "1", type: "FRUIT" },
      },
    ],
    friends: [
      { character: { id: "2" }, relationshipType: "Best Friend" },
      { character: { id: "3" }, relationshipType: "Best Friend" },
    ],
    enemies: [
      { character: { id: "4" }, relationshipType: "Rival" },
      { character: { id: "7" }, relationshipType: "Rival" },
      { character: { id: "8" }, relationshipType: "Rival" },
    ],
  },
  {
    id: "2",
    firstName: "Ace",
    lastName: "Portgas",
    fullName: "Portgas D. Ace",
    nickname: "Fire Fist Ace",
    affiliation: "Whitebeard Pirates",
    occupancy: "Pirate",
    alive: false,
    bounty: 550000000,
    haki: [
      {
        type: "Observation",
        description:
          "Allows user to sense others' presence, strength, and emotions.",
      },
      {
        type: "Armament",
        description:
          "Coats user's body or attacks in an invisible armor of willpower.",
      },
      {
        type: "Conqueror's",
        description:
          "Overpowers the will of others, capable of knocking out weaker opponents.",
      },
    ],
    abilities: [
      {
        name: "Hiken",
        description: "Launches a massive column of fire.",
      },
      {
        name: "Enkai",
        description: "Creates a large fireball for devastating attacks.",
      },
    ],
    devilFruits: [
      {
        fruit: { id: "4", type: "FRUIT" },
      },
    ],
    friends: [{ character: { id: "1" }, relationshipType: "Brother" }],
    enemies: [{ character: { id: "6" }, relationshipType: "Enemy" }],
  },
  {
    id: "3",
    firstName: "Buggy",
    lastName: "",
    fullName: "Buggy",
    nickname: "Buggy the Clown",
    affiliation: "Buggy's Delivery",
    occupancy: "Pirate",
    alive: true,
    bounty: 3189000000,
    haki: [],
    abilities: [
      {
        name: "Chop-Chop Barrage",
        description: "A series of rapid, detached attacks using body parts.",
      },
      {
        name: "Chop-Chop Car",
        description:
          "Combines separated parts to roll towards enemies at high speed.",
      },
      {
        name: "Chop-Chop Festival",
        description:
          "An ultimate move involving flying body parts attacking en masse.",
      },
    ],
    devilFruits: [
      {
        fruit: { id: "2", type: "FRUIT" },
      },
    ],
    friends: [
      { character: { id: "5" }, relationshipType: "Ally" },
      { character: { id: "6" }, relationshipType: "Business Partner" },
    ],
    enemies: [
      { character: { id: "1" }, relationshipType: "Rival" },
      { character: { id: "7" }, relationshipType: "Adversary" },
    ],
  },
  {
    id: "4",
    firstName: "Edward",
    lastName: "Newgate",
    fullName: "Edward Newgate",
    nickname: "Whitebeard",
    affiliation: "Whitebeard Pirates",
    occupancy: "Pirate",
    alive: false,
    bounty: 5046000000,
    haki: [
      {
        type: "Observation",
        description:
          "Allows user to sense others' presence, strength, and emotions.",
      },
      {
        type: "Armament",
        description:
          "Coats user's body or attacks in an invisible armor of willpower.",
      },
      {
        type: "Conqueror's",
        description:
          "Overpowers the will of others, capable of knocking out weaker opponents.",
      },
    ],
    abilities: [
      {
        name: "Gura Gura Tremor",
        description:
          "Creates powerful shockwaves capable of devastating landscapes and seas.",
      },
      {
        name: "Seaquake",
        description: "Generates tsunamis by applying tremors to the ocean.",
      },
      {
        name: "Island Split",
        description:
          "Unleashes massive shockwaves capable of splitting islands apart.",
      },
    ],
    devilFruits: [
      {
        fruit: { id: "3", type: "FRUIT" },
      },
    ],
    friends: [
      { character: { id: "2" }, relationshipType: "Close Friend" },
      { character: { id: "8" }, relationshipType: "Trusted Ally" },
    ],
    enemies: [
      { character: { id: "6" }, relationshipType: "Bitter Rival" },
      { character: { id: "9" }, relationshipType: "Enemy" },
    ],
  },
  {
    id: "5",
    firstName: "Kid",
    lastName: "Eustass",
    fullName: "Eustass Kid",
    nickname: "Captain Kid",
    affiliation: "Kid Pirates",
    occupancy: "Pirate",
    alive: true,
    bounty: 3000000000,
    haki: [
      {
        type: "Observation",
        description:
          "Allows user to sense others' presence, strength, and emotions.",
      },
      {
        type: "Armament",
        description:
          "Coats user's body or attacks in an invisible armor of willpower.",
      },
      {
        type: "Conqueror's",
        description:
          "Overpowers the will of others, capable of knocking out weaker opponents.",
      },
    ],
    abilities: [
      {
        name: "Punk Gibson",
        description: "Forms a massive metal hand to crush enemies.",
      },
      {
        name: "Punk Rotten",
        description: "Creates a large mechanical structure for battle.",
      },
      {
        name: "Damned Punk",
        description: "Unleashes a powerful electromagnetic cannon.",
      },
    ],
    devilFruits: [
      {
        fruit: { id: "5", type: "FRUIT" },
      },
    ],
    friends: [{ character: { id: "6" }, relationshipType: "Ally" }],
    enemies: [
      { character: { id: "1" }, relationshipType: "Rival" },
      { character: { id: "7" }, relationshipType: "Adversary" },
    ],
  },
  {
    id: "6",
    firstName: "Law",
    lastName: "Trafalgar",
    fullName: "Trafalgar D. Water Law",
    nickname: "Surgeon of Death",
    affiliation: "Heart Pirates",
    occupancy: "Pirate",
    alive: true,
    bounty: 3000000000,
    haki: [
      {
        type: "Observation",
        description:
          "Allows user to sense others' presence, strength, and emotions.",
      },
      {
        type: "Armament",
        description:
          "Coats user's body or attacks in an invisible armor of willpower.",
      },
    ],
    abilities: [
      {
        name: "Room",
        description:
          "Creates a spherical area where he can manipulate objects and people at will.",
      },
      {
        name: "Shambles",
        description:
          "Swaps the positions of objects or people within his 'Room.'",
      },
      {
        name: "Gamma Knife",
        description:
          "Delivers a devastating internal attack that bypasses external defenses.",
      },
      {
        name: "Counter Shock",
        description: "Releases an electric shock to incapacitate opponents.",
      },
    ],
    devilFruits: [
      {
        fruit: { id: "6", type: "FRUIT" },
      },
    ],
    friends: [
      { character: { id: "1" }, relationshipType: "Ally" },
      { character: { id: "5" }, relationshipType: "Ally" },
    ],
    enemies: [
      { character: { id: "7" }, relationshipType: "Rival" },
      { character: { id: "9" }, relationshipType: "Enemy" },
    ],
  },
  {
    id: "7",
    firstName: "Kaido",
    lastName: "",
    fullName: "Kaido",
    nickname: "King of Beasts",
    affiliation: "Beast Pirates",
    occupancy: "Pirate",
    alive: false,
    bounty: 4611100000,
    haki: [
      {
        type: "Observation",
        description:
          "Allows user to sense others' presence, strength, and emotions.",
      },
      {
        type: "Armament",
        description:
          "Coats user's body or attacks in an invisible armor of willpower.",
      },
      {
        type: "Conqueror's",
        description:
          "Overpowers the will of others, capable of knocking out weaker opponents.",
      },
    ],
    abilities: [
      {
        name: "Thunder Bagua",
        description: "A high-speed, devastating club strike imbued with haki.",
      },
      {
        name: "Bolo Breath",
        description: "Fires a massive, destructive energy blast.",
      },
      {
        name: "Dragon Twister",
        description: "Creates destructive tornadoes while in dragon form.",
      },
      {
        name: "Flame Clouds",
        description: "Generates clouds to lift objects or fly.",
      },
    ],
    devilFruits: [
      {
        fruit: { id: "7", type: "FRUIT" },
      },
    ],
    friends: [
      { character: { id: "8" }, relationshipType: "Ally" },
      { character: { id: "9" }, relationshipType: "Business Partner" },
    ],
    enemies: [
      { character: { id: "1" }, relationshipType: "Rival" },
      { character: { id: "6" }, relationshipType: "Enemy" },
      { character: { id: "4" }, relationshipType: "Bitter Rival" },
    ],
  },
  {
    id: "8",
    firstName: "Linlin",
    lastName: "Charlotte",
    fullName: "Charlotte Linlin",
    nickname: "Big Mom",
    affiliation: "Big Mom Pirates",
    occupancy: "Pirate",
    alive: false,
    bounty: 4388000000,
    haki: [
      {
        type: "Observation",
        description:
          "Allows user to sense others' presence, strength, and emotions.",
      },
      {
        type: "Armament",
        description:
          "Coats user's body or attacks in an invisible armor of willpower.",
      },
      {
        type: "Conqueror's",
        description:
          "Overpowers the will of others, capable of knocking out weaker opponents.",
      },
    ],
    abilities: [
      {
        name: "Soul Pocus",
        description:
          "Extracts or manipulates souls by invoking fear or willpower.",
      },
      {
        name: "Cognac",
        description:
          "Combines Napoleon, Prometheus, and Hera for a devastating attack.",
      },
      {
        name: "Heavenly Bonbons",
        description: "Unleashes a barrage of homing candy projectiles.",
      },
      {
        name: "Fulgora",
        description: "Summons Hera to generate a massive bolt of lightning.",
      },
    ],
    devilFruits: [
      {
        fruit: { id: "8", type: "FRUIT" },
      },
    ],
    friends: [
      { character: { id: "7" }, relationshipType: "Ally" },
      { character: { id: "9" }, relationshipType: "Business Partner" },
    ],
    enemies: [
      { character: { id: "1" }, relationshipType: "Rival" },
      { character: { id: "4" }, relationshipType: "Enemy" },
      { character: { id: "6" }, relationshipType: "Adversary" },
    ],
  },
  {
    id: "9",
    firstName: "Sakazuki",
    lastName: "",
    fullName: "Sakazuki",
    nickname: "Akainu",
    affiliation: "Marines",
    occupancy: "Marine",
    alive: true,
    bounty: 5000000000,
    haki: [
      {
        type: "Observation",
        description:
          "Allows user to sense others' presence, strength, and emotions.",
      },
      {
        type: "Armament",
        description:
          "Coats user's body or attacks in an invisible armor of willpower.",
      },
    ],
    abilities: [
      {
        name: "Magma Fist",
        description:
          "Launches a powerful fist of molten magma, causing massive destruction.",
      },
      {
        name: "Great Eruption",
        description: "Ejects a huge stream of magma to incinerate enemies.",
      },
      {
        name: "Volcanic Rain",
        description: "Rains down magma projectiles to attack a wide area.",
      },
    ],
    devilFruits: [
      {
        fruit: { id: "9", type: "FRUIT" },
      },
    ],
    friends: [{ character: { id: "10" }, relationshipType: "Trusted Ally" }],
    enemies: [
      { character: { id: "1" }, relationshipType: "Rival" },
      { character: { id: "2" }, relationshipType: "Enemy" },
      { character: { id: "4" }, relationshipType: "Adversary" },
    ],
  },
  {
    id: "10",
    firstName: "Borsalino",
    lastName: "",
    fullName: "Borsalino",
    nickname: "Kizaru",
    affiliation: "Marines",
    occupancy: "Marine",
    alive: true,
    bounty: 3000000000,
    haki: [
      {
        type: "Observation",
        description:
          "Allows user to sense others' presence, strength, and emotions.",
      },
      {
        type: "Armament",
        description:
          "Coats user's body or attacks in an invisible armor of willpower.",
      },
    ],
    abilities: [
      {
        name: "Yata no Kagami",
        description:
          "Moves at the speed of light by reflecting himself off surfaces.",
      },
      {
        name: "Ama no Murakumo",
        description: "Forms a sword of light for close combat.",
      },
      {
        name: "Yasakani no Magatama",
        description:
          "Fires a barrage of deadly light projectiles over a wide area.",
      },
    ],
    devilFruits: [
      {
        fruit: { id: "10", type: "FRUIT" },
      },
    ],
    friends: [{ character: { id: "9" }, relationshipType: "Trusted Ally" }],
    enemies: [
      { character: { id: "1" }, relationshipType: "Enemy" },
      { character: { id: "6" }, relationshipType: "Adversary" },
      { character: { id: "4" }, relationshipType: "Rival" },
    ],
  },
  {
    id: "11",
    firstName: "Issho",
    lastName: "",
    fullName: "Issho",
    nickname: "Fujitora",
    affiliation: "Marines",
    occupancy: "Marine",
    alive: true,
    bounty: 3000000000,
    haki: [
      {
        type: "Observation",
        description:
          "Allows user to sense others' presence, strength, and emotions.",
      },
      {
        type: "Armament",
        description:
          "Coats user's body or attacks in an invisible armor of willpower.",
      },
    ],
    abilities: [
      {
        name: "Zushi Zushi no Mi",
        description:
          "Allows the user to manipulate gravity, controlling the weight and movement of objects and people.",
      },
      {
        name: "Gravity Slash",
        description:
          "Fires a powerful gravitational slash capable of cutting through anything.",
      },
      {
        name: "Meteor Impact",
        description:
          "Summons meteor-like objects from the sky, using gravity to direct them at enemies.",
      },
    ],
    devilFruits: [
      {
        fruit: { id: "11", type: "FRUIT" },
      },
    ],
    friends: [{ character: { id: "9" }, relationshipType: "Ally" }],
    enemies: [
      { character: { id: "1" }, relationshipType: "Enemy" },
      { character: { id: "6" }, relationshipType: "Adversary" },
      { character: { id: "4" }, relationshipType: "Rival" },
    ],
  },
  {
    id: "12",
    firstName: "Aramaki",
    lastName: "",
    fullName: "Aramaki",
    nickname: "Green Bull",
    affiliation: "Marines",
    occupancy: "Marine",
    alive: true,
    bounty: 3000000000,
    haki: [
      {
        type: "Observation",
        description:
          "Allows user to sense others' presence, strength, and emotions.",
      },
      {
        type: "Armament",
        description:
          "Coats user's body or attacks in an invisible armor of willpower.",
      },
    ],
    abilities: [
      {
        name: "Jungle's Domain",
        description:
          "Uses his Devil Fruit powers to generate and control plant life, manipulating nature for combat.",
      },
      {
        name: "Forest Surge",
        description:
          "Summons vast amounts of plant matter to attack or defend, creating a massive forest-like environment.",
      },
      {
        name: "Bamboo Strike",
        description:
          "Uses hardened bamboo to deliver powerful, piercing strikes to enemies.",
      },
    ],
    devilFruits: [
      {
        fruit: { id: "12", type: "FRUIT" },
      },
    ],
    friends: [{ character: { id: "9" }, relationshipType: "Ally" }],
    enemies: [
      { character: { id: "1" }, relationshipType: "Enemy" },
      { character: { id: "6" }, relationshipType: "Adversary" },
      { character: { id: "7" }, relationshipType: "Rival" },
    ],
  },
  {
    id: "13",
    firstName: "Sengoku",
    lastName: "",
    fullName: "Sengoku",
    nickname: "The Buddha",
    affiliation: "Marines",
    occupancy: "Marine",
    alive: true,
    bounty: null,
    haki: [
      {
        type: "Observation",
        description:
          "Allows user to sense others' presence, strength, and emotions.",
      },
      {
        type: "Armament",
        description:
          "Coats user's body or attacks in an invisible armor of willpower.",
      },
      {
        type: "Conqueror's",
        description:
          "Overpowers the will of others, capable of knocking out weaker opponents.",
      },
    ],
    abilities: [
      {
        name: "Buddha's Power",
        description:
          "Transforms into a giant golden Buddha, gaining immense strength and size for battle.",
      },
      {
        name: "Shockwave",
        description:
          "Unleashes a massive shockwave with immense power to cause widespread destruction.",
      },
      {
        name: "Fist of the Buddha",
        description:
          "Uses a giant fist attack that can crush anything in its path.",
      },
    ],
    devilFruits: [
      {
        fruit: { id: "13", type: "FRUIT" },
      },
    ],
    friends: [{ character: { id: "9" }, relationshipType: "Ally" }],
    enemies: [
      { character: { id: "1" }, relationshipType: "Rival" },
      { character: { id: "4" }, relationshipType: "Adversary" },
      { character: { id: "6" }, relationshipType: "Enemy" },
    ],
  },
  {
    id: "14",
    firstName: "Hancock",
    lastName: "Boa",
    fullName: "Boa Hancock",
    nickname: "Pirate Empress",
    affiliation: "Kuja Pirates",
    occupancy: "Pirate",
    alive: true,
    bounty: 1659000000,
    haki: [
      {
        type: "Observation",
        description:
          "Allows user to sense others' presence, strength, and emotions.",
      },
      {
        type: "Armament",
        description:
          "Coats user's body or attacks in an invisible armor of willpower.",
      },
      {
        type: "Conqueror's",
        description:
          "Overpowers the will of others, capable of knocking out weaker opponents.",
      },
    ],
    abilities: [
      {
        name: "Mero Mero Mellow",
        description:
          "Uses her powers to petrify enemies by making them fall in love with her.",
      },
      {
        name: "Dark Nectar",
        description:
          "Uses venomous poison from her arrows to paralyze or kill enemies.",
      },
      {
        name: "Imperial Arrow",
        description:
          "Fires a powerful energy arrow infused with her emotions and haki.",
      },
    ],
    devilFruits: [
      {
        fruit: { id: "14", type: "FRUIT" },
      },
    ],
    friends: [
      { character: { id: "1" }, relationshipType: "Ally" },
      { character: { id: "2" }, relationshipType: "Ally" },
    ],
    enemies: [
      { character: { id: "7" }, relationshipType: "Rival" },
      { character: { id: "4" }, relationshipType: "Adversary" },
    ],
  },
  {
    id: "15",
    firstName: "Robin",
    lastName: "Nico",
    fullName: "Nico Robin",
    nickname: "Devil Child",
    affiliation: "Straw Hat Pirates",
    occupancy: "Archaeologist",
    alive: true,
    bounty: 930000000,
    haki: [],
    abilities: [
      {
        name: "Hana Hana no Mi",
        description:
          "Allows the user to sprout extra limbs (mainly hands) on any surface within their line of sight.",
      },
      {
        name: "Clutch",
        description:
          "Uses sprouted hands to attack or immobilize opponents, as well as to create massive structures.",
      },
      {
        name: "Hands of the Sea",
        description: "Summons multiple hands to restrain or crush enemies.",
      },
    ],
    devilFruits: [
      {
        fruit: { id: "15", type: "FRUIT" },
      },
    ],
    friends: [
      { character: { id: "1" }, relationshipType: "Crew Member" },
      { character: { id: "2" }, relationshipType: "Crew Member" },
    ],
    enemies: [
      { character: { id: "4" }, relationshipType: "Adversary" },
      { character: { id: "7" }, relationshipType: "Rival" },
    ],
  },
];

export const fruits = [
  {
    id: "1",
    name: "Gomu Gomu no Mi",
    type: "Paramecia",
    meaning: "Gum-Gum Fruit",
    abilities:
      "Grants user a rubber-like body, allowing him to stretch and withstand physical damage.",
  },
  {
    id: "2",
    name: "Mera Mera no Mi",
    type: "Logia",
    meaning: "Flame-Flame Fruit",
    abilities:
      "Grants the ability to control, create, and transform into fire, allowing the user to generate flames at will and become intangible as fire.",
  },
  {
    id: "3",
    name: "Bara Bara no Mi",
    type: "Paramecia",
    meaning: "Chop-Chop Fruit",
    abilities:
      "Grants the ability to split the user's body into pieces, allowing them to separate and control the parts independently, as well as make objects or people split apart.",
  },
  {
    id: "4",
    name: "Gura Gura no Mi",
    type: "Paramecia",
    meaning: "Tremor-Tremor Fruit",
    abilities:
      "Grants the ability to create powerful shockwaves or tremors, capable of causing massive destruction by creating vibrations in the air, sea, or ground.",
  },
  {
    id: "5",
    name: "Jiki Jiki no Mi",
    type: "Paramecia",
    meaning: "Magnet-Magnet Fruit",
    abilities:
      "Grants the ability to control magnetic fields, allowing the user to manipulate metal objects, attract or repel them, and even control the polarity of magnetic forces.",
  },
  {
    id: "6",
    name: "Ope Ope no Mi",
    type: "Paramecia",
    meaning: "Op-Op Fruit",
    abilities:
      "Grants the ability to create a 'room' in which the user can manipulate objects, people, and even perform surgeries by controlling the space. It allows for extraordinary control over matter within the room, including the power to switch body parts and perform precise, non-lethal operations.",
  },
  {
    id: "7",
    name: "Uo Uo no Mi, Model: Seiryu",
    type: "Zoan",
    meaning: "Fish-Fish Fruit, Model: Azure Dragon",
    abilities:
      "Grants the ability to transform into an Azure Dragon (Seiryu), a powerful and mythical creature, as well as the ability to control water and the sky. The user gains immense strength, flight, and the power to manipulate elemental forces.",
  },
  {
    id: "8",
    name: "Soru Soru no Mi",
    type: "Paramecia",
    meaning: "Soul-Soul Fruit",
    abilities:
      "Grants the ability to manipulate souls, allowing the user to transfer souls into objects or people, control them, and even create homies (animated objects) by giving them a soul.",
  },
  {
    id: "9",
    name: "Magu Magu no Mi",
    type: "Logia",
    meaning: "Mag-Mag Fruit",
    abilities:
      "Grants the ability to create, control, and transform into magma, allowing the user to generate extremely hot lava and control it for offensive and defensive purposes.",
  },
  {
    id: "10",
    name: "Pika Pika no Mi",
    type: "Logia",
    meaning: "Glint-Glint Fruit",
    abilities:
      "Grants the ability to create, control, and transform into light, allowing the user to move at the speed of light, create blinding flashes, and manipulate light for attacks or illusions.",
  },
  {
    id: "11",
    name: "Zushi Zushi no Mi",
    type: "Paramecia",
    meaning: "Press-Press Fruit",
    abilities:
      "Grants the ability to control gravity, allowing the user to manipulate gravitational forces to create massive crushes, levitate objects, or increase/decrease the weight of anything within their range.",
  },
  {
    id: "12",
    name: "Mori Mori no Mi",
    type: "Logia",
    meaning: "Woods-Woods Fruit",
    abilities:
      "Grants the ability to create, control, and transform into trees and plants, allowing the user to manipulate the forest and its growth, as well as control plant-based attacks and defensive techniques.",
  },
  {
    id: "13",
    name: "Hito Hito no Mi, Model: Daibutsu",
    type: "Mythical Zoan",
    meaning: "Human-Human Fruit, Model: Giant Buddha",
    abilities:
      "Grants the ability to transform into a giant, powerful Buddha, as well as a human form. The user gains enormous physical strength, heightened durability, and the ability to unleash powerful spiritual attacks.",
  },
  {
    id: "14",
    name: "Mero Mero no Mi",
    type: "Paramecia",
    meaning: "Love-Love Fruit",
    abilities:
      "Grants the ability to turn anyone who feels attraction or lust into stone by using heart-shaped beams of energy, controlling people's emotions and manipulating love or affection as a weapon.",
  },
  {
    id: "15",
    name: "Hana Hana no Mi",
    type: "Paramecia",
    meaning: "Flower-Flower Fruit",
    abilities:
      "Grants the ability to create and control multiple body parts on any surface, including the user’s own body, allowing them to grow limbs and organs in various locations and control them remotely.",
  },
];

export default {
  characters,
  fruits,
};
