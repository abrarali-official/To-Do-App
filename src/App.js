import React from "react";
import ToolbarComponent from "./components/Toolbar/Toolbar";
import DrawerComponent from "./components/Drawer/Drawer";

class App extends React.Component {
  state = {
    left: false
  };

  toggleDrawer = () => {
    this.setState({ left: false });
  };

  openDrawer = () => {
    this.setState({
      left: true,
    });
  };

  render() {
    return (
      <div className="App">
        <ToolbarComponent openDrawerHandler={this.openDrawer} />
        <DrawerComponent
          left={this.state.left}
          toggleDrawerHandler={this.toggleDrawer}
        />
      </div>
    );
  }
}
<body/>
export default App;
