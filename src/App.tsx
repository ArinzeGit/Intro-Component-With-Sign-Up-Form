import "./App.css";
import Alert from "./components/Alert";
import Form from "./components/Form";
import Intro from "./components/Intro";
const App = () => {
  return (
    <>
      <div className="App">
        <div className="Flex1">
          <Intro
            title="Learn to code by watching others"
            content="See how experienced developers solve problems in real-time. Watching
              scripted tutorials is great, but understanding how developers think is
              invaluable."
          />
        </div>
        <div className="Flex1">
          <Alert span1="Try it free 7 days " span2="then $20/mo. thereafter" />
          <Form>CLAIM YOUR FREE TRIAL</Form>
        </div>
      </div>
      <footer className="absolute">
        <p className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="https://github.com/ArinzeGit" target="_blank">
            Arinze Owoh
          </a>
          .
        </p>
      </footer>
    </>
  );
};

export default App;
