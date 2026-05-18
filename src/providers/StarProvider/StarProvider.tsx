import { createContext, useContext, useState } from 'react';

interface StarContextType {
  starDensity: number;
  setStarDensity: (density: number) => void;
}

export const StarContext = createContext<StarContextType>({
  starDensity: 30,
  setStarDensity: () => {},
});

export const StarProvider = ({ children }: { children: React.ReactNode }) => {
  const [starDensity, setStarDensity] = useState(30);

  return (
    <StarContext.Provider value={{ starDensity, setStarDensity }}>
      {children}
    </StarContext.Provider>
  );
};

