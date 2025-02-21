import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";

import Card from "react-bootstrap/Card";
import { addHistory, deleteVideo, getAllVideo,uploadVideo ,getSingleCatogory, updateCatogory} from "../services/allApi";

const Allvideos = ({ videoResp,videoDeletedResponse,setcategoryVideoDeletedResponse }) => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [selectedVideos, setSelectedVideos] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = async (video) => {
    const { caption, videoUrl } = video;
    let date = new Date();
    let foramatedDate = date.toLocaleString("en-IN", { timeZoneName: "short" });

    const payLoad = { caption, videoUrl, foramatedDate };
    try {
      await addHistory(payLoad);
    } catch (error) {
      console.log(error);
    }

    setSelectedVideos(video);
    setShow(true);
  };

  const getVideos = async () => {
    try {
      let apiResponse = await getAllVideo();
      console.log(apiResponse);
      if (apiResponse.status >= 200 && apiResponse.status <= 300) {
        setData(apiResponse.data);
      } else {
        console.log("contact Admin");
      }
    } catch {
      alert("error occurred");
    }
  };

  console.log(data);
  useEffect(() => {
    getVideos();
  }, [videoResp,videoDeletedResponse]);
  const onDeleteClick = async (id) => {
    try {
      await deleteVideo(id);
      getVideos();
    } catch (error) {
      console.log(error);
    }
  };
  const onVideoDrag = (e, id) => {
    console.log(e, id);
    e.dataTransfer.setData("videoDetails", id);
  };
  const onDragOverDiv=(e)=>{
    e.preventDefault()
  }
  const onVideoDrop=async(e)=>{
    let {categoryId,videoObj}=JSON.parse(e.dataTransfer.getData("fromCategoryVideo"))
    console.log(categoryId,videoObj)
   await uploadVideo(videoObj);
   getVideos()
   let apiResponse=await getSingleCatogory(categoryId)

   console.log(apiResponse.data,"catagory details")
   let currentAllVideos=apiResponse.data.Allvideos

   let sortedVideos=currentAllVideos.filter((item)=>item.id!=videoObj.id)
   
   const payLoad={
    id:categoryId,
    categoryName:apiResponse.data.categoryName,
    Allvideos:sortedVideos
   }
   let deletResponse=await updateCatogory(categoryId,payLoad)
   setcategoryVideoDeletedResponse(deletResponse)
  }
  return ( 
    <>
      <div onDragOver={(e)=>onDragOverDiv(e)} onDrop={(e)=>onVideoDrop(e)}  style={{minHeight:"300px"}}>
        {" "}
        <h2 className="" style={{ margin: "10px" }}>
          ALL Videos
        </h2>
        <div className="d-flex gap-5 flex-wrap">
          {data.map((a, index) => (
            <Card
              draggable={true}
              onDragStart={(e) => onVideoDrag(e, a.id)}
              key={index}
              style={{ width: "18rem" }}
            >
              <Card.Img
                onClick={() => handleShow(a)}
                key={a.id}
                variant="top"
                style={{ height: "250px" }}
                src={a.image}
              />
              <Card.Body>
                <h6>{index + 1}</h6>
                <div className="d-flex justify-content-between">
                  <Card.Title>{a.caption}</Card.Title>
                  <button
                    className="btn"
                    onClick={() => {
                      onDeleteClick(a.id);
                    }}
                  >
                    <i className="fa-solid fa-trash text-danger"></i>
                  </button>
                </div>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>

      {selectedVideos && (
        <Modal
          show={show}
          onHide={handleClose}
          animation={false}
          size="lg"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title style={{ marginLeft: "auto" }}>
              {selectedVideos.caption}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <iframe
              width="100%"
              height="315"
              src={`https://www.youtube.com/embed/${selectedVideos.videoUrl}?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>{" "}
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
      )}
    </>
  );
};

export default Allvideos;
