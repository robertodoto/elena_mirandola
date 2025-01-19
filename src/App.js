import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Elena Mirandola
        </h1>
        <h2>Live Music<br></br>&<br></br>Performance</h2>
        <video loop width="250">
        <source src='media/clip.mp4' type='video/mp4' />
        </video>
      </header>
      <nav>
        <button className='social-link'><a href=''>Youtube</a></button>
        <button className='social-link'><a href=''>Mail</a></button>
        <button className='social-link'><a href='https://www.instagram.com/elenamirandolah/'>Instagram</a></button>
        <button className='social-link'><a href='https://www.facebook.com/elena.mirandola.5?locale=it_IT'>Facebook</a></button>
      </nav>
      <section>
      <div className='Bio'>
        <p>
        Elena Mirandola è nata a Bologna il 12 novembre 1994. 
        All'età di tre anni, è stata portata dal padre, Stefano Mirandola (chitarrista), a una lezione di violino. 
        La scuola e gli insegnanti seguivano il metodo Suzuki, e da lì sono cominciate le sue lezioni: 
        inizialmente di ritmica e, successivamente, con il suo primo piccolo violino.

        <br></br><br></br> metodo Suzuki incoraggiava i bambini a esibirsi in pubblico in tempi molto brevi, 
        con l’obiettivo di superare l'ansia da palcoscenico. 
        La maestra Fiorenza Rosi dirigeva teatri affollati di piccoli musicisti vestiti di bianco e blu, trasmettendo disciplina ed energia. 
        Elena ha seguito le lezioni con Fiorenza fino all'età di dodici anni mentre frequentava la scuola media all'interno del Conservatorio G.B. Martini di Bologna, 
        dove ha studiato con il maestro Massimo Nesi.

        <br></br><br></br>Fin da piccola, Elena non si è mai sentita troppo legata allo spartito musicale, che spesso abbandonava 
        per improvvisare e imparare a memoria molti brani, accompagnata alla chitarra dal padre. 
        Dopo cinque anni di studi sulla tecnica classica e l'esperienza nelle file orchestrali, 
        ha deciso di iscriversi al corso di violino jazz a Bologna, dove è stata l'unica allieva della classe. 
        Insegnanti straordinari come Luca Campioni (violino jazz), Stefano Zenni (storia della musica afroamericana e storia del jazz), 
        Gregory Burk (pianoforte complementare), Massimo Greco (tecniche di improvvisazione) e molti altri, 
        hanno contribuito a ampliare la sua visione musicale, offrendole numerosi stimoli e approfondimenti.

        <br></br><br></br>Nel 2017, dopo il diploma, Elena ha partecipato ai seminari di Imola in Musica (con Massimo Greco), 
        a Siena Jazz STRINGS (con Tomeka Reid, Mazz Swift e Silvia Bolognesi), e ad Arcevia Jazz 
        (con Lamberto Di Pietro, Emilio Marinelli, Massimo Morganti), dove ha vinto una borsa di studio per il Columbia College di Chicago.

        <br></br><br></br>Appassionata della corrente del manouche francese, ha inciso un disco intitolato Gajè Gipsy Swing, nome anche della band con cui ha tenuto numerosi concerti per cinque anni. 
        Quando non si esibiva nei locali, Elena suonava nelle strade, raccogliendo offerte a cappello. 
        Ha collaborato e registrato brani con artisti come Cacciapaglia, Marco Bonvicini (Colors), Robbè (Vecchie Cicatrici), Baro Drom (Nisba), 
        In Tormentata Quiete (Il Profumo del Blu), Luigi Bellino (Stati Limitrofi) e Cico (Mollo tutto e apro un chiringuito in Messico).

        <br></br><br></br>Inoltre, ha intrapreso progetti in ambito bluegrass e country con "The Old Country Manners" e "The Tumbleweeds", 
        dove oltre al violino, ha aggiunto anche la voce. Ha anche collaborato con il progetto "Best Before War" e con Roberta Selva nel duo "Millies Duo".

        <br></br><br></br>Nel 2020, ha iniziato a esplorare la musica gitana e balkan, perfezionandosi con Geronimo Milko De Napoli (AALMA DILI) a Parigi
        e Bastien Ribot (CMDL School). Ha quindi iniziato a collaborare con gruppi orientati alla musica balcanica, 
        come "Baro Drom Orkestar", "Draba Orkestar" e "Kaba Nè".

        <br></br><br></br>In parallelo alla sua carriera artistica, Elena insegna violino privatamente, nella Scuola Popolare Ivan Illich e nella Ricordi Music School. 
        Nel 2022, ha iniziato a insegnare violino jazz presso la scuola Cemi di Bologna.
        </p>
      </div>
      </section>


    </div>
  );
}

export default App;
