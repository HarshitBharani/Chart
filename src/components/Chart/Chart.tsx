import { useNavigate } from "react-router-dom";

const Chart = () => {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col items-start gap-5 p-5">
      <h3 className="text-5xl font-bold">Covid19 Data</h3>
      <button
        onClick={() => navigate("/chart/0")}
        className="border-solid border-2 border-sky-500 p-2 px-10 w-[200px]"
      >
        View World Data
      </button>
      <button
        onClick={() => navigate("/chart/1")}
        className="border-solid border-2 border-sky-500 p-2 px-10 w-[200px]"
      >
        View Country Data
      </button>
      <button
        onClick={() => navigate("/chart/2")}
        className="border-solid border-2 border-sky-500 p-2 px-10 w-[200px]"
      >
        View Data Datewise
      </button>
    </section>
  );
};
export default Chart;
