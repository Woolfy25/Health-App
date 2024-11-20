import React, { useState } from "react";
import logo from "../../images/logoSlimMom.png";

import { useNavigate } from "react-router-dom";

import UserSidebar from "../../components/UserSidebar";
import BurgerModal from "../../components/BurgerModal";
import MobileModal from "../../components/MobileModal";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { GoPlus } from "react-icons/go";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Diary = () => {
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false);
  const [isMobileOpen, setMobileOpen] = useState(false);
  const [submittedValues, setSubmittedValues] = useState(null);

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    grams: Yup.number().required("Weight is required"),
  });

  const placeholder = [
    { name: "maca", grams: 100 },
    { name: "test", grams: 2000 },
    { name: "maca", grams: 1 },
    { name: "test", grams: 25 },
    { name: "eeeeee", grams: 1 },
    { name: "test", grams: 50000 },
    { name: "eeeeee", grams: 1 },
    { name: "test", grams: 50000 },
  ];

  return (
    <>
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
          <section className="screen-max-width w-full h-[100vh] overflow-auto flex tablet:flex-col phone:flex-col">
            <div className="w-3/5 flex flex-col pl-6 pt-12 gap-20 tablet:w-full tablet:pt-2 tablet:pl-0 tablet:gap-14 phone:w-full phone:pl-0 phone:pt-2 phone:gap-8">
              <nav className="flex items-baseline gap-4 tablet:justify-between tablet:pb-2 tablet:items-center tablet:border-b-2 tablet:border-slate-300 phone:justify-between phone:pb-2 phone:items-center phone:border-b-2 phone:border-slate-300">
                <img
                  src={logo}
                  alt="Website Logo"
                  width={167}
                  height={66}
                  className="tablet:h-[50px] tablet:w-auto tablet:pl-6 phone:h-[44px] phone:w-auto phone:pl-4"
                />
                <div className="flex gap-6">
                  <div className="hidden tablet:flex items-center gap-3">
                    <p className="text-sm font-semibold text-slate-500">Name</p>
                    <div className="bg-slate-300 h-6 w-[2px]"></div>
                    <button
                      type="button"
                      className="text-sm font-semibold text-slate-400"
                    >
                      Exit
                    </button>
                  </div>
                  {isModalOpen ? (
                    <IoClose
                      onClick={() => setModalOpen(false)}
                      className="hidden tablet:flex phone:flex w-6 h-6 flex-shrink-0 tablet:mr-6 phone:mr-4 text-slate-600"
                    />
                  ) : (
                    <RxHamburgerMenu
                      onClick={() => setModalOpen(true)}
                      className="hidden tablet:flex phone:flex w-6 h-6 flex-shrink-0 tablet:mr-6 phone:mr-4 text-slate-600"
                    />
                  )}
                </div>
                <span className="bg-slate-300 h-8 w-[2px] tablet:hidden phone:hidden"></span>
                <div className="flex flex-row gap-6 h-[17px] tablet:pr-6 phone:pr-4 tablet:hidden phone:hidden">
                  <button
                    onClick={() => {
                      navigate("/diary");
                    }}
                    className=" text-sm font-bold text-slate-500"
                  >
                    DIARY
                  </button>
                  <button
                    onClick={() => {
                      navigate("/calculator");
                    }}
                    className="text-slate-300 text-sm font-bold hover:text-slate-500 focus:text-slate-500 transition-all duration-300"
                  >
                    CALCULATOR
                  </button>
                </div>
              </nav>
              <div className="flex flex-col gap-12 tablet:pl-6 pb-14 phone:gap-8 phone:pl-4">
                <h2 className="text-slate-800 text-3xl font-bold w-4/5 tablet:w-10/12 phone:w-10/12 phone:text-lg">
                  13.12.2024
                </h2>
                <Form className="flex flex-col phone:hidden">
                  <div className="flex flex-wrap items-center gap-8 w-full phone:w-full">
                    <div className="relative">
                      <Field
                        id="name"
                        name="name"
                        type="string"
                        placeholder="Enter product name"
                        className="w-60 bg-transparent border-b-2 outline-none pb-2 text-slate-400 font-bold focus:text-slate-600 focus:border-slate-600 placeholder:focus:text-slate-600 hover:text-slate-600 hover:border-slate-600"
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
                        className="text-center w-20 bg-transparent border-b-2 outline-none pb-2 text-slate-400 font-bold focus:text-slate-600 focus:border-slate-600 placeholder:focus:text-slate-600 hover:text-slate-600 hover:border-slate-600"
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
                      className="bg-orange-500 text-white px-2 py-2 rounded-full hover:bg-orange-600 hover:scale-105 transition-all duration-300 flex justify-center items-center"
                    >
                      <GoPlus className="w-8 h-8" />
                    </button>
                  </div>
                </Form>
                <div className="flex flex-col h-72 w-full max-w-[530px] overflow-auto pr-6 phone:pr-4">
                  <ul className="flex flex-col gap-4">
                    {placeholder.map((elem, i) => (
                      <li
                        key={i}
                        className="flex flex-row gap-6 items-center hover:border-slate-600 group phone:gap-2"
                      >
                        <p className="overflow-auto w-60 bg-transparent border-b-2 pb-2 text-slate-400 text-sm font-semibold group-hover:text-slate-600 group-hover:border-slate-600">
                          {elem.name}
                        </p>
                        <p className="w-20 bg-transparent border-b-2 pb-2 text-slate-400 text-sm font-semibold group-hover:text-slate-600 group-hover:border-slate-600 text-center">
                          {elem.grams}
                        </p>
                        <p className="w-20 min-w-20 bg-transparent border-b-2 pb-2 text-slate-400 text-sm font-semibold group-hover:text-slate-600 group-hover:border-slate-600 text-end">
                          1234 <span>cal</span>
                        </p>
                        <button
                          type="button"
                          className="group-hover:scale-125 transition-all duration-200"
                        >
                          {<IoClose className="w-6 h-6 text-slate-400" />}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileOpen(true)}
                  className="phoneMin:hidden self-center w-12 h-12 bg-orange-500 text-white px-2 py-2 rounded-full hover:bg-orange-600 hover:scale-105 transition-all duration-300 flex justify-center items-center"
                >
                  <GoPlus className="w-8 h-8" />
                </button>
              </div>
            </div>
            <UserSidebar></UserSidebar>
          </section>
        )}
      </Formik>
      {isModalOpen && <BurgerModal />}
      {isMobileOpen && <MobileModal onClick={() => setMobileOpen(false)} />}
    </>
  );
};

export default Diary;
