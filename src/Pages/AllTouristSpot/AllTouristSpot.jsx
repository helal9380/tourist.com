/** @format */

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./slider.css";

// import required modules
import { Parallax, Pagination, Navigation, Autoplay } from "swiper/modules";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AllTouristSpot = () => {
  const [allTouristData, setAllTouristData] = useState([]);
  const [sortOrder, setSortOrder] = useState(""); // State for sorting order

  useEffect(() => {
    const getData = async () => {
      await fetch("http://localhost:5000/tourist")
        .then((res) => res.json())
        .then((data) => {
          setAllTouristData(data);
        });
    };
    getData();
  }, []);

  const handleSortChange = (order) => {
    setSortOrder(order);
  };

  const sortedData = [...allTouristData].sort((a, b) => {
    if (sortOrder === "lth") {
      return a.average_cost - b.average_cost;
    } else if (sortOrder === "htl") {
      return b.average_cost - a.average_cost;
    } else {
      return 0; // No sorting
    }
  });

  const progressCircle = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current?.style.setProperty("--progress", 1 - progress);
  };

  const handleAdd = (data) => {
    console.log(data);
    fetch("http://localhost:5000/carts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Custom animation with Animate.css",
            showClass: {
              popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `,
            },
            hideClass: {
              popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `,
            },
          });
        }
      });
  };

  return (
    <div>
      {/* dropdown section */}
      <div className="flex justify-center items-center my-5">
        <div className="dropdown dropdown-hover z-10">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-sm m-1 border border-[#007E8F]">
            Sort by <FaAngleDown />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu z-[1] w-52 rounded-xl p-2 bg-[#007E8F] text-white">
            <li onClick={() => handleSortChange("lth")}>
              <a>Low to high</a>
            </li>
            <li onClick={() => handleSortChange("htl")}>
              <a>High to low</a>
            </li>
          </ul>
        </div>
      </div>

      {/* slider section */}
      <div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          style={{
            "--swiper-navigation-color": "#007E8F",
            "--swiper-pagination-color": "#007E8F",
            padding: "40px 60px",
          }}
          speed={600}
          parallax={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Parallax, Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper">
          <div
            slot="container-start"
            className="parallax-bg space-y-2"
            style={{
              backgroundImage: "url(https://i.ibb.co/h2v1yCd/home-banner.png)",
            }}
            data-swiper-parallax="-23%"></div>
          {sortedData.map((data) => (
            <SwiperSlide
              className="space-y-2"
              key={data._id}>
              <div
                className="title font-semibold"
                data-swiper-parallax="-300">
                {data.location || "Bangladesh"}
              </div>
              <div
                className="subtitle"
                data-swiper-parallax="-200">
                Description
              </div>
              <div
                className="text"
                data-swiper-parallax="-100">
                <p>{data.short_description}</p>
                <h2>
                  <span className="font-semibold">Seasonality : </span>{" "}
                  {data.seasonality}
                </h2>
                <h2>
                  <span className="font-semibold">Travel time : </span>{" "}
                  {data.travel_time}
                </h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Card section */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-5">
        {sortedData.map((item) => (
          <div
            key={item._id}
            className="card p-2 border border-[#007E8F] rounded">
            <div className="w-full h-full">
              <img
                className="w-full h-full object-fill rounded"
                src={item.image}
                alt="Shoes"
              />
            </div>
            <div className="">
              <h2 className="">
                <span className="font-semibold">Country Name : </span>
                {item.country_Name || "Bangladesh"}
              </h2>
              <p>
                <span className="font-semibold">Description : </span> <br />
                {item.short_description}
              </p>
              <h2 className="">
                <span className="font-semibold">Location : </span>
                {item.location || "Bangladesh"}
              </h2>
              <h2 className="">
                <span className="font-semibold">Average Cost : </span>
                {item.average_cost || "Bangladesh"}
              </h2>

              <div className="flex justify-between">
                <button
                  onClick={() => handleAdd(item)}
                  className="py-1 font-semibold  text-white hover:bg-transparent mt-2 px-5 border border-[#007E8F] bg-[#007E8F] hover:text-[#007E8F] rounded">
                  Add to list
                </button>
                <Link
                  to={`/allTouristSpot/details/${item._id}`}
                  className="py-1 px-5 hover:bg-[#007E8F] border border-[#007E8F] hover:text-white font-semibold rounded mt-2">
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTouristSpot;
