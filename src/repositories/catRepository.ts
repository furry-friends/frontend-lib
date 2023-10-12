import { Cat } from '../models/Cat';
import { RepositoryStorage } from '../types/interfaces';

const CATS_KEY = 'cats';

class CatRepository {
  private storage: RepositoryStorage;

  constructor({ storage }: { storage: RepositoryStorage }) {
    this.storage = storage;
  }
  /**
   * Returns all cats in the local storage.
   */
  private async listAll(): Promise<Cat[]> {
    const cats = await this.storage.getItem(CATS_KEY);
    if (!cats) {
      return [];
    }

    try {
      return JSON.parse(cats).map(
        (cat: string): Cat => Cat.fromJson(JSON.parse(cat))
      );
    } catch (e) {
      return [];
    }
  }

  /**
   * Saves the cats to the local storage.
   */
  private saveCat(cats: Cat[]): void {
    const catsJsonString = JSON.stringify(
      cats.map((e): string => e.toString())
    );

    this.storage.setItem(CATS_KEY, catsJsonString);
  }

  /**
   * Returns all the cats or the cats name contains the given keyword.
   */
  async query({ keyword }: { keyword?: string } = {}): Promise<Cat[]> {
    const cats = await this.listAll();

    if (!keyword) {
      return cats;
    }

    return cats.filter((e: Cat): boolean => e.name.includes(keyword));
  }

  /**
   * Deletes the cat with the given id.
   */
  async delete(id: number): Promise<void> {
    const cats = await this.listAll();
    const index = cats.findIndex((e: Cat): boolean => e.id === id);
    cats.splice(index, 1);
    this.saveCat(cats);
  }

  /**
   * Adds or updates the given cat.
   */
  async addOrUpdate(cat: Cat): Promise<Cat> {
    const cats = await this.listAll();

    if (cat.isNew) {
      cat = cat.copyWith({ id: cats.length + 1 });
      cats.push(cat);
    } else {
      const index = cats.findIndex((e): boolean => e.id === cat.id);
      cats[index] = cat;
    }

    this.saveCat(cats);
    return cat;
  }
}

export { CatRepository };
