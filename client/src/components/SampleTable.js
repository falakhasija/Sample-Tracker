import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import React, { useState, useEffect } from "react";

const columns1 = [
  {
    dataField: "sampleId",
    text: "Sample ID",
  },
  {
    dataField: "date",
    text: "Sample Date",
  },
  {
    dataField: "status",
    text: "Sample Status",
  },

];

function SampleTable(){

  const [data, setData] = useState([]);
  
  useEffect(() => {
    const number = localStorage.getItem('username')
    let payload = {"number":number}
    fetch("https://patient-sample-tracker-backend-urtjok3rza-wl.a.run.app/details/", {
      method:"POST",
      mode: 'cors',
      credentials: 'include',
      body: JSON.stringify(payload),
      headers:{
        "Content-Type":"application/json",

      },
    })
    .then(response => response.json())
    .then(res => {
      setData(res.data);
      console.log(res.data)
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }, []);

  const pagination = paginationFactory({
    sizePerPage: 4,
  });

  return (
    <BootstrapTable
      keyField="id"
      data={data}
      columns={columns1}
      striped
      hover
      condensed
      pagination={pagination}
    />
  );

}
export default SampleTable
