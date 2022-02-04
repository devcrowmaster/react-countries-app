import React, { useContext, useState } from "react";
import styled from "styled-components";
import { ButtonElement } from "./Button";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { BackgroundElement } from "../utils/theme";
import { CountriesContext } from "../context/countryContext";

const options = [
  {
    id: "1",
    option: "Africa"
  },
  {
    id: "2",
    option: "Americas"
  },
  {
    id: "3",
    option: "Asia"
  },
  {
    id: "4",
    option: "Europe"
  },
  {
    id: "5",
    option: "Oceania"
  }
]

const Filter = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)
  const {setFilterByRegion} = useContext(CountriesContext)

  const handleClick = () => setIsOpen(!isOpen);

  const onOptionClicked = value => () => {
    setSelectedOption(value)
    setIsOpen(false)
    setFilterByRegion(value)
  }

  return (
    <>
      <FilterWrapper>
        <ButtonElement  onClick={handleClick}>
          <FilterText>{  selectedOption || "Filter By Region" }</FilterText>
          {isOpen ? <FaAngleUp /> : <FaAngleDown />}
        </ButtonElement>

        { isOpen && (
            <FilterOptions>
              {options.map(({id,option}) => (
                <FilterOption key={id} onClick={onOptionClicked(option)}>{option}</FilterOption>
              ))}
          </FilterOptions>
        ) }
      </FilterWrapper>
    </>
  );
};

const FilterText = styled.span`
  margin-right: 2rem;
  font-size: 14px;
  font-weight: 400;
`;

const FilterWrapper = styled.div`
  max-width: 230px;
  position: relative;
  transition: all 300ms;
`;

const FilterOptions = styled.ul`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  right: 0;
  margin: 0;
  padding: 0;
  list-style: none;
  border-radius: 5px;
  padding: 18px 24px;
  background: ${BackgroundElement};
`;

const FilterOption = styled.li`
  font-size: 14px;
  line-height: 1.8;
  cursor: pointer;
`;

export default Filter;
