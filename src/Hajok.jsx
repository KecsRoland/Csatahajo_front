import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Hajok() {
  const [hajok, setHajok] = useState([]);

  useEffect(() => {
    fetch('https://localhost:7074/api/Hajo/All')
      .then(response => response.json())
      .then(data => setHajok(data))
      .catch(error => console.error("Hiba történt az adatok lekérésekor:", error));
  }, []);

  return (
    <div className="container-fluid mt-4 px-4">
      <h2 className="mb-5 text-center display-5">Csatahajók:</h2>
      <div className="row g-4">
        {hajok.map((hajo, index) => (
          <div className="col-12 col-md-4 col-sm-6" key={index}>
            <Link to={`/hajo/${hajo.nev}`} className="text-decoration-none text-dark">
              <div className="card shadow-sm py-4 h-100 text-center rounded-3 border-light">
                <div className="card-body">
                  <h5 className="card-title m-0 fw-normal">{hajo.nev}</h5>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hajok;