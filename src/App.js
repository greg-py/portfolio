import Background from "./components/layout/Background";
import ContentModal from "./components/modal/ContentModal";
import Container from "./components/layout/Container";
import Info from "./components/info/Info";
import Content from "./components/content/Content";
import { useState } from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSection, setModalSection] = useState(null);

  return (
    <Background>
      <Container>
        <ContentModal
          modalSection={modalSection}
          modalSectionHandler={setModalSection}
          isModalOpen={isModalOpen}
          modalOpenHandler={setIsModalOpen}
        />
        <Info />
        <Content
          openModalHandler={setIsModalOpen}
          modalSectionHandler={setModalSection}
        />
      </Container>
    </Background>
  );
}

export default App;
