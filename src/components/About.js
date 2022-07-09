import React from "react";
import { useState } from "react";

export default function About() {
  const [myStyle, setmystyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [btntxt, setbtntxt] = useState("Enable dark mode");

  const togglemode = () => {
    if (myStyle.color === "black") {
      setmystyle({
        color: "white",
        backgroundColor: "black",
      });
      setbtntxt("Enable light mode");
    } else {
      setmystyle({
        color: "black",
        backgroundColor: "white",
      });
      setbtntxt("Enable dark mode");
    }
  };

  return (
    <div className="container my-3 " style={myStyle}>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
              style={myStyle}
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={myStyle}>
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> className. This is
              the first item's accordion body. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Officiis unde culpa consectetur nisi
              sit dolores expedita doloribus, suscipit et autem molestias quidem
              ullam nam asperiores impedit accusamus enim animi soluta ipsa
              delectus! Iste, rem! Quisquam cum ut eius adipisci iure repellat
              optio quod possimus obcaecati, quasi beatae. Consequuntur nostrum
              laudantium quidem placeat perspiciatis quod voluptatem.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
              style={myStyle}
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={myStyle}>
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> className. This is
              the second item's accordion body. Let's imagine this being filled
              with some actual content. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Commodi, reprehenderit quasi. Quod, hic,
              aspernatur facere labore possimus, optio ex perspiciatis iusto at
              fugit voluptates iure. Officia laborum dolor aliquid ipsam quod
              corrupti placeat consequatur numquam.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
              style={myStyle}
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={myStyle}>
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> className. This is
              the third item's accordion body. Nothing more exciting happening
              here in terms of content, but just filling up the space to make it
              look, at least at first glance, a bit more representative of how
              this would look in a real-world application. Lorem ipsum dolor sit
              amet consectetur, adipisicing elit. Quam maiores, nobis voluptates
              accusamus eos nihil deserunt eveniet nostrum iste quaerat nisi
              ipsum fugiat. A numquam sapiente quam adipisci facilis quidem
              minima accusantium vitae fugiat necessitatibus?
            </div>
          </div>
        </div>
      </div>
      <div className="btn btn-primary" onClick={togglemode}>
        {btntxt}
      </div>
    </div>
  );
}
