import React, { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";

const DeleteModal = ({
  showModalDelete,
  handleCloseDelete,
  index,
  getData,
}) => {
  console.log("In delete Modal 1");
  const [serial, setSerial] = useState();
  useEffect(() => {
    setSerial(index);
  }, [index]);

  const deleteRow = () => {
    
  console.log("In delete Modal 4");
    const str = localStorage.getItem("userData");
    const data = JSON.parse(str);

    data.splice(serial, 1);
    getData(data);
    localStorage.setItem("userData", JSON.stringify(data));
    // alert("Data is deleted!!!⚠️💀")
  };
  
  console.log("In delete Modal 2");
  // const notify = () => {
    
  // console.log("In delete Modal 5");
  //   toast.warn("The data of user has been deleted", {
  //     position: "top-right",
  //     autoClose: 5000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "colored",
  //   });
  // };
  const clickHandler = () => {
    
  console.log("In delete Modal 3");
    deleteRow();
    // notify();
    handleCloseDelete();
    // notify();
    console.log("End of Click handler");
  };

  return (
    <>{showModalDelete &&(
      <div
        className={`modal ${showModalDelete ? "fade show" : ""}`}
        id={`deleteModal-${index}`} // Unique ID based on the index
        tabIndex={-1}
        role="dialog"
        aria-labelledby={`deleteModalLabel-${index}`} // Unique ID based on the index
        aria-hidden={!showModalDelete}
        style={{ display: showModalDelete ? "block" : "none" }}
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Deleting user</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={handleCloseDelete}
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <p>Are you sure you want to delete the Detail?</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => {
                  clickHandler();
                }}
              >
                Delete User
              </button>
              <button
                type="button"
                className="btn btn-success"
                data-dismiss="modal"
                onClick={handleCloseDelete}
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>)}
    </>
  );
};

export default DeleteModal;
