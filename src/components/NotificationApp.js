import React, { useState } from 'react'
import { AnimatePresence } from "framer-motion";
import Notification from "./Notification";
import { Button } from "react-bootstrap";

function NotificationApp() {
    const [notifications, setNotifications] = useState([]);
    const pushNotification = (notification) => {
        setNotifications([...notifications, notification]);
    };
    const styles = {
        notifications: {
            top: 0,
            right: 0,
            position: "fixed",
        },
    };
    return (
        <div>
            <Button variant="success"
                onClick={() =>
                    pushNotification({
                        title: "Test notification",
                        description:
                            "This is a test notification that is being animated using framer-motion",
                        id: Math.random(),
                        onClose: (id) => {
                            setNotifications((currentNotifications) =>
                                currentNotifications.filter(
                                    (notification) => notification.id !== id
                                )
                            );
                        },
                    })
                }
            >
                Push notification
      </Button>
            <div style={styles.notifications}>
                <AnimatePresence>
                    {notifications.map((notification) => (
                        <Notification {...notification} key={notification.id} />
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
}

export default NotificationApp
