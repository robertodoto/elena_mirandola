import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Elena Mirandola
        </h1>
        <h2>
          Live Music & Performance
        </h2>
      </header>

      <video className='back-video' loop width="450" autoPlay muted>
        <source src='/media/clip.mp4' type='video/mp4' />
         Your browser does not support the video tag
      </video>
    
      <section>
      <div className='Bio-container'>
        <p className='bio'>
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

        <br></br><br></br>Ha intrapreso progetti in ambito bluegrass e country e nel 2020, ha iniziato a esplorare la musica gitana e balkan, perfezionandosi con Geronimo Milko De Napoli (AALMA DILI) a Parigi
        e Bastien Ribot (CMDL School).

        <br></br><br></br>In parallelo alla sua carriera artistica, Elena insegna violino privatamente, nella Scuola Popolare Ivan Illich e nella Ricordi Music School. 
        Nel 2022, ha iniziato a insegnare violino jazz presso la scuola Cemi di Bologna.
        </p>
      
       <div className='collab-list'>
        <h3>Dischi</h3>
          <ul>
            <li><a href='https://www.facebook.com/GajeGipsySwing/' target='_blank'>Gaje Gipsy Swing - Gaje Gipsy Swing</a></li>
            <li><a href='https://open.spotify.com/intl-it/album/0myKE0U2uCaTyW4oLaahSH?si=KaFBMgV0TwqKJbxVwj_8kw' target='_blank'>Colors - Marco Bonvicini</a></li>
            <li><a href='https://open.spotify.com/intl-it/album/0lN0TMVULWJ7YF0vuJCkTt?si=JSaIbVBeQHynu9OaEywniw' target='_blank'>Vecchie cicatrici - Robbè</a></li>
            <li><a href='https://open.spotify.com/intl-it/album/3s5EQIp9zUOieZYsz73dw4?si=_T8FEBG0Rxm0X3wx3QqaEA' target='_blank'>Nisba - Baro Drom</a></li>
            <li><a href='https://open.spotify.com/intl-it/album/0Owdxt2ggdVQvLbwUkKxbi?si=hjFiDtHwS7ysACCmT41cnw' target='_blank'>Il Profumo del Blu - In Tormentata Quiete</a></li>
            <li><a href='https://open.spotify.com/intl-it/album/0R7SNU9cUqtYoEDTRWwQoF?si=DBorqdvMTpGJjcthfdjOJg' target='_blank'>Stati Limitrofi - Luigi Bellino</a></li>
            <li><a href='https://open.spotify.com/intl-it/album/5YjHWJudiXQulYvjhavHaP?si=lv0Gn-PCRJ2UJ2lCYLu-uw' target='_blank'>Mollo tutto e apro un chiringuito in Messico - Cico</a></li>
          </ul>
          <h3>Altri progetti</h3>
          <ul>
            <li><a>The Old Country Manners</a></li>
            <li><a href='https://www.instagram.com/bestbeforewar/' target='_blank'>Best Before War</a></li>
            <li><a href='https://www.instagram.com/thetumbleweeds3/' target='_blank'>The Tumbleweeds</a></li>
            <li><a href='https://www.facebook.com/people/Millies-Duo/100036782171406/' target='_blank'>Millies Duo</a></li>
            <li><a href='https://www.instagram.com/draba_orkestar/' target='_blank'>Draba Orkestar</a></li>
            <li><a href='https://www.instagram.com/kabane_band/' target='_blank'>Kaba Nè</a></li>
          </ul>
        </div>
      </div>
      </section>

      <footer>
        <nav className='social-nav'>
          <button className='social-link' formTarget='_blank'><a><i className='fa-brands fa-youtube'></i></a></button>
          <button className='social-link' formTarget='_blank'><a><i className='fa-solid fa-envelope'></i></a></button>
          <button className='social-link'><a href='https://www.instagram.com/elenamirandolah/' formTarget='_blank'><i className='fa-brands fa-instagram'></i></a></button>
          <button className='social-link'><a href='https://www.facebook.com/elena.mirandola.5?locale=it_IT' formTarget='_blank'><i className='fa-brands fa-facebook'></i></a></button>
        </nav>
      </footer>
    </div>
  );
}

export default App;
