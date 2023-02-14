import styles from "./styles.module.scss";
import dividerImg from "../../assets/pattern-divider-desktop.svg";
import botaoImg from "../../assets/icon-dice.svg";
import { useEffect, useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [id, setId] = useState("");

  async function getText() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    console.log(data);
    setText(data.slip.advice);
    setId(data.slip.id);
  }

  useEffect(() => {
    getText();
  }, []);

  return (
    <div className={styles.container}>
      <h1>ADVICE #{id}</h1>
      <p>{text}</p>
      <img src={dividerImg} alt="divisor da página" />
      <button onClick={getText}>
        <img src={botaoImg} alt="imagem do botão" />
      </button>
    </div>
  );
}

export default App;
