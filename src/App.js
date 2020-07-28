import React from 'react';
import './App.css';
import Selector from './components/Selector';
import MenuBar from './components/MenuBar';
import CustomSelect from './components/CustomSelect';

const testOptionsObj = {
  'test1': { label: 'test 1', func: () => console.log('test 1 function!') },
  'test2': { label: 'test 2', func: () => console.log('test 2 function!') },
};

const testOptionsStr = [
  'test 1',
  'test 2',
  'more',
]

function App() {
  return (
    <div className="App">
      <MenuBar />
      <div className="bodyContainer">
        <Selector options={testOptionsObj}/>
        <CustomSelect type="text" options={testOptionsStr} />
      </div>
    </div>
  );
}

export default App;
