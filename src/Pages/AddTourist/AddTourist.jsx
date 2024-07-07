/** @format */

import Swal from "sweetalert2";

const AddTourist = () => {
    const handleAddTourist = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.placeName.value;
        const country = form.country.value;
        const location = form.location.value;
        const image = form.image.value;
        const description = form.description.value;
        const cost = form.cost.value;
        const seasonality = form.seasonality.value;
        const time = form.time.value;
        const total_visitors = form.total_visitors.value;
        const newTourist = {name, country, location, image, description, cost, seasonality,time, total_visitors};

        fetch('http://localhost:5000/tourist', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(newTourist)
        })
        .then(res => res.json())
        .then(data => {
          if(data.insertedId) {
            Swal.fire(`${name} is added in the database successfully`);
          }
        })
        console.log(newTourist);
    }
  return (
    <div className="max-w-screen-lg mx-auto">
      <h3 className="text-center text-4xl font-semibold ">Add Tourist place</h3>
      <form onSubmit={handleAddTourist} className="card-body">
        <div className="flex gap-5">
          <div className="w-full">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Place Name</span>
              </label>
              <input
                type="text"
                name="placeName"
                placeholder="Enter Place"
                className="input w-full input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Country Name</span>
              </label>
              <input
                type="text"
                name="country"
                placeholder="Enter Country Name"
                className="input w-full input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Location</span>
              </label>
              <input
                type="text"
                name="location"
                placeholder="Enter Location"
                className="input w-full input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input
                type="text"
                name="image"
                placeholder="Enter Image URL"
                className="input w-full input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input
                type="text"
                name="description"
                placeholder="Enter Description"
                className="input w-full input-bordered"
              />
            </div>
          </div>

          {/* right site */}
          <div className="w-full">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Average cost</span>
              </label>
              <input
                type="text"
                name="cost"
                placeholder="cost"
                className="input w-full input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Seasonality</span>
              </label>
              <input
                type="text"
                name="seasonality"
                placeholder="Seasonality"
                className="input w-full input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Travel Time</span>
              </label>
              <input
                type="text"
                name="time"
                placeholder="Travel_time"
                className="input w-full input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Total Visitors</span>
              </label>
              <input
                type="text"
                name="total_visitors"
                placeholder="Total visitors"
                className="input w-full input-bordered"
              />
            </div>
            <div className="form-control mt-8">
              <button className="btn bg-[#007E8F] text-white font-semibold uppercase hover:bg-[#129db0]">Add Tourist spots</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddTourist;
