import React from "react";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import ButtonComponent from "./ButtonComponent";

const ReactTable = (props) => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState([]);
  const [tableData, setTableData] = useState(props.info);
  //   useEffect(()=>{
    //     setTableData(JSON.parse(localStorage.getItem("userData")));
    //   },[])
    const [filterText, setFilterText] = React.useState("");
    const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState(false);
    const data = tableData;
    const filteredItems = data.filter(
    (item) =>
      item.name && item.name.toLowerCase().includes(filterText.toLowerCase())
  );
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
  useEffect(() => {
    setTableData(props.info);
  }, [props.info]);

  const columns = [
    {
      name: "First Name",
      selector: (row) => row.firstName,
    },
    {
      name: "Last Name",
      selector: (row) => row.lastName,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Phone",
      selector: (row) => row.phone,
    },
    {
      name: "Gender",
      selector: (row) => row.gender,
    },
    {
      name: "Country",
      selector: (row) => row.country,
    },
    {
      name: "Hobbies",
      selector: (row) => row.hobbies.join(", "),
    },
    {
      name: "Languages",
      selector: (row) =>
        row.languages.map((languageObj) => languageObj.language).join(", "),
    },

    {
      name: "Action",
      cell: (row) => <ButtonComponent />,
    },
    // {
    //     name:"Image",
    //     selector:(row)=>(
    //         <img height={70} width={80} src="https://source.unsplash.com/random/1920x1080/?people"/>
    //     )
  ];
    // }
  return (
    <DataTable
      title="Contact List"
      columns={columns}
      data={filteredItems}
      pagination
      paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
      subHeader
      subHeaderComponent={subHeaderComponentMemo}
      selectableRows
      persistTableHead
    />
  );
};

export default ReactTable;
