import React, { useState } from "react";
import FilterModal from "./FilterModal";

const Filter = () => {
  // state for controlling the modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);
  //state for storing the selected filters
  const [selectedFilters, setSelectedFilters] = useState({});

  // function to handle the modal/popup window open
   const handleOpenModal = () => {
    setIsModalOpen(true);
   }

   // function to handle the  closing of the modal/popup window
   const handleCloseModal = () => {
    setIsModalOpen(false);
   }

  // function to handle the changes in filters 

  const handleFilterChange = (filterName,value) => {
    // update the selected filters with the new value
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]:value,
    }));
  }

  return (
    <>
      <span className="material-symbols-outlined filter" onClick={handleOpenModal}>tune</span>
      {(isModalOpen) && (<FilterModal
      selectedFilters={selectedFilters}
      onFilterChange={handleFilterChange}
      onClose={handleCloseModal}/>)}
    </>
  );
};

export default Filter;
