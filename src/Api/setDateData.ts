const setDateData = (query) => {
  const labels = Object.keys(query.data.cases);

  const casesData = {
    labels,
    datasets: [
      {
        label: "Cases",
        data: Object.values(query.data.cases),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  const deathData = {
    labels,
    datasets: [
      {
        label: "Death",
        data: Object.values(query.data.deaths),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return [casesData, deathData];
};
export default setDateData;
