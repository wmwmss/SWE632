import { Form } from "react-bootstrap";
import React from 'react';


const DropdownMultiple = (props) => {

    const items = props.items;
    const style = props.style;
    const value = props.multiple ? props.selectedList : props.selectedList[0];
    return (
        <Form.Group >         
            <Form.Control as="select" multiple={props.multiple} onChange={props.onChange} style={style} value={value} onMouseDown={props.onMouseDown}>
                {
                    Array.from({ length: items.length })
                        .map((_, index) => (
                            <option key={index} >{items[index]}</option>
                    ))
                }
            </Form.Control>
        </Form.Group>
    )
}

export default DropdownMultiple;