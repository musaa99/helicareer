import React, { useState } from "react";
//  import "../assets/styles/Home/HowCard.css"
//  import "../assets/styles/Home/card.sass"
//  import "../assets/styles/Home/work.scss"

import GroupOne from "../asset/HowItWorks/group_two.svg";
// import GroupTwo from "../assets/images/Home/HowItWorks/group_two.svg";
// import GroupThree from "../assets/images/Home/HowItWorks/group_three.svg";

const Main = (props) => {
const {data} = props;

const [searchList, setSearchList] = useState('');

  // console.log('Data11', data);

  if(data.length > 0) {
    data.filter(x => {
      const valueOne = x.mission_name.toLowerCase();
      const valueTwo = searchList.toLowerCase();

      if(searchList) {
        // const isData = data.mission_name.toLowerCase().includes(searchList.toLowerCase());
        const isData = valueOne.includes(valueTwo);
        // const isData = data.mission_name.toLowerCase().includes(searchList.toLowerCase()) || data.banner.toLowerCase().includes(searchList.toLowerCase());
        return isData;
      }
      else {
        return data
      }
    });
  }

  return (
      <div>
        {data.length > 0  && data.map((x) => (
            <div className="how__cards">
              <div className="py-5">
                <h1 className=" text-start "> {x.launch_date_local} </h1>
                  <div className=" grid lg:flex items-center">
                    <div>
                      <img src={GroupOne} alt="Group one" />
                    </div>
                    <h5 className="" >Mission Name - {x.mission_name}</h5>
                    <p>
                      {x.launch_site.site_name_long}
                    </p>
                  </div>
              </div>
              <hr />
            </div>
        ))}
      </div>
);
};

export default Main;
