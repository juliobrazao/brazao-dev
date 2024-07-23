import { useContext } from "react";
import { AppContext } from "./contexts/AppContext";
import ContactModal from "./components/ContactModal";

export default function App() {
  const { show, setShow } = useContext(AppContext);

  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <h1>
          julio@
          <strong onClick={() => setShow && setShow(!show)}>brazao</strong>.dev
        </h1>
      </div>
      <ContactModal />
    </>
  );
}
