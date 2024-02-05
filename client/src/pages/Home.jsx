import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);

  // delete user function
  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3001/deleteUser/" + id)
      .then((result) => {
        console.log(result);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    // fetching data from database
    axios
      .get("http://localhost:3001")
      .then((result) => setUsers(result.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="flex justify-center mt-20">
      <div className="min-w-[30rem] bg-[#fafafa] shadow-md">
        {users.length > 0 ? (
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
                <tr className="border" key={user._id}>
                  <td className="px-3 py-3">{user.name}</td>
                  <td className="px-3 py-3">{user.email}</td>
                  <td className="px-3 py-3">{user.status}</td>
                  <td className="px-3 py-3 flex flex-row gap-2">
                    <Link to={`/update/${user._id}`}>
                      <button className="hover:cursor-pointer bg-green-300 hover:bg-green-400 transition-all px-5 py-[0.15rem] rounded-sm">
                        Edit
                      </button>
                    </Link>
                    <button
                      onClick={(e) => handleDelete(user._id)}
                      className="bg-red-300 hover:bg-red-400 transition-all px-3 rounded-sm hover:cursor-pointer"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="text-center py-3 font-bold text-2xl">
            Please create a user
          </div>
        )}
      </div>
    </section>
  );
};

export default Home;
