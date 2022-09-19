import React from "react";
import { Form, Formik } from "formik";

const RegisterForm = ({ fields, onSubmit }) => {
  return (
    <div>
      <Formik
        initialValues={{
          name: fields ? fields.name : "",
          email: fields ? fields.email : "",
          password: fields ? fields.password : "",
        }}
        validateOnChange={false}
        onSubmit={onSubmit}
      >
        {({ values, setFieldValue }) => (
          <Form>
            <label for="name">NAME</label>
            <br />
            <input
              type="text"
              id="name"
              name="name"
              value={values.name}
              onChange={(event) => {
                setFieldValue("name", event.target.value);
              }}
            />

            <label for="email">EMAIL</label>
            <br />
            <input
              type="text"
              id="email"
              name="email"
              value={values.email}
              onChange={(event) => {
                setFieldValue("email", event.target.value);
              }}
            />

            <label for="password">PASSWORD</label>
            <br />
            <input
              type="password"
              id="password"
              name="password"
              value={values.password}
              onChange={(event) => {
                setFieldValue("password", event.target.value);
              }}
            />

            <button type="submit">ENVIAR</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm;
