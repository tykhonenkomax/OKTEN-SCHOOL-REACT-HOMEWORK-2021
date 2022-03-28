import logo from './logo.svg';
import './App.css';
import SimpsonsComponents from "./myFolder/Simpsons/SimpsonsComponents";

function App() {
    return (
        <div className="App">

            <div>
                <SimpsonsComponents
                    name={'Bart Simpson'}
                    img={'https://upload.wikimedia.org/wikipedia/ru/2/29/Bart_Simpson.gif'}
                    about={'Бартоломью Джо-Джо «Барт» Симпсон (англ. Bartholomew Jo-Jo «Bart» Simpson) — герой мультипликационного сериала «Симпсоны». '}
                />
            </div>

            <div>
                <SimpsonsComponents
                    name={'Lisa Simpson'}
                    img={'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'}
                    about={'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня анимационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.'}
                />
            </div>

            <div>
                <SimpsonsComponents
                    name={'Maggie Simpson'}
                    img={'https://upload.wikimedia.org/wikipedia/uk/9/9d/Maggie_Simpson.png'}
                    about={'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night  (англ.)рус. 19 апреля 1987 года.'}
                />
            </div>

        </div>
    );
}

export default App;
