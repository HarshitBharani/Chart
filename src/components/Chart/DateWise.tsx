import { useParams } from "react-router-dom";
import setCountryData from "../../Api/setCountryData";
import setDateData from "../../Api/setDateData";
import setWorldData from "../../Api/setWorldData";
import useFetch from "../../Api/UseFetch";

import ChartData from "./ChartData";

const DateWise = () => {
  const { chartid } = useParams();

  const urlData = [
    {
      url: "https://disease.sh/v3/covid-19/all",
      setFunction: setWorldData,
      label: "World Data",
      queryKey: "worldData",
    },
    {
      url: "https://disease.sh/v3/covid-19/countries",
      setFunction: setCountryData,
      label: "Country Data",
      queryKey: "CountryData",
    },
    {
      url: "https://disease.sh/v3/covid-19/historical/all?lastdays=all",
      setFunction: setDateData,
      label: "Date Data",
      queryKey: "dateData",
    },
  ];
  const query = useFetch(urlData[chartid].url, urlData[chartid].queryKey);
  if (query.isLoading) {
    return <div>loading</div>;
  }
  const dat = urlData[chartid].setFunction(query);
  return (
    <div>
      {" "}
      <ChartData data={dat} label={urlData[chartid].label} />{" "}
    </div>
  );
};
export default DateWise;
