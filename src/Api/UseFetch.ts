import { useQuery } from "@tanstack/react-query";
const useFetch = (url: string, queryKey: string) => {
  const fetchData = async () => {
    const res = await fetch(url);
    return res.json();
  };
  const query = useQuery({ queryKey: [queryKey], queryFn: fetchData });
  return query;
};
export default useFetch;
