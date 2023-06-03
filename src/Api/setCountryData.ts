const setCountryData = (query) => {
  const data = query.data.slice(80, 100);
  console.log(data);
  let labels = [],
    values = [];
  data.forEach((element) => {
    labels.push(element.country);
    values.push(element.cases);
  });
  const casesData = {
    labels,
    datasets: [
      {
        label: "Cases",
        data: values,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return [casesData];
};
export default setCountryData;
