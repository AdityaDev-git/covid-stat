import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataWorld } from "../features/covidSlice";
import { FaEarthAmericas } from "react-icons/fa6";
import Loading from "./Spinner";

const CovidWorld = () => {
  const dispatch = useDispatch();
  const { worldData, worldState, worldDataError } = useSelector((state) => state.covid);
  const cards = "bg-light-purple p-3 space-y-2 rounded-md";

  useEffect(() => {
    dispatch(fetchDataWorld());
  }, [dispatch]);

  if (worldState === "loading")
    return (
      <div>
        <Loading />
      </div>
    );
  if (worldDataError) return <p>Error fetching data: {worldDataError}</p>;

  return (
    <div className="pt-5">
      <p className="text-xl mb-4">Global Covid-19 statistics</p>
      <div className="flex flex-wrap gap-4">
        <div className={cards}>
            <h3>World</h3>
            <FaEarthAmericas className="text-xl" />
        </div>

        <div className={cards}>
            <h3>Active Cases</h3>
            <p>{worldData["Active Cases_text"]}</p>
        </div>
        <div className={cards}>
            <h3>New Cases</h3>
            <p>{worldData["New Cases_text"]}</p>
        </div>
        <div className={cards}>
            <h3>New Deaths</h3>
            <p>{worldData["New Deaths_text"]}</p>
        </div>
        <div className={cards}>
            <h3>Total Cases</h3>
            <p>{worldData["Total Cases_text"]}</p>
        </div>
        <div className={cards}>
            <h3>Total Deaths</h3>
            <p className="text-danger">{worldData["Total Deaths_text"]}</p>
        </div>
        <div className={cards}>
            <h3>Total Recovered</h3>
            <p className="text-success">{worldData["Total Recovered_text"]}</p>
        </div>
      </div>
    </div>
  );
};

export default CovidWorld;
