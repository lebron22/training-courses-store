import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { fieldsDataConfig } from "./fieldsData";

import Heading from "../../components/shared/Heading/Heading";

import "./Sell.sass";

const Sell = props => {
  const setValidationSchema = dataObject =>
    Object.assign(
      ...Object.entries(dataObject).map(([key, value]) => ({
        [key]: value.validation
      }))
    );
  const setInitialValue = dataObject =>
    Object.assign(
      ...Object.entries(dataObject).map(([key, value]) => ({
        [key]: value.initialValue
      }))
    );
  //
  const renderFields = fieldsObject =>
    Object.values(fieldsObject).map((field, index) => (
      <div className="field" key={index}>
        <label className="field__label">{field.label}:</label>
        <Field
          type={field.type}
          name={field.name}
          className={field.fieldClassName}
        />
        <label className={field.errorClassName}>
          <ErrorMessage name={field.name} />
        </label>
      </div>
    ));

  const handleSubmit = e => {
    e.preventDefault();
    alert("product sent for acceptance");
    props.history.push("/training-courses-store");
  };

  return (
    <div className="sell">
      <Heading title="ADD YOUR COURSE HERE" />
      <Formik
        initialValues={setInitialValue(fieldsDataConfig)}
        validationSchema={Yup.object().shape(
          setValidationSchema(fieldsDataConfig)
        )}
        render={() => (
          <Form className="sell__form" onSubmit={handleSubmit}>
            {renderFields(fieldsDataConfig)}
            <button type="submit">Submit</button>
          </Form>
        )}
      />
    </div>
  );
};
export default Sell;
