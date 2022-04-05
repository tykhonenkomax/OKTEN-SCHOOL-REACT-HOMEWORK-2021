//
// є API от SpaceX
//
// https://api.spacexdata.com/v3/launches/
//
//     потрібно вивести всі запуски кораблів окрім 2020 року
//
// репрезентувати тільки окремі поля (зазначені в скрнішоті в папці)



import './App.css';
import './My Folder/ComponetsSpaceX/ComponentsSpaceX'
import ComponentsSpaceX from "./My Folder/ComponetsSpaceX/ComponentsSpaceX";

function App() {



  return (
    <div className={'general'}>
      {
        <ComponentsSpaceX/>
      }

    </div>
  );
}

export default App;
