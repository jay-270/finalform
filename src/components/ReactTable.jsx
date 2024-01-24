import React from "react";
import DataTable from "react-data-table-component";

const ReactTable = () => {
    const tableData=JSON.parse(localStorage.getItem("userData"));
    const column={
        
    }
  return (
    <div>
      <DataTable></DataTable>
    </div>
  );
};

export default ReactTable;
