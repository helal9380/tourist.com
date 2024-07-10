/** @format */

import { useLoaderData } from "react-router-dom";

const AllTouristDetails = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="max-w-screen-lg mx-auto my-5">
      <h2 className="text-4xl font-semibold text-center my-5">Details of the {data.location} </h2>
      <div className="w-full h-[400px]">
        <img
          className="h-full w-full"
          src={data.image}
          alt=""
        />
      </div>
      <div>
        <h3>
          <span>Name : </span>
          {data.country_Name}
        </h3>
        <h3>
          <span>Description : </span>
          {data.short_description}
        </h3>
        <h3>
          <span>Spot Name : </span>
          {data.tourists_spot_name}
        </h3>
        <h3>
          <span>Location : </span>
          {data.location}
        </h3>
        <h3>
          <span>Name : </span>
          {data.totalVisitorsPerYear}
        </h3>
        <h3>
          <span>Travel Time : </span>
          {data.travel_time}
        </h3>
      </div>
    </div>
  );
};

export default AllTouristDetails;
