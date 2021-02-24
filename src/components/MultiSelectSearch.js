import React from 'react';
import Select from 'react-select'

const MultiSelectSearch = (props) => {
    const items = props.items;
    const style = props.style;
    const selectedList = props.selectedList
    var options = [];
    for(let i=0;i < items.length;i++){
        options.push({value:items[i],label:items[i]})
    }
    var values=[];
    for(let i=0;i < selectedList.length;i++){
        var value=selectedList[i];
        values.push({value:value,label:value});
    }
    
    return (
        <Select
            defaultValue={values}
            isMulti
            name="States"
            options={options}
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={props.onChange}
        />
    )
}

export default MultiSelectSearch;