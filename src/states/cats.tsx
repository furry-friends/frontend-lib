import React, { createContext, useState } from 'react';
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

const CatContext = createContext<CatContextValue>({
  cats: [],
  saveCat: (_: Cat): void => {},
  setCats: (_: Cat[]): void => {},
  deleteCat: (_: number): void => {},
});

const CatProvider: React.FC<CatProviderProps> = ({ children }): JSX.Element => {
  const [cats, setCats] = useState<Cat[]>([]);

  /**
   * Add or update a cat.
   */
  const saveCat = (cat: Cat): void => {
    const catIndex = cats.findIndex((c: Cat): boolean => c.id === cat.id);

    if (catIndex === -1) {
      setCats([...cats, cat]);
    } else {
      const catsClone = [...cats];
      catsClone[catIndex] = cat;
      setCats(catsClone);
    }
  };

  const deleteCat = (catId: number): void =>
    setCats(cats.filter((cat: Cat): boolean => cat.id !== catId));

  const contextValue = {
    cats,
    saveCat,
    deleteCat,
    setCats,
  };

  return (
    <CatContext.Provider value={contextValue}>{children}</CatContext.Provider>
  );
};

export { CatProvider, CatContext };
