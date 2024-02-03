import Container from "./components/layout/Container";
import Grid from "./components/layout/Grid";
import Introduction from "./components/cards/Introduction";
import Social from "./components/cards/Social";
import Resume from "./components/cards/Resume";

function App() {
  return (
    <Container>
      <Grid>
        <Introduction />
        <Social />
        <Resume />
      </Grid>
    </Container>
  );
}

export default App;
