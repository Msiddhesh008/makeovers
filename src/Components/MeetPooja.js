import React from "react";
import pooja4 from "../images/pooja5.jpg";

const MeetPooja = () => {
  return (
    <div id="meetPooja" className="container-fluid bg-white">
      <div className="container">
        <div className="row pb-5">
          <div className=" hello-beautifull col-12 text-center p-5">
            <h1>HELLO BEAUTIFULL!</h1>
          </div>
          <div className="col-lg-6 col-12 meet-col-left">
            <img src={pooja4} className="img pooja" alt="" />
          </div>
          <div className="col-lg-5 col-11 p-lg-5 p-4 about-content">
            <h2>Pooja Sawant</h2>
            <p>
              A certified profession makeup artist with more then 10 years of
              experience in beauty and makeup .I have learnt from my clients
              especially my brides one universal rule: women want to look fresh,
              flawless , radiant and beautiful on their special Day.It’s this
              principle that drives a signature style that is feminine and
              natural yet in keeping with modern style inspiration drawn from my
              many creative sources.
            </p>
            <p className="contactBtn ps-4 pt-1 pb-1 pe-4 fw-normal text-white">
              Contact
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetPooja;
