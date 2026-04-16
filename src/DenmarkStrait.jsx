import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function DenmarkStrait() {
  const [resztvevok, setResztvevok] = useState([]);
  const navigate = useNavigate();

  const fetchData = () => {
    fetch('https://localhost:7074/api/Csata/Resztvevok/Denmark%20Strait')
      .then(response => response.json())
      .then(data => setResztvevok(data))
      .catch(error => console.error("Hiba történt a lekérés során:", error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (hajoNev) => {
    const confirms = window.confirm("Biztosan szeretnéd törölni?");
    if (!confirms) return;

    try {
      const response = await fetch(`https://localhost:7074/api/Kimenet/KimenetTorles/Denmark%20Strait/${hajoNev}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        alert("Sikeres törlés!");
        navigate('/');
      } else {
        const errorData = await response.text();
        console.error(`Törlési hiba (${response.status}):`, errorData);
      }
    } catch (error) {
      console.error("Hálózati hiba a törlés próbálkozásánál:", error);
    }
  };

  return (
    <div className="container-fluid mt-4 px-4">
      <h2 className="mb-5 text-center display-5">A Denmark Strait csata résztvevői</h2>
      <div className="row g-4 justify-content-center">
        {resztvevok.map((resztvevo, index) => {
          const nev = typeof resztvevo === 'string' ? resztvevo : (resztvevo.nev || resztvevo.hajoNev || "Ismeretlen");
          return (
            <div className="col-12 col-md-4 col-sm-6" key={index}>
              <div className="card shadow-sm py-3 text-center border-light h-100">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <h5 className="card-title m-0 fw-normal ms-3">{nev}</h5>
                  <button className="btn btn-outline-danger btn-sm me-3 border-0 py-1" onClick={() => handleDelete(nev)}>
                    <i className="bi bi-trash3 fs-5"></i>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DenmarkStrait;