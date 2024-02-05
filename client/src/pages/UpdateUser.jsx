import { React, useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateUser = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();

    // updating user information
    axios
      .put("http://localhost:3001/updateUser/" + id, { name, email, status })
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  const options = [
    { label: "Active", value: 1 },
    { label: "Inactive", value: 2 },
  ];

  useEffect(() => {
    // fetching a specifid data from the database
    axios
      .get("http://localhost:3001/getUser/" + id)
      .then((result) => {
        console.log(result.data);
        setName(result.data.name);
        setEmail(result.data.email);
        setStatus(result.data.status);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="min-h-dvh flex justify-center items-center">
      <div className="bg-[#fafafa] rounded-sm shadow-md px-5 py-5">
        <h1 className="text-2xl font-bold pb-2">Update User</h1>
        <form
          className="flex flex-col gap-3 w-[30rem]"
          onSubmit={handleOnSubmit}
        >
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
            <button className="bg-green-300 px-3 py-1 rounded-sm font-bold hover:bg-green-400 transition-all">
              Update
            </button>
          </div>
        </form>
        <div className="flex pt-2">
          <Link to={"/"}>
            <button className="bg-gray-200 px-3 py-1 rounded-sm font-bold hover:bg-gray-300 transition-all">
              Back
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UpdateUser;
