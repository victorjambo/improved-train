import React, { useEffect, useState } from "react";
import Modal from "../reusables/modal";
import { useAppContext } from "@/context/app";
import { validateCreateItem } from "@/utils/validator";
import { http } from "@/utils";
import { useFetchAllItems, useFetchItem, useFetchOwnedItems } from "@/hooks/useFetch";

const EditItemModal: React.FC = () => {
  const {
    showEditItemModal: show,
    setShowEditItemModal,
    selectedItem,
  } = useAppContext();
  const fetchItem = useFetchItem(selectedItem?.id);
  const fetchAllItems = useFetchAllItems();
  const fetchOwnedItems = useFetchOwnedItems();

  const [disabled, setDisabled] = useState(false);
  const [errors, setErrors] = useState({
    title: "",
    price: "",
    quantity: "",
    description: "",
  });

  const [title, setTitle] = useState(selectedItem?.title);
  const [description, setDescription] = useState(selectedItem?.description);
  const [price, setPrice] = useState(selectedItem?.price);
  const [quantity, setQuantity] = useState(selectedItem?.quantity);
  const [status, setStatus] = useState(selectedItem?.status);

  useEffect(() => {
    setTitle(selectedItem?.title);
    setDescription(selectedItem?.description);
    setPrice(selectedItem?.price);
    setQuantity(selectedItem?.quantity);
    setStatus(selectedItem?.status);
  }, [
    selectedItem?.description,
    selectedItem?.price,
    selectedItem?.quantity,
    selectedItem?.status,
    selectedItem?.title,
  ]);

  useEffect(() => {
    if (!title || !price || !quantity) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [price, quantity, title]);

  const handleSubmit = () => {
    const { isValid, errors: _errors } = validateCreateItem(
      title as string,
      price as number,
      quantity as number,
      description as string
    );
    setErrors(_errors);
    if (!isValid) {
      return;
    }
    submit();
  };

  const submit = () => {
    http
      .put(`/items/${selectedItem?.id}`, {
        title,
        description,
        price,
        quantity,
        status,
      })
      .then((res) => {
        console.log(res);
        closeModal();
        fetchItem();
        fetchAllItems();
        fetchOwnedItems();
      })
      .catch((err) => console.log(err));
  };

  const closeModal = () => {
    setShowEditItemModal?.(false);
    setTitle("");
    setDescription("");
    setPrice(NaN);
    setQuantity(NaN);
    setErrors({
      title: "",
      price: "",
      quantity: "",
      description: "",
    });
  };

  return (
    <Modal show={!!show} closeModal={closeModal} title="Edit Item">
      <div className="flex flex-col w-full space-y-4 p-1">
        <div className="grid grid-cols-4 w-full">
          <label htmlFor="title">Title:</label>
          <div className="col-span-3">
            <input
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Supply Chain title ..."
              className={`w-full px-4 py-2 border bg-transparent focus-visible:outline-none focus:ring-1 focus:ring-[#2563eb] rounded-md ${
                errors.title ? "border-[#fe5c4c]" : "border-[#3e3f4b]"
              }`}
            />
            {errors.title && (
              <span className="text-[#fe5c4c] text-xs">{errors.title}</span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-4 w-full">
          <label htmlFor="desc">Description:</label>
          <div className="col-span-3">
            <textarea
              rows={4}
              name="description"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className={`w-full px-4 py-2 border bg-transparent focus-visible:outline-none focus:ring-1 focus:ring-[#2563eb] rounded-md ${
                errors.description ? "border-[#fe5c4c]" : "border-[#3e3f4b]"
              }`}
              defaultValue={""}
              placeholder="Supply Chain Description ..."
            />
            {errors.description && (
              <span className="text-[#fe5c4c] text-xs">
                {errors.description}
              </span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-10">
          <div>
            <label htmlFor="price" className="pl-0.5">
              Price
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-gray-500 sm:text-sm">$</span>
              </div>
              <input
                id="price"
                name="price"
                value={price}
                onChange={(e) => setPrice(+e.target.value)}
                type="number"
                placeholder="0.00"
                className={`w-full pl-7 pr-4 py-2 border bg-transparent focus-visible:outline-none focus:ring-1 focus:ring-[#2563eb] rounded-md ${
                  errors.price ? "border-[#fe5c4c]" : "border-[#3e3f4b]"
                }`}
              />
              {errors.price && (
                <span className="text-[#fe5c4c] text-xs">{errors.price}</span>
              )}
            </div>
          </div>
          <div>
            <label htmlFor="quantity" className="pl-0.5">
              Quantity
            </label>
            <input
              id="quantity"
              name="quantity"
              value={quantity}
              onChange={(e) => setQuantity(+e.target.value)}
              type="number"
              placeholder="1"
              className={`w-full px-4 py-2 border bg-transparent focus-visible:outline-none focus:ring-1 focus:ring-[#2563eb] rounded-md ${
                errors.quantity ? "border-[#fe5c4c]" : "border-[#3e3f4b]"
              }`}
            />
            {errors.quantity && (
              <span className="text-[#fe5c4c] text-xs">{errors.quantity}</span>
            )}
          </div>
          <div>
            <label htmlFor="status" className="pl-0.5">
              Status
            </label>
            <select
              id="status"
              name="status"
              value={status}
              className="w-full py-2.5 px-2 border border-[#3e3f4b] bg-transparent focus-visible:outline-none focus:ring-1 focus:ring-[#2563eb] rounded-md"
              defaultValue="PENDING"
              onChange={(e) => setStatus(e.target.value as any)}
            >
              <option>PENDING</option>
              <option>SHIPPING</option>
              <option>DELIVERED</option>
            </select>
          </div>
        </div>

        <div className="self-center w-2/3 pt-10">
          <button
            className={`transition text-sm px-5 py-2 rounded-lg border flex items-center justify-center text-center w-full ${
              disabled
                ? "border-[#3e3f4b] bg-[#3e3f4b] text-[#6a6d7c] cursor-not-allowed"
                : "cursor-pointer border-[#4f87f6] bg-[#4f87f6] hover:border-[#1859f1] hover:bg-[#1859f1] text-white"
            }`}
            onClick={handleSubmit}
          >
            Edit
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default EditItemModal;
