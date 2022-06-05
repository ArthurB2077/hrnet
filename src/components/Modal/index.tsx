import React from "react"
import { renderClose } from "../../medias/svg/svgsExport"

interface Props {
    content: string,
    closeModal: Function,
}

const Modal: React.FC<Props> = ({ content, closeModal }): JSX.Element => {

    return(
        <div className="modal-layer">
            <div className="modal-content">
                {content}
                <span className="modal-close-container" onClick={() => closeModal(false)}>
                    {renderClose("modal-close")}
                </span>
            </div>
        </div>
    )
}

export default Modal