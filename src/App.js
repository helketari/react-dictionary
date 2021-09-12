import React from "react";
import BackgroundImage from "./Background.jpeg";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="bg_image">
        <div className="container">
          <header className="App-header">Westron for Elves</header>
          <main>
            <Dictionary defaultKeyword="elf" />
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
    </div>
  );
}
