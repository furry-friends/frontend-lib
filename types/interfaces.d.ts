interface RepositoryStorage {
    getItem(key: string): Promise<string | null>;
    setItem(key: string, value: string): Promise<void>;
}
export type { RepositoryStorage };
