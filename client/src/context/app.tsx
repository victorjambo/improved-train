import { SupplyChainItemResponse } from "@/types";
import { defaultItem } from "@/utils/mockdata";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

export enum ItemsTabs {
  All = "All",
  Mine = "Owned",
}

interface IAppContext {
  currentTab: ItemsTabs;
  setCurrentTab: Dispatch<SetStateAction<ItemsTabs>>;
  showSidePanel: boolean;
  setShowSidePanel: Dispatch<SetStateAction<boolean>>;
  showCreateItemModal: boolean;
  setShowCreateItemModal: Dispatch<SetStateAction<boolean>>;
  showEditItemModal: boolean;
  setShowEditItemModal: Dispatch<SetStateAction<boolean>>;
  showCreateEventModal: boolean;
  setShowCreateEventModal: Dispatch<SetStateAction<boolean>>;
  items: SupplyChainItemResponse[];
  setItems: Dispatch<SetStateAction<SupplyChainItemResponse[]>>;
  ownedItems: SupplyChainItemResponse[];
  setOwnedItems: Dispatch<SetStateAction<SupplyChainItemResponse[]>>;
  selectedItem: SupplyChainItemResponse;
  setSelectedItem: Dispatch<SetStateAction<SupplyChainItemResponse>>;
}

const AppContext = createContext<Partial<IAppContext>>({});

export const useAppContext = (): Partial<IAppContext> => useContext(AppContext);

const AppProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const [currentTab, setCurrentTab] = useState<ItemsTabs>(ItemsTabs.All);
  const [showSidePanel, setShowSidePanel] = useState(false);

  const [showCreateItemModal, setShowCreateItemModal] = useState(false);
  const [showCreateEventModal, setShowCreateEventModal] = useState(false);
  const [showEditItemModal, setShowEditItemModal] = useState(false);

  const [items, setItems] = useState<SupplyChainItemResponse[]>([]);
  const [ownedItems, setOwnedItems] = useState<SupplyChainItemResponse[]>([]);

  const [loading, setLoading] = useState();

  const [selectedItem, setSelectedItem] =
    useState<SupplyChainItemResponse>(defaultItem);

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
        items,
        setItems,
        ownedItems,
        setOwnedItems,
        selectedItem,
        setSelectedItem,
        showEditItemModal,
        setShowEditItemModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
