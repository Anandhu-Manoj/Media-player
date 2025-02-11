import React from "react";
import Add from "../Components/Add";
import { Link } from "react-router-dom";
import Allvideos from "../Components/Allvideos";
import Catogories from "../Components/Catogories";

const Home = () => {
  return (
    <div className="container">
      <div className=" d-flex justify-content-between py-5">
        <div>
          < Add />
        </div>
        <div>
          <Link to={"/history"} style={{textDecoration:"none"}}>watch Histoey</Link>
        </div>
       
      </div >
      <div className="row">
      <div className="col-6">
      <Allvideos/>
      </div>
      <div className="col-6">
        <Catogories/>
      </div>
      </div>
      
      
    </div>
  );
};

export default Home;
