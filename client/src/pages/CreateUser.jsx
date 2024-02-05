import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("Active");
  const navigate = useNavigate();

  const options = [
    { label: "Active", value: 1 },
    { label: "Inactive", value: 2 },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3001/createUser", { name, email, status })
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <section className="min-h-dvh flex justify-center items-center">
      <div className="bg-[#fafafa] rounded-sm shadow-md px-5 py-5">
        <h1 className="text-2xl font-bold pb-2">Add User</h1>
        <form className="flex flex-col gap-3 w-[30rem]" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="border px-2 py-2 rounded-sm"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="border px-2 py-2 rounded-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Status</label>
            {/* <input
              type="text"
              placeholder="Enter Status"
              className="border px-2 py-2 rounded-sm"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            /> */}
            <select
              name=""
              id=""
              className="px-2 py-2 rounded-sm border"
              onChange={(e) => setStatus(e.target.value)}
            >
              {options.map((option) => (
                <option value={option.label} key={option.value}>
                  {option.label}
                </option>
              ))}
              ,
            </select>
          </div>
          <div className="flex justify-between">
            <button className="bg-green-300 px-3 py-1 rounded-sm font-bold">
              Submit
            </button>
          </div>
        </form>
        <div className="pt-2">
          <Link to={"/"} className="">
            <button className="bg-gray-200 px-3 py-1 rounded-sm font-bold">
              Back
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CreateUser;
