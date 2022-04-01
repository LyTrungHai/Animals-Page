import React, { useEffect, useState } from "react";
import { isAuthenticated, logout } from "../../auth";
// import { useSelector } from "react-redux";
import axios from "axios";
import "./Home.css";
import video from "../../assets/Lions 101 _ Nat Geo Wild.mp4";

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

  // const transitions = useTransition(items, {
  //   from: { opacity: 0 },
  //   enter: { opacity: 1 },
  //   leave: { opacity: 0 },
  // });
  const GetListAnimal = () => {
    return listAnimal.map((element) => {
      return (
        <div className="card" key={element.id}>
          <div className="img-animal">
            <img src={element.avatar} alt="Avatar" style={{ width: "100%" }} />
          </div>
          <div className="content">
            <span>{element.id}</span>
            <h4>
              <b>
                <a href="">{element.name}</a>
              </b>
            </h4>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="bodyHome">
      <nav className="header ">
        <h1>Animal </h1>
        <button className="btn-logout" onClick={logout}>
          Logout
        </button>
      </nav>
      <div className="background">
        <h1 className="welcome">Welcome {email} </h1>
        <div className="line"></div>
        <h3 className="animals">ANIMALS</h3>
        <div className="container">
          <GetListAnimal />
        </div>
      </div>
    </div>
  );
}

// <div>
//   <div className="background">
//     <div className="video-zone">
//       <video autoPlay muted loop id="myVideo">
//         <source src={video} type="video/mp4" />
//       </video>
//     </div>
//     <div className="contentVideo">
//       <div className="text-video">
//         <h1>
//           wellcome <span>{email}</span>
//         </h1>
//         <p> to animal page</p>
//       </div>
//     </div>
//   </div>
// </div>;
