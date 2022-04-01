import React, { useEffect, useState } from "react";
import { isAuthenticated, logout } from "../../auth";
// import { useSelector } from "react-redux";
import axios from "axios";
import "./Home.css";

export default function Home() {
  const { email } = isAuthenticated();
  const [listAnimal, setListAnimal] = useState([]);

  // const currentUser = useSelector((state) => state.user.user);

  const fetchAnimalList = async () => {
    // call api
    const response = await axios.get(
      "https://613ebe6ee9d92a0017e17275.mockapi.io/AnimalsList"
    );
    setListAnimal(response.data);
  };

  useEffect(() => {
    fetchAnimalList();
  }, []);

  const GetListAnimal = () => {
    return listAnimal.map((element) => {
      return (
        <div className="card" key={element.id}>
          <img src={element.avatar} alt="Avatar" style={{ width: "100%" }} />
          <div className="content">
            <span>{element.id}</span>
            <h4>
              <b>{element.name}</b>
            </h4>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="bodyHome">
      <div className="header ">
        <h1>
          Welcome <span>{email}</span>
        </h1>
        <button className="btn-logout" onClick={logout}>
          Logout
        </button>
      </div>
      <div className="container">
        <GetListAnimal />
      </div>
    </div>
  );
}
