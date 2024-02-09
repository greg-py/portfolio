import Modal from "react-modal";
import { contentSections } from "../../lib/constants";
import ProjectsModalContent from "./ProjectsModalContent";

Modal.setAppElement("#root");

const ContentModal = (props) => {
  const { modalSection, modalSectionHandler, isModalOpen, modalOpenHandler } =
    props;

  const closeModal = () => {
    modalSectionHandler(null);
    modalOpenHandler(false);
  };

  if (modalSection) {
    return (
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Content Modal"
      >
        {modalSection === contentSections.PROJECTS ? (
          <ProjectsModalContent />
        ) : (
          <div>yo</div>
        )}
      </Modal>
    );
  }
};

export default ContentModal;
