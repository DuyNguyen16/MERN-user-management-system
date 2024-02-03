import React from "react";
import { Link } from "react-router-dom";

const UpdateUser = () => {
  return (
    <section className="min-h-dvh flex justify-center items-center">
      <div className="bg-[#fafafa] rounded-sm shadow-md px-5 py-5">
        <h1 className="text-2xl font-bold pb-2">Update User</h1>
        <form className="flex flex-col gap-3 w-[30rem]">
          <div className="flex flex-col">
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="border px-2 py-2 rounded-sm"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Email</label>
            <input
              type="text"
              placeholder="Enter Email"
              className="border px-2 py-2 rounded-sm"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Status</label>
            <input
              type="text"
              placeholder="Enter Status"
              className="border px-2 py-2 rounded-sm"
            />
          </div>
          <div className="flex justify-between">
            <button className="bg-green-300 px-3 py-1 rounded-sm font-bold">
              Update
            </button>
            <Link to={"/"}>
              <button className="bg-gray-200 px-3 py-1 rounded-sm font-bold">
                Back
              </button>
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default UpdateUser;
