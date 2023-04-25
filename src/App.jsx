import './App.css';

function App() {

  return (
    <div className="page">
      <header>
        <h1>Movie's Billboard</h1>
        <form action="" className="form">
          <label htmlFor="movieName">
            <input
              type="text"
              id="movieName"
              placeholder="Avengers, Star Wars, Harry Potter..."
            />
          </label>
            <button type="submit" className="btn submit">
              Search
            </button>
        </form>
      </header>

      <main>
        //movies list
      </main>
    </div>
  );
}

export default App;
