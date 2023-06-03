const setWorldData = (query) => {
  const labels = Object.keys(query.data);
  const values = Object.values(query.data);
  values.shift();
  const data = {
    labels,
    datasets: [
      {
        label: "Cases",
        data: values,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return [data];
};
export default setWorldData;
