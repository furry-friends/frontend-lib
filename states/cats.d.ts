import React from 'react';
import { Cat } from '../models/Cat';
interface CatContextValue {
    cats: Cat[];
    saveCat: (cat: Cat) => void;
    setCats: (cats: Cat[]) => void;
    deleteCat: (catId: number) => void;
}
interface CatProviderProps {
    children: React.ReactNode;
}
declare const CatContext: React.Context<CatContextValue>;
declare const CatProvider: React.FC<CatProviderProps>;
export { CatProvider, CatContext };
