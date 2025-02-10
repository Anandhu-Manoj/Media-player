import React from "react";
import { Link } from "react-router-dom";
import musicimg from "../assets/images/musicimg.gif";
import Card from "react-bootstrap/Card";
import cardimg1 from "../assets/images/card1.avif";
import cardimg2 from "../assets/images/card2img.avif";
import cardimg3 from "../assets/images/card3img.jpg";
const Content = () => {
  return (
    // startingpart
    <div className="container   align-items-center">
      <div className="row">
        <div className="col-5 text-align-justify" style={{ marginTop: "80px" }}>
          {" "}
          <h3>
            Welcome To <span className="text-warning ">MEDIA PLAYER</span>
          </h3>
          <p style={{textAlign:"justify"}}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
            optio, ea voluptas tempore eum repellat dignissimos officia fugit
            amet, corporis asperiores. Consectetur eos sit placeat rem veniam
            provident, adipisci magni!
          </p>
          <Link to={"/home"} className="btn btn-info">
            Get started
          </Link>
        </div>
        <div className="col-1"></div>
        <div className="col-6">
          <img src={musicimg} alt="" />
        </div>
      </div>

      <div className="row mt-5 ">
        <h1 className="text-center mt-5">Features</h1>
        <div className="d-flex justify-content-around mt-5">
          <div className="col4">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                style={{ height: "300px" }}
                src={cardimg1}
              />
              <Card.Body>
                <Card.Title>Play Everything</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col4">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                style={{ height: "300px" }}
                src={cardimg2}
              />
              <Card.Body>
                <Card.Title>Catogorize vedios</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col4">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                style={{ height: "300px" }}
                src={cardimg3}
              />
              <Card.Body>
                <Card.Title>Manage History</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <div className="row m-5 border p-5 align-items-center">
        <div className="col-5">
          <h3 className="text-warning ">Simple,Fast AND Powerfull</h3>
          <br />
          <p style={{textAlign:"justify"}}>
            <span className="fs-5 bolder m-2">Play Everything</span>Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Quas nam veniam illum
           
          </p>
          <p style={{textAlign:"justify"}}>
            <span className="fs-5 bolder m-2">Catogarize Vedios</span>Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Quas nam veniam illum
           
          </p>
          <p style={{textAlign:"justify"}}>
            <span  className="fs-5 bolder m-2">Manage History</span> Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Quas nam veniam illum
           
          </p>
        </div>
        <div className="col-1"></div>
        <div className="col-6 align-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ZdMZ40GSVmc?si=RGgfWitsJ4wI9a5e"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Content;
