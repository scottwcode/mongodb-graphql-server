import { Dog } from "./models/Dog.js";

export const resolvers = {
  Query: {
    hello: () => "hi",
    dogs: () => Dog.find()
  },
  Mutation: {
    createDog: async (_, { name }) => {
      const puppy = new Dog({ name });
      await puppy.save();
      return puppy;
    }
  }
};
