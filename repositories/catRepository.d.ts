import { Cat } from '../models/Cat';
import { RepositoryStorage } from '../types/interfaces';
declare class CatRepository {
    private storage;
    constructor({ storage }: {
        storage: RepositoryStorage;
    });
    /**
     * Returns all cats in the local storage.
     */
    private listAll;
    /**
     * Saves the cats to the local storage.
     */
    private saveCat;
    /**
     * Returns all the cats or the cats name contains the given keyword.
     */
    query({ keyword }?: {
        keyword?: string;
    }): Promise<Cat[]>;
    /**
     * Deletes the cat with the given id.
     */
    delete(id: number): Promise<void>;
    /**
     * Adds or updates the given cat.
     */
    addOrUpdate(cat: Cat): Promise<Cat>;
}
export { CatRepository };
