import React from "react"
import { renderClose } from "../../medias/svg/svgsExport"

interface Props {
    content: string,
    closeModal: Function,
    invalidFields?: Function,
}

const Modal: React.FC<Props> = ({ content, closeModal, invalidFields }): JSX.Element => {

    const handleClick: Function = (): void => {
        if(invalidFields) {
            invalidFields(false)
        }
        closeModal(false)
    }

    return(
        <div className="modal-layer">
            <div className="modal-content">
                {content}
                <span className="modal-close-container" onClick={() => handleClick()}>
                    {renderClose("modal-close")}
                </span>
            </div>
        </div>
    )
}

export default Modal