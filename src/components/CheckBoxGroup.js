import React from 'react';
import Checkbox from './Checkbox.js'
import { Table } from 'react-bootstrap';


export default class CheckBoxGroup extends React.Component {

    render() {
        const items = this.props.items;
        const colNum = this.props.colNum;
        const rowNum = Math.ceil(items.length / colNum);
        const selectedList = this.props.selectedList;
        const disabled = this.props.disabled;
        return (
            <Table responsive borderless>
                <tbody>
                    {Array.from({ length: rowNum }).map((_, index1) => (
                        <tr key={index1}>
                            {Array.from({ length: colNum }).map((_, index) => (
                                <td key={index1 * colNum + index}>
                                    {(index1 * colNum + index) < items.length && (
                                    <Checkbox
                                        label={items[index1 * colNum + index]}
                                        isChecked={selectedList.includes(items[index1 * colNum + index])}
                                        handleCheckboxChange={this.props.toggleCheckbox}
                                        disabled={disabled}
                                    />)}
                                </td>
                            ))}
                        </tr>
                    )
                    )}
                </tbody>
            </Table>
        )
    }

}