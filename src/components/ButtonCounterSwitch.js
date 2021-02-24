import React from 'react'
import { motion } from "framer-motion";

function ButtonCounterSwitch({ isOn, onToggle }) {

    const styles = {
        wrapper: {
            display: "flex",
            justifyContent: isOn ? "flex-end" : "flex-start",
            borderRadius: 50,
            width: 60,
            padding: 4,
        },
        handle: {
            height: 25,
            width: 25,
            background: "#fff",
            borderRadius: "50%",
        },
    };


    return (
        <motion.div
            style={styles.wrapper}
            onClick={() => onToggle(!isOn)}
            animate={{ background: isOn ? "#006aff" : "#ddd" }}

        >
            <motion.div layout style={styles.handle} />
        </motion.div>
    );

}

export default ButtonCounterSwitch
