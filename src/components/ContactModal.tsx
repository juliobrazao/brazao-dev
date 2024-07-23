import { useContext } from "react";
import { Modal, ModalBody, ModalHeader } from "react-bootstrap";
import { AppContext } from "../contexts/AppContext";
import ContactForm from "./ContactForm";

export default function ContactModal() {
  const { show, setShow } = useContext(AppContext);

  return (
    <Modal centered show={show}>
      <ModalHeader closeButton onHide={() => setShow && setShow(!show)}>
        <strong>Contact</strong>
      </ModalHeader>
      <ModalBody>
        <ContactForm />
      </ModalBody>
    </Modal>
  );
}
