document.addEventListener('DOMContentLoaded', function () {
    caricaCategorie();
});

function caricaCategorie() {
    fetch('http://localhost:9037/api/categories')
        .then(function(response) {
            if (!response.ok) {
                throw new Error('Errore HTTP, status ' + response.status);
            }
            return response.json();
        })
        .then(function(data) {
            console.log('Categorie caricate con successo:', data);
            var categorieList = document.getElementById('categorie-list');
            categorieList.innerHTML = ''; // Pulisce la lista

            data.forEach(function (categoria) {
                var categoriaItem = document.createElement('a');
                categoriaItem.href = '#';
                categoriaItem.className = 'list-group-item list-group-item-action';
                categoriaItem.textContent = categoria.categoryName;

                categoriaItem.addEventListener('click', function (event) {
                    event.preventDefault();

                    caricaCibiCategoria(categoria.categoryId);
                
                });

                categorieList.appendChild(categoriaItem);
            });
        })
        .catch(function(error) {
            console.error('Errore nel caricamento delle categorie:', error);
        });
}

function caricaCibiCategoria(categoryId) {
    fetch('http://localhost:9037/api/items?categoryId=' + categoryId)
        .then(function(response) {
            if (!response.ok) {
                throw new Error('Errore HTTP, status ' + response.status);
            }
            return response.json();
        })
        .then(function(data) {
            console.log('Cibi della categoria ' + categoryId + ' caricate con successo:', data);
            var cibiCategoria = document.getElementById('cibi-categoria');
            cibiCategoria.innerHTML = ''; // Pulisce la lista

            // Crea un container per gli items
            var itemsRow = document.createElement('div');
            itemsRow.className = 'row';

            data.forEach(function (cibo) {
                var colCibo = document.createElement('div');
                colCibo.className = 'col-md-6 col-cibo'; // Utilizza una colonna personalizzata per i cibi

                var ciboItem = document.createElement('div');
                ciboItem.className = 'card mb-3';

                var cardBody = document.createElement('div');
                cardBody.className = 'card-body';

                var cardTitle = document.createElement('h5');
                cardTitle.className = 'card-title';
                cardTitle.textContent = cibo.name;

                var cardDescription = document.createElement('p');
                cardDescription.className = 'card-text';
                cardDescription.textContent = cibo.description;

                var cardPrice = document.createElement('p');
                cardPrice.className = 'card-text';
                cardPrice.textContent = 'Prezzo: € ' + cibo.price;

                cardBody.appendChild(cardTitle);
                cardBody.appendChild(cardDescription);
                cardBody.appendChild(cardPrice);

                ciboItem.appendChild(cardBody);
                colCibo.appendChild(ciboItem);

                itemsRow.appendChild(colCibo);
            });

            cibiCategoria.appendChild(itemsRow);
        })
        .catch(function(error) {
            console.error('Errore nel caricamento dei cibi della categoria:', error);
        });
}

