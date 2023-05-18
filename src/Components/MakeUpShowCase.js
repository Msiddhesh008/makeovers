import React from "react";
import Makeup from "./SubComponents/Makeup";

const MakeUpShowCase = () => {
  return (
    <div id="makeupshowcase" className="container-fluid">
      <div className="container">
        <div className="row justify-content-center">
          <div className=" hello-beautifull col-12 text-center p-5">
            <h1>Bridal Makeup for All Skin Types</h1>
          </div>

          <Makeup
            link="https://static.wixstatic.com/media/6b433e_42628323c8f546379e7db555eacce9e4~mv2.jpg/v1/crop/x_1360,y_0,w_3568,h_4014/fill/w_480,h_540,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/shutterstock_401702617.jpg"
            title="Wedding / Bridal Makeup"
            li1="Makeup"
            li2="Hair style"
            li3="Hair accessorising"
            li4="Draping"
            price="Starting Rs. 9,999/-"
          />

          <Makeup
            link="https://static.wixstatic.com/media/5fe762_84bca0bddc4845339fc888d49e991fa1~mv2.jpg/v1/crop/x_0,y_108,w_3691,h_4152/fill/w_480,h_540,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/shutterstock_1415488691.jpg"
            title="Bridal HD Makeup"
            li1="Hair style for Wedding"
            li2="Hair accessorising"
            li3="Draping"
            li4="Bridal HD Makeup"
            price="Starting Rs. 11,999/-"
          />

          <Makeup
            link="https://static.wixstatic.com/media/5fe762_f814db7d420f403b99860a63dcd99e3e~mv2.jpg/v1/crop/x_1712,y_0,w_3448,h_2895/fill/w_480,h_540,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/shutterstock_1797823024.jpg"
            title="Bridal Air Brush Makeup"
            li1="Makeup"
            li2="Hair style"
            li3="Hair accessorising"
            li4="Draping"
            price="Starting Rs. 14,999/-"
          />

          <Makeup
            link="https://static.wixstatic.com/media/6b433e_8abd6b89209c4078b1ea5797c2f9c221~mv2.jpg/v1/crop/x_598,y_0,w_3293,h_3705/fill/w_480,h_540,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/shutterstock_515086057.jpg"
            title="Party/ Pre-Wedding Makeup"
            li1="Makeup"
            li2="Hair style"
            li3="Hair accessorising"
            li4="Draping"
            price="Starting Rs. 4,999/-"
          />

          <Makeup
            link="https://static.wixstatic.com/media/6b433e_35d4e9b20a424478b3f1d4d868bb68fc~mv2.jpg/v1/crop/x_0,y_0,w_4000,h_3145/fill/w_480,h_540,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/shutterstock_1068325997.jpg"
            title="Model Photo shoot  Makeup"
            li1="Makeup"
            li2="Hair style"
            li3="Hair accessorising"
            li4="Draping"
            price="Starting Rs. 4,999/-"
          />

          <Makeup
            link="https://static.wixstatic.com/media/6b433e_a79ee3903f7f409a8b0a11616c7bb19f~mv2.jpg/v1/fill/w_480,h_540,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/shutterstock_217110115.jpg"
            title="Fashion Makeup - For Fashion Show"
            li1="Makeup"
            li2="Hair style"
            li3="Hair accessorising"
            li4="Draping"
            price="Starting Rs. 3,999/-"
          />
        </div>
      </div>
    </div>
  );
};

export default MakeUpShowCase;
