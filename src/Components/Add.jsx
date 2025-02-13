import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { uploadVideo } from "../services/allApi";

const Add = () => {
  const [video, setVideo] = useState({
    caption: "",
    image: "",
    videoUrl: "",
  });

  const [error, setError] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const seperateYoutubeUrl = (value) => {
    if (value.includes(".be/")) {
      const videoId = value.split("be/")[1];
      setVideo({ ...video, videoUrl: videoId });

      console.log(videoId);
      setError(false);
    } else {
      console.error("invalid utube Link");
      setError(true);
    }
  };
  const handleSave = async () => {
    if (video.caption && video.image && video.videoUrl) {
      try {
        let response = await uploadVideo(video);

        if (response.status >= 200 && response.status <= 300) {
          alert("successfully added the video");
          setShow(false);
          setVideo({ caption: "", image: "", videoUrl: "" });
        } else {
          alert("Error occured contact ADMIN");
        }
      } catch {
        alert("an error occured");
      }
    } else {
      alert("please fill the form");
    }
  };

  return (
    <>
      <div className="">
        <div className="d-flex align-center gap-5 ">
          <h2 className="">Upload videos </h2>{" "}
          <button
            onClick={handleShow}
            className="btn btn-warning rounded-circle"
          >
            <i className="fa-solid fa-plus   fw-bolder fs-5 "></i>
          </button>
        </div>
      </div>
      <Modal centered show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Upload VIdeos</Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{ border: "1px solid white ", borderRadius: "15px" }}
        >
          {" "}
          <div>
            <FloatingLabel
              controlId="floatingInput"
              label="Video Caption"
              className="mb-3 "
            >
              <Form.Control
                onChange={(e) => {
                  setVideo({ ...video, caption: e.target.value });
                }}
                type="text"
                placeholder="Video Caption"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Video image URL"
              className="mb-3"
            >
              <Form.Control
                onChange={(e) => {
                  setVideo({ ...video, image: e.target.value });
                }}
                type="text"
                placeholder="Video image URL"
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label="Youtube Link"
              className="mb-3"
            >
              <Form.Control
                onChange={(e) => seperateYoutubeUrl(e.target.value)}
                type="text"
                placeholder="Youtube Link"
              />
            </FloatingLabel>
            {error ? (
              <div>
                <p className="text-danger">invalid url link</p>
              </div>
            ) : (
              ""
            )}
          </div>{" "}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Add;
