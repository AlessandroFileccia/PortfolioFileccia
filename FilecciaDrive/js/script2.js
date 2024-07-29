fetch('http://localhost:9033/auto/all')
  .then(response => response.json())
  .then(data => {
    data.forEach(auto => {
      if (auto.statoAuto === "non disponibile") {
        const card = document.createElement('div');
        card.classList.add('col-md-3', 'mb-4');  
        card.innerHTML =  `
          <div class="card" style="width: 15rem; height: 90%;" >
            <img src="${auto.immagine}" class="card-img-top" alt="" style="height: 300px; object-fit: cover;">
            <div class="card-body d-flex flex-column justify-content-center">
              <h6 class="card-title">${auto.marca} ${auto.modello}</h6>
              <div class="card-text">
                <p>Anno: ${auto.annoProduzione}</p>
                <p>Prezzo: ${auto.prezzo} EUR</p>
                <p>Colore: ${auto.colore}</p>
                <p>Stato: ${auto.statoAuto}</p>
                ${auto.statoAuto === "non disponibile" ? '<p class="sold">Venduto</p>' : ''}
              </div>
            </div>
          </div>
        `;

        // Aggiungi la card al contenitore
        document.getElementById('container').appendChild(card);
      }
    });
  })
  .catch(error => {
    console.error('Si è verificato un errore durante il recupero dei dati:', error);
  });
