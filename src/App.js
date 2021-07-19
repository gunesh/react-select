import React, { useState } from 'react';
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
  const [msg, setMsg] = useState('There is no TaxID ');
  const [id, setId] = useState([]);
  const onChange = a => {
    console.log(a);
    setId(a.taxid)
    if(a.taxid.length > 0){
      setMsg('')
    }else{
      setMsg('There is no TaxID ')
    }
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
        name="org"
        isMulti={false}
        options={options}
        onChange={onChange}
      />

      <br />
      <br />
      <Select
          className="basic-single"
          classNamePrefix="select"
          defaultValue={options[0]}
          isDisabled={false}
          isLoading={false}
          isClearable={true}
          isRtl={false}
          isSearchable={true}
          name="taxid"
          isMulti={false}
          options={id}
          onChange={onChange}
        />
    </div>
  );
}
