import { useEffect } from "react";
import ReactModal from "react-modal";

export default function MovieModal(props) {
    const [isModalOpen, setIsModalOpen] = props;

    return (
        <ReactModal isOpen={isModalOpen}>
            <button onClick={() => setIsModalOpen(false)}>CLOSE</button>
        </ReactModal>
    );
}