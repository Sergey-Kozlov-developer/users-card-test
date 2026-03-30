import {useEffect} from "react";
import doneIcon from '@assets/icons/done.svg'

interface Props {
    message: string;
    onClose: () => void;
    duration?: number;
}

export const Toast = ({ message, onClose, duration = 4000 }: Props) => {
    useEffect(() => {
        const timer = setTimeout(onClose, duration);
        return () => clearTimeout(timer);
    }, [onClose, duration]);

    return (
        <div className="toast" onClick={onClose}>
            <div className="toast__container" onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose} className="toast__close">✕</button>
                <div className="toast__content">
                    <img src={doneIcon} alt="Success" className="toast__icon" />
                    <span className="toast__message">{message}</span>
                </div>
            </div>
        </div>
    );
};