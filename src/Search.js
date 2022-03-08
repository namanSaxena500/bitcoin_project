import React from "react";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import Showdata from "./Showdata";
const Search = (props) => {
/*   
    var [data1, setData1] = useState([]);
    const getData = async () =>{
            const response = await fetch('https://api.coingecko.com/api/v3/search?query=bitcoin')
            const data = await response.json();
            setData1(data)

    }
 useEffect(() => {
   getData();
  }, []); */
  var [hits, setHits] = useState([]);
  var [hits2, setHits2] = useState([]);
  var [IsLoading, setIsLoading] = useState(false);
  var [error, setError] = useState(null);
  const [isChecked, setIsChecked] = useState(true);

 
  useEffect(() => {
    setIsLoading(true);
    
    fetch("https://api.coingecko.com/api/v3/search?query="+props.dataof)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      //  .then(data => this.setState({ name: data.name }));
      .then((data) => {
       const a = data
       setHits(a["coins"])
       setHits2(a)

        setIsLoading(false);
      });
  }, [2]);
  const a=hits

  if (error) {
    return <p>{error.message}</p>;
  }

  if (IsLoading) {
    return <p>Loading ...</p>;
  } 
 
  return (
      <>
   
  
<div className="container-fluid">
 
          <div className="row">
              
                        {
                        isChecked ==true ?
                        hits.map((hit) => {
                            const a = hit["id"]
                            return(
                            <>
                            
                            <div className="col-12">
                                {hit["id"] } , {hit["symbol"]} <Link exact to={"/moredata/"+a }className="btn btn-success" onClick={()=>{setIsChecked(false)}} /*  onClick={()=>showmore(hit["id"])} */>v</Link>
                            </div>
                            </>
                        )})
                        : <Showdata/>
                        }
          </div>
        </div>
    </>
  );
};
export default Search;
