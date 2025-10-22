import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import Quiz from "../img/quiz.svg";

import "./Welcome.css";

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="welcome">
      <h2>Seja bem-vindo!</h2>
      <p>Clique no botão abaixo para começar:</p>
      <button onClick={() => dispatch({ type: "CHANGE_STATE" })}>
        Iniciar
      </button>
      <img src={Quiz} alt="Início do quiz" />
      <div id="author">
        <h4>
          Desenvolvido por{" "}
          <a
            href="https://github.com/MarcosDavi-Dev/Quiz_App"
            target="_blank"
            rel="noopener noreferrer"
          >
            Marcos Davi
          </a>{" "}
          &copy; 2025
        </h4>
      </div>
    </div>
  );
};

export default Welcome;
