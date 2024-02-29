import { useEffect, useState } from "react";
import Character from "./Character";


function PagNva(props){
  return(
    <header className="d-flex justify-content-between align-items-center">
      <p>Page {props.page} </p>
      <button className="btn btn-primary btn-sm" 
        onClick = {() => props.setPage(props.page + 1)} >
        Page {props.page + 1 }
      </button>
    </header>
  )
}


function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setPage] = useState(1)

  useEffect(() => {
    async function llamoDatos() {
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
      const data = await response.json();
      setloading(false);
      setCharacters(data.results);
    }

    llamoDatos();
  }, [page]);

  if (loading) {
    <div>Loading</div>;
  }

  return (
    <div className="conatiner bg-secondary">

      <PagNva page = {page} setPage = {setPage}/>

      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="row">
          {characters.map((character) => {
            return (
              <div className="col-md-4" key={character.id}>
                <Character character={character} />
              </div>
            );
          })}
        </div>
      )}

      <PagNva page = {page} setPage = {setPage}/>
    </div>

  );
}

export default CharacterList;
