import React from "react";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import ButtonComponent from "../ButtonComponent";

const ReactTable = (props) => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState([]);
  const [tableData, setTableData] = useState(props.info);
  //   useEffect(()=>{
  //     setTableData(JSON.parse(localStorage.getItem("userData")));
  //   },[])
  useEffect(() => {
    setTableData(props.info);
  }, [props.info]);

  useEffect(() => {
    const result = data.filter((item) => {
      return item.firstName.toLowerCase().includes(search.toLowerCase());
    });

    const getData = (receivedData) => {
      setTableData(receivedData);
      console.log("this is edited data" + JSON.stringify(receivedData));
    };

    setFilter(result);
  }, [search]);
  const handleDelete = (val) => {
    const newdata = data.filter((item) => item.id !== val);
    setFilter(newdata);
  };
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
      cell: (row, index) => <ButtonComponent user={row} />,
    },
    // {
    //     name:"Image",
    //     selector:(row)=>(
    //         <img height={70} width={80} src="https://source.unsplash.com/random/1920x1080/?people"/>
    //     )
    // }
  ];
  const data = tableData;
  return (
    <div>
      <DataTable
        columns={columns}
        data={data}
        pagination
        highlightOnHover
        subHeader
        subHeaderComponent={
          <input
            type="text"
            className="w-25 form-control"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        }
        subHeaderAlign="right"
      />
    </div>
  );
};

export default ReactTable;
