import axios from "axios";
import { useQuery } from "react-query";

export function useFetch(key, link) {
  return useQuery(key, fetchfn);
  async function fetchfn() {
    const response = await axios.get(link);
    const data = await response.data;
    return data;
  }
}
