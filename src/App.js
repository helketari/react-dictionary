import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">What's in a Name?</header>
        <main>
          <Dictionary />
        </main>
        <footer className="GitHub-link">Coded by Jessica Brosvic</footer>
      </div>
    </div>
  );
}
