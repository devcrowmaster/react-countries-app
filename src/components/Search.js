import React, { useContext } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { BackgroundElement, InputText } from "../utils/theme";
import { CountriesContext } from "../context/countryContext";

const Search = () => {
  const { searchTerm, setSearchTerm } = useContext(CountriesContext);
  const handleSearch = (e) => setSearchTerm(e.target.value);

  return (
    <SearchWrapper>
      <InputSearch
        placeholder="Search for a country..."
        aria-label="Input to search for any country by name"
        value={searchTerm}
        onChange={handleSearch}
      />
      <FaSearch size="16px" />
    </SearchWrapper>
  );
};

const InputSearch = styled.input`
  width: 100%;
  box-shadow: 0 0px 3px 1px rgba(0, 0, 0, 0.1);
  font-family: inherit;
  padding: 0 32px 0 80px;
  background-color: ${BackgroundElement};
  border: none;
  border-radius: 5px;
  height: 56px;
  color: inherit;
  
  &::placeholder {
    color: ${InputText};
    opacity: 0.8;
  }
`;

const SearchWrapper = styled.div`
  display: flex;
  flex: 1;
  position: relative;
  max-width: 400px;

  svg {
    color: ${InputText};
    position: absolute;
    top: calc(50% - 8px);
    left: calc(40px - 8px);
  }
`;

export default Search;
