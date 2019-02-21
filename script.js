class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

class Header extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <header className="jumbotron">
        <div class="container">
          <Controls />
          <Stopwatch />
        </div>
      </header>
    );
  }
}

class Controls extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      times: {
        minutes: 0,
        seconds: 0,
        miliseconds: 0
      },
      running: false,
      listOfTimes: [],
      counter: 0,
      watch: null
    };

    this.reset();
    this.format();
  }

  reset() {
    this.setState({
      times: {
        minutes: 0,
        seconds: 0,
        miliseconds: 0
      }
    });
  }

  format() {
    return `${pad0(this.state.times.minutes)}:${pad0(
      this.state.times.seconds
    )}:${pad0(Math.floor(this.state.times.miliseconds))}`;
  }

  start() {
    if (!this.state.running) {
      this.setState({
        running: true,
        watch: setInterval(() => this.step(), 10)
      });
    }
  }

  step() {
    if (!this.state.running) return;
    this.calculate();
    this.print();
  }

  calculate() {
    this.setState({
      times: {
        minutes: this.state.times.minutes,
        seconds: this.state.times.seconds,
        miliseconds: (this.state.times.miliseconds += 1)
      }
    });
    if (this.state.times.miliseconds >= 100) {
      this.setState({
        times: {
          minutes: this.state.times.minutes,
          seconds: (this.state.times.seconds += 1),
          miliseconds: 0
        }
      });
    }
    if (this.state.times.seconds >= 60) {
      this.setState({
        times: {
          minutes: (this.state.times.minutes += 1),
          seconds: 0,
          miliseconds: this.state.times.miliseconds
        }
      });
    }
  }

  stop() {
    this.setState({
      running: false
    });
    console.log("stop");
  }

  resetButton() {
    this.reset();
  }

  add() {
    console.log("add");
  }

  clear() {
    console.log("clear");
  }

  render() {
    return (
      <nav className="controls">
        <button href="#" class="button" id="start" onClick={e => this.start(e)}>
          Start
        </button>
        <button href="#" class="button" id="stop" onClick={e => this.stop(e)}>
          Stop
        </button>
        <button
          href="#"
          class="button"
          id="reset"
          onClick={e => this.resetButton(e)}
        >
          Reset
        </button>
        <button href="#" class="button" id="add" onClick={e => this.add(e)}>
          Add Record
        </button>
        <button
          href="#"
          class="button"
          id="clearRecords"
          onClick={e => this.clear(e)}
        >
          Clear Records
        </button>
        <div className="container text-center">
          <p>{this.format(this.state)}</p>
        </div>
      </nav>
    );
  }
}

class Stopwatch extends React.Component {
  constructor() {
    super();
  }
  render() {
    return <div />;
  }
}

function pad0(value) {
  let result = value.toString();
  if (result.length < 2) {
    result = "0" + result;
  }
  return result;
}

ReactDOM.render(<App />, document.getElementById("root"));
