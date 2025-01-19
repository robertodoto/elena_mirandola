import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Elena Mirandola
        </h1>
        <h2>Live Music<br></br>&<br></br>Performance</h2>
        <video width={320} height={240} alt="Elena playing violin">
          <source src="./clip.mp4" type='video/mp4'></source>
        </video>
      </header>
      <div>

      </div>
    </div>
  );
}

export default App;
