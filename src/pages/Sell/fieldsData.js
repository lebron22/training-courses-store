import * as Yup from "yup";

export const fieldsData = {
  author: {
    initialValue: "",
    type: "text",
    name: "author",
    label: "Author",
    fieldClassName: "searchbar__input",
    errorClassName: "field-error",
    validation: Yup.string()
      .min(2, "Must be longer than 2 characters")
      .max(20, "Nice try, nobody has a first name that long")
      .required("Required")
  },

  email: {
    initialValue: "",
    type: "email",
    name: "email",
    label: "E-mail",
    fieldClassName: "searchbar__input",
    errorClassName: "field-error",
    validation: Yup.string()
      .email("Invalid email address")
      .required("Required")
  },

  title: {
    initialValue: "",
    type: "text",
    name: "title",
    label: "Title",
    fieldClassName: "searchbar__input",
    errorClassName: "field-error",
    validation: Yup.string()
      .min(2, "Must be longer than 2 characters")
      .max(20, "Title should not be longer than 20 characters")
      .required("Required")
  },

  url: {
    initialValue: "",
    type: "url",
    name: "url",
    label: "Image URL",
    fieldClassName: "searchbar__input",
    errorClassName: "field-error",
    validation: Yup.string()
      .url("Invalid URL address")
      .required("Required")
  },

  price: {
    initialValue: "",
    type: "number",
    name: "price",
    label: "Price",
    fieldClassName: "searchbar__input",
    errorClassName: "field-error",
    validation: Yup.number()
      .min(1, "Set a price")
      .positive("Value must be a positive number")
      .round("floor")
      .required("Required")
  },

  description: {
    initialValue: "",
    type: "text",
    name: "description",
    label: "Description",
    fieldClassName: "sell__input--textarea",
    errorClassName: "field-error",
    validation: Yup.string()
      .min(10, "Must be longer than 10 characters")
      .max(200, "Title should not be longer than 200 characters")
      .required("Required")
  },

  accept: {
    initialValue: false,
    type: "checkbox",
    name: "accept",
    label: "I accept terms and conditions",
    fieldClassName: "sell__input--checkbox",
    errorClassName: "field-error",
    validation: Yup.boolean().required("Accept terms and conditions")
  }
};
