import React, { useState } from 'react';


import { useQuery } from "@apollo/client";
import { useEffect } from 'react';

import FILMS_QUERY from '../data';

import Header from './Header';
import Main from './Main';

const Home = () => {

  const { data, loading, error } = useQuery(FILMS_QUERY);
  const [launchData, setLaunchData] = useState([]);

  useEffect(() => {
    if(!loading) {
      Object.keys(data).map((x, y)=> {
        setLaunchData(data[x]);
        // console.log('data[x]', data[x]);
      })
    }
  }, [data]);



  return (
    <React.Fragment>
      <div className="w-auto mx-auto text-center">
        <Header />
        <Main data={launchData} />
    </div>
    </React.Fragment>
  )
}

export default Home