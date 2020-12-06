import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useFormik } from "formik";
import GoogleLogin from "react-google-login";
import { useHistory } from "react-router-dom";

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "*Name Required";
  }

  if (!values.email) {
    errors.email = "*Email Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "*Password Required";
  }

  return errors;
};

const responseGoogle=(response)=>{
  // let history = useHistory();
  // history.push("/dashboard");

  console.log(response);
}
const SignupForm = () => {
  let history = useHistory();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      history.push("/signin");
    },
  });

  return (
    <div>
      <section className="hero is-fullheight has-background-grey-dark">
        <h3 className="has-text-white pt-4 is-size-2 has-text-centered">
          Invoicing App
        </h3>
        <div className="hero-body has-text-centered  is-justify-content-center pt-0">
          <div className="login has-background-white is-centered px-5 py-4 ">
            <div className="field">
              <div className="control">
                <button
                  className="button is-medium is-primary is-outlined"
                  type="submit"
                >
                  <FcGoogle className="mr-2" /> Signup with Google
                </button>
                <GoogleLogin
    clientId=""
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />,







              </div>
              <h3 className="has-text-black py-2 has-text-weight-semibold">
                or Complete the form
              </h3>
            </div>
            <form
              className="signin-form has-background-white is-centered px-5 py-1 "
              onSubmit={formik.handleSubmit}
            >
              <div className="field">
                <div className="control">
                  <input
                    className="input is-medium is-rounded is-link is-outlined"
                    type="name"
                    placeholder="Enter Your Name"
                    autocomplete="Name"
                    id="name"
                    name="name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                  />
                  {formik.touched.name && formik.errors.name ? (
                    <p className="has-text-danger">{formik.errors.name}</p>
                  ) : null}
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input
                    className="input is-medium is-rounded is-link is-outlined"
                    type="email"
                    placeholder="hello@example.com"
                    autocomplete="username"
                    id="email"
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <p className="has-text-danger">{formik.errors.email}</p>
                  ) : null}
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input
                    className="input is-medium is-rounded is-link is-outlined is-inverted"
                    type="password"
                    placeholder="Password"
                    autocomplete="current-password"
                    id="password"
                    name="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <p className="has-text-danger">{formik.errors.password}</p>
                  ) : null}
                </div>
              </div>
              <div className="level-item has-text-centered">
                <div>
                  <a href="##">Forgot Password?</a>
                </div>
              </div>
              <br />
              <button
                className="button is-block is-fullwidth is-primary is-medium is-rounded"
                type="submit"
              >
                Login
              </button>
            </form>
            <br />
            <nav className="level">
              <div className="level-item has-text-centered">
                <div>
                  <h5 className="has-text-link">
                    Have Account ?{" "}
                    <a href="##" className="is-success">
                      Signin
                    </a>
                  </h5>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignupForm;
