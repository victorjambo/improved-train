import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

export enum ItemsTabs {
  All = "All Items",
  Mine = "My Items",
}

interface IAppContext {
  currentTab: ItemsTabs;
  setCurrentTab: Dispatch<SetStateAction<ItemsTabs>>;
  showSidePanel: boolean;
  setShowSidePanel: Dispatch<SetStateAction<boolean>>;
}

const AppContext = createContext<Partial<IAppContext>>({});

export const useAppContext = (): Partial<IAppContext> => useContext(AppContext);

const AppProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const [currentTab, setCurrentTab] = useState<ItemsTabs>(ItemsTabs.All);
  const [showSidePanel, setShowSidePanel] = useState(false);

  return (
    <AppContext.Provider
      value={{
        currentTab,
        setCurrentTab,
        showSidePanel,
        setShowSidePanel,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
