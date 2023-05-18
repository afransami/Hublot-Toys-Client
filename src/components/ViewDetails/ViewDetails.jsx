import React, { useEffect, useState } from "react";
import SingleToyCard from "./SingleToyCard";
import { useParams } from "react-router-dom";

const ViewDetails = () => {  
  const { id } = useParams();
  const [details, setDetails] = useState([]);

  useEffect(() => {
//     fetch(`http://localhost:5000/allToys/toy/${id}`)
//     .then (res=>res.json())    
//     .then (data=>setDetails(data))
//   },[])  
//   console.log(details);

    fetch(`http://localhost:5000/toy/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setDetails(data);
      });
  }, []);

  return (
    <div>{details.map(detail=>
        <SingleToyCard 
        key={detail._id}
        toy={detail}
        ></SingleToyCard>
        )}


      {/* {details.map((toy) => (
        <SingleToyCard key={toy._id} toy={toy}></SingleToyCard>
      ))} */}
    </div>
  );
};

export default ViewDetails;
