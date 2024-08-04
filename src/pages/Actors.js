import { useEffect, useState } from "react";
import Card from "../components/ReusableCard";
import NavBar from "../components/NavBar";

function Actors() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/actors`)
      .then(result => result.json())
      .then(data => setActors(data))
      .catch(error => console.error(error));
  })

  return (
    <>
      <header>
        {<NavBar />}
      </header>
      <main>
        <h1>Actors Page</h1>
        {actors.map(actor => <Card key={actor.id} name={actor.name} movies={actor.movies} />)}
      </main>
    </>
  );
};

export default Actors;
