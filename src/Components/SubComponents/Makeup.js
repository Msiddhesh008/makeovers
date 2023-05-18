import React from "react";

const Makeup = ({ link, title, li1, li2, li3, li4, price }) => {
  return (
    <div className="row justify-content-center mb-5">
      <div className="makeupshowcase-col-left col-lg-4 col-12">
        <img src={link} className="object-fit-cover " alt="..." />
      </div>
      <div className="bg-white makeupshowcase-col-right  p-lg-5 p-4 col-lg-4 col-12">
        <h2 className="fw-normal">{title}</h2>
        <br />
        <ul>
          <li>{li1}</li>
          <li>{li2}</li>
          <li>{li3}</li>
          <li>{li4}</li>
          <br />

          <p className="fw-bold">{price}</p>
        </ul>
        <br />

        <p className="contactBtn ps-4 pt-1 pb-1 pe-4 fw-normal text-white">
          Contact
        </p>
      </div>
    </div>
  );
};

export default Makeup;
