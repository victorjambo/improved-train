import React, { useEffect, useState } from "react";
import Modal from "../reusables/modal";
import { useAppContext } from "@/context/app";
import {
  useFetchAllItems,
  useFetchCustodians,
  useFetchItem,
  useFetchOwnedItems,
} from "@/hooks/useFetch";
import { validateCreateEvent } from "@/utils/validator";
import { http } from "@/utils";

const CreateEventModal: React.FC = () => {
  const {
    showCreateEventModal: show,
    setShowCreateEventModal,
    selectedItem,
  } = useAppContext();
  const custodians = useFetchCustodians();
  const fetchItem = useFetchItem(selectedItem?.id);
  const fetchAllItems = useFetchAllItems();
  const fetchOwnedItems = useFetchOwnedItems();

  const [disabled, setDisabled] = useState(false);
  const [errors, setErrors] = useState({
    title: "",
    location: "",
    description: "",
  });

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [custodian, setCustodian] = useState("");

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!title || !location) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [location, title]);

  const handleSubmit = () => {
    setLoading(true);
    const { isValid, errors: _errors } = validateCreateEvent(
      title,
      location,
      description
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
      .post(`/items/${selectedItem?.id}/events`, {
        title,
        description,
        location,
        custodianId: +custodian,
      })
      .then((res) => {
        console.log(res);
        setLoading(false);
        closeModal();
        fetchItem();
        fetchAllItems();
        fetchOwnedItems();
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  const closeModal = () => {
    setShowCreateEventModal?.(false);
    setTitle("");
    setDescription("");
    setLocation("");
    setErrors({
      title: "",
      location: "",
      description: "",
    });
  };

  return (
    <Modal show={!!show} closeModal={closeModal} title="Log Event">
      <div className="flex flex-col w-full space-y-4 p-1">
        <div className="grid grid-cols-4 w-full">
          <label htmlFor="title">Title:</label>
          <div className="col-span-3">
            <input
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Event title ..."
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
              placeholder="Event Description ..."
            />
            {errors.description && (
              <span className="text-[#fe5c4c] text-xs">
                {errors.description}
              </span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-4 w-full">
          <div className="col-start-2 col-span-3">
            <div className="grid grid-cols-2 gap-10">
              <div className="">
                <label htmlFor="location">Location</label>
                <input
                  id="location"
                  name="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className={`w-full py-2.5 px-2 border bg-transparent focus-visible:outline-none focus:ring-1 focus:ring-[#2563eb] rounded-md ${
                    errors.location ? "border-[#fe5c4c]" : "border-[#3e3f4b]"
                  }`}
                />
                {errors.location && (
                  <span className="text-[#fe5c4c] text-xs">
                    {errors.location}
                  </span>
                )}
              </div>

              <div>
                <label htmlFor="custodian">Custodian</label>
                <select
                  id="custodian"
                  name="custodian"
                  value={custodian}
                  className="w-full py-2.5 px-2 border border-[#3e3f4b] bg-transparent focus-visible:outline-none focus:ring-1 focus:ring-[#2563eb] rounded-md"
                  // defaultValue="Amazon"
                  onChange={(e) => setCustodian(e.target.value)}
                >
                  {custodians.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
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
            <span>{loading ? "Log Event" : "Logging"}</span>
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default CreateEventModal;
