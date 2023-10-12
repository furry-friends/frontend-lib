import { Cat } from '../models/Cat';
type SortBy = 'id' | 'name' | 'age';
declare const sortCatsBy: (cats: Cat[], sortBy: SortBy) => Cat[];
export { sortCatsBy };
export type { SortBy };
