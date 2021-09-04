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
        <footer className="GitHub-link">
          <a
            href="https://github.com/helketari/react-dictionary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-source code
          </a>{" "}
          by Jessica Brosvic
        </footer>
      </div>
    </div>
  );
}
