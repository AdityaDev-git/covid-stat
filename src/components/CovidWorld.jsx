import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCovidDataWorld } from "../features/covidSlice";
import Loading from "./Spinner";

const CovidWorld = () => {
  const dispatch = useDispatch();
  const { worldData, statusWorld, errorWorld } = useSelector((state) => state.covid);

  useEffect(() => {
    dispatch(fetchCovidDataWorld());
  }, [dispatch]);

  if (statusWorld === "loading")
    return (
      <div>
        <Loading/>
      </div>
    );
  if (errorWorld) return <p>Error fetching global data: {errorWorld}</p>;

  return (
    <div>
      <h1>Global Covid-19 statistics</h1>
      <div>
        <p>Country: {worldData.Country_text}</p>
        <p>
          Active Cases: <span>{worldData["Active Cases_text"]}</span>
        </p>
        <p>Last Update: {worldData["Last Update"]}</p>
        <p>
          New Cases: <span>{worldData["New Cases_text"]}</span>
        </p>
        <p>New Deaths: {worldData["New Deaths_text"]}</p>
        <p>Total Cases: {worldData["Total Cases_text"]}</p>
        <p>
          Total Deaths: <span> {worldData["Total Deaths_text"]}</span>
        </p>
        <p>
          Total Recovered: <span> {worldData["Total Recovered_text"]}</span>
        </p>
      </div>
    </div>
  );
};

export default CovidWorld;
