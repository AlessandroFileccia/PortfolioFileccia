document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('searchInput');

  searchInput.addEventListener('input', function () {
    const searchTerm = searchInput.value.trim().toLowerCase();

    fetch('http://localhost:9033/auto/all')
      .then(response => response.json())
      .then(data => {
        console.log("Data from server:", data);
        
        let container = document.getElementById('container');
        if (!container) {
          container = document.createElement('div');
          container.id = 'container';
          container.classList.add('view-cars-section', 'container');
          const parentElement = document.querySelector('.container-parent'); // Assicurati di selezionare il genitore corretto
          if (parentElement) {
            parentElement.appendChild(container);
          } else {
            console.error("Parent element not found.");
            return;
          }
        }
        
        container.innerHTML = '';
        const regex = new RegExp(`^${searchTerm}`, 'i'); // Espressione regolare per il match all'inizio del termine di ricerca

        data.forEach(auto => {
          if (auto.statoAuto === "disponibile" && (regex.test(auto.marca.toLowerCase()) || regex.test(auto.modello.toLowerCase()))) {
            const card = document.createElement('div');
            card.classList.add('col-md-3', 'mb-4');
            card.innerHTML = `
              <div class="card" style="width: 15rem; height: 90%;">
                <img src="${auto.immagine}" class="card-img-top" alt="" style="height: 300px; object-fit: cover;">
                <div class="card-body d-flex flex-column justify-content-center">
                  <h6 class="card-title">${auto.marca} ${auto.modello}</h6>
                  <div class="card-text">
                    <p>Anno: ${auto.annoProduzione}</p>
                    <p>Prezzo: ${auto.prezzo} EUR</p>
                    <p>Colore: ${auto.colore}</p>
                    <p>Stato: ${auto.statoAuto}</p>
                    ${auto.statoAuto === "disponibile" ? '<p class="available">Disponibile</p>' : ''}
                  </div>
                </div>
              </div>
            `;
            container.appendChild(card);
          }
        });
      })
      .catch(error => {
        console.error('Si è verificato un errore durante il recupero dei dati:', error);
      });
  });
});


function goBack() {
  window.history.back();
}