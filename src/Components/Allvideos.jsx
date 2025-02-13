import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";

import Card from "react-bootstrap/Card";
import { getAllVideo } from "../services/allApi";


const Allvideos = () => {
  
const [show, setShow] = useState(false);
const [data, setData] = useState([]);

  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const getVideos = async () => {
    try {
      let apiResponse = await getAllVideo();
      console.log(apiResponse);
      if(apiResponse.status>=200&&apiResponse.status<=300){
        setData(apiResponse.data)
      }else{
        console.log("contact Admin");
        
      } 
      
    } catch {
      alert("error occurred")
    }

    
    
  };

  console.log(data)
  useEffect(() => {
    getVideos();
  },[]);
  return (
    <>
      <div>
        {" "}
        <h2 className="" style={{ margin: "10px" }}>
          ALL Videos
        </h2>
        <div className="d-flex gap-2 flex-wrap">
        {
          data.map((a)=>(
            <Card style={{ width: "18rem" }} onClick={handleShow} key={a.id}>
          <Card.Img
            variant="top"
            style={{ height: "250px" }}
            src={a.image}
          />
          <Card.Body>
            <div className="d-flex justify-content-between">
              <Card.Title>{a.caption}</Card.Title>
              <button className="btn">
                <i className="fa-solid fa-trash text-danger"></i>
              </button>
            </div>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
          ))
        }
        </div>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        animation={false}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ marginLeft: "auto" }}>
            Upload VIdeos
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/Po3jStA673E?si=8PHrIdS-X4hM2cS2-&autoplay=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>{" "}
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default Allvideos;
