import { CssBaseline, Grid } from "@material-ui/core";
// header
import Header from "./component/Header";
import Content from "./component/Content";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Grid container direction="column">
        <Grid item>
          <Header />
        </Grid>
        <Grid item container>
          <Grid item sm={2} xs={false}></Grid>
          <Grid item sm={8} xs={12}>
            <Content style={{ marginTop: "20px" }} />
          </Grid>
          <Grid item sm={2} xs={false}></Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
