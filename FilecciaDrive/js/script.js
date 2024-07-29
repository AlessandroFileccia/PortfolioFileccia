fetch('http://localhost:9033/auto/all')
  .then(response => response.json())
  .then(data => {
    // Itera su ciascun elemento nell'array dei dati
    data.forEach(auto => {
      // Verifica se lo stato dell'auto è "disponibile"
      if (auto.statoAuto === "disponibile") {
        // Crea una nuova card HTML per ogni auto disponibile
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
                <button class="btn btn-primary see-details-btn">Vedi Dettagli</button>
              </div>
            </div>
          </div>
        `;

        // Aggiungi l'evento click al bottone "Vedi Dettagli"
        const seeDetailsBtn = card.querySelector('.see-details-btn');
        seeDetailsBtn.addEventListener('click', () => {
          // Rimuovi tutte le cards e la navbar attuali
          document.getElementById('container').innerHTML = '';
          const existingNavbar = document.querySelector('.navbar-custom');
          if (existingNavbar) {
            existingNavbar.remove();
          }
          
          // Creazione della navbar
          const navbar = document.createElement('nav');
          navbar.classList.add('navbar', 'navbar-expand-lg', 'navbar-dark', 'bg-dark', 'navbar-custom');
          navbar.innerHTML = `
            <div class="container-fluid d-flex align-items-center">
              <!-- Dropdown menu -->
              <div class="dropdown me-auto">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  <i class="bi bi-list"></i> <!-- Icona hamburger -->
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><a class="dropdown-item" href="#">Action 1</a></li>
                  <li><a class="dropdown-item" href="#">Action 2</a></li>
                  <li><a class="dropdown-item" href="#">Action 3</a></li>
                  <li><a class="dropdown-item" href="#">Action 4</a></li>
                  <li><a class="dropdown-item" href="#">Action 5</a></li>
                </ul>
              </div>

              <!-- Centered logo -->
              <div class="mx-auto">
                <a class="navbar-brand" style="margin-left: 180px; !important href="#">
                  <img id="logo" src="./img/FilecciaDriverLogo.png" alt="Logo">
                </a>
              </div>

              <!-- Search field -->
              <form class="d-flex ms-auto">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-light" type="submit">Search</button>
              </form>
            </div>

          `;

          // Aggiunta della navbar al body del documento
          document.body.prepend(navbar);

          // Genera una pagina HTML fittizia per visualizzare i dettagli dell'auto
          const detailPage = document.createElement('div');
          detailPage.innerHTML = `
            <div class="container mt-4">
              <button class="btn btn-primary back-btn">← Torna Indietro</button> <!-- Bottone Torna Indietro qui -->
              <div class="card" style="max-width: 800px; margin: 20px auto 0;">
                <img src="${auto.immagine}" class="card-img-top" alt="" style="height: 300px; object-fit: cover;">
                <div class="card-body">
                  <h5 class="card-title">${auto.marca} ${auto.modello}</h5>
                  <p class="card-text">Anno: ${auto.annoProduzione}</p>
                  <p class="card-text">Prezzo: ${auto.prezzo} EUR</p>
                  <p class="card-text">Colore: ${auto.colore}</p>
                  <p class="card-text">Stato: ${auto.statoAuto}</p>
                  <button class="btn btn-primary contact-seller-btn">Contatta un Venditore</button>
                </div>
              </div>
            </div>
            <br>
            <br>
            <br>
          `;
          


          // Nasconde il wrapper
          document.getElementById('wrapper').classList.add('hidden');

          // Sostituisce la pagina attuale con la pagina dei dettagli dell'auto
          document.body.appendChild(detailPage);

          // Aggiunge l'evento click al bottone "Torna Indietro"
          const backBtn = detailPage.querySelector('.back-btn');
          backBtn.addEventListener('click', () => {
            location.reload(); // Ricarica la pagina per tornare indietro
          });

          // Aggiunge l'evento click al bottone "Contatta un Venditore"
          const contactSellerBtn = detailPage.querySelector('.contact-seller-btn');
          contactSellerBtn.addEventListener('click', () => {
            // Aggiungi qui il codice per gestire l'azione di contattare un venditore
            alert('Hai cliccato su "Contatta un Venditore"');
          });
        });

        // Aggiungi la card al contenitore
        document.getElementById('container').appendChild(card);
      }
    });
  })
  .catch(error => {
    console.error('Si è verificato un errore durante il recupero dei dati:', error);
  });
``
