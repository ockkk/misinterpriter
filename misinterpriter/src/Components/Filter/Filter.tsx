import React, {useState} from 'react'
import { Select } from 'antd';
import './style.css'


type Tagprops = {
  TagName: Array<string>;
};

const Filter: React.FC<Tagprops>= (TagName:any) => {
  console.log(TagName["TagName"])
  const [tagArr, settagArr ] = useState<string[]>([])
  const filteredOptions = TagName["TagName"].filter( (o:any) => !tagArr.includes(o))

  const handleCange = (e:any) => {
    settagArr(e)
  }
  return (
    <Select
    mode="multiple"
    placeholder="Inserted are removed"
    value={tagArr}
    onChange={handleCange}
    style={{ width: '70%', bottom: "5px", backgroundColor:"#f4f7f6" }}
  >
    {filteredOptions.map((item:any) => (
      <Select.Option key={item} value={item}>
        {item}
      </Select.Option>
    ))}
  </Select>
  )
}

export default Filter