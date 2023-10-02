"use client";
import React, { useEffect, useState } from "react";
import Modal from "@/components/Modal";

function ModalProvider() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <>
            <Modal title={"test modal"} description={"test description"} isOpen onChange={() => {
            }}>
                Test Children
            </Modal>
        </>
    );
}

export default ModalProvider;