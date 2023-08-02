import React, { useState } from "react";
import FormPageOne from "./FormPageOne";
import FormPageTwo from "./FormPageTwo";
import FormPageThree from "./FormPageThree";
import FormPageFour from "./FormPageFour";

const Form: React.FC = () => {
  const [page, setPage] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    planType: "",
    plan: 0,
    addOns: [],
  });

  const [checkBox, setCheckBox] = useState(false);

  const handleCheckBox = () => {
    setCheckBox((prevState) => !prevState);
    setFormData((prev) => ({
      ...prev,
      plan: 0,
    }));
    console.log(checkBox ? "month" : "year");
  };

  const handleNextStep = () => {
    setPage((prev) => prev + 1);
    console.log(formData);
  };
  const handlePreviousStep = () => {
    setPage((prev) => prev - 1);
  };
  const handleChangePlan = () => {
    setPage(2);
  };

  const handleChange = (name: string, value: string | number | number[]) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form Submitted", formData);
    setFormData({
      name: "",
      email: "",
      number: "",
      planType: "",
      plan: 0,
      addOns: [],
    });
    setPage(1);
  };
  return (
    <div className="p-10 bg-slate-300 flex">
      <div className="flex flex-col w-60">
        <div className="flex">
          <span className={page === 1 ? "text-blue-500" : ""}>1</span>
          <div className="p-4">
            <p>STEP 1</p>
            <p>YOUR INFO</p>
          </div>
        </div>
        <div className="flex">
          <span className={page === 2 ? "text-blue-500" : ""}>2</span>
          <div className="p-4 ">
            <p>STEP 2</p>
            <p>YOUR INFO</p>
          </div>
        </div>
        <div className="flex">
          <span className={page === 3 ? "text-blue-500" : ""}>3</span>
          <div className="p-4">
            <p>STEP 3</p>
            <p>YOUR INFO</p>
          </div>
        </div>
        <div className="flex">
          <span className={page === 4 ? "text-blue-500" : ""}>4</span>
          <div className="p-4">
            <p>STEP 4</p>
            <p>YOUR INFO</p>
          </div>
        </div>
      </div>
      {page === 1 && (
        <FormPageOne
          formData={formData}
          onNext={handleNextStep}
          onChange={handleChange}
        />
      )}
      {page === 2 && (
        <FormPageTwo
          formData={formData}
          onNext={handleNextStep}
          onPrevious={handlePreviousStep}
          onChange={handleChange}
          handleCheckBox={handleCheckBox}
          checkBox={checkBox}
          checked={false}
        />
      )}
      {page === 3 && (
        <FormPageThree
          formData={formData}
          onNext={handleNextStep}
          onPrevious={handlePreviousStep}
          onChange={handleChange}
        />
      )}
      {page === 4 && (
        <FormPageFour
          formData={formData}
          onNext={handleNextStep}
          onPrevious={handlePreviousStep}
          onSubmit={handleSubmit}
          onChange={handleChange}
          onChangePlan={handleChangePlan}
        />
      )}
    </div>
  );
};

export default Form;
