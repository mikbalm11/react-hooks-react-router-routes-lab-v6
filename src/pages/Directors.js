import { useEffect, useState } from "react";
import Card from "../components/ReusableCard";
import NavBar from "../components/NavBar";

function Directors() {
  const [directors, setDirectors] = useState([])

  useEffect(() => {
    fetch(`http://localhost:4000/directors`)
      .then(result => result.json())
      .then(data => setDirectors(data))
      .catch(error => console.error(error))
  }, []);


  return (
    <>
      <header>
        {<NavBar />}
      </header>
      <main>
        <h1>Directors Page</h1>
        {directors.map(director => <Card key={director.id} name={director.name} movies={director.movies} />)}
      </main>
    </>
  );
};

export default Directors;
