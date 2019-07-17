import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { fieldsDataConfig } from "./fieldsData";

import Heading from "../../components/Heading/Heading";

import "./Sell.sass";

const Sell = () => {
  //Join into one function
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
        <label className="field__label">
          {field.label}:
          <Field
            type={field.type}
            name={field.name}
            className={field.fieldClassName}
          />
          <ErrorMessage name={field.name} className={field.errorClassName} />
        </label>
      </div>
    ));

  return (
    <div className="sell">
      <Heading title="ADD YOUR COURSE HERE" />
      <Formik
        initialValues={setInitialValue(fieldsDataConfig)}
        validationSchema={Yup.object().shape(
          setValidationSchema(fieldsDataConfig)
        )}
        render={() => (
          <Form className="sell__form">
            {renderFields(fieldsDataConfig)}
            <button type="submit">Submit</button>
          </Form>
        )}
      />
    </div>
  );
};
export default Sell;