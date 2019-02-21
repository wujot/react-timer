class Controls extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <nav className="controls">
        <button href="#" class="button" id="start">
          Start
        </button>
        <button href="#" class="button" id="stop">
          Stop
        </button>
        <button href="#" class="button" id="reset">
          Reset
        </button>
        <button href="#" class="button" id="add">
          Add Record
        </button>
        <button href="#" class="button" id="clearRecords">
          Clear Records
        </button>
      </nav>
    );
  }
}
