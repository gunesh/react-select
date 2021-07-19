import React from 'react';
import Select from 'react-select';

import './style.css';
const options = [
  { value: 'chocolate1', label: 'Chocolate1', taxid: ['a', 'b', 'c'] },
  { value: 'chocolate', label: 'Chocolate', taxid: ['a1', 'b1', 'c1'] },
  { value: 'strawberry', label: 'Strawberry', taxid: ['a2', 'b2', 'c2'] },
  { value: 'vanilla', label: 'Vanilla', taxid: ['a3', 'b3', 'c3'] },
  { value: 'no-tax', label: 'No TaxID', taxid: [] }
];
export default function App() {
  const onChange = a => {
    console.log(a);
  };
  return (
    <div>
      <br />
     <br />
      <Select
        className="basic-single"
        classNamePrefix="select"
        // defaultValue={options[0]}
        isDisabled={false}
        isLoading={false}
        isClearable={true}
        isRtl={false}
        isSearchable={true}
        name="color"
        isMulti
        options={options}
        onChange={onChange}
      />

     <br />
     <br />
     
    </div>
  );
}
