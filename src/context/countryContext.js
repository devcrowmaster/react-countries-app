import React, { useState, useEffect, createContext } from "react";

export const CountriesContext = createContext();

const CountriesContextProvider = (props) => {
  const [allCountries, setAllCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ error: false });
  const [searchTerm, setSearchTerm] = useState("");
  const [filterByRegion, setFilterByRegion] = useState("");

  useEffect(() => {
    if (localStorage.getItem("countries") === null) {
      getCountries("https://restcountries.com/v2/all");
    } else {
      const countries = localStorage.getItem("countries");
      const local = JSON.parse(countries);
      setAllCountries([...local]);
    }
  }, []);

  const getCountries = async (allCountriesAPI) => {
    try {
      setLoading(true);
      const res = await fetch(allCountriesAPI);
      if (res.ok) {
        const data = await res.json();
        localStorage.setItem("countries", JSON.stringify(data));
        setAllCountries([...data]);
      } else {
        setError({
          error: true,
          statusCode: res.status,
          statusText: res.statusText,
        });
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const formatNumber = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <CountriesContext.Provider
      value={{
        allCountries,
        loading,
        error,
        searchTerm,
        setSearchTerm,
        filterByRegion,
        setFilterByRegion,
        formatNumber
      }}
    >
      {props.children}
    </CountriesContext.Provider>
  );
};

export default CountriesContextProvider;
