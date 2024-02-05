import { useState } from "react";
import { fetchCovidDataByCountry } from "../features/covidSlice";
import { useDispatch, useSelector } from "react-redux";


const CovidCountry = () => {

    const [country, setCountry] = useState("");
  const dispatch = useDispatch();
  const { countryData, statusCountry, errorCountry } = useSelector((state) => state.covid);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchCovidDataByCountry(country));
  };

  if (statusCountry === 'loading') return <p>Loading country data...</p>;
  if (errorCountry) return <p>Error fetching country data: {errorCountry}</p>;


  return (
    <div>
        <form onSubmit={handleSubmit} >
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          placeholder="Enter country name"
        />
        <button className="submit-btn" type="submit">Fetch Data</button>
      </form>
    
      {countryData && Object.keys(countryData).length>0 && (
        <div >
          <p >Country: {countryData.Country_text}</p>
          <p >
            Active Cases:{" "}
            <span>{countryData["Active Cases_text"]}</span>
          </p>
          <p>
            Last Update: {countryData["Last Update"]}
          </p>
          <p>
            New Cases:{" "}
            <span>{countryData["New Cases_text"]}</span>
          </p>
          <p>
            New Deaths: {countryData["New Deaths_text"]}
          </p>
          <p >
            Total Cases: {countryData["Total Cases_text"]}
          </p>
          <p >
            Total Deaths:{" "}
            <span > {countryData["Total Deaths_text"]}</span>
          </p>
          <p >
            Total Recovered:{" "}
            <span>
              {" "}
              {countryData["Total Recovered_text"]}
            </span>
          </p>
        </div>
      )}
    </div>
  )
}

export default CovidCountry