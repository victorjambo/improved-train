import React, { useEffect, useState } from "react";
import Modal from "../reusables/modal";
import { useAppContext } from "@/context/app";
import { useFetchAllItems, useFetchCustodians, useFetchItem, useFetchOwnedItems } from "@/hooks/useFetch";
import { validateCreateEvent } from "@/utils/validator";
import { http } from "@/utils";

const CreateEventModal: React.FC = () => {
  const { showCreateEventModal: show, setShowCreateEventModal, selectedItem } =
    useAppContext();
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

  useEffect(() => {
    if (!title || !location) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [location, title]);

  const handleSubmit = () => {
    const { isValid, errors: _errors } = validateCreateEvent(
      title,
      location,
      description
    );
    setErrors(_errors);
    if (!isValid) {
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
        custodianId: +custodian
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
              disabled
                ? "border-[#3e3f4b] bg-[#3e3f4b] text-[#6a6d7c] cursor-not-allowed"
                : "cursor-pointer border-[#4f87f6] bg-[#4f87f6] hover:border-[#1859f1] hover:bg-[#1859f1] text-white"
            }`}
            onClick={handleSubmit}
          >
            Log
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default CreateEventModal;
