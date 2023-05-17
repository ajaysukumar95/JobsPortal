// "use client"
import { useEffect, useState } from "react";

export function cardApiData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Perform API call and fetch data
    const fetchData = async () => {
      try {
        const response = await fetch("https://run.mocky.io/v3/9b1c47a4-e27e-4df7-8137-7d46c2ea1dc1");
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return data;
}
