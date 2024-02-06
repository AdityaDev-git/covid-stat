import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Loading from "./Spinner";
import Card from "react-bootstrap/Card";
import { fetchDataCountry } from "../features/covidSlice";
import { useDispatch, useSelector } from "react-redux";

const CovidCountry = () => {
  const [country, setCountry] = useState("");
  const dispatch = useDispatch();
  const { countryData, countryState, countryDataError } = useSelector((state) => state.covid);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchDataCountry(country));
  };

  if (countryState === "loading") return <Loading />;
  if (countryDataError) return <p>Error fetching data: {countryDataError}</p>;

  return (
    <div className="p-4">
      <Form className="d-flex flex-row gap-3 mb-3" onSubmit={handleSubmit}>
        <Form.Group className=" col-6" controlId="formBasicEmail">
          <Form.Control type="text" value={country} onChange={(e) => setCountry(e.target.value)} placeholder="Enter your country name" />
        </Form.Group>
        <Button variant="primary" type="submit" className="px-3">
          Get Data
        </Button>
      </Form>

      {Object.keys(countryData).length > 0 && (
        <div className="col-10">
          <Card>
            <Card.Header as="h5">Country: {countryData.Country_text}</Card.Header>
            <Card.Body>
              <Card.Text>Active Cases: {countryData["Active Cases_text"]}</Card.Text>
              <Card.Text>Last Update: {countryData["Last Update"]}</Card.Text>
              <Card.Text>New Cases: {countryData["New Cases_text"]}</Card.Text>
              <Card.Text>New Deaths: {countryData["New Deaths_text"]}</Card.Text>
              <Card.Text>Total Cases: {countryData["Total Cases_text"]}</Card.Text>
              <Card.Text>Total Deaths: {countryData["Total Deaths_text"]}</Card.Text>
              <Card.Text>Total Recovered: {countryData["Total Recovered_text"]}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      )}
    </div>
  );
};

export default CovidCountry;
