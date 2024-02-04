import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // fetching data from database
    axios
      .get("http://localhost:3001")
      .then((result) => setUsers(result.data))
      .catch((err) => console.log(err));
  });

  return (
    <section className="flex justify-center mt-12">
      <div className="w-[30rem] bg-[#fafafa] shadow-md">
        <table className="w-full table-auto border-collapse">
          <thead className="bg-[#212121] text-white text-left">
            <tr className="">
              <th className="px-3 py-3">Name</th>
              <th className="px-3 py-3">Email</th>
              <th className="px-3 py-3">Status</th>
              <th className="px-3 py-3">Action</th>
            </tr>
          </thead>
          <tbody className="">
            {users.map((user) => (
              <tr className="border">
                <td className="px-3 py-3">{user.name}</td>
                <td className="px-3 py-3">{user.email}</td>
                <td className="px-3 py-3">{user.status}</td>
                <td className="px-3 py-3 flex flex-row gap-2">
                  <Link to={"/update"}>
                    <button className="hover:cursor-pointer">Edit</button>
                  </Link>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Home;
