import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataWorld } from "../features/covidSlice";
import { FaEarthAmericas } from "react-icons/fa6";
import Loading from "./Spinner";
import Card from 'react-bootstrap/Card';

const CovidWorld = () => {
  const dispatch = useDispatch();
  const { worldData, worldState, worldDataError } = useSelector((state) => state.covid);

  useEffect(() => {
    dispatch(fetchDataWorld());
  }, [dispatch]);

  if (worldState === "loading")
    return (
      <div>
        <Loading/>
      </div>
    );
  if (worldDataError) return <p>Error fetching data: {worldDataError}</p>;

  return (
    <div className="p-4">
        <h1>Global Covid-19 statistics</h1>
    <div className="d-flex flex-row flex-wrap gap-2">
        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>World</Card.Title>
        <Card.Text>
          <FaEarthAmericas className="text-primary"/>
        </Card.Text>
      </Card.Body>
    </Card>

        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Active Cases</Card.Title>
        <Card.Text>
        {worldData["Active Cases_text"]}      
        </Card.Text>
      </Card.Body>
    </Card>
        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Last Update</Card.Title>
        <Card.Text>
        {worldData["Last Update"]}     
        </Card.Text>
      </Card.Body>
    </Card>
        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>New Cases</Card.Title>
        <Card.Text>
        {worldData["New Cases_text"]}    
        </Card.Text>
      </Card.Body>
    </Card>
        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>New Deaths</Card.Title>
        <Card.Text>
        {worldData["New Deaths_text"]}     
        </Card.Text>
      </Card.Body>
    </Card>
        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Total Cases</Card.Title>
        <Card.Text>
        {worldData["Total Cases_text"]}    
        </Card.Text>
      </Card.Body>
    </Card>
        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Total Deaths</Card.Title>
        <Card.Text className="text-danger">
        {worldData["Total Deaths_text"]}   
        </Card.Text>
      </Card.Body>
    </Card>
        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Total Recovered</Card.Title>
        <Card.Text className="text-success">
        {worldData["Total Recovered_text"]}  
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    </div>
  );
};

export default CovidWorld;
