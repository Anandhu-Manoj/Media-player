import React from "react";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Allvideos from "./Allvideos";
import { createCatogary, getCatogory } from "../services/allApi";
import { data } from "react-router-dom";


const Catogories = () => {
  const [show, setShow] = useState(false);
  const [categoryName, setCategory] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [data,setData]=useState([])

  const createNewCatogary = async () => {
    if (categoryName) {
      try {
        const category = {
          categoryName,
          Allvideos: [],
        };
        await createCatogary(category);
        setShow(false);
        setCategory("");
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("please fill the form");
    }
  };  
const getNewCatogory=async()=>{
  try {
    const serverResp=await getCatogory()
    console.log(serverResp)
    setData(serverResp.data)
    
  } catch (error) {
    console.log(error);
    
  }
}
console.log(data)
  useEffect(()=>{ 
    getNewCatogory()

  },[])
  return (
    <>
      <div>
        <div className="d-flex ">
          <h2>all Catogories</h2>
          <button
            onClick={handleShow}
            className="btn btn-warning rounded-circle"
          >
            <i className="fa-solid fa-plus   fw-bolder fs-5 "></i>
          </button>
        </div>
        {
          (data.length > 0 ? (
            data.map((val, index) => (
              <div
                key={index}
                className="container-fluid border border-2 rounded mt-3"
              >
                <div className="d-flex justify-content-between">
                  <h4>{val.categoryName}</h4>
                  <button className="btn text-danger ">
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <h1 className="text-danger">No catogery found</h1>
          ))
        }
      </div>
      <Modal centered show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Upload Catogory Details!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{ border: "1px solid white ", borderRadius: "15px" }}
        >
          {" "}
          <div>
            <FloatingLabel
              controlId="floatingInput"
              label="Catogory Name"
              className="mb-3 "
            >
              <Form.Control
                onChange={(e) => setCategory(e.target.value)}
                type="text"
                placeholder="Youtube Link"
              />
            </FloatingLabel>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={createNewCatogary}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Catogories;
