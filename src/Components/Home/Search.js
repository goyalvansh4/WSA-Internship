import React,{useState} from "react";
import { DatePicker, Space } from "antd";


import { useDispatch } from "react-redux";
import { getAllProperties } from "../../Store/Property/property-action";
import { propertyAction } from "../../Store/Property/property-slice";

const Search = () => {
  const { RangePicker } = DatePicker;
  const [keyword,setKeyword] = useState({});
  const [value, setValue] = useState([]);

  const dispatch = useDispatch();

  function searchHandler(e){
    e.preventDefault();
    dispatch(propertyAction.updateSearchParams(keyword));
    dispatch(getAllProperties());
    setKeyword({city:"",
    guest:"",
    dateIn:"",
    dateOut:""});
    setValue([]);
  }

 function returnDates(date, dateString) {
   setValue([date[0],date[1]]);

   updateKeyword("dateIn",dateString[0]);
   updateKeyword("dateOut",dateString[1]);

 }

    const updateKeyword=(field,value)=>{
     setKeyword((prevkeyword)=>({
      ...prevkeyword,
      [field]:value,
     }));
 }

  return (
    <div className="searchbar">
      {/* Input field for searching destination */}
      <input
        className="search"
        id="search_destination"
        placeholder="Search Destination"
        type="text"
        value={keyword.city}
        onChange={(e)=>updateKeyword("city",e.target.value)}
      />
         {/* Date range picker */}
      <Space direction="vertical" size={12} className="search">
        <RangePicker
          value={value}
          format="YYYY-MM-DD"
          picker="date"
          className="date_picker"
          disabledDate={(current) => {
            return current && current.isBefore(Date.now(), "day");
          }}
          onChange={returnDates}
        />
      </Space>
      <input className="search" id="addguest" value={keyword.guest} placeholder="Add guest" type="number" onChange={(e)=>updateKeyword("guest",e.target.value)}/>
      {/* search icon */}
      <span className="material-symbols-outlined searchicon" onClick={searchHandler}>search</span>
    </div>
  );
};

export default Search;
