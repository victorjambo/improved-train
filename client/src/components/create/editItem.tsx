import React, { useEffect, useState } from "react";
import Modal from "../reusables/modal";
import { useAppContext } from "@/context/app";
import { validateCreateItem } from "@/utils/validator";
import { http, logError } from "@/utils";
import {
  useFetchAllItems,
  useFetchItem,
  useFetchOwnedItems,
} from "@/hooks/useFetch";

const EditItemModal: React.FC = () => {
  const {
    showEditItemModal: show,
    setShowEditItemModal,
    selectedItem,
    handleToast,
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

  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    const { isValid, errors: _errors } = validateCreateItem(
      title as string,
      price as number,
      quantity as number,
      description as string
    );
    setErrors(_errors);
    if (!isValid) {
      setLoading(false);
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
        handleToast?.("Success", "SUCCESS");
        setLoading(false);
        closeModal();
        fetchItem();
        fetchAllItems();
        fetchOwnedItems();
      })
      .catch((err) => {
        setLoading(false);
        logError(err);
        // TODO this is a generic error. we should show what actually went wrong
        handleToast?.("Error while updating check logs", "WARN");
      });
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
              disabled || loading
                ? "border-[#3e3f4b] bg-[#3e3f4b] text-[#6a6d7c] cursor-not-allowed"
                : "cursor-pointer border-[#4f87f6] bg-[#4f87f6] hover:border-[#1859f1] hover:bg-[#1859f1] text-white"
            }`}
            onClick={handleSubmit}
            disabled={disabled || loading}
          >
            {loading && (
              <svg
                aria-hidden="true"
                role="status"
                className="inline w-4 h-4 mr-3 text-white animate-spin"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="#E5E7EB"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentColor"
                />
              </svg>
            )}
            <span>{loading ? "Editing" : "Edit"}</span>
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default EditItemModal;
