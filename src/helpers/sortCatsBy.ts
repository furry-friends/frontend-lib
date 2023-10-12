import { Cat } from '../models/Cat';

type SortBy = 'id' | 'name' | 'age';

const sortCatsBy = (cats: Cat[], sortBy: SortBy): Cat[] => {
  const clone = [...cats];

  clone.sort((a, b): number => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'age':
        return b.age - a.age;
      default:
        return a.id - b.id;
    }
  });

  return clone;
};

export { sortCatsBy };
export type { SortBy };
