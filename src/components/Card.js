import React, { useContext } from "react";
import styled from "styled-components";
import { CountriesContext } from "../context/countryContext";
import { BackgroundElement, BackgroundElementShadow } from "../utils/theme";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  const { formatNumber } = useContext(CountriesContext);

  return (
    <CardWrapper to={`/country/${data.alpha3Code}`}>
      <CardHeader>
        <CardImage src={data.flag} alt={`Flag of ${data.name}`} />
      </CardHeader>
      <CardBody>
        <CardTitle>{data.name}</CardTitle>
        <CardDetails>
          <CardItem>
            <span>Population: </span>
            {formatNumber(data.population)}
          </CardItem>
          <CardItem>
            <span>Region: </span>
            {data.region}
          </CardItem>
          <CardItem>
            <span>Capital: </span>
            {data.capital}
          </CardItem>
        </CardDetails>
      </CardBody>
    </CardWrapper>
  );
};

const CardWrapper = styled(Link)`
  margin: 0 auto;
  max-width: 280px;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 1px 1px 6px ${BackgroundElementShadow};
  color: inherit;
  text-decoration: none;

  @media (min-width: 1440px) {
    max-width: 300px;
  }
`;

const CardHeader = styled.div`
  height: 160px;
`;

const CardImage = styled.img`
  display: block;
  object-fit: cover;
  object-position: center;
  height: 100%;
  width: 100%;
`;

const CardBody = styled.div`
  background: ${BackgroundElement};
  padding: 24px 24px 36px 24px;
  height: 100%;
`;

const CardTitle = styled.span`
  font-weight: 800;
  font-size: 18px;
`;

const CardDetails = styled.ul`
  list-style: none;
  margin: 0;
  margin-top: 16px;
  padding: 0;
  display: grid;
  gap: 4px;
`;

const CardItem = styled.li`
  font-size: 14px;

  span {
    font-weight: 600;
  }
`;

export default Card;
