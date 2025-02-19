import React from "react";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Allvideos from "./Allvideos";
import {
  createCatogary,
  deleteCategory,
  getCatogory,
  getSingleVideo,
} from "../services/allApi";
import { data } from "react-router-dom";

const Catogories = () => {
  const [show, setShow] = useState(false);
  const [categoryName, setCategory] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [data, setData] = useState([]);

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
        getNewCatogory();
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("please fill the form");
    }
  };
  const getNewCatogory = async () => {
    try {
      const serverResp = await getCatogory();
      console.log(serverResp);
      setData(serverResp.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(data);
  useEffect(() => {
    getNewCatogory();
  }, []);
  const onDeleteClick = async (id) => {
    try {
      await deleteCategory(id);
      getNewCatogory();
    } catch (error) {
      console.error("Error deleting category:", error);
      alert("Error deleting category. Please try again.");
    }
  };
  const dragOverContent = (e) => {
    e.preventDefault();
  };

  const dropped = async(e, data) => {
    let vId=(e.dataTransfer.getData("videoDetails"));
    console.log(data);
   let response= await getSingleVideo(vId)
   console.log(response.data)
  };

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
        {data.length > 0 ? (
          data.map((val, index) => (
            <div
              onDragOver={(e) => dragOverContent(e)}
              onDrop={(e) => dropped(e, val)}
              key={index}
              style={{ minHeight: "200px" }}
              className="container-fluid border border-2 rounded mt-3"
            >
              <div className="d-flex justify-content-between">
                <h4>{val.categoryName}</h4>
                <button
                  onClick={() => onDeleteClick(val.id)}
                  className="btn text-danger "
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
            </div>
          ))
        ) : (
          <h1 className="text-danger">No catogery found</h1>
        )}
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
