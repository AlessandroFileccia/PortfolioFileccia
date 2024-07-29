document.addEventListener("DOMContentLoaded", function() {
    // Aggiungi un event listener al bottone "Genera Domande"
    var btnGeneraDomande = document.getElementById("btngenerator2");
    btnGeneraDomande.addEventListener("click", function() {
      console.log("Bottone cliccato");
  
      // Array di domande con soluzioni
      var domande = [
        //Domande sull DB/MySQL
        { 
            domanda: "Cos'è un database?",
            soluzione: "Un database è una collezione organizzata di dati strutturati in modo da consentire l'accesso, la gestione e l'aggiornamento efficienti."
        },
        { 
            domanda: "Cosa significa l'acronimo 'DBMS'?",
            soluzione: "DBMS sta per Database Management System."
        },
        { 
            domanda: "Qual è il ruolo principale di un DBMS?",
            soluzione: "Il ruolo principale di un DBMS è gestire in modo efficiente il database, consentendo agli utenti di accedere, manipolare e aggiornare i dati in modo sicuro."
        },
        { 
            domanda: "Qual è la differenza fondamentale tra il modello SQL e il modello NoSQL?",
            soluzione: "Il modello SQL è basato su database relazionali e utilizza il linguaggio SQL per interrogare i dati, mentre il modello NoSQL è più flessibile e può gestire grandi quantità di dati non strutturati o semi-strutturati senza uno schema rigido."
        },
        { 
            domanda: "Quali sono alcuni esempi comuni di database SQL?",
            soluzione: "Alcuni esempi comuni di database SQL includono MySQL, PostgreSQL, Oracle e SQL Server."
        },
        { 
            domanda: "Quali sono alcuni esempi comuni di database NoSQL?",
            soluzione: "Alcuni esempi comuni di database NoSQL includono MongoDB, Cassandra, Redis e Couchbase."
        },
        { 
            domanda: "In quali situazioni potrebbe essere preferibile utilizzare un database NoSQL rispetto a un database SQL?",
            soluzione: "I database NoSQL sono spesso preferiti quando si devono gestire grandi volumi di dati non strutturati o semi-strutturati, quando si richiede scalabilità orizzontale o quando la flessibilità dello schema è prioritaria rispetto alla coerenza dei dati."
        },
        { 
            domanda: "Cosa significa l'acronimo 'DDL'?",
            soluzione: "DDL sta per Data Definition Language."
        },
        { 
            domanda: "Qual è il compito principale del DDL in un database?",
            soluzione: "Il DDL è utilizzato per definire la struttura del database, inclusa la creazione, modifica e eliminazione delle tabelle e dei loro attributi."
        },
        { 
            domanda: "Cosa controlla il DCL in un database?",
            soluzione: "Il DCL controlla i privilegi di accesso ai dati nel database, consentendo agli utenti di concedere o revocare autorizzazioni per l'accesso e la modifica dei dati."
        },
        { 
            domanda: "Quali sono alcuni esempi di comandi DCL?",
            soluzione: "Alcuni esempi di comandi DCL includono GRANT, per concedere privilegi agli utenti, e REVOKE, per revocare i privilegi precedentemente concessi."
        },
        { 
            domanda: "Qual è lo scopo principale del DML?",
            soluzione: "Il DML è utilizzato per manipolare i dati all'interno del database, consentendo agli utenti di inserire, modificare o eliminare i dati nelle tabelle."
        },
        { 
            domanda: "Quali sono alcuni esempi di comandi DML?",
            soluzione: "Alcuni esempi di comandi DML includono INSERT, per aggiungere nuove righe ai dati esistenti, UPDATE, per modificare i dati esistenti, e DELETE, per eliminare righe dai dati esistenti."
        },
        { 
            domanda: "Cosa è una query in un database?",
            soluzione: "Una query è una richiesta per recuperare specifici dati dal database in base a determinati criteri."
        },
        { 
            domanda: "Qual è l'obiettivo principale dell'integrità referenziale in un database?",
            soluzione: "L'integrità referenziale garantisce che le relazioni tra le tabelle siano mantenute correttamente, impedendo l'inserimento di dati che violano vincoli di chiave esterna o altre regole di relazione."
        },
        { 
            domanda: "Qual è la differenza tra UNION e JOIN nelle query SQL?",
            soluzione: "UNION viene utilizzato per combinare i risultati di due o più query in un unico set di risultati, mentre JOIN viene utilizzato per combinare dati da due o più tabelle basandosi su una condizione di correlazione."
        },
        { 
            domanda: "Qual è la differenza tra INNER JOIN e OUTER JOIN nelle query SQL?",
            soluzione: "INNER JOIN restituisce solo le righe che hanno una corrispondenza in entrambe le tabelle coinvolte nella query, mentre OUTER JOIN restituisce tutte le righe da almeno una delle tabelle coinvolte nella query, inclusi i valori NULL quando non c'è una corrispondenza."
        },
        { 
            domanda: "Cosa sono le funzioni in un database e quali tipi di funzioni esistono generalmente?",
            soluzione: "Le funzioni sono blocchi di codice predefiniti che eseguono operazioni specifiche sui dati. I tipi comuni di funzioni includono funzioni di aggregazione, funzioni di manipolazione delle stringhe, funzioni matematiche, ecc."
        },
        { 
            domanda: "Qual è lo scopo dei raggruppamenti nelle query SQL?",
            soluzione: "I raggruppamenti vengono utilizzati per aggregare i dati in base a determinati criteri e calcolare statistiche o totali sui gruppi di dati."
        },
        { 
            domanda: "Qual è il vantaggio principale nell'utilizzo delle viste in un database?",
            soluzione: "Le viste consentono agli utenti di eseguire query complesse senza dover scrivere manualmente il codice SQL ogni volta, fornendo un'astrazione dei dati sottostanti."
        },
        { 
            domanda: "Qual è il ruolo delle funzioni di aggregazione nelle query SQL?",
            soluzione: "Le funzioni di aggregazione, come SUM, COUNT, AVG, MIN e MAX, vengono utilizzate per eseguire calcoli su gruppi di dati e restituire un singolo valore aggregato."
        },
        { 
            domanda: "Cos'è una subquery in SQL e quando viene comunemente utilizzata?",
            soluzione: "Una subquery è una query annidata all'interno di un'altra query. Viene comunemente utilizzata per filtrare i risultati in base ai risultati di un'altra query, per eseguire confronti complessi o per recuperare dati da tabelle correlate."
        },
        { 
            domanda: "Qual è il vantaggio principale nell'utilizzo degli indici in un database?",
            soluzione: "Gli indici migliorano le prestazioni delle query consentendo al database di recuperare rapidamente i dati in base a criteri specifici, riducendo la necessità di scansionare l'intera tabella."
        },
        { 
            domanda: "Qual è il ruolo dei trigger in un database e quando vengono comunemente utilizzati?",
            soluzione: "I trigger sono procedure automatiche che vengono eseguite in risposta a determinati eventi, come l'inserimento, la modifica o l'eliminazione di dati. Vengono comunemente utilizzati per applicare logica aziendale complessa, eseguire controlli di integrità dei dati o aggiornare automaticamente altre tabelle."
        },
        { 
            domanda: "Cosa sono le stored procedures in un database e quali sono i loro vantaggi?",
            soluzione: "Le stored procedures sono insiemi di istruzioni SQL precompilate e memorizzate nel database. I loro vantaggi includono la riduzione della duplicazione del codice, la maggiore sicurezza e le prestazioni migliorate."
        },
        { 
            domanda: "Cosa significa 'transaction' in un database e qual è il suo scopo principale?",
            soluzione: "Una transazione è un insieme di operazioni che vengono eseguite come un'unica unità atomica, garantendo che tutte le operazioni vengano completate con successo o che vengano annullate se si verifica un errore. Il suo scopo principale è garantire la coerenza e l'integrità dei dati durante le operazioni nel database."
        },
        { 
            domanda: "Qual è la differenza tra una transazione COMMIT e una ROLLBACK?",
            soluzione: "COMMIT conferma una transazione e applica permanentemente le modifiche effettuate, mentre ROLLBACK annulla una transazione e ripristina lo stato del database al momento in cui la transazione è stata avviata."
        },
        //Domande su Backend/java/springboot
        { 
            domanda: "Cos'è il back-end in sviluppo software?",
            soluzione: "Il back-end è la parte di un'applicazione o di un sistema software che si occupa del processamento dei dati e della logica di business. Gestisce le richieste dei client e interagisce con il database per recuperare, modificare o archiviare dati."
        },
        { 
            domanda: "Cosa sono le variabili e quale è il loro ruolo nel back-end?",
            soluzione: "Le variabili sono simboli che rappresentano valori memorizzati in memoria durante l'esecuzione di un programma. Nel back-end, le variabili vengono utilizzate per memorizzare dati temporanei, risultati di calcoli o configurazioni di sistema."
        },
        { 
            domanda: "Quali sono i principali tipi di dati utilizzati nel back-end?",
            soluzione: "Alcuni dei principali tipi di dati utilizzati nel back-end includono stringhe, numeri interi, numeri decimali, booleani e strutture dati complesse come array e oggetti."
        },
        { 
            domanda: "Cosa sono gli operatori aritmetici e quali sono i principali operatori utilizzati nel back-end?",
            soluzione: "Gli operatori aritmetici sono simboli utilizzati per eseguire operazioni matematiche su numeri. Alcuni dei principali operatori utilizzati nel back-end includono + (addizione), - (sottrazione), * (moltiplicazione), / (divisione) e % (modulo)."
        },
        { 
            domanda: "Quali sono gli operatori di confronto utilizzati nel back-end?",
            soluzione: "Gli operatori di confronto vengono utilizzati per confrontare due valori e restituire un valore booleano che indica se la condizione è vera o falsa. Alcuni esempi includono == (uguale a), != (diverso da), > (maggiore di), < (minore di), >= (maggiore o uguale a), <= (minore o uguale a)."
        },
        { 
            domanda: "Cosa sono gli operatori logici e quali sono i principali operatori utilizzati nel back-end?",
            soluzione: "Gli operatori logici vengono utilizzati per combinare condizioni booleane e restituire un risultato booleano. Alcuni dei principali operatori logici utilizzati nel back-end includono && (AND logico), || (OR logico) e ! (NOT logico)."
        },
        { 
            domanda: "Cosa sono i metodi nel contesto del back-end e qual è il loro ruolo?",
            soluzione: "I metodi sono blocchi di codice che eseguono una specifica operazione o compito. Nel contesto del back-end, i metodi vengono utilizzati per organizzare la logica di business in modo modulare e riutilizzabile."
        },
        { 
            domanda: "Quali sono i quattro operatori di confronto più comuni utilizzati nel back-end?",
            soluzione: "I quattro operatori di confronto più comuni sono: == (uguale a), != (diverso da), > (maggiore di), < (minore di)."
        },
        { 
            domanda: "Quali sono i quattro operatori logici più comuni utilizzati nel back-end?",
            soluzione: "I quattro operatori logici più comuni sono: && (AND logico), || (OR logico), ! (NOT logico)."
        },
        { 
            domanda: "Qual è il ruolo della struttura condizionale 'if' nel back-end?",
            soluzione: "La struttura condizionale 'if' nel back-end viene utilizzata per eseguire un blocco di codice solo se una determinata condizione è vera, altrimenti il blocco di codice viene saltato."
        },
        { 
            domanda: "Qual è il ruolo della struttura di controllo 'switch' nel back-end?",
            soluzione: "La struttura di controllo 'switch' nel back-end viene utilizzata per eseguire uno dei molti blocchi di codice alternativi in base al valore di una variabile o di un'espressione."
        },
        { 
            domanda: "Cosa fa la struttura di controllo 'while' nel contesto del back-end?",
            soluzione: "La struttura di controllo 'while' viene utilizzata per eseguire ripetutamente un blocco di codice fintanto che una condizione specificata è vera."
        },
        { 
            domanda: "Qual è il ruolo della struttura di controllo 'for' nel back-end?",
            soluzione: "La struttura di controllo 'for' viene utilizzata per eseguire un blocco di codice un numero specificato di volte, controllando una variabile di iterazione."
        },
        { 
            domanda: "Cos'è un array e come viene utilizzato nel back-end?",
            soluzione: "Un array è una collezione ordinata di elementi di dati dello stesso tipo. Nel back-end, gli array vengono utilizzati per memorizzare e manipolare una serie di valori correlati."
        },
        { 
            domanda: "Qual è la differenza tra un array e una lista (array list) nel back-end?",
            soluzione: "Un array ha una dimensione fissa, mentre una lista (array list) può espandersi o contrarsi dinamicamente. Le liste offrono in genere più flessibilità nel back-end rispetto agli array."
        },
        { 
            domanda: "Come si accede agli elementi di un array nel back-end?",
            soluzione: "Gli elementi di un array nel back-end sono accessibili utilizzando l'indice dell'elemento, che rappresenta la posizione dell'elemento nell'array."
        },
        { 
            domanda: "Come si aggiungono elementi a un array nel back-end?",
            soluzione: "Nel back-end, è possibile aggiungere elementi a un array utilizzando metodi come push() per aggiungere elementi alla fine dell'array o unshift() per aggiungere elementi all'inizio dell'array."
        },
        { 
            domanda: "Qual è il ruolo della struttura di controllo 'do-while' nel back-end?",
            soluzione: "La struttura di controllo 'do-while' nel back-end viene utilizzata per eseguire un blocco di codice almeno una volta, e poi ripeterlo fintanto che una condizione specificata è vera."
        },
        { 
            domanda: "Cosa fa la struttura di controllo 'foreach' nel back-end?",
            soluzione: "La struttura di controllo 'foreach' viene utilizzata nel back-end per iterare su tutti gli elementi di un array o di una collezione e applicare un blocco di codice a ciascun elemento."
        },
        { 
            domanda: "Qual è il ruolo della struttura di controllo 'break' nel back-end?",
            soluzione: "La struttura di controllo 'break' nel back-end viene utilizzata per interrompere l'esecuzione di un ciclo (come 'for', 'while', 'do-while') o di uno switch statement."
        },
        { 
            domanda: "Qual è il ruolo della struttura di controllo 'continue' nel back-end?",
            soluzione: "La struttura di controllo 'continue' nel back-end viene utilizzata per saltare l'iterazione corrente di un ciclo (come 'for', 'while', 'do-while') e passare direttamente all'iterazione successiva."
        },
        { 
            domanda: "Cosa sono le wrapper class nel contesto del back-end e quale è il loro ruolo?",
            soluzione: "Le wrapper class sono classi che incapsulano tipi di dati primitivi in ​​oggetti. Nel back-end, le wrapper class consentono di trattare i tipi primitivi come oggetti, fornendo metodi utili per operare su di essi."
        },
        { 
            domanda: "Cos'è un costruttore e qual è il suo ruolo nel back-end?",
            soluzione: "Un costruttore è un metodo speciale utilizzato per inizializzare gli oggetti di una classe. Nel back-end, i costruttori vengono utilizzati per impostare lo stato iniziale di un oggetto quando viene creato un'istanza della classe."
        },
        { 
            domanda: "Cosa si intende per scope delle variabili nel back-end?",
            soluzione: "Lo scope delle variabili nel back-end definisce la visibilità e la durata di una variabile all'interno di un programma. Può essere globale, locale o di istanza, a seconda di dove viene dichiarata la variabile e della sua accessibilità."
        },
        { 
            domanda: "Cosa sono gli iteratori nel contesto del back-end e come vengono utilizzati?",
            soluzione: "Gli iteratori nel back-end sono oggetti che consentono di iterare su una sequenza di elementi. Vengono utilizzati per attraversare collezioni di dati come array, liste o mappe in modo efficiente e sequenziale."
        },
        { 
            domanda: "Cos'è una HashMap nel back-end e come funziona?",
            soluzione: "Una HashMap è una struttura dati nel back-end che memorizza coppie chiave-valore e consente di accedere rapidamente ai valori tramite la loro chiave. Utilizza una funzione di hash per mappare le chiavi ai valori all'interno di una tabella hash."
        },
        { 
            domanda: "Cosa si intende per casting nel back-end e quando viene utilizzato?",
            soluzione: "Il casting nel back-end si riferisce alla conversione di un tipo di dati in un altro. Viene utilizzato quando è necessario trattare un tipo di dati come un altro tipo, ad esempio per convertire un tipo primitivo in un altro o per convertire un oggetto da una classe a un'altra."
        },
        { 
            domanda: "Cos'è l'exception handling nel back-end e qual è il suo scopo?",
            soluzione: "L'exception handling nel back-end è il processo di gestione delle eccezioni, ovvero situazioni anomale che si verificano durante l'esecuzione di un programma. Il suo scopo è gestire queste eccezioni in modo che il programma possa gestire i fallimenti in modo sicuro ed elegante, senza interrompersi inaspettatamente."
        },
        { 
            domanda: "Cosa sono le classi nel back-end e quale ruolo svolgono?",
            soluzione: "Le classi nel back-end sono modelli per creare oggetti. Definiscono gli attributi e i comportamenti comuni agli oggetti di un certo tipo. Le classi sono fondamentali nell'orientamento agli oggetti e consentono di organizzare e strutturare il codice in modo più efficiente e manutenibile."
        },
        { 
            domanda: "Cos'è un oggetto nel back-end e come viene creato?",
            soluzione: "Un oggetto nel back-end è un'istanza di una classe. Viene creato utilizzando il costruttore della classe, che alloca memoria per l'oggetto e inizializza i suoi attributi. Gli oggetti contengono dati e metodi che consentono loro di eseguire operazioni specifiche."
        },
        { 
            domanda: "Quali sono i principali modificatori di accesso nel back-end e qual è il loro ruolo?",
            soluzione: "I principali modificatori di accesso nel back-end sono public, private e protected. Questi modificatori determinano la visibilità di una classe, di un metodo o di un campo agli altri componenti del programma. Public consente l'accesso da qualsiasi parte del programma, private limita l'accesso solo alla classe stessa e protected consente l'accesso anche alle sottoclassi."
        },
        { 
            domanda: "Qual è il ruolo della parola chiave 'this' nel back-end?",
            soluzione: "La parola chiave 'this' nel back-end viene utilizzata per fare riferimento all'istanza corrente di una classe. Viene utilizzata per distinguere tra variabili locali e variabili di istanza quando hanno lo stesso nome."
        },
        { 
            domanda: "Cosa significa ereditarietà nel back-end e qual è il suo scopo?",
            soluzione: "L'ereditarietà nel back-end è il meccanismo attraverso il quale una classe acquisisce i metodi e gli attributi di un'altra classe. Il suo scopo è consentire la creazione di nuove classi basate su classi esistenti, consentendo il riutilizzo del codice e la creazione di una gerarchia di classi."
        },
        { 
            domanda: "Cosa si intende per programmazione orientata agli oggetti (OOP) e quali sono i suoi principi fondamentali?",
            soluzione: "La programmazione orientata agli oggetti (OOP) è un paradigma di programmazione che si basa sul concetto di oggetti e classi. I suoi principi fondamentali sono incapsulamento, ereditarietà, polimorfismo e astrazione."
        },
        { 
            domanda: "Cos'è l'incapsulamento nel contesto dell'OOP e quale è il suo scopo?",
            soluzione: "L'incapsulamento nell'OOP è il concetto di nascondere i dettagli interni di un oggetto e consentire l'accesso solo attraverso metodi pubblici. Il suo scopo è proteggere lo stato interno di un oggetto e garantire che venga modificato solo in modo controllato e sicuro."
        },
        { 
            domanda: "Cos'è l'ereditarietà nel contesto dell'OOP e qual è il suo ruolo?",
            soluzione: "L'ereditarietà nell'OOP è il meccanismo attraverso il quale una classe può ereditare attributi e metodi da un'altra classe. Il suo ruolo è promuovere il riutilizzo del codice, consentendo la creazione di nuove classi basate su classi esistenti."
        },
        { 
            domanda: "Cosa significa polimorfismo nell'OOP e come viene implementato?",
            soluzione: "Il polimorfismo nell'OOP si riferisce alla capacità di oggetti di classi diverse di rispondere allo stesso messaggio in modi diversi. Viene implementato tramite sovraccarico di metodi, sovrascrittura di metodi e collegamento tardivo (binding) durante l'esecuzione."
        },
        { 
            domanda: "Cos'è l'astrazione nel contesto dell'OOP e perché è importante?",
            soluzione: "L'astrazione nell'OOP si riferisce al processo di astrazione dei dettagli complessi di implementazione di un oggetto e alla presentazione solo delle funzionalità essenziali. È importante perché consente di focalizzarsi sulle caratteristiche più rilevanti di un oggetto, ignorando i dettagli di implementazione sottostanti."
        },
        { 
            domanda: "Qual è la differenza tra l'incapsulamento e l'astrazione nell'OOP?",
            soluzione: "L'incapsulamento si riferisce alla protezione dello stato interno di un oggetto e al nascondere i dettagli di implementazione, mentre l'astrazione si riferisce a fornire solo le funzionalità essenziali di un oggetto e a nascondere i dettagli complessi di implementazione."
        },
        { 
            domanda: "In che modo l'ereditarietà promuove il riutilizzo del codice nell'OOP?",
            soluzione: "L'ereditarietà nell'OOP consente alle nuove classi di acquisire attributi e metodi da classi esistenti, riducendo così la duplicazione del codice e promuovendo il riutilizzo."
        },
        { 
            domanda: "Qual è il vantaggio principale del polimorfismo nell'OOP?",
            soluzione: "Il vantaggio principale del polimorfismo nell'OOP è la flessibilità. Consente agli oggetti di rispondere allo stesso messaggio in modi diversi, consentendo una maggiore modularità e manutenibilità del codice."
        },
        { 
            domanda: "Come si implementa l'astrazione nelle classi nel contesto dell'OOP?",
            soluzione: "L'astrazione nelle classi nell'OOP si implementa definendo metodi pubblici che espongono solo le funzionalità essenziali di un oggetto, nascondendo i dettagli di implementazione complessi."
        },
        { 
            domanda: "Qual è il beneficio dell'incapsulamento nell'OOP?",
            soluzione: "Il beneficio principale dell'incapsulamento nell'OOP è la protezione dello stato interno di un oggetto e la prevenzione di accessi non autorizzati o modifiche accidentali, migliorando così la sicurezza e l'affidabilità del codice."
        },
        { 
            domanda: "Cosa si intende per programmazione orientata agli oggetti (OOP) e quali sono i suoi principi fondamentali?",
            soluzione: "La programmazione orientata agli oggetti (OOP) è un paradigma di programmazione che si basa sul concetto di oggetti e classi. I suoi principi fondamentali sono incapsulamento, ereditarietà, polimorfismo e astrazione."
        },
        { 
            domanda: "Cos'è l'incapsulamento nel contesto dell'OOP e quale è il suo scopo?",
            soluzione: "L'incapsulamento nell'OOP è il concetto di nascondere i dettagli interni di un oggetto e consentire l'accesso solo attraverso metodi pubblici. Il suo scopo è proteggere lo stato interno di un oggetto e garantire che venga modificato solo in modo controllato e sicuro."
        },
        { 
            domanda: "Cos'è l'ereditarietà nel contesto dell'OOP e qual è il suo ruolo?",
            soluzione: "L'ereditarietà nell'OOP è il meccanismo attraverso il quale una classe può ereditare attributi e metodi da un'altra classe. Il suo ruolo è promuovere il riutilizzo del codice, consentendo la creazione di nuove classi basate su classi esistenti."
        },
        { 
            domanda: "Cosa significa polimorfismo nell'OOP e come viene implementato?",
            soluzione: "Il polimorfismo nell'OOP si riferisce alla capacità di oggetti di classi diverse di rispondere allo stesso messaggio in modi diversi. Viene implementato tramite sovraccarico di metodi, sovrascrittura di metodi e collegamento tardivo (binding) durante l'esecuzione."
        },
        { 
            domanda: "Cos'è l'astrazione nel contesto dell'OOP e perché è importante?",
            soluzione: "L'astrazione nell'OOP si riferisce al processo di astrazione dei dettagli complessi di implementazione di un oggetto e alla presentazione solo delle funzionalità essenziali. È importante perché consente di focalizzarsi sulle caratteristiche più rilevanti di un oggetto, ignorando i dettagli di implementazione sottostanti."
        },
        { 
            domanda: "Qual è la differenza tra l'incapsulamento e l'astrazione nell'OOP?",
            soluzione: "L'incapsulamento si riferisce alla protezione dello stato interno di un oggetto e al nascondere i dettagli di implementazione, mentre l'astrazione si riferisce a fornire solo le funzionalità essenziali di un oggetto e a nascondere i dettagli complessi di implementazione."
        },
        { 
            domanda: "In che modo l'ereditarietà promuove il riutilizzo del codice nell'OOP?",
            soluzione: "L'ereditarietà nell'OOP consente alle nuove classi di acquisire attributi e metodi da classi esistenti, riducendo così la duplicazione del codice e promuovendo il riutilizzo."
        },
        { 
            domanda: "Qual è il vantaggio principale del polimorfismo nell'OOP?",
            soluzione: "Il vantaggio principale del polimorfismo nell'OOP è la flessibilità. Consente agli oggetti di rispondere allo stesso messaggio in modi diversi, consentendo una maggiore modularità e manutenibilità del codice."
        },
        { 
            domanda: "Come si implementa l'astrazione nelle classi nel contesto dell'OOP?",
            soluzione: "L'astrazione nelle classi nell'OOP si implementa definendo metodi pubblici che espongono solo le funzionalità essenziali di un oggetto, nascondendo i dettagli di implementazione complessi."
        },
        { 
            domanda: "Qual è il beneficio dell'incapsulamento nell'OOP?",
            soluzione: "Il beneficio principale dell'incapsulamento nell'OOP è la protezione dello stato interno di un oggetto e la prevenzione di accessi non autorizzati o modifiche accidentali, migliorando così la sicurezza e l'affidabilità del codice."
        },
        { 
            domanda: "Cosa si intende per interfaccia nel contesto della programmazione orientata agli oggetti (OOP) e quale è il suo scopo principale?",
            soluzione: "Un'interfaccia nel contesto della programmazione orientata agli oggetti (OOP) è una collezione di metodi astratti che definiscono un contratto per le classi che la implementano. Il suo scopo principale è definire un comportamento comune che le classi possono condividere."
        },
        { 
            domanda: "Cosa sono le API (Application Programming Interface) e qual è il loro ruolo nel contesto dello sviluppo software?",
            soluzione: "Le API (Application Programming Interface) sono insiemi di definizioni, protocolli e strumenti per la creazione di software e applicazioni. Il loro ruolo è definire le modalità con cui i diversi componenti software interagiscono tra loro, consentendo lo sviluppo di applicazioni modulari e scalabili."
        },
        { 
            domanda: "Cos'è Spring Boot e quali sono i suoi vantaggi nello sviluppo di applicazioni Java?",
            soluzione: "Spring Boot è un framework open-source per lo sviluppo di applicazioni Java basato su Spring Framework. I suoi vantaggi includono la facilità di configurazione, l'avvio rapido delle applicazioni, la gestione automatica delle dipendenze e la facilità di integrazione con altri framework e librerie."
        },
        { 
            domanda: "Cosa sono le entities nel contesto di Spring Boot e qual è il loro scopo principale?",
            soluzione: "Le entities nel contesto di Spring Boot sono classi Java che rappresentano le entità del dominio di un'applicazione, come ad esempio i dati memorizzati in un database. Il loro scopo principale è rappresentare i dati e definire la struttura delle tabelle del database."
        },
        { 
            domanda: "Cosa sono i repository nel contesto di Spring Boot e qual è il loro ruolo?",
            soluzione: "I repository nel contesto di Spring Boot sono interfacce o classi che forniscono metodi per accedere e manipolare i dati delle entities. Il loro ruolo è separare la logica di accesso ai dati dalla logica di business dell'applicazione."
        },
        { 
            domanda: "Cosa sono i service nel contesto di Spring Boot e qual è il loro scopo?",
            soluzione: "I service nel contesto di Spring Boot sono classi che contengono la logica di business dell'applicazione. Il loro scopo è implementare le funzionalità specifiche dell'applicazione in modo modulare e riutilizzabile."
        },
        { 
            domanda: "Cos'è un controller nel contesto di Spring Boot e quale è la sua funzione principale?",
            soluzione: "Un controller nel contesto di Spring Boot è una classe Java annotata che gestisce le richieste HTTP e restituisce le risposte appropriate. La sua funzione principale è mappare le richieste HTTP ai metodi dei service e restituire le risposte HTTP."
        },
        { 
            domanda: "Cosa significa POM nel contesto di Maven e quale è il suo scopo?",
            soluzione: "POM (Project Object Model) nel contesto di Maven è un file XML che contiene le configurazioni del progetto, come le dipendenze, i plugin e le informazioni sul progetto stesso. Il suo scopo è definire e gestire le dipendenze del progetto e coordinare il processo di build."
        },
        { 
            domanda: "Cosa sono le dependencies nel contesto di Maven e perché sono importanti?",
            soluzione: "Le dependencies nel contesto di Maven sono librerie esterne o moduli di codice che sono richiesti per il corretto funzionamento di un progetto. Sono importanti perché consentono di importare e utilizzare codice già scritto da altri sviluppatori, risparmiando tempo e sforzi nella scrittura del codice."
        },
        { 
            domanda: "Qual è il ruolo delle dependencies nel processo di build di un progetto Maven?",
            soluzione: "Le dependencies nel processo di build di un progetto Maven vengono scaricate e integrate nel progetto durante il processo di compilazione. Sono essenziali per garantire che il progetto possa essere compilato correttamente e che le dipendenze esterne siano disponibili durante l'esecuzione dell'applicazione."
        },
        { 
            domanda: "Come vengono gestite le dependencies nel file POM di Maven?",
            soluzione: "Le dependencies nel file POM di Maven sono gestite all'interno della sezione <dependencies>, dove vengono elencate tutte le dipendenze del progetto insieme alle relative versioni. Maven utilizza queste informazioni per scaricare automaticamente le dipendenze necessarie durante il processo di build."
        },
        { 
            domanda: "Qual è il ruolo principale delle interfaccie nell'architettura delle API?",
            soluzione: "Il ruolo principale delle interfaccie nell'architettura delle API è definire un contratto standardizzato per le comunicazioni tra sistemi software. Le interfaccie definiscono i metodi e i dati che possono essere utilizzati per interagire con un servizio o un componente software, garantendo coerenza e coesione nell'implementazione delle funzionalità."
        },
        { 
            domanda: "Cosa si intende per inversione di controllo (IoC) nel contesto di Spring Framework?",
            soluzione: "L'inversione di controllo (IoC) nel contesto di Spring Framework è un principio di progettazione che sposta la responsabilità della gestione delle dipendenze esterne e della creazione degli oggetti da parte del framework stesso. Invece di creare direttamente gli oggetti, Spring Framework delega la loro creazione e gestione a un container IoC, consentendo una maggiore modularità e flessibilità nell'applicazione."
        },
        { 
            domanda: "Qual è il ruolo delle annotazioni nel contesto di Spring Framework?",
            soluzione: "Le annotazioni nel contesto di Spring Framework forniscono metadati aggiuntivi che consentono al framework di configurare e gestire automaticamente i componenti dell'applicazione. Le annotazioni vengono utilizzate per definire bean, iniettare dipendenze, configurare le rotte delle richieste e altro ancora, semplificando notevolmente lo sviluppo e la configurazione dell'applicazione."
        },
        { 
            domanda: "Cosa si intende per test di unità e quali sono i loro vantaggi nello sviluppo di software?",
            soluzione: "I test di unità sono test automatizzati che verificano il corretto funzionamento di singole unità di codice, come metodi o classi, in isolamento dagli altri componenti del sistema. I loro vantaggi includono la riduzione dei bug, l'aumento della stabilità del codice, la facilità di debug e la promozione delle buone pratiche di programmazione."
        },
        { 
            domanda: "Cosa si intende per Dependency Injection (DI) nel contesto di Spring Framework?",
            soluzione: "La Dependency Injection (DI) nel contesto di Spring Framework è un meccanismo attraverso il quale le dipendenze di un componente vengono passate da un'esterno, di solito attraverso il costruttore o i setter del componente stesso. Questo permette una maggiore separazione delle responsabilità e facilita la gestione delle dipendenze all'interno dell'applicazione."
        },
        { 
            domanda: "Qual è il ruolo dei DTO (Data Transfer Object) nel contesto dello sviluppo di API?",
            soluzione: "Il ruolo dei DTO (Data Transfer Object) nel contesto dello sviluppo di API è quello di rappresentare i dati che vengono scambiati tra il client e il server durante le richieste HTTP. I DTO contengono solo i dati necessari per la comunicazione e vengono utilizzati per minimizzare il traffico di rete e migliorare le prestazioni dell'applicazione."
        },
        { 
            domanda: "Cosa si intende per Spring Boot Actuator e qual è il suo scopo?",
            soluzione: "Spring Boot Actuator è un modulo di Spring Boot che fornisce funzionalità per il monitoraggio e la gestione delle applicazioni in esecuzione. Il suo scopo è fornire endpoint HTTP per ottenere informazioni sullo stato, le metriche e la salute dell'applicazione, consentendo una migliore visibilità e gestione dell'ambiente di produzione."
        },
        { 
            domanda: "Qual è il ruolo di Spring Security nel contesto delle applicazioni Web?",
            soluzione: "Il ruolo di Spring Security nel contesto delle applicazioni Web è fornire funzionalità di autenticazione, autorizzazione e gestione della sicurezza. Spring Security permette di proteggere le risorse dell'applicazione, gestire le sessioni degli utenti, implementare controlli di accesso e altro ancora, garantendo un ambiente sicuro e protetto per gli utenti."
        },
        { 
            domanda: "Cosa si intende per inversione di controllo (IoC) e quali sono i suoi vantaggi nello sviluppo di software?",
            soluzione: "L'inversione di controllo (IoC) è un principio di progettazione che sposta la responsabilità della creazione e gestione degli oggetti da parte del programma stesso a un'esterno, come un framework o un container IoC. I suoi vantaggi includono la riduzione della dipendenza da implementazioni specifiche, la maggiore modularità del codice, la facilità di test e la flessibilità nell'aggiornamento e nell'estensione del software."
        },
        { 
            domanda: "Qual è il ruolo di Maven nel contesto dello sviluppo di software Java?",
            soluzione: "Maven è uno strumento di gestione delle build e delle dipendenze per progetti software Java. Il suo ruolo è automatizzare il processo di compilazione, test, packaging e distribuzione di un progetto, garantendo coerenza e riproducibilità nell'ambiente di sviluppo."
        },
        //Domande sul frontend/JavaScript
        { 
            domanda: "Cos'è il frontend e qual è il suo ruolo in uno sviluppo web?",
            soluzione: "Il frontend è la parte di un'applicazione web con cui gli utenti interagiscono direttamente. Include l'interfaccia utente, la presentazione e l'interattività dell'applicazione. Il suo ruolo è visualizzare e gestire le informazioni fornite dal backend in modo che gli utenti possano interagire con esse in modo intuitivo e piacevole."
        },
        { 
            domanda: "Cosa significa HTML e qual è il suo ruolo nel frontend?",
            soluzione: "HTML (HyperText Markup Language) è il linguaggio di markup standard utilizzato per creare e strutturare contenuti web. Nel frontend, HTML è utilizzato per definire la struttura e i contenuti di una pagina web, inclusi testi, immagini, link e altri elementi."
        },
        { 
            domanda: "Cosa significa CSS e qual è il suo ruolo nel frontend?",
            soluzione: "CSS (Cascading Style Sheets) è un linguaggio utilizzato per definire lo stile e la presentazione di una pagina web scritta in HTML. Nel frontend, CSS viene utilizzato per controllare l'aspetto visivo degli elementi HTML, come il colore, la dimensione, il layout e altri attributi."
        },
        { 
            domanda: "Quali sono i vantaggi principali di Bootstrap nel frontend?",
            soluzione: "I vantaggi principali di Bootstrap nel frontend includono la facilità di utilizzo, la responsività, la compatibilità tra browser, la vasta gamma di componenti predefiniti e lo sviluppo più veloce grazie alle sue griglie e classi di utilità."
        },
        { 
            domanda: "Cosa sono i componenti in Bootstrap e quale è il loro ruolo?",
            soluzione: "I componenti in Bootstrap sono elementi di interfaccia utente predefiniti, come pulsanti, moduli, barre di navigazione, carousel, e altri, progettati per essere utilizzati e personalizzati facilmente nei progetti web. Il loro ruolo è fornire una solida base di elementi di UI ben progettati per la creazione di interfacce utente coerenti e moderne."
        },
        { 
            domanda: "Come si aggiunge Bootstrap a un progetto HTML?",
            soluzione: "Bootstrap può essere aggiunto a un progetto HTML includendo il suo file CSS e JavaScript nel documento HTML utilizzando i tag <link> e <script>. In alternativa, è possibile utilizzare un package manager come npm o scaricare i file direttamente dal sito ufficiale di Bootstrap e includerli nel progetto."
        },
        { 
            domanda: "Qual è la differenza tra classi e ID in CSS?",
            soluzione: "Le classi e gli ID sono entrambi selettori utilizzati in CSS per applicare stili agli elementi HTML. La principale differenza è che un ID è un identificatore univoco per un elemento, quindi può essere utilizzato per uno e un solo elemento, mentre una classe può essere riutilizzata su più elementi."
        },
        { 
            domanda: "Qual è il ruolo dei media queries nel frontend e come vengono utilizzati?",
            soluzione: "I media queries nel frontend sono utilizzati per applicare stili CSS diversi in base alle caratteristiche del dispositivo su cui viene visualizzata la pagina web, come la larghezza dello schermo, l'orientamento e la risoluzione. Vengono utilizzati per creare layout responsive che si adattano dinamicamente alle dimensioni dello schermo del dispositivo."
        },
        { 
            domanda: "Cosa si intende per JavaScript e qual è il suo ruolo nello sviluppo web?",
            soluzione: "JavaScript è un linguaggio di scripting utilizzato per aggiungere interattività e dinamicità alle pagine web. Il suo ruolo nello sviluppo web è gestire eventi, manipolare il DOM, comunicare con il server, e altro ancora, per rendere le pagine web più dinamiche e reattive."
        },
        { 
            domanda: "Quali sono i tre modi di dichiarare variabili in JavaScript?",
            soluzione: "Le variabili in JavaScript possono essere dichiarate utilizzando le parole chiave var, let o const."
        },
        { 
            domanda: "Qual è la differenza tra var, let e const in JavaScript?",
            soluzione: "La principale differenza tra var, let e const in JavaScript è la loro portata (scope) e la loro mutabilità. var ha una portata di funzione, let ha una portata di blocco, mentre const dichiara una costante il cui valore non può essere riassegnato."
        },
        { 
            domanda: "Come si definiscono numeri interi e decimali in JavaScript?",
            soluzione: "I numeri interi e decimali in JavaScript possono essere definiti semplicemente assegnando loro un valore numerico, ad esempio: var intero = 10; var decimale = 3.14;"
        },
        { 
            domanda: "Quali sono gli operatori aritmetici in JavaScript e quali operazioni eseguono?",
            soluzione: "Gli operatori aritmetici in JavaScript includono + (addizione), - (sottrazione), * (moltiplicazione), / (divisione), % (resto della divisione), ++ (incremento) e -- (decremento). Eseguono operazioni matematiche su numeri."
        },
        { 
            domanda: "Cosa si intende per NaN in JavaScript e quando viene restituito?",
            soluzione: "NaN (Not-a-Number) è un valore speciale in JavaScript che indica un risultato non valido o indefinito di un'operazione matematica. Viene restituito quando si tenta di eseguire un'operazione matematica non valida, come la divisione per zero o il tentativo di convertire una stringa non numerica in un numero."
        },
        { 
            domanda: "Qual è il risultato dell'operatore typeof per una variabile che contiene un numero in JavaScript?",
            soluzione: "Il risultato dell'operatore typeof per una variabile che contiene un numero in JavaScript è 'number'."
        },
        { 
            domanda: "Qual è l'uso dell'operatore di assegnazione += in JavaScript?",
            soluzione: "L'operatore di assegnazione += in JavaScript viene utilizzato per aggiungere il valore di destra al valore di sinistra e assegnare il risultato alla variabile di sinistra. Ad esempio, x += 5 è equivalente a x = x + 5."
        },
        { 
            domanda: "Come si definisce una stringa di testo in JavaScript?",
            soluzione: "Una stringa di testo in JavaScript può essere definita utilizzando le virgolette singole (' '), le virgolette doppie (\" \") o l'operatore backtick (` `) per le template literals."
        },
        { 
            domanda: "Qual è il metodo per ottenere la lunghezza di una stringa in JavaScript?",
            soluzione: "Il metodo per ottenere la lunghezza di una stringa in JavaScript è la proprietà length. Ad esempio, 'hello'.length restituirà 5."
        },
        { 
            domanda: "Come si accede agli elementi di un array in JavaScript?",
            soluzione: "Gli elementi di un array in JavaScript possono essere accessi utilizzando la loro posizione nell'array, indicizzata da un numero intero. Ad esempio, array[0] restituirà il primo elemento dell'array."
        },
        { 
            domanda: "Qual è il metodo per aggiungere un elemento a un array esistente in JavaScript?",
            soluzione: "Il metodo per aggiungere un elemento a un array esistente in JavaScript è il metodo push(). Ad esempio, array.push(elemento) aggiungerà l'elemento alla fine dell'array."
        },
        { 
            domanda: "Qual è il modo per controllare più condizioni in una struttura if else in JavaScript?",
            soluzione: "Il modo per controllare più condizioni in una struttura if else in JavaScript è utilizzare l'istruzione else if. Ad esempio, if (condizione1) {...} else if (condizione2) {...} else {...}."
        },
        { 
            domanda: "Qual è il costrutto utilizzato per gestire più casi in una singola espressione in JavaScript?",
            soluzione: "Il costrutto utilizzato per gestire più casi in una singola espressione in JavaScript è lo switch statement."
        },
        { 
            domanda: "Qual è la differenza tra un'istruzione if e uno statement switch in JavaScript?",
            soluzione: "L'istruzione if viene utilizzata per valutare una singola espressione booleana e può gestire un numero arbitrario di condizioni tramite else if. Lo switch statement viene utilizzato per valutare un'espressione e confrontare il suo valore con una serie di casi."
        },
        { 
            domanda: "Qual è il modo preferito per gestire un grande numero di casi in una struttura condizionale in JavaScript?",
            soluzione: "Il modo preferito per gestire un grande numero di casi in una struttura condizionale in JavaScript è utilizzare lo statement switch, poiché può rendere il codice più leggibile e manutenibile."
        },
        { 
            domanda: "Qual è la differenza tra un ciclo for e un ciclo while in JavaScript?",
            soluzione: "Un ciclo for viene utilizzato quando si conosce il numero di iterazioni necessarie, mentre un ciclo while viene utilizzato quando si desidera eseguire un blocco di codice finché una condizione è vera."
        },
        { 
            domanda: "Come si utilizza un ciclo for in JavaScript?",
            soluzione: "Un ciclo for in JavaScript si utilizza con la seguente sintassi: for (inizializzazione; condizione; iterazione) {...}."
        },
        { 
            domanda: "Come si utilizza un ciclo while in JavaScript?",
            soluzione: "Un ciclo while in JavaScript si utilizza con la seguente sintassi: while (condizione) {...}."
        },
        { 
            domanda: "Qual è la differenza tra un ciclo while e un ciclo do-while in JavaScript?",
            soluzione: "La principale differenza tra un ciclo while e un ciclo do-while in JavaScript è che il ciclo do-while esegue il blocco di codice almeno una volta, anche se la condizione è falsa fin dall'inizio."
        },
        { 
            domanda: "Qual è la sintassi per definire una funzione in JavaScript?",
            soluzione: "La sintassi per definire una funzione in JavaScript è la seguente: function nomeFunzione(parametri) {...}."
        },
        { 
            domanda: "Qual è il vantaggio di utilizzare funzioni personalizzate in JavaScript?",
            soluzione: "Il vantaggio di utilizzare funzioni personalizzate in JavaScript è la modularità e la riutilizzabilità del codice. Le funzioni consentono di suddividere il codice in blocchi più piccoli e gestibili, che possono essere richiamati più volte all'interno del programma."
        },
        { 
            domanda: "Come si richiama una funzione definita in JavaScript?",
            soluzione: "Una funzione definita in JavaScript può essere richiamata utilizzando il suo nome seguito da parentesi tonde che contengono eventuali argomenti necessari."
        },
        { 
            domanda: "Cosa si intende per parametro di una funzione in JavaScript?",
            soluzione: "Un parametro di una funzione in JavaScript è un valore che può essere passato alla funzione quando viene chiamata. I parametri vengono utilizzati per consentire alla funzione di lavorare con dati diversi ogni volta che viene chiamata."
        },
        { 
            domanda: "Qual è la differenza tra un parametro formale e un argomento attuale in JavaScript?",
            soluzione: "Un parametro formale è il nome di un parametro definito nella dichiarazione di una funzione, mentre un argomento attuale è il valore effettivo passato alla funzione quando viene chiamata."
        },
        { 
            domanda: "Qual è il modo per restituire un valore da una funzione in JavaScript?",
            soluzione: "Il modo per restituire un valore da una funzione in JavaScript è utilizzare l'istruzione return seguita dal valore che si desidera restituire."
        },
        { 
            domanda: "Cosa sono gli eventi in JavaScript e come vengono gestiti?",
            soluzione: "Gli eventi in JavaScript sono azioni che si verificano nel browser, come il clic del mouse, il caricamento della pagina o la pressione di un tasto. Vengono gestiti associando funzioni di callback agli elementi HTML o ai nodi del DOM che generano gli eventi."
        },
        { 
            domanda: "Come si aggiunge un event listener a un elemento HTML in JavaScript?",
            soluzione: "Un event listener può essere aggiunto a un elemento HTML in JavaScript utilizzando il metodo addEventListener(). Ad esempio, elemento.addEventListener('click', funzioneCallback)."
        },
        { 
            domanda: "Cosa si intende per JSON e qual è il suo ruolo in JavaScript?",
            soluzione: "JSON (JavaScript Object Notation) è un formato di dati leggero e basato su testo utilizzato per lo scambio di dati tra un server e un client. Nel contesto di JavaScript, JSON è utilizzato per rappresentare dati strutturati come oggetti JavaScript, che possono essere facilmente convertiti avanti e indietro tra JSON e oggetti JavaScript utilizzando i metodi JSON.parse() e JSON.stringify()."
        },
        { 
            domanda: "Qual è il vantaggio di utilizzare operazioni asincrone in JavaScript?",
            soluzione: "Le operazioni asincrone in JavaScript consentono al codice di continuare l'esecuzione mentre si attende il completamento di un'operazione costosa in termini di tempo, come il caricamento di risorse da un server. Questo migliora la reattività dell'applicazione e impedisce al browser di bloccarsi."
        },
        { 
            domanda: "Qual è la differenza tra setTimeout e setInterval in JavaScript?",
            soluzione: "setTimeout viene utilizzato per eseguire una funzione dopo un certo ritardo di tempo, mentre setInterval viene utilizzato per eseguire una funzione ripetutamente ad intervalli regolari di tempo."
        },
        { 
            domanda: "Come si utilizza setTimeout per eseguire una funzione dopo un certo ritardo di tempo in JavaScript?",
            soluzione: "setTimeout in JavaScript viene utilizzato con la seguente sintassi: setTimeout(funzione, ritardo). Ad esempio, setTimeout(funzione, 1000) eseguirà la funzione dopo un ritardo di 1000 millisecondi (1 secondo)."
        },
        { 
            domanda: "Qual è il modo per cancellare un timeout in JavaScript?",
            soluzione: "Il modo per cancellare un timeout in JavaScript è utilizzare il metodo clearTimeout(), passando l'ID restituito da setTimeout come argomento."
        },
        { 
            domanda: "Come si utilizza setInterval per eseguire una funzione ripetutamente ad intervalli regolari di tempo in JavaScript?",
            soluzione: "setInterval in JavaScript viene utilizzato con la seguente sintassi: setInterval(funzione, intervallo). Ad esempio, setInterval(funzione, 1000) eseguirà la funzione ripetutamente ogni 1000 millisecondi (1 secondo)."
        },
        { 
            domanda: "Cosa sono le promesse in JavaScript e a cosa servono?",
            soluzione: "Le promesse in JavaScript sono oggetti che rappresentano il completamento o il fallimento di un'operazione asincrona. Servono a semplificare la gestione delle operazioni asincrone, consentendo di eseguire azioni una volta che un'operazione è stata completata o di gestire errori in modo più efficace."
        },
        { 
            domanda: "Qual è il vantaggio di utilizzare fetch per richiedere risorse da un server in JavaScript?",
            soluzione: "Il vantaggio di utilizzare fetch per richiedere risorse da un server in JavaScript è che offre un'interfaccia semplice e promettente per effettuare richieste HTTP asincrone, consentendo di inviare e ricevere dati in modo flessibile e efficiente."
        },
        { 
            domanda: "Qual è la sintassi di base per utilizzare fetch in JavaScript?",
            soluzione: "La sintassi di base per utilizzare fetch in JavaScript è la seguente: fetch(url).then(response => response.json()).then(data => console.log(data)).catch(error => console.error('Errore:', error))."
        },
        { 
            domanda: "Cosa si intende per endpoint in una API?",
            soluzione: "In una API, un endpoint è un punto di accesso specifico per interagire con le risorse o i servizi offerti dall'API. Gli endpoint definiscono le operazioni disponibili e i dati che possono essere recuperati o modificati tramite richieste HTTP."
        },
        { 
            domanda: "Qual è il ruolo delle API nel contesto dello sviluppo di applicazioni web?",
            soluzione: "Nel contesto dello sviluppo di applicazioni web, le API (Application Programming Interface) consentono a diverse applicazioni software di comunicare tra loro e condividere dati e funzionalità in modo sicuro e standardizzato. Le API possono essere utilizzate per accedere a risorse esterne, integrare servizi di terze parti e creare interfacce utente interattive."
        },
        { 
            domanda: "Come si gestiscono le risposte di una richiesta fetch in JavaScript?",
            soluzione: "Le risposte di una richiesta fetch in JavaScript vengono gestite utilizzando i metodi then() e catch() per gestire rispettivamente il completamento e gli errori della richiesta."
        },
        { 
            domanda: "Quali sono i metodi HTTP principali utilizzati nelle richieste API?",
            soluzione: "I metodi HTTP principali utilizzati nelle richieste API sono GET per recuperare dati, POST per inviare dati, PUT per aggiornare dati esistenti, DELETE per eliminare dati e PATCH per aggiornare parzialmente i dati esistenti."
        },
        { 
            domanda: "Come si gestiscono le richieste asincrone in JavaScript?",
            soluzione: "Le richieste asincrone in JavaScript vengono gestite utilizzando promesse o async/await per eseguire operazioni asincrone in modo non bloccante e gestire il loro completamento o fallimento in modo appropriato."
        },
        { 
            domanda: "Cos'è il DOM (Document Object Model) e qual è il suo ruolo in JavaScript?",
            soluzione: "Il DOM (Document Object Model) è una rappresentazione ad albero della struttura di un documento HTML/XML, che consente a JavaScript di interagire dinamicamente con gli elementi della pagina. Il suo ruolo è consentire agli script JavaScript di aggiungere, rimuovere e modificare gli elementi e i contenuti della pagina web in modo dinamico."
        },
        { 
            domanda: "Qual è il metodo più comune per selezionare un elemento del DOM in JavaScript?",
            soluzione: "Il metodo più comune per selezionare un elemento del DOM in JavaScript è utilizzare il metodo getElementById() per selezionare un elemento per il suo ID univoco."
        },
        { 
            domanda: "Cosa si intende per manipolazione del DOM in JavaScript?",
            soluzione: "La manipolazione del DOM in JavaScript si riferisce al processo di aggiunta, rimozione o modifica degli elementi e dei contenuti della pagina web utilizzando script JavaScript."
        },
        { 
            domanda: "Qual è il ruolo di AJAX nell'interazione tra client e server?",
            soluzione: "AJAX (Asynchronous JavaScript and XML) è una tecnica utilizzata per inviare e ricevere dati da un server in modo asincrono senza dover ricaricare l'intera pagina web. Consente di aggiornare dinamicamente i contenuti della pagina senza interrompere l'esperienza dell'utente."
        },
        { 
            domanda: "Qual è il vantaggio dell'utilizzo delle arrow function in JavaScript?",
            soluzione: "Il vantaggio dell'utilizzo delle arrow function in JavaScript è che offrono una sintassi più concisa e leggibile rispetto alle funzioni tradizionali, e mantengono il contesto 'this' della funzione padre, semplificando la gestione del contesto."
        },
        { 
            domanda: "Qual è la differenza tra una funzione tradizionale e una arrow function in JavaScript?",
            soluzione: "La principale differenza tra una funzione tradizionale e una arrow function in JavaScript è il comportamento del contesto 'this'. Nelle arrow function, il valore di 'this' è determinato dal contesto circostante in cui viene definita la funzione, mentre nelle funzioni tradizionali 'this' può variare a seconda di come la funzione viene chiamata."
        }
    ];
    
  
      // Genera 20 domande casuali
      var domandeCasuali = [];
      for (var i = 0; i < 20; i++) {
        var domandaCasuale = domande[Math.floor(Math.random() * domande.length)];
        domandeCasuali.push(domandaCasuale);
      }
  
     // Inserire le domande nel container
var domandeContainer = document.getElementById("domandeContainer");
domandeContainer.innerHTML = ""; // Pulisci il container
domandeCasuali.forEach(function(domanda, index) {
  var domandaHTML = "<p><strong>Domanda " + (index + 1) + ":</strong> " + domanda.domanda + "</p>";
  var btnSoluzioneHTML = '<button class="btnMostraSoluzione">Mostra Soluzione</button>';
  var soluzioneHTML = '<p class="soluzione" style="display:none;"><strong>Soluzione ' + (index + 1) + ':</strong> ' + domanda.soluzione + '</p>';
  var hrHTML = "<hr>"; // Aggiungi la riga orizzontale tra le domande
  domandeContainer.innerHTML += domandaHTML + btnSoluzioneHTML + soluzioneHTML + hrHTML;
});


  
      // Aggiungi event listener per mostrare la soluzione quando viene cliccato il bottone "Mostra Soluzione"
      var btnsMostraSoluzione = document.getElementsByClassName("btnMostraSoluzione");
      for (var i = 0; i < btnsMostraSoluzione.length; i++) {
        btnsMostraSoluzione[i].addEventListener("click", function() {
          var soluzione = this.nextElementSibling;
          if (soluzione.style.display === "none") {
            soluzione.style.display = "block";
          } else {
            soluzione.style.display = "none";
          }
        });
      }
    });
  });