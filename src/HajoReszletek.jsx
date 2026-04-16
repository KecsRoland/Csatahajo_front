import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function HajoReszletek() {
  const { name } = useParams();
  const [hajo, setHajo] = useState(null);

  useEffect(() => {
    fetch(`https://localhost:7074/api/Hajo/ByName/${name}`)
      .then(response => response.json())
      .then(data => setHajo(data))
      .catch(error => console.error("Hiba történt az adatok lekérésekor:", error));
  }, [name]);

  if (!hajo) return <div className="text-center mt-5 fs-4">Adatok betöltése...</div>;

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">{hajo.nev}</h1>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm py-4 mb-4">
            <div className="card-body text-center fs-5">
              <p>Osztály: {hajo.osztaly}</p>
              <p>Felavatva: {hajo.felavatva}</p>
              <p>Ágyúk száma: {hajo.agyuksZama}</p>
              <p>Kaliber: {hajo.kaliber}</p>
              <p>Vízkiszorítás: {hajo.vizkiszoritas}</p>
            </div>
          </div>
          <div className="text-center">
            <Link to="/" className="btn btn-primary btn-lg">Vissza a csatahajókhoz</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HajoReszletek;