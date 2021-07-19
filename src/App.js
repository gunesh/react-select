import React, { useState } from 'react';
import Select from 'react-select';

import './style.css';
const options = [
  { value: 'chocolate1', label: 'Chocolate1', taxid: ['a', 'b', 'c']},
  { value: 'chocolate', label: 'Chocolate', taxid: ['a1', 'b1', 'c1'] },
  { value: 'strawberry', label: 'Strawberry', taxid: ['a2', 'b2', 'c2'] },
  { value: 'vanilla', label: 'Vanilla', taxid: ['a3', 'b3', 'c3'] },
  { value: 'no-tax', label: 'No TaxID', taxid: [] }
];
export default function App() {
  const [msg, setMsg] = useState('There is no TaxID ');
  const [id, setId] = useState([]);
  const [value, setValue] = useState(null);

  const CustomOption = ({ innerProps, isDisabled }) =>
  !isDisabled ? (
    <div {...innerProps}>{/* your component internals */}</div>
  ) : null;

  const onChangeTax = e =>{
    console.log(e)
    setValue(e.value)
  }
  const onChange = a => {
    console.log(a);
    setValue(a.value)
    if (a.taxid.length > 0) {
      setMsg('');
      let tmp = []
      a.taxid.map((i)=>{
        let b = {}
        b.value = i;
        b.label = i;
        tmp.push(b)
      })
      console.log(tmp)
      setId(tmp);
    } else {
      setMsg('There is no TaxID ');
      setId([{ value: 'no-taxid', label: 'There is no TaxID' }]);
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
        // defaultInputValue="Please Select Org"
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
        placeholder= {id.length>0 && msg?msg:"Please Select..."}
        defaultValue={value}
        // defaultInputValue={value}
        isDisabled={msg === ''?false:true}
        isLoading={false}
        isClearable={true}
        isRtl={false}
        isSearchable={true}
        name="taxid"
        isMulti={false}
        options={id}
        value={value}
        onChange={onChangeTax}
      />
    </div>
  );
}
