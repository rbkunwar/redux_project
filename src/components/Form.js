import React from "react";
import { useDispatch } from "react-redux";
import { setDtList, setFormDt } from "../nameSlice";

export const Form = () => {
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    const { value } = e.target;
    dispatch(setFormDt(value));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    dispatch(setDtList());
  };
  return (
    <div>
      <form action="" onSubmit={handleOnSubmit}>
        <input type="text" onChange={handleOnChange} />
        <input type="submit form" />
      </form>
    </div>
  );
};
