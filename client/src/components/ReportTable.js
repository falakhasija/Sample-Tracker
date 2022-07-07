import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

let fileDownload = (cell, row, rowIndex, formatExtraData) => {
  if(cell){
    return (
      <Button
        onClick={() => {
          fetch("https://patient-sample-tracker-backend-urtjok3rza-wl.a.run.app"+cell, {
          method:"GET",
          mode: 'cors',
          credentials: 'include',
        })
        .then(response => response.blob())
        .then(blob => {
          console.log(blob);
          const url = window.URL.createObjectURL(
            new Blob([blob]),
          );
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute(
            'download',
            `Report.pdf`,
          );
      
          // Append to html link element page
          document.body.appendChild(link);
      
          // Start download
          link.click();
      
          // Clean up and remove the link
          link.parentNode.removeChild(link);

        })
        .catch((error) => {
          console.error('Error:', error);
        });
        }}
      >
        Download
      </Button>
    );
  }
  else{
    return (
      <p>Report unavailable</p>
    );
  }
};

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
    dataField: "file",
    text: "Sample Report",
    formatter: fileDownload,
  },

];

function ReportTable(){

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
export default ReportTable
