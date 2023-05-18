import React from "react"
import "./FloatButton.css"
import { Link } from "react-router-dom";

const FloatButton = () => {
  return (
    <div className="fab-wrapper">
      <input id="fabCheckbox" type="checkbox" className="fab-checkbox" />
      <label className="fab" htmlFor="fabCheckbox">
        <span className="fab-dots fab-dots-1"></span>
        <span className="fab-dots fab-dots-2"></span>
        <span className="fab-dots fab-dots-3"></span>
      </label>
      <div className="fab-wheel">
        <Link to="tel:+917276656967" className="fab-action fab-call fab-action-1">
        <i className="bi bi-telephone-outbound-fill"></i>
        </Link>
        <Link to="sms:+917276656967" className="fab-action fab-tel  fab-action-2">
        <i className="bi bi-chat-dots-fill"></i>
        </Link>
        <Link to="https://wa.me/+917276656967?text=%20Hello%20Miss%20Pooja%20" className="fab-action fab-action-3 fab-whatsapp" >
        <i className="bi bi-whatsapp"></i>
        </Link>
        
        <Link className="fab-action fab-info fab-action-4">
        <i className="bi bi-info-circle"></i>
        </Link>
      </div>
    </div>
  );
};

export default FloatButton;