import React from 'react'

const SearchBar = (props) => {
  const { label, onInput, type, value} = props;
  return (
    <form className = "flex items-center m-auto p-[20px] w-[fit-content]">
      <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={label}>
            {label}
          </label>
          <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id={label}
              type={type}
              placeholder={label ? `Search by ${label}` : 'Search'}
              onInput={onInput}
              value={value}
          />
      </div>
    </form>
  )
}

export default SearchBar;