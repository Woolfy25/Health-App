import { useState } from "react";
import { IoClose } from "react-icons/io5";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const MobileModal = ({ onClick }) => {
  const [submittedValues, setSubmittedValues] = useState(null);

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    grams: Yup.number().required("Weight is required"),
  });
  return (
    <div className="w-full h-full tablet:h-full phone:h-full bg-white absolute top-[68px] phone:top-[62px] right-0 left-0 z-10 flex flex-col pt-16 gap-6 px-4">
      <IoClose
        onClick={onClick}
        className="absolute top-3 right-3 w-6 h-6 text-slate-400"
      />
      <Formik
        initialValues={{
          name: "",
          grams: 0,
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          setSubmittedValues(values);
          resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col">
            <div className="flex flex-col gap-8">
              <div className="relative">
                <Field
                  id="name"
                  name="name"
                  type="string"
                  placeholder="Enter product name"
                  className="w-full bg-transparent border-b-2 outline-none pb-2 text-slate-400 font-bold focus:text-slate-600 focus:border-slate-600 placeholder:focus:text-slate-600 hover:text-slate-600 hover:border-slate-600"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="absolute text-red-500"
                />
              </div>
              <div className="relative">
                <Field
                  id="grams"
                  name="grams"
                  type="number"
                  placeholder="Grams"
                  className="w-full bg-transparent border-b-2 outline-none pb-2 text-slate-400 font-bold focus:text-slate-600 focus:border-slate-600 placeholder:focus:text-slate-600 hover:text-slate-600 hover:border-slate-600"
                />
                <ErrorMessage
                  name="grams"
                  component="div"
                  className="absolute text-red-500"
                />
              </div>
              <button
                disabled={isSubmitting}
                type="submit"
                className="bg-orange-500 text-white px-20 py-3 rounded-full hover:bg-orange-600 hover:scale-105 transition-all duration-300 flex justify-center items-center"
              >
                Add
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MobileModal;
