// navbar-scroll-lock.js

(function () {
    // Verifica se il browser supporta l'API DOMContentLoaded per assicurarsi che il codice venga eseguito dopo il caricamento completo della pagina
    if ('addEventListener' in document) {
        document.addEventListener('DOMContentLoaded', function () {
            // Funzione per bloccare lo scroll della pagina
            function lockBodyScroll() {
                // Calcoliamo la larghezza della barra di scorrimento
                const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;

                // Aggiungiamo il CSS per bloccare lo scroll
                document.body.style.overflow = 'hidden';
                document.body.style.paddingRight = scrollBarWidth + 'px';
            }

            // Funzione per sbloccare lo scroll della pagina
            function unlockBodyScroll() {
                // Rimuoviamo il CSS per sbloccare lo scroll
                document.body.style.overflow = '';
                document.body.style.paddingRight = '';
            }

            // Evento per bloccare lo scroll quando un menu a tendina viene aperto
            document.addEventListener('show.bs.dropdown', function () {
                lockBodyScroll();
            });

            // Evento per sbloccare lo scroll quando un menu a tendina viene chiuso
            document.addEventListener('hide.bs.dropdown', function () {
                unlockBodyScroll();
            });

            // Monitoraggio degli eventi di scroll
            window.addEventListener('scroll', function () {
                console.log('Lo scroll è attivo.');
            });
        });
    }
})();
