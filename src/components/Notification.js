import React from 'react'
import { motion } from "framer-motion";
import { Button } from "react-bootstrap";

function Notification({ title, description, onClose, id }) {
    const styles = {
        wrapper: {
            boxShadow: "0px 5px 30px 0px rgba(0,0,0,0.1)",
            borderRadius: 5,
            padding: 16,
            margin: "1rem 0",
        },
    };
    return (
        <motion.div
            layout
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            style={styles.wrapper}
        >
            <h2>{title}</h2>
            <p>{description}</p>
            <Button variant="Warning" onClick={() => onClose(id)}>Close</Button>
        </motion.div>
    );
}

export default Notification
