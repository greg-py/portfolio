import Container from "./components/layout/Container";
import Info from "./components/info/Info";
import Content from "./components/content/Content";
import Grid from "./components/layout/Grid";

function App() {
  return (
    <Container>
      <Grid>
        <Info />
        <Content />
      </Grid>
    </Container>
  );
}

export default App;
