import React, { useContext } from "react";
import styled from "styled-components";
import { ButtonElement } from "../components/Button";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams, Link } from "react-router-dom";
import { CountriesContext } from "../context/countryContext";
import { BackgroundElement, BackgroundElementShadow } from "../utils/theme";
import { Container } from "../utils/GlobalStyles";
import Spinner from "../components/Spinner";

const Country = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const { allCountries, formatNumber, loading } = useContext(CountriesContext);
  const country = allCountries.find((country) => country.alpha3Code === name);
  console.log(country);
  const countryBorderFullName = (border) => {
    try {
      const borderCountry = [...allCountries].filter(
        ({ alpha3Code }) => alpha3Code === border
      );
      return (
        <CountryLink to={`/country/${borderCountry[0].alpha3Code}`}>
          <BorderFlag src={borderCountry[0].flag} alt={borderCountry[0].name} />
          <span>{borderCountry[0].name.split("(")[0]}</span>
        </CountryLink>
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <GoBack onClick={() => navigate(-1)}>
        <FaArrowLeft />
        <ButtonText>Back</ButtonText>
      </GoBack>
      <Wrapper>
        {loading && <Spinner />}
        {country && (
          <>
            <CountryFlag>
              <ImageCountry src={country.flag} alt={country.name} />
            </CountryFlag>
            <CountryInfo>
              <CountryTitle>{country.name}</CountryTitle>
              <CountryLeft>
                <Paragraph>
                  Native Name: <span>{country.nativeName}</span>
                </Paragraph>
                <Paragraph>
                  Population: <span>{formatNumber(country.population)}</span>
                </Paragraph>
                <Paragraph>
                  Region: <span>{country.region}</span>
                </Paragraph>
                <Paragraph>
                  Sub Region: <span>{country.subregion}</span>
                </Paragraph>
                <Paragraph>
                  Capital: <span>{country.capital || "No tiene"}</span>
                </Paragraph>
              </CountryLeft>
              <CountryRight>
                <Paragraph>
                  Top Level Domain: <span>{country.topLevelDomain}</span>
                </Paragraph>
                <Paragraph>
                  Currency:
                  {country.currencies.map(({ name }, i) => (
                    <span key={name}> {name} </span>
                  ))}
                </Paragraph>
                <Paragraph>
                  Languagues:
                  {country.languages.map(({ name }, i) => (
                    <span key={name}>
                      {country.languages.length === i + 1 ? name : ` ${name}, `}
                    </span>
                  ))}
                </Paragraph>
              </CountryRight>

              <CountryBorders>
                <Paragraph>Border Countries:</Paragraph>
                <Borders>
                  {country.borders !== undefined ? (
                    country.borders.map((border) => (
                      <CountryItem key={border}>
                        {countryBorderFullName(border)}
                      </CountryItem>
                    ))
                  ) : (
                    <span>Ninguno</span>
                  )}
                </Borders>
              </CountryBorders>
            </CountryInfo>
          </>
        )}
      </Wrapper>
    </Container>
  );
};

const GoBack = styled(ButtonElement)`
  width: 120px;
  margin-top: 48px;
  justify-content: initial;
  height: 36px;
  box-shadow: 1px 1px 6px ${BackgroundElementShadow};

  @media (min-width: 1100px) {
    margin-top: 72px;
  }
`;

const ButtonText = styled.span`
  margin-left: 10px;
  font-weight: 400;
  font-size: 16px;
`;

const Wrapper = styled.div`
  display: grid;
  margin: 48px 0;
  justify-content: center;
  gap: 32px;
  justify-items: center;

  @media (min-width: 1100px) {
    gap: 64px;
    justify-items: initial;
    align-items: baseline;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const CountryFlag = styled.div``;

const ImageCountry = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  max-width: 500px;
`;

const CountryInfo = styled.div`
  display: grid;
  gap: 18px;
  line-height: 1.8;

  @media (min-width: 768px) {
    column-gap: 4rem;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: min-content;
  }
`;

const CountryTitle = styled.h1`
  font-size: 24px;
  margin: 0;

  @media (min-width: 768px) {
    grid-column: 1/3;
  }
`;

const CountryLeft = styled.div``;

const Paragraph = styled.p`
  font-weight: 800;
  margin: 8px 0;

  span {
    font-weight: 400;
  }
`;

const CountryRight = styled.div`
  margin-top: 16px;

  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

const CountryBorders = styled.div`
  margin: 0;
  padding: 0;
  display: grid;
  gap: 16px;
  list-style: none;

  a {
    color: inherit;
    text-decoration: none;
  }

  @media (min-width: 768px) {
    grid-column: 1/3;
  }

  @media (min-width: 1440px) {
    grid-template-columns: auto auto;
  }
`;

const Borders = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const CountryItem = styled.li`
  padding: 16px;
  margin: 4px;
  border-radius: 5px;
  display: inline-block;
  font-size: 14px;
  background: ${BackgroundElement};
`;

const CountryLink = styled(Link)`
  display: flex;
`;

const BorderFlag = styled.img`
  max-width: 100%;
  width: 32px;
  max-height: 25px;
  margin-right: 10px;
`;

export default Country;
