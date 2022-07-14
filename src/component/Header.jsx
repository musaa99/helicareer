import React, { useState } from 'react';

import SearchBar from './SearchBar';

const Header = (props) => {
  const {searchAll, lists} = props;

  return (
    <>
      <div className='w-full'>
          <SearchBar
              label="Search"
              onInput={searchAll}
              type="search"
          />
      </div>
      <div className='grid lg:flex'>
          <SearchBar />
          <SearchBar />
          <SearchBar />
          <SearchBar />
      </div>
    </>
  )
}

export default Header;