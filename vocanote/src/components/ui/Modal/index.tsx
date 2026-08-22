import type { ReactNode } from "react";

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
};

const Modal = ({ isOpen, onClose, children, }: ModalProps) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className=" fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-4 backdrop-blur-sm"
            onClick={onClose}
        >
            <div role="dialog" aria-modal="true" className=" w-full max-w-md rounded-2xl bg-white p-6 shadow-xl"
                onClick={(event) => event.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};

export default Modal;