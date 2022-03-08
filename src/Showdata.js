import{ React,useState,useEffect }from "react";
import { useParams } from "react-router-dom";


const Showdata = (index) => {
    var [hits2, setHits2] = useState([]);
    var [IsLoading, setIsLoading] = useState(false);
    var [error, setError] = useState(null);
    const [isChecked, setIsChecked] = useState(false);
  const { bitid } = useParams();

  useEffect(() => {
    setIsLoading(true);

    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids="+bitid+"&order=mar ket_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h,24h,7d" )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      //  .then(data => this.setState({ name: data.name }));
      .then((data) => {
        const a = data;
        setHits2(a);

        setIsLoading(false);
      });
  }, []);
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
          {hits2.map((hit) => {
            return (
              <>
                <div className="col-12">
                name:   {hit["name"]} , image : {hit["image"]}
                
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Showdata;
