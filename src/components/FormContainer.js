import React from "react";
import { useSelector } from "react-redux";
import { Form } from "./Form";

export const FormContainer = () => {
  const { formDt } = useSelector((state) => state.nameList);
  return (
    <div>
      <h3>Form container</h3>

      <h4>{formDt}</h4>
      <hr />

      <Form />
    </div>
  );
};
