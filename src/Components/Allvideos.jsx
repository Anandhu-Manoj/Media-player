import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

import Card from "react-bootstrap/Card";

const Allvideos = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div>
        {" "}
        <h2 className="" style={{ margin: "10px" }}>
          ALL Videos
        </h2>
        <Card style={{ width: "18rem" }} onClick={handleShow}>
          <Card.Img
            variant="top"
            style={{ height: "250px" }}
            src="https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202309/thalapathy-vijay-leo-tamil-poster-out-203320686-1x1.jpg?VersionId=Cq.urUGEHbf1ZoJlVdM3H6d42UdwCVrh"
          />
          <Card.Body>
            <div className="d-flex justify-content-between">
              <Card.Title>Card Title</Card.Title>
              <button className="btn">
                <i className="fa-solid fa-trash text-danger"></i>
              </button>
            </div>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        animation={false}
        size="lg"
        centered
        
      >
        <Modal.Header closeButton >
          <Modal.Title style={{marginLeft:"auto"}} >Upload VIdeos</Modal.Title>
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
