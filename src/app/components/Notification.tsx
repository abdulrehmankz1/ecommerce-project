import { useEffect } from 'react';

interface NotificationProps {
    message: string;
    visible: boolean;
    onClose: () => void;
}

const Notification = ({ message, visible, onClose }: NotificationProps) => {
    useEffect(() => {
        if (visible) {
            const timer = setTimeout(() => {
                onClose();
            }, 1000);

            return () => clearTimeout(timer);
        }
    }, [visible, onClose]);

    return (
        <div
            className={`fixed bottom-4 right-4 p-4 bg-black text-white rounded-lg shadow-lg transition-transform transform ${visible ? 'translate-y-0' : 'translate-y-full'
                }`}
            style={{ transition: 'transform 0.3s ease' }}
        >
            {message}
        </div>
    );
};

export default Notification;