/** @format */

import { useLoaderData } from "react-router-dom";

const Carts = () => {
  const data = useLoaderData();
  return (
    <div>
      <h3 className="text-3xl font-semibold my-10 text-center">
        All selected tourist spots
      </h3>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No..</th>
              <th>Image</th>
              <th>Country</th>
              <th>Spot Name</th>
              <th>Seasonality</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {data.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask h-20 w-20 rounded-md">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.country}</td>
                <td>{item.location}</td>
                <td>{item.seasonality}</td>
                <td>{item.email}</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Carts;
