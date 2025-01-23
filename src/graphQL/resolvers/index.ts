import { fruits } from "../../data/data";
import { Fruit } from "../../types/fruit";

const resolvers = {
  Query: {
    fruits: () => fruits,
    fruit: (_: any, { id }: { id: string }) =>
      fruits.find((fruit) => fruit.id === id),
    hello: () => "Hello, world!",
  },
  Mutation: {
    createFruit: (_: any, { name, type, meaning, properties }: Fruit) => {
      const newFruit: Fruit = {
        id: (fruits.length + 1).toString(),
        name,
        type,
        meaning,
        properties,
      };
      fruits.push(newFruit);
      return newFruit;
    },
    updateFruit: (
      _: any,
      { id, name, type, meaning, properties }: Partial<Fruit> & { id: string }
    ) => {
      const fruitIndex = fruits.findIndex((fruit) => fruit.id === id);
      if (fruitIndex === -1) return null;
      const updatedFruit: Fruit = {
        ...fruits[fruitIndex],
        name: name ?? fruits[fruitIndex].name,
        type: type ?? fruits[fruitIndex].type,
        meaning: meaning ?? fruits[fruitIndex].meaning,
        properties: properties ?? fruits[fruitIndex].properties,
        id,
      };
      fruits[fruitIndex] = updatedFruit;
      return updatedFruit;
    },
    deleteFruit: (_: any, { id }: { id: string }) => {
      const fruitIndex = fruits.findIndex((fruit) => fruit.id === id);
      if (fruitIndex === -1) return false;
      fruits.splice(fruitIndex, 1);
      return true;
    },
  },
};

export default resolvers;
