import React, { Component, useState } from 'react'
import { Button } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import ButtonCounterSwitchApp from './ButtonCounterSwitchApp';
import NotificationApp from "./NotificationApp"


export class ButtonCounter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }

        this.addCount = this.addCount.bind(this);
    }

    addCount() {
        this.setState({
            count: this.state.count + 5000
        })
    }



    render() {

        return (

            <div>
                <ButtonCounterSwitchApp />
                <NotificationApp></NotificationApp>
                <motion.div animate={{ x: 100 }}>{this.state.count}</motion.div>
                <Button variant="success" onClick={this.addCount}>Count++</Button>{' '}
            </div>

        )
    }
}

export default ButtonCounter
