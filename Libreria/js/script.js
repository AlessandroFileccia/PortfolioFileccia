class Libro {
    constructor(titolo, copertina, autore, trama, personaggi, prezzo) {
        this.titolo = titolo;
        this.copertina = copertina;
        this.autore = autore;
        this.trama = trama;
        this.personaggi = personaggi;
        this.prezzo = prezzo;
    }
}

let libri = [
    new Libro(
        "Harry Potter",
        "https://m.media-amazon.com/images/I/718kKmxQBWL._AC_UF1000,1000_QL80_.jpg",
        "J.K.Rowling",
        "Trama: un mago che fa magia",
        ["Harry Potter", "Ron Weasley"],
        21
    ),
    new Libro(
        "Il Signore degli Anelli",
        "https://m.media-amazon.com/images/I/71gjt76M3xL._AC_UF1000,1000_QL80_.jpg",
        "J.R.R. Tolkien",
        "Trama: un anello che deve essere distrutto",
        ["Frodo Baggins", "Gandalf"],
        25
    ),
    new Libro(
        "Cronache del ghiaccio e del fuoco",
        "https://m.media-amazon.com/images/I/91ecPzFlcdL._AC_UF1000,1000_QL80_.jpg",
        "George R.R. Martin",
        "Trama: guerre per il trono di Westeros",
        ["Jon Snow", "Daenerys Targaryen"],
        30
    ),
    new Libro(
        "1984",
        "https://m.media-amazon.com/images/I/61NAx5pd6XL._AC_UF1000,1000_QL80_.jpg",
        "George Orwell",
        "Trama: un mondo totalitario controllato dal Grande Fratello",
        ["Winston Smith", "Julia"],
        18
    ),
    new Libro(
        "Il piccolo principe",
        "https://m.media-amazon.com/images/I/71TouL2HNnL._AC_UF1000,1000_QL80_.jpg",
        "Antoine de Saint-Exupéry",
        "Trama: un principe che viaggia tra pianeti",
        ["Il Piccolo Principe", "La Volpe"],
        15
    ),
    new Libro(
        "La storia infinita",
        "https://m.media-amazon.com/images/I/51Az+Xr3m9L._AC_UF1000,1000_QL80_.jpg",
        "Michael Ende",
        "Trama: un ragazzo che legge un libro magico",
        ["Atreyu", "Fuchur"],
        20
    ),
    new Libro(
        "Orgoglio e pregiudizio",
        "https://m.media-amazon.com/images/I/71EoYkXesEL._AC_UF1000,1000_QL80_.jpg",
        "Jane Austen",
        "Trama: un amore contrastato tra Elizabeth Bennet e Mr. Darcy",
        ["Elizabeth Bennet", "Mr. Darcy"],
        16
    ),
    new Libro(
        "Il nome della rosa",
        "https://m.media-amazon.com/images/I/61Aa9Yic8AL._AC_UF1000,1000_QL80_.jpg",
        "Umberto Eco",
        "Trama: misteri in un'abbazia nel Medioevo",
        ["Guglielmo da Baskerville", "Adso da Melk"],
        22
    ),
    new Libro(
        "Il vecchio e il mare",
        "https://m.media-amazon.com/images/I/71OVnR5VnFL._AC_UF1000,1000_QL80_.jpg",
        "Ernest Hemingway",
        "Trama: un vecchio pescatore che lotta con un enorme pesce",
        ["Santiago", "Manolo"],
        14
    ),
    new Libro(
        "Cent'anni di solitudine",
        "https://m.media-amazon.com/images/I/81nxsT-8NWS._AC_UF1000,1000_QL80_.jpg",
        "Gabriel García Márquez",
        "Trama: la storia della famiglia Buendía a Macondo",
        ["José Arcadio Buendía", "Úrsula Iguarán"],
        28
    ),
    new Libro(
        "Il Gattopardo",
        "https://m.media-amazon.com/images/I/51UMXxP-XBL._AC_UF1000,1000_QL80_.jpg",
        "Giuseppe Tomasi di Lampedusa",
        "Trama: i cambiamenti nella Sicilia del Risorgimento",
        ["Don Fabrizio Corbera", "Tancredi Falconeri"],
        19
    )
];

let indiceLibroCorrente = 0;

function mostraLibro() {
    const libroCorrente = libri[indiceLibroCorrente];
    document.querySelector("#eltitolo").textContent = libroCorrente.titolo;
    document.querySelector("#elCopertina").src = libroCorrente.copertina;
    document.querySelector("#elTrama").textContent = libroCorrente.trama;
    document.querySelector("#elAutore").textContent = "Autore: " + libroCorrente.autore;
    document.querySelector("#elPrezzo").textContent = "Prezzo: " + libroCorrente.prezzo + "€";
    document.querySelector("#elPersonaggi").textContent = "Personaggi: " + libroCorrente.personaggi.join(", ");
}

document.querySelector("#btnAvanti").addEventListener("click", function() {
    indiceLibroCorrente = (indiceLibroCorrente + 1) % libri.length;
    mostraLibro();
});

document.querySelector("#btnIndietro").addEventListener("click", function() {
    indiceLibroCorrente = (indiceLibroCorrente - 1 + libri.length) % libri.length;
    mostraLibro();
});

function mostraAnteprima() {
    const titolo = document.querySelector("#titolo").value;
    const copertina = document.querySelector("#copertina").value;
    const trama = document.querySelector("#trama").value;
    const autore = document.querySelector("#autore").value;
    const prezzo = document.querySelector("#prezzo").value;
    const personaggi = document.querySelector("#personaggi").value;

    document.querySelector("#anteprima-titolo").textContent = titolo;
    document.querySelector("#anteprima-copertina").src = copertina;
    document.querySelector("#anteprima-trama").textContent = trama;
    document.querySelector("#anteprima-autore").textContent = "Autore: " + autore;
    document.querySelector("#anteprima-prezzo").textContent = "Prezzo: " + prezzo + "€";
    document.querySelector("#anteprima-personaggi").textContent = "Personaggi: " + personaggi;

    // Mostra l'anteprima
    document.querySelector("#anteprima").style.display = "block";
}

document.querySelector("#btnAnteprima").addEventListener("click", mostraAnteprima);

document.querySelector("#btnSalva").addEventListener("click", function() {
    const titolo = document.querySelector("#titolo").value;
    const copertina = document.querySelector("#copertina").value;
    const trama = document.querySelector("#trama").value;
    const autore = document.querySelector("#autore").value;
    const prezzo = document.querySelector("#prezzo").value;
    const personaggi = document.querySelector("#personaggi").value.split(",");

    const nuovoLibro = new Libro(
        titolo,
        copertina,
        autore,
        trama,
        personaggi,
        prezzo
    );

    libri.push(nuovoLibro);
    alert("Libro aggiunto con successo!");

    // Resetta i campi del form dopo aver salvato il libro
    document.querySelector("#titolo").value = "";
    document.querySelector("#copertina").value = "";
    document.querySelector("#trama").value = "";
    document.querySelector("#autore").value = "";
    document.querySelector("#prezzo").value = "";
    document.querySelector("#personaggi").value = "";

    // Nascondi l'anteprima dopo aver salvato il libro
    document.querySelector("#anteprima").style.display = "none";

    // Aggiorna la visualizzazione del libro corrente
    mostraLibro();
});

mostraLibro();


