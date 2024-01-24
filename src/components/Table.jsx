import React, { useEffect, useState } from "react";
import ButtonComponent from "./ButtonComponent";

const Table = (props) => {
  console.log("In Table file");
  const [data, setData] = useState(props.info);

  // useEffect(() => {
  //   const dataStored = JSON.parse(localStorage.getItem("userData"));
  //   setData(dataStored);
  // }, []);

  useEffect(() => {
    setData(props.info);
  }, [props.info]);

  const renderHobbies = (hobbies) => {
    return hobbies.join(", ");
  };

  const getData = (receivedData) => {
    setData(receivedData);
    console.log("this is edited data" + JSON.stringify(receivedData));
  };

  const addRow = (rowData, index) => {
    if (data[index] === "") {
      return false;
    }
    console.log("In add row");

    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{rowData.firstName}</td>
        <td>{rowData.lastName}</td>
        <td>{rowData.phone}</td>
        <td>{rowData.email}</td>
        <td>{rowData.gender}</td>
        <td>{rowData.country}</td>
        <td>{renderHobbies(data[index].hobbies)}</td>
        <td>
          <ButtonComponent user={index} getData={getData} />
        </td>
      </tr>
    );
  };

  const insertRow = () => {
    console.log("In Insert row");
    return data.map((rowData, index) => addRow(rowData, index));
  };

  return (
    <>
      <div className="card mt-4">
        <div className="card-body">
          <table className="table">
            <thead>
              <tr>
                <th itemScope="col">Sr. No.</th>
                <th itemScope="col">First Name</th>
                <th itemScope="col">Last Name</th>
                <th itemScope="col">Phone</th>
                <th itemScope="col">Email</th>
                <th itemScope="col">Gender</th>
                <th itemScope="col">Country</th>
                <th itemScope="col">Hobbies</th>
                <th itemScope="col">Actions</th>
              </tr>
            </thead>
            <tbody>{insertRow()}</tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Table;
