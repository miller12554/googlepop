import React from "react";
import Popup from "./Popup";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showPopup: false };
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  render() {
    return (
      <div>
        <h1> Simple Popup Example InReact Applicaion </h1>
        <button onClick={this.togglePopup.bind(this)}>
          {" "}
          Click To Launch Popup{" "}
        </button>

        {this.state.showPopup ? (
          <Popup
            text='Click "Close Button" to hide popup'
            closePopup={this.togglePopup.bind(this)}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
