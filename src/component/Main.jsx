import React, { useState } from "react";
//  import "../assets/styles/Home/HowCard.css"
//  import "../assets/styles/Home/card.sass"
//  import "../assets/styles/Home/work.scss"

import GroupOne from "../asset/HowItWorks/group_two.svg";
// import GroupTwo from "../assets/images/Home/HowItWorks/group_two.svg";
// import GroupThree from "../assets/images/Home/HowItWorks/group_three.svg";

const Main = (props) => {
const {data, searchList, searchByID, searchByName } = props;

  let searchedData = [];

  if(data.length > 0) {
    searchedData  = data.filter(x => {
      const userInputAll = searchList.toLowerCase();
      const userInputID = searchByID.toLowerCase();
      const userInputName = searchByName.toLowerCase();
      const valueOne = x.mission_name.toLowerCase();
      const valueThree = x.id.toLowerCase();
      const valueFour = x.launch_year.toLowerCase();

      if(searchList) {
        const isData = valueOne.includes(userInputAll)
            || valueFour.includes(userInputAll)
            || valueThree.includes(userInputAll)
        ;
        return isData;
      }
      else if(searchByID) {
          const isData = valueThree.includes(userInputID);
          return isData;
      }
      else if(searchByName) {
          const isData = valueOne.includes(userInputName);
          return isData;
      }
      else {
        return data
      }
    });
  }

  return (
      <div>
        {searchedData.length > 0  && searchedData.map((x) => (
            <div className="how__cards">
              <div className="py-5">
                <h1 className=" text-start "> {x.launch_date_local} </h1>
                  <div className=" grid lg:flex items-center">
                    <div>
                      <img src={GroupOne} alt="Group one" />
                    </div>
                    <h5 className="" >Mission Name - {x.mission_name}</h5>
                    <h5 className="" >ID - {x.id}</h5>
                    <p>
                      {x.launch_site.site_name_long}
                    </p>
                  </div>
              </div>
              <hr />
            </div>
        ))}
        {searchedData.length === 0 &&
          <>
            {searchList &&
                <p>Data not found for: { searchList }</p>
            }
            {searchByID &&
                <p>No record exists with ID: { searchByID }</p>
            }
            {searchByName &&
                <p>No mission name found for: { searchByName }</p>
            }
          </>
        }
      </div>
);
};

export default Main;
