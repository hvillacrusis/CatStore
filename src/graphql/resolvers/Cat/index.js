import cat from '../../../server/models/CatSheet';

export default {
  Query: {
    cats: async (_, pars, context, info) => {
      const {cats} = context.sheets;
      const allCats = await cats.getAll();
      return allCats.map((item, idx) => ({...item, id: idx}));
    },

    async getCat(_, {id}) {
      const filteredCat = cat
        .getAll()
        .map((item, idx) => ({...item, id: idx}))
        .filter(item => item.id == id);
      console.log(filteredCat);
      return filteredCat[0];
    },

    getBreed: () => Cat.find({breed: 'PUSAKAL'}),

    getBreeds: () => Cat.find({breed: 'PERSIAN'}),
  },
  Mutation: {
    createCat: async (_, {input}) => {
      const kitty = new Cat(input);
      await kitty.save();
      return kitty;
    },
    deleteCat: async (_, {id}) => {
      return await Cat.findByIdAndRemove(id);
    },
    updateCat: async (_, {input}) => {
      return await Cat.findOneAndUpdate(
        {_id: input.id},
        {...input},
        {new: true},
      );
    },
  },
};
