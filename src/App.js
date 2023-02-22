
import './App.css';
import movie1 from './movie1.PNG'
 import movie1lgo from "./movie1logo1.PNG";
 import movie2logo2 from "./movie2logo2.PNG";
 import movie2 from "./movie2.PNG";
 import sidelogo from "./sidelogo.PNG";
function App() {
  
  return (
    <div className="App">
      <div className="maincontainer">
        <div className="maincontainerone">
          <div className="maincontaineroneleft">
            <div className="maincontaineroneleft1">
              <img src={movie1lgo} alt="img" />
              <div className="maincontaineroneleftleft">
                <h3>Bright</h3>
                <b style={{ color: "blue" }}>2017,David Ayer</b>
                <br />
                <span style={{ border: "2px solid white" }}>117 min</span>
                &nbsp;&nbsp;
                <span>Action, Crime, Fantasy</span>
              </div>
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, vitae
              consequatur iure ratione labore accusamus.
            </p>
            <img src={sidelogo} alt="img" />
          </div>
          <div className="maincontaineroneright">
            <img src={movie1} alt="img" />
          </div>
        </div>
        <div className="maincontainertwo">
          <div className="maincontaineroneleft">
            <div className="maincontaineroneleft1">
              <img src={movie2logo2} alt="img" />
              <div className="maincontaineroneleftleft">
                <h4>Tomb Raider</h4>
                <b style={{ color: "blue" }}>2018,Roar Uthaug</b>
                <br />
                <span style={{ border: "2px solid white" }}>125 min</span>
                &nbsp;&nbsp;
                <span>Action, Fantasy</span>
              </div>
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
              ectetur adipisicing elit. Ea, vitae consequatur iure ratione
              labore accusamus.
            </p>
            <img src={sidelogo} alt="img" />
          </div>
          <div className="maincontaineroneright">
            <img src={movie2} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
