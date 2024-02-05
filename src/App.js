import Container from "./components/layout/Container";
import Info from "./components/info/Info";
import Content from "./components/content/Content";
import Grid from "./components/layout/Grid";
import Divider from "./components/layout/Divider";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <Container>
      <Grid>
        <Info />
        <Content />
      </Grid>
      <Divider />
      <Footer />
    </Container>
  );
}

export default App;
