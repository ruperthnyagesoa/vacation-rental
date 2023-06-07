import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import AddAHouse from "./AddAHouse";
import AddAReview from "./AddAReview";
import TravelList from "./TravelList";
import HouseList from "./HouseList";
import Home from "./Home"
import "./index.css";
import { AiOutlineCopyrightCircle } from "react-icons/ai";



// import { FcGlobe } from "react-icons/fc";

function App() {
    const [houses, setHouses] = useState([]);
    const [reviews, setReviews] = useState([]);
    // const [travel, setTravel] = useState ([]);
    const [users, setUsers] = useState ([]);
    // const [newComment, setNewComment] = useState ('');

    useEffect (() => {
        fetch('https://hotelproject-backend.herokuapp.com/houses')
        .then(resp => resp.json())
        .then(houseData => {
            setHouses(houseData);
        })
    }, []);


    useEffect (() => {
        fetch('https://hotelproject-backend.herokuapp.com/reviews')
        .then(resp => resp.json())
        .then(reviewData => {
            console.log(reviewData);
            setReviews(reviewData);
        })
    }, []);

    useEffect (() => {
        fetch('https://hotelproject-backend.herokuapp.com/users')
        .then(resp => resp.json())
        .then(userData => {
            console.log("User Data:", userData);
            setUsers(userData)
        })
    }, []);


    function handleAddHouse (newHouse) {
        setHouses([...houses, newHouse])
    }

    function handleAddReview (newReview) {
        // console.log("this is new review:", newReview)
        setReviews([...reviews, newReview])
    }
   

    // function handleClickHouse(clickedHouse) {
    //     if (!reviews.includes(clickedHouse)) {
    //     setReviews([...reviews, clickedHouse]);
    //     }
    // }
    
  return (
      <div className="App">
         <NavBar />
          <Routes>
                <Route exact path ="/" element= { <Home /> } /> 
                <Route path ="/houses" element= { <HouseList houses={houses} /> } /> 
                <Route path="/addahouse" element= { <AddAHouse houses={houses} setHouses={setHouses} handleAddHouse={handleAddHouse} />} />
                <Route path="/travellist" element= { <TravelList reviews={reviews} />} />
                <Route path="/addareview" element= {<AddAReview handleAddReview={handleAddReview} houses={houses} users={users} /> } />       

          </Routes>
        
          <div className="footer">
              
              <div className="our-logo">
              <AiOutlineCopyrightCircle size=".75em"/> 2023 Nostalgic BnB, Inc. All rights reserved.
                  {/* <div className="second-one"> */}
                  {/* <h3> <GiMountains /> <GiMountains /> <GiMountains /> </h3> */}
                 {/* <AiOutlineTrademarkCircle size=".75em"/> */}
                 {/* </div> */}
              </div>
              <div className="find">
                Find us on LinkedIn: 
                <li className="social-btn flex-center" id="linkedin">
                    <a href="https://www.linkedin.com/in/ruperth-nyagesoa/" target="_blank" rel="noreferrer">Example Link
                    </a>
                    <span>Ruperth Nyagesoa</span>
                </li>
              </div>
              
          </div>
      </div>
  );
}

export default App;