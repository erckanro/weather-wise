import React from "react";

export const Search = ({ location, setLocation, searchLocation }) => (
  <div className="search">
    <input
      type={` text `}
      value={location}
      onChange={(event) => setLocation(event.target.value)}
      onKeyDown={searchLocation}
      placeholder={` Enter Location `}
    />
  </div>
);

export default Search;
