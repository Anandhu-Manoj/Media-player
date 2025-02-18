import React, { useState } from "react";
import Add from "../Components/Add";
import { Link } from "react-router-dom";
import Allvideos from "../Components/Allvideos";
import Catogories from "../Components/Catogories";

const Home = () => {
  const [videoResponse,setVideoResponse]=useState("")
  return (
    
    <div className="container">
      <div className=" d-flex justify-content-between py-5">
        <div>
          < Add setVideoResp={setVideoResponse} />
        </div>
        <div>
          <Link to={"/history"} style={{textDecoration:"none"}}>watch History</Link>
        </div>
       
      </div >
      <div className="row">
      <div className="col-6">
      <Allvideos videoResp={videoResponse} />
      </div>
      <div className="col-6">
        <Catogories/>
      </div>
      </div>
      
      
    </div>
  );
};

export default Home;
