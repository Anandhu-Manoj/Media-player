import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

const Add = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
   <> 
    <div className=''>
      <div className="d-flex align-center gap-5 ">
        <h2 className="">Upload videos </h2>{" "}
        <button onClick={handleShow} className="btn btn-warning rounded-circle">
          <i className="fa-solid fa-plus   fw-bolder fs-5 "></i>
        </button>
      </div>
    </div>
     <Modal centered  show={show} onHide={handleClose} animation={false} >
     <Modal.Header closeButton>
       <Modal.Title>Upload VIdeos</Modal.Title>
     </Modal.Header>
     <Modal.Body style={{border:"1px solid white ",borderRadius:"15px"}}> <div><FloatingLabel
        controlId="floatingInput"
        label="Video Caption"
        className="mb-3 "
        
      >
        <Form.Control type="text" placeholder="Video Caption" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Video image URL"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Video image URL" />
      </FloatingLabel>
      
      <FloatingLabel
        controlId="floatingInput"
        label="Youtube Link"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Youtube Link" />
      </FloatingLabel></div> </Modal.Body>
     <Modal.Footer>
       <Button variant="secondary" onClick={handleClose}>
         Close
       </Button>
       <Button variant="primary" onClick={handleClose}>
         Save Changes
       </Button>
     </Modal.Footer>
   </Modal>
   </>
  );
};

export default Add;
