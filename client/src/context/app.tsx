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
  showCreateItemModal: boolean;
  setShowCreateItemModal: Dispatch<SetStateAction<boolean>>;
  showCreateEventModal: boolean;
  setShowCreateEventModal: Dispatch<SetStateAction<boolean>>;
}

const AppContext = createContext<Partial<IAppContext>>({});

export const useAppContext = (): Partial<IAppContext> => useContext(AppContext);

const AppProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const [currentTab, setCurrentTab] = useState<ItemsTabs>(ItemsTabs.All);
  const [showSidePanel, setShowSidePanel] = useState(false);

  const [showCreateItemModal, setShowCreateItemModal] = useState(false);
  const [showCreateEventModal, setShowCreateEventModal] = useState(false);

  return (
    <AppContext.Provider
      value={{
        currentTab,
        setCurrentTab,
        showSidePanel,
        setShowSidePanel,
        showCreateItemModal,
        setShowCreateItemModal,
        showCreateEventModal,
        setShowCreateEventModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
