import React, { useEffect, useState } from "react";
import { isAuthenticated, logout } from "../../auth";
// import { useSelector } from "react-redux";
import axios from "axios";

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
        <div key={element.id}>
          <p>{element.name}</p>
        </div>
      );
    });
  };

  return (
    <div>
      <h1>
        Welcome <span>{email}</span>
      </h1>
      <button onClick={logout}>Logout</button>
      <GetListAnimal />
    </div>
  );
}
