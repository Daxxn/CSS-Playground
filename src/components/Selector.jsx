import React from 'react';
import '../Styles/Selector.css';

/**
 * A Custom select function for controlling a "ComboBox".
 * Options Example: { [value: string]: {label: string, func: () => void} }
 */
const Selector = (props) => {
  const { options } = props;

  const handleSelect = (e) => {
    const { value } = e.target;
    console.log(value);
    options[value].func();
  };

  return (
    <div className="selectorBase">
      <select onSelect={handleSelect} onChange={handleSelect}>
        {Object.keys(options).map(opt => (
          <option
            key={`option-${options[opt].label}`}
            value={opt}
          >
            {options[opt].label}
          </option>
        ))}
      </select>
      <span className="arrow"></span>
    </div>
  );
};

export default Selector;