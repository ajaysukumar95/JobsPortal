"use client"
import { useState } from "react";
import { fetchCardData } from "./services/fetchCardData";
import Jobscard from "@/app/components/Jobscard";

export default function Home() {
  const [data, setData] = useState(null);
  
  const fetchData = async () => {
    const responseData = await fetchCardData();
    setData(responseData);
  };

  if (!data) {
    fetchData();
  }
  return (
    <div className="container max-w-none">
      <div className="container mx-auto px-8 py-10">
          {data !== null &&
           <Jobscard data={data} />
          }
      </div>
    </div>
  );
}
