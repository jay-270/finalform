import React, { useEffect, useState } from "react";

import EditModal from "./Edit";
import DeleteModal from "./DeleteModal";

const ButtonComponent = (props) => {
  console.log("In Button component");
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  useEffect(()=>{
    console.log("Changed value of showModal:"+  showModal);
  }, [showModal])

  const handleOpenModal = () => {
    console.log("In handle open modal");
    setShowModal(true);
  };

  const handleCloseModal = () => {
    console.log("in handle close");
    console.log("show modal : "+ showModal);
    setShowModal(false);
    console.log("show modal : "+ showModal);

  };

  const handleDeleteModal = () => {
    setShowDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    console.log("in handle close");
    console.log("showDelete modal "+ showDeleteModal);
    setShowDeleteModal(false);
    console.log("showDelete modal "+ showDeleteModal);
  };

  return (
    <>
      <button
        className="btn btn-primary"
        data-toggle="modal"
        data-target={`#editModal-${props.user}`}  // Unique ID based on the user
        onClick={handleOpenModal}
      >
        Edit
      </button>
    
      <button
        className="btn btn-danger"
        data-toggle="modal"
        data-target={`#deleteModal-${props.user}`} 
        onClick={handleDeleteModal}
      >
        Delete
      </button>
      {/* EditModal component */}
      <EditModal
        showModal={showModal}
        index={props.user}
        handleClose={handleCloseModal}
        getData={(data)=>{
          handleCloseModal();
          console.log("Inside the button components getData");
          props.getData(data);
        }}
      />
      {/* DeleteModal component */}
      <DeleteModal
        showModalDelete={showDeleteModal}
        index={props.user}
        handleCloseDelete={handleCloseDeleteModal}
        getData={(data)=>{
          console.log("Inside the button components getData");
          handleCloseDeleteModal();
          props.getData(data);
        }}
      />
    </>
  );
};
export default ButtonComponent;
