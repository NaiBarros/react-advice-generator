import styles from './styles.module.scss'
import dividerImg from "../../assets/pattern-divider-desktop.svg"
import botaoImg from "../../assets/icon-dice.svg"

function App() {
  return (
    <div className={styles.container}>
      <h1>
        ADVICE #117
      </h1>
      <p> dhksjahjhdsjakhjhsjhkahashdajs</p>
      <img src={dividerImg} alt="divisor da página"/>
      <button>
        <img src={botaoImg} alt="imagem do botão"/>
      </button>
    </div>
  );
}

export default App;
