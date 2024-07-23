import { useContext } from "react";
import { Modal, ModalBody, ModalHeader } from "react-bootstrap";
import { AppContext } from "../contexts/AppContext";

export default function ContactModal() {
  const { show, setShow } = useContext(AppContext);

  return (
    <Modal centered show={show}>
      <ModalHeader closeButton onHide={() => setShow && setShow(!show)}>
        <strong>Contact</strong>
      </ModalHeader>
      <ModalBody>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              aria-describedby="name"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="email"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea name="" className="form-control" id=""></textarea>
          </div>

          <div className="mt-3">
            <button
              type="button"
              className="btn btn-primary w-100"
              onClick={() => alert("Enviou mensagem!")}
            >
              Send
            </button>
          </div>
        </form>
      </ModalBody>
    </Modal>
  );
}
