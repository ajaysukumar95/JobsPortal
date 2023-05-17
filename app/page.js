"use client";
import { cardApiData } from "./services/cardApiData";
import Header from "@/components/Header";
import Jobscard from "@/components/Jobscard";

export default function Home() {
  const data = cardApiData();
  return (
    <div className="container max-w-none">
      <Header />
      <div className="container mx-auto px-8 py-10">
        <div className="grid grid-cols-4 gap-4">
          {data &&
            data.map((value, index) => <Jobscard key={index} data={value} />)}
        </div>
      </div>
    </div>
  );
}
