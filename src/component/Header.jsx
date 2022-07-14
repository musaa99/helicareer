import React, { useState } from 'react';

import SearchBar from './SearchBar';

const Header = (props) => {
  const { searchAll, onChangeAll, onInputAll, onInputID, onInputName } = props;
  const [searchListu, setSearchListu] = useState('89');


  return (
    <>
      <div className='w-full'>
          <SearchBar
              label="General"
              onInput={(e) => onInputAll(e)}
              type="search"
          />
      </div>
      <div className='grid lg:flex'>
          <SearchBar
              label="Search By ID"
              onInput={(e) => onInputID(e)}
              // onChangeAll={(e) => onChangeAll(e)}
              type="search"
              // value={searchAllValue}
          />
          <SearchBar
              label="Search By Mission Name"
              onInput={(e) => onInputName(e)}
              // onChangeAll={(e) => onChangeAll(e)}
              type="search"
              // value={searchAllValue}
          />
      </div>
    </>
  )
}

export default Header;