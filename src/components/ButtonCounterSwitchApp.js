import React, { useState } from 'react'
import ButtonCounterSwitch from "./ButtonCounterSwitch"

function ButtonCounterSwitchApp() {
    const [isOn, setIsOn] = useState();
    return (
        <ButtonCounterSwitch isOn={isOn} onToggle={() => setIsOn(!isOn)} />
    )
}

export default ButtonCounterSwitchApp
