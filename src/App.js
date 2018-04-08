import React, { Component } from "react";
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";
import indigo from "material-ui/colors/indigo";

import HomePage from "./components/Pages/HomePage";

const theme = createMuiTheme({
  palette: {
    primary: { main: indigo["A200"] }
  },
  status: {
    danger: "orange"
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div>
          <HomePage />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
