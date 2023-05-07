import React from "react";
import Modal from "../reusables/modal";
import { useAppContext } from "@/context/app";

const CreateItemModal: React.FC = () => {
  const { showCreateItemModal: show, setShowCreateItemModal: closeModal } =
    useAppContext();

  return (
    <Modal show={!!show} closeModal={() => closeModal?.(false)}>
      <div>Create Item</div>
    </Modal>
  );
};

export default CreateItemModal;
