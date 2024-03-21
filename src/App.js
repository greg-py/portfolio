import Background from "./components/layout/Background";
import Container from "./components/layout/Container";
import Info from "./components/info/Info";
import Content from "./components/content/Content";

function App() {
  return (
    <Background>
      <Container>
        <Info />
        <Content />
      </Container>
    </Background>
  );
}

export default App;
