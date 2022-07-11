import React from "react";
//  import "../assets/styles/Home/HowCard.css"
//  import "../assets/styles/Home/card.sass"
//  import "../assets/styles/Home/work.scss"



import GroupOne from "../asset/HowItWorks/group_two.svg";
// import GroupTwo from "../assets/images/Home/HowItWorks/group_two.svg";
// import GroupThree from "../assets/images/Home/HowItWorks/group_three.svg";

const HowCards = () => {
  return (
    <div className="how__cards">
      <h1 className=" text-start ">11/11/2022</h1>
     
      <hr />
      <div className="">
        <div className="flex items-center">
          <img src={GroupOne} alt="Group one" />
          <h5 className="" >Step 1 - Get your link</h5>
          <p>
            Get your referral code Register and copy referral links or QR codes.
          </p>
        </div>
       
       
      </div>
    </div>
  );
};

export default HowCards;
