import React, {useState} from 'react'
import { Select } from 'antd';

const OPTIONS = ['Apples', 'Nails', 'Bananas', 'Helicopters'];

const Filter: React.FC= () => {

  const [tagArr, settagArr ] = useState([])
  // const filteredOptions = OPTIONS.filter(o => !tagArr.includes(o));

  const handleCange = (e:any) => {
    settagArr(e)
  }
  return (
    <Select
    mode="multiple"
    placeholder="Inserted are removed"
    value={[]}
    onChange={handleCange}
    style={{ width: '30%', border: "solid 2px", bottom: "10px", backgroundColor:"#f4f7f6" }}
  >
    {/* {filteredOptions.map(item => (
      <Select.Option key={item} value={item}>
        {item}
      </Select.Option>
    ))} */}
  </Select>
  )
}

export default Filter