import React from "react";
import styled from "styled-components";
import Card from "../components/Card";
import Search from "../components/Search";
import Filter from "../components/Filter";
import { useContext } from "react";
import { CountriesContext } from "../context/countryContext";
import { Container } from "../utils/GlobalStyles";
import Spinner from "../components/Spinner";

const Home = () => {
  const { allCountries, loading, filterByRegion, searchTerm } =
    useContext(CountriesContext);

  return (
    <>
      {loading && <Spinner />}
      {!loading && (
        <Container>
          <HomeHeader>
            <Search />
            <Filter />
          </HomeHeader>
          <CardsWrapper>
            {allCountries
              .filter((country) => country.region.includes(filterByRegion))
              .filter((country) =>
                country.name
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase().trim())
              )
              .map((country) => (
                <Card key={country.alpha3Code} data={country} />
              ))}
          </CardsWrapper>
        </Container>
      )}
    </>
  );
};

const HomeHeader = styled.div`
  display: grid;
  row-gap: 40px;
  margin-top: 32px;

  @media (min-width: 1100px) {
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
  }
`;

const CardsWrapper = styled.div`
  display: grid;
  margin-top: 48px;
  gap: 48px;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));

  @media (min-width: 1440px) {
    gap: 72px;
  }
`;

export default Home;
