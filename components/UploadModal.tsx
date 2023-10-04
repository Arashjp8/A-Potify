"use client";
import React from "react";
import Modal from "./Modal";
import useUploadModal from "@/hooks/useUploadModal";


function UploadModal() {
    const uploadModal = useUploadModal();

    const onChange = (open: boolean) => {
        if (!open) {
            // reset the form
            uploadModal.onClose();
        }
    };

    return (
        <Modal isOpen={uploadModal.isOpen} onChange={onChange} title={"Add a song"}
               description={"Upload an mp3 file"}>
            Form
        </Modal>
    );
}

export default UploadModal;