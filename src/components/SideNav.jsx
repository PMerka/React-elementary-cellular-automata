import play from "./play-button.svg";
import stop from "./stop-button.svg";

function Nav (props) {
    return ( 
        <nav>
          <h1> Celullar automaton </h1>

          <div className="nav-grid">
            <button
              className="main-box nav-grid-item"
              onClick={() => props.start()}
            >
              <img className="icon" src={play} alt="play" />
              <label>Start</label>
            </button>

            <button
              className="main-box nav-grid-item"
              onClick={() => props.stop()}
            >
              <img className="icon" src={stop} alt="play" />
              <label>Stop</label>
            </button>

            <label className="nav-grid-item">Periodic </label>

            <label className="toggle nav-grid-item">
              <input
                name="periodic"
                onChange={props.changePeriodic}
                className="toggle__input"
                type="checkbox"
                id="myToggle"
                defaultChecked
              />
              <div className="toggle__fill"></div>
            </label>

            <label className="nav-grid-item">Rule </label>

            <input
              value={props.rule}
              onChange={props.changeRule}
              className="rule-input nav-grid-item"
              type="number"
            />

            <div className="nav-full-item">
              <label>Rule in binary</label> <br />
              <label> {props.option.join('')} </label>
            </div>

          </div>
        </nav>
     );
}

export default Nav;