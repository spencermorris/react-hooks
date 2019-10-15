import React from 'react';
import './App.css';
import Logo from "./Logo";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '',
      showImage: true,
    }
  }

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <div className="App-image">
              {this.state.showImage ? <Logo
                  color={this.state.color}
              /> : null}
            </div>
            <p>
              Enter a color: red, green or blue!
            </p>
            <input
                type="text"
                onChange={(event) => {
                  this.setState({ color: event.target.value })
                }}
            />
            <br />
            <button
                onClick={() => this.setState({ showImage: !this.state.showImage })}
            >
              Show/Hide Logo
            </button>
          </header>
        </div>
    );
  }
}

export default App;
