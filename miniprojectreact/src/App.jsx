import React from "react";
import "./App.css";

const App = () => {
  const [characterList, setCharacterList] = React.useState([]); //es un array que en su primer valor tiene un “getter” con los datos que le hemos pasado, charactersMock, y como segundo es un “setter” que nos permite realizar  cambios

  React.useEffect(() => {  //UseEfect: realizar una petición a la API de Rick & Morty y pinta esos datos.se lanzará siempre y cuando se haya creado el componente.podemos invocarlo tantas veces como necesitemos
    (async () => {
      let data = await fetch(`https://rickandmortyapi.com/api/character/`).then(
        (res) => res.json()
      );

      setCharacterList(data.results);
    })();
  }, []);

  return (
    <>
      {characterList.map((character) => (
        <div key={character.id}> 

          <h2>name: {character.name}</h2>
   
        </div>
      ))}
    </> //en el retunr, son denominadas React Fragments y nos sirve para agrupar contenido sin necesidad de una etiqueta HTML
  );
};

export default App;



