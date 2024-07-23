import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { useForm } from "react-hook-form";
import * as y from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const FormSchema = y.object({
  name: y.string().min(20).max(50),
  email: y.string().email().min(7).max(30),
  message: y.string().min(10).max(244),
});

type FormType = y.InferType<typeof FormSchema>;

export default function ContactForm() {
  const { show, setShow } = useContext(AppContext);
  const { register, handleSubmit, reset } = useForm<FormType>({
    resolver: yupResolver(FormSchema),
  });

  const handleSubmitForm = (message: any) => {
    alert(JSON.stringify(message));
    reset();
    setShow && setShow(!show);
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            {...register("name")}
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
            {...register("email")}
            className="form-control"
            id="email"
            aria-describedby="email"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            {...register("message")}
            className="form-control"
            id="message"
          ></textarea>
        </div>

        <div className="mt-3">
          <button className="btn btn-primary w-100">Send</button>
        </div>
      </form>
    </>
  );
}
