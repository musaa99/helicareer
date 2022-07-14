import React, { useState } from 'react';


import { useQuery } from "@apollo/client";
import { useEffect } from 'react';

import FILMS_QUERY from '../data';

import Header from './Header';
import Main from './Main';

const Home = () => {

  const { data, loading, error } = useQuery(FILMS_QUERY);

  const [launchData, setLaunchData] = useState([]);

  const [searchList, setSearchList] = useState('');
  const [searchByID, setSearchByID] = useState('');
  const [searchByName, setSearchByName] = useState('');


  useEffect(() => {
    if(!loading) {
      Object.keys(data).map((x, y)=> {
        setLaunchData(data[x]);
      })
    }
  }, [data]);


  return (
    <React.Fragment>
      {loading &&
        <p> please wait, loading.....</p>
      }
      {error &&
        <p> oops!, something went wrong, please reload </p>
      }
      {!loading &&
        <div className="w-auto mx-auto text-center">
          <div className='mx-auto w-[80%]'>
              <Header
                  searchAllValue={searchList}
                  onInputAll= {e => setSearchList(e.target.value)}
                  onInputID= {e => setSearchByID(e.target.value)}
                  onInputName= {e => setSearchByName(e.target.value)}
              />
          </div>
          <div className=' w-[90%] sm:w-[70%] mx-auto'>
              <Main data={launchData}
                  searchList={searchList}
                  searchByID={searchByID}
                  searchByName={searchByName}
              />
          </div>
        </div>
      }
    </React.Fragment>
  )
}

export default Home