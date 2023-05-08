import { ItemsTabs, useAppContext } from "@/context/app";
import { useFetchAllItems, useFetchOwnedItems } from "@/hooks/useFetch";
import { http } from "@/utils";
import { defaultItem } from "@/utils/mockdata";
import { Popover, Transition } from "@headlessui/react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import React, { Fragment } from "react";

const EventActions: React.FC = () => {
  const {
    setShowCreateItemModal,
    selectedItem,
    setShowSidePanel,
    setSelectedItem,
    currentTab,
  } = useAppContext();

  const fetchAllItems = useFetchAllItems();
  const fetchOwnedItems = useFetchOwnedItems();

  const handleEdit = () => {
    setShowCreateItemModal?.(true);
  };

  const handleDelete = async () => {
    await http
      .delete(`/items/${selectedItem?.id}`)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          // TODO loading states and warning dialog
          setShowSidePanel?.(false);
          setSelectedItem?.(defaultItem);
          if (currentTab === ItemsTabs.Mine) {
            fetchOwnedItems();
          } else {
            fetchAllItems();
          }
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button>
              <EllipsisVerticalIcon className="w-5 h-5 text-xl cursor-pointer" />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-20 z-10 mt-3 -translate-x-1/2 transform w-52">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="flex flex-col divide-y-2 divide-[#3e3f4b] bg-[#262833]">
                    <button
                      className="p-2 hover:bg-[#2b2c36]"
                      onClick={handleEdit}
                    >
                      Edit Item
                    </button>

                    <button
                      className="p-2 hover:bg-[#2b2c36]"
                      onClick={handleDelete}
                    >
                      Delete Item
                    </button>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
};

export default EventActions;
