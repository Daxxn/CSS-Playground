import React, { useState } from 'react';
import '../Styles/CustomSelect.css';

const CustomSelect = (props) => {
  const { options } = props;
  const [ddOpen, setDdOpen] = useState(false);
  const [select, setSelect] = useState('');

  const handleSelect = (e) => {
    console.log(e.target);
    const { id } = e.target;
    setSelect(options.find(opt => opt === id));
    setDdOpen(false);
  };

  return (
    <div className="csContainer">
      <div className="csBase">
        {/* <input className="csMainInput" type={type} onChange={handleInput} value={select} /> */}
        <button
          className="csOpenDD"
          onClick={() => setDdOpen(!ddOpen)}
        >
          {select}
        </button>
        <button
          // className="csDropDButton"
          className={`csDropDButtonBase ${ddOpen ? 'csDropDButtonOpen' : 'csDropDButtonClose'}`}
          onClick={() => setDdOpen(!ddOpen)}
        >
          \/
        </button>
        {ddOpen ? (
          <div className="csddPos">
            <div className={`csDropDown ${ddOpen ? 'csOpenAnimation': 'csCloseAnimation'}`}>
              {options.map(opt => (
                <button
                  className="csDDItem"
                  key={Math.random()}
                  id={opt}
                  onClick={handleSelect}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        ) : ''}
      </div>
    </div>
  )
};

export default CustomSelect;