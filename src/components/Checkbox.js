import React from 'react';

const Checkbox = (props) => {

  const toggleCheckboxChange = () => {
    const { handleCheckboxChange, label } = props;
    handleCheckboxChange(label);
  }

  const { label } = props;
  const isChecked = props.isChecked;
  const disabled = props.disabled;
  const display = props.hidden;
  return (
    <div className="checkbox">
      <label>
        <input
          type="checkbox"
          value={label}
          checked={isChecked}
          onChange={toggleCheckboxChange}
          disabled={disabled}
          display={display}
        />
        {" " + label}
      </label>
    </div>
  );

}

export default Checkbox;