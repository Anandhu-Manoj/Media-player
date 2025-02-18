import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { deleteHistory, getAllHistory } from "../services/allApi";


const History = () => {
  const [historyData, setHistoryData] = useState([]);
  console.log(historyData);
  
  useEffect(() => {
    getHistory()
  }, [historyData]);
  const getHistory = async () => {
    try {
      let apiResponse = await getAllHistory();

      setHistoryData(apiResponse.data);
      // console.log(apiResponse.data);
      
    } catch (error) {
      console.log(error);
    }
  };
  const onDeleteClick=async(id)=>{
 try{await deleteHistory(id)
  getHistory()

 }catch(error){
  console.log(error);
  

 }
  }


  return (
    <div>
      <div className="d-flex justify-content-between px-3 py-3 ">
        <div className="">
          <h2>Watch History</h2>
        </div>
        <div className="">
          <Link style={{ textDecoration: "none" }} to={"/home"}>
            back to home
          </Link>
        </div>
      </div>
      <div className="col-12">
        <Table
          striped
          hover
          style={{ backgroundColor: "black", color: "white" }}
        >
          <thead>
            <tr style={{ backgroundColor: "black", color: "white" }}>
              <th className="text-center">#</th>
              <th className="text-center">Caption</th>
              <th className="text-center">Link </th>
              <th className="text-center">Time Stamp</th>
              <th className="text-center">Clear</th>
            </tr>
          </thead>
          <tbody>
            {historyData.length > 0
              ? historyData.map((value, index) => (
                  <tr key={index}>
                    <td className="text-center">{index + 1}</td>
                    <td className="text-center">{value.caption}</td>
                    <td className="text-center">
                      <Link style={{textDecoration:'none'}}
                        to={`https://www.youtube.com/watch?v=${value.videoUrl}`}
                      >https://www.youtube.com/watch?v=${value.videoUrl}</Link>
                    </td>
                    <td className="text-center">{value.foramatedDate}</td>
                    <td className="text-center">
                      <button onClick={()=>onDeleteClick(value.id)} className="btn text-danger ">
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </td>
                  </tr>
              ))
              : <div className="border border-2 text-warning text-center">No history found</div>}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default History;
