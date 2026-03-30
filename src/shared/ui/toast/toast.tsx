import {useEffect} from "react";

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
                <span className="toast__message">{message}</span>
                <button onClick={onClose} className="toast__close">✕</button>
            </div>
        </div>
    );
};