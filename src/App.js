import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://www.udemy.com/course/docker-and-kubernetes-the-complete-guide/learn/lecture/18799500#overview"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read about WSL & Docker Volumes on Windows
        </a>
        <pre>docker run -p 3000:3000 -v /app/node_modules -v ${"{pwd}"}:/app frontend</pre>
        This must be done in WINDOWS POWERSHELL, and not in WSL. Happy devops!! :)
        <div class="list-wrapper">
          <ul>
            <li>
              The first <code>-v</code> is a "bookmark" on <code>node_modules</code> because we deleted it in our local
              directory, so Docker needs to use its own.
            </li>
            <li>
              The second <code>-v</code> tells it to map the local <code>pwd</code> contents to the container's{" "}
              <code>app/frontend</code> folder.
            </li>
            <li>
              The contents of this command are coupled very heavily to the contents of the Dockerfile. For example, if
              we had said something other than <code>WORKDIR /app</code>, then we would say something other than{" "}
              <code>app/frontend</code> here.
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
