import React from 'react';
import { Button } from 'react-bootstrap'
import { Picky } from 'react-picky';
import 'react-picky/dist/picky.css';
import './MultiCheckBoxList.css';

const MultiCheckBoxList = (props) => {
    const maxNum = props.maxNum;
    const selectedAll = props.selectedAll;
    const [value, setValue] = React.useState(props.selectedList);
    const [multiValue, setMultiValue] = React.useState(props.selectedList);
    const onChange = (values) => {
        if (values.length > maxNum) {
            setMultiValue(multiValue)
            props.onChange(multiValue)
        }
        else {
            setMultiValue(values);
            props.onChange(values)
        }
    }
    if (props.multiple) {

        return <Picky
            className="select"
            options={props.items}
            numberDisplayed={10}
            multiple={true}
            includeFilter={props.includeFilter}
            includeSelectAll
            value={multiValue}
            onChange={onChange}
            dropdownHeight={props.height}
            clearFilterOnClose={true}
            defaultFocusFilter={true}
            renderSelectAll={({
                style,
                filtered,
                tabIndex,
                allSelected,
                toggleSelectAll,
                multiple,
            }) => {
                // Don't show if single select or items have been filtered.


                return (
                    <div>
                        {(multiple && !filtered && props.selectedAll) &&
                            <div
                                style={style}
                                tabIndex={tabIndex}
                                role="option"
                                aria-selected={true}
                                className={allSelected ? 'option selected' : 'option'}
                                onClick={toggleSelectAll}
                                onKeyPress={toggleSelectAll}
                            >
                                <Button variant="secondary" size="sm">Select/Clear All</Button><span></span>
                            </div>}
                            { multiValue.length >= maxNum &&
                            <p className="maxNum">The maximum number of allowable selection reached.</p>
            }
                    </div>
                );
            }
            }
        />
    }
    else {
        return <Picky
            className="select"
            options={props.items}
            numberDisplayed={10}
            multiple={false}
            includeFilter={props.includeFilter}
            value={props.selectedList}
            keepOpen={false}
            onChange={value => {
                setValue(value);
                var values = [];
                values.push(value);
                props.onChange(values)
            }}
            dropdownHeight={props.height}
            clearFilterOnClose={true}
            defaultFocusFilter={true}
        />

    }
}

export default MultiCheckBoxList;