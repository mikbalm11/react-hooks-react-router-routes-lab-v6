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
  }, []);

  const actorCards = actors.map(actor => <Card key={actor.id} name={actor.name} movies={actor.movies} />);

  return (
    <>
      <header>
        {<NavBar />}
      </header>
      <main>
        <h1>Actors Page</h1>
        {actorCards}
      </main>
    </>
  );
};

export default Actors;
