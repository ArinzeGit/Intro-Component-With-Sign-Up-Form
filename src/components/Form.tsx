import { ChangeEvent, FormEvent, useState } from "react";
import "./Form.css";
import Validation from "./Validation";
import Svg from "./Svg";
interface Props {
  children: string;
}

interface ErrorProps {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const Form = ({ children }: Props) => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  function handleInput(event: ChangeEvent<HTMLInputElement>) {
    const newValues = { ...values, [event.target.name]: event.target.value };
    setValues(newValues);
  }
  const [errors, setErrors] = useState<Partial<ErrorProps>>({});
  function handleValidation(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrors(Validation(values));
  }
  return (
    <div
      className="card"
      style={{
        width: "544px",
        borderRadius: "10px",
        boxShadow: "0 9px 0 rgba(0, 0, 0, 0.2)",
      }}
    >
      <div className="card-body" style={{ padding: "39px" }}>
        <form onSubmit={handleValidation} noValidate>
          <div className=" myFormStyle inputContainer clearfix">
            <input
              type="text"
              name="firstName"
              className="form-control myFormStyle"
              id="exampleInputFirstName"
              placeholder="First Name"
              onChange={handleInput}
              style={{
                borderColor: errors.firstName
                  ? "hsl(0, 100%, 74%)"
                  : "hsl(210,13.79%,88.63%)",
              }}
            />
            {errors.firstName && <p className="error ">{errors.firstName}</p>}
            {errors.firstName && <Svg />}
          </div>
          <div className=" myFormStyle inputContainer clearfix">
            <input
              type="text"
              name="lastName"
              className="form-control myFormStyle"
              id="exampleInputLastName"
              placeholder="Last Name"
              onChange={handleInput}
              style={{
                borderColor: errors.lastName
                  ? "hsl(0, 100%, 74%)"
                  : "hsl(210,13.79%,88.63%)",
              }}
            />
            {errors.lastName && <p className="error ">{errors.lastName}</p>}
            {errors.lastName && <Svg />}
          </div>
          <div className=" myFormStyle inputContainer clearfix">
            <input
              type="email"
              name="email"
              className="form-control myFormStyle"
              id="exampleInputEmail1"
              placeholder="Email Address"
              onChange={handleInput}
              style={{
                borderColor: errors.email
                  ? "hsl(0, 100%, 74%)"
                  : "hsl(210,13.79%,88.63%)",
                color: errors.email ? "hsl(0, 100%, 74%)" : "initial",
              }}
            />
            {errors.email && <p className="error ">{errors.email}</p>}
            {errors.email && <Svg />}
          </div>
          <div className=" myFormStyle inputContainer clearfix">
            <input
              type="password"
              name="password"
              className="form-control myFormStyle"
              id="exampleInputPassword1"
              placeholder="Password"
              onChange={handleInput}
              style={{
                borderColor: errors.password
                  ? "hsl(0, 100%, 74%)"
                  : "hsl(210,13.79%,88.63%)",
              }}
            />
            {errors.password && <p className="error ">{errors.password}</p>}
            {errors.password && <Svg />}
          </div>

          <button
            type="submit"
            className="btn myFormStyle"
            style={{
              backgroundColor: "hsl(154, 59%, 51%)",
              color: "white",
              width: "100%",
              boxShadow: "0 4px 0 hsl(154, 59%, 45%)",
            }}
          >
            {children}
          </button>
        </form>
        <div
          style={{
            fontFamily: "poppings",
            color: "hsl(246, 25%, 77%)",
            fontSize: "11px",
            textAlign: "center",
            marginBottom: "4px",
          }}
        >
          By clicking the button, you are agreeing to our{" "}
          <a
            style={{
              color: "hsl(0, 100%, 74%)",
              fontWeight: "700",
            }}
          >
            Terms and Services
          </a>
        </div>
      </div>
    </div>
  );
};

export default Form;
