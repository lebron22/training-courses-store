import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { fieldsData } from "./fieldsData";

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
        initialValues={setInitialValue(fieldsData)}
        validationSchema={Yup.object().shape(setValidationSchema(fieldsData))}
        render={() => (
          <Form className="sell__form">
            {renderFields(fieldsData)}
            <button type="submit">Submit</button>
          </Form>
        )}
      />
    </div>
  );
};
export default Sell;

// const validationSchema = Yup.object().shape({
//   title: Yup.string()
//     .min(2, "Must be longer than 2 characters")
//     .max(20, "Title should not be longer than 20 characters")
//     .required("Required"),
//   url: Yup.string()
//     .url("Invalid URL address")
//     .required("Required"),
//   email: Yup.string()
//     .email("Invalid email address")
//     .required("Required"),
//   author: Yup.string()
//     .min(2, "Must be longer than 2 characters")
//     .max(20, "Nice try, nobody has a first name that long")
//     .required("Required"),
//   price: Yup.number()
//     .min(1, "Set a price")
//     .positive("Value must be a positive number")
//     .round("floor")
//     .required("Required"),
//   description: Yup.string()
//     .min(10, "Must be longer than 10 characters")
//     .max(200, "Title should not be longer than 200 characters")
//     .required("Required")
// });

// const jsX = () => (
//   <>
//     <Field
//       type="text"
//       name="title"
//       placeholder="title (max 15 signs)"
//       className="sell__input"
//     />
//     <ErrorMessage name="title" className="field-error" />
//     <Field
//       type="url"
//       name="url"
//       placeholder="image URL"
//       className="sell__input"
//     />
//     <ErrorMessage name="url" className="field-error" />
//     <Field
//       type="text"
//       name="author"
//       placeholder="Author"
//       className="sell__input"
//     />
//     <ErrorMessage name="author" className="field-error" />
//     <Field
//       type="number"
//       name="price"
//       placeholder="Price (e.g. 15.00)"
//       className="sell__input"
//     />
//     <ErrorMessage name="price" className="field-error" />
//     <Field
//       type="text"
//       name="description"
//       placeholder="Description (max 100 signs)"
//       className="sell__input--textarea"
//     />
//     <ErrorMessage name="description" className="field-error" />
//   </>
// );
