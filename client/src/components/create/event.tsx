import React from "react";
import Modal from "../reusables/modal";
import { useAppContext } from "@/context/app";

const CreateEventModal: React.FC = () => {
  const { showCreateItemModal: show, setShowCreateItemModal: closeModal } =
    useAppContext();

  return (
    <Modal show={!!show} closeModal={() => closeModal?.(false)}>
      <div>Create Event</div>
    </Modal>
  );
};

export default CreateEventModal;
