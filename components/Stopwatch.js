class Stopwatch extends React.Component {
  constructor() {
    super();
  }

  start() {
    if (!this.running) {
      this.running = true;
      this.watch = setInterval(() => this.step(), 10);
    }
  }

  render() {
    return (
      <div className="stopwatch">
        <p>szczsc</p>
      </div>
    );
  }
}
