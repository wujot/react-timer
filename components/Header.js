class Header extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <header className="jumbotron" style={styles}>
        <div class="container">
          <Controls />
          <Stopwatch />
        </div>
      </header>
    );
  }
}
