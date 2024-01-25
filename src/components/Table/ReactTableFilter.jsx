import React, { useEffect, useState } from "react";
import ButtonComponent from "../ButtonComponent";
import styled from "styled-components";
import DataTable from "react-data-table-component";

const tableCustomStyles = {
  headCells: {
    style: {
      fontSize: "15px",
      fontWeight: "bold",
      justifyContent: "center",
    },
  },
  Header: "Action",
  columns: [
    {
      accessor: "Action",
      Cell: (row) => <div style={{ textAlign: "Center" }}>{row.value}</div>,
    },
  ],
};

const TextField = styled.input`
  height: 32px;
  width: 200px;
  border-radius: 3px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border: 1px solid #e5e5e5;
  padding: 0 32px 0 16px;

  &:hover {
    cursor: pointer;
  }
`;

const FilterComponent = ({ filterText, onFilter, onClear }) => (
  <>
    <TextField
      id="search"
      type="text"
      placeholder="Filter By Name"
      aria-label="Search Input"
      value={filterText}
      onChange={onFilter}
    />
  </>
);

export const Filtering = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    setData(storedData || []);
  }, []);

  useEffect(() => {
    setData(props.info);
  }, [props.info]);

  const [filterText, setFilterText] = React.useState("");

  const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState(false);

  const columns = [
    {
      name: "First Name",
      selector: (row) => row.firstName,
      sortable: true,
    },
    {
      name: "Last Name",
      selector: (row) => row.lastName,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Phone",
      selector: (row) => row.phone,
      sortable: true,
    },
    {
      name: "Gender",
      selector: (row) => row.gender,
      sortable: true,
    },
    {
      name: "Country",
      selector: (row) => row.country,
      sortable: true,
    },
    {
      name: "Hobbies",
      selector: (row) => row.hobbies.join(", "),
      sortable: true,
    },
    {
      name: "Languages",
      selector: (row) =>
        row.languages.map((languageObj) => languageObj.language).join(", "),
      sortable: true,
    },

    {
      name: "Action",
      cell: (row, index) => <ButtonComponent user={index} getData={getData} />,
    },
    // {
    //     name:"Image",
    //     selector:(row)=>(
    //         <img height={70} width={80} src="https://source.unsplash.com/random/1920x1080/?people"/>
    //     )
    // }
  ];
  const filteredItems = data.filter(
    (item) =>
      item.firstName &&
      item.firstName.toLowerCase().includes(filterText.toLowerCase())
  );

  const getData = (receivedData) => {
    setData(receivedData);
    console.log("this is edited data" + JSON.stringify(receivedData));
  };

  const subHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);

  return (
    <DataTable
      title="Data List"
      columns={columns}
      data={filteredItems}
      pagination
      paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
      subHeader
      subHeaderComponent={subHeaderComponentMemo}
      selectableRows
      persistTableHead
      customStyles={tableCustomStyles}
    />
  );
};

export default Filtering;
