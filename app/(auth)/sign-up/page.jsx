"use client";
import React, { useMemo } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import countryList from "react-select-country-list";
import Input from "@/app/components/Input";
import Select from "@/app/components/Select";
import validator from "validator";
import { redirect } from "next/navigation";

const DisplayingErrorMessagesSchema = Yup.object().shape({
  first_name: Yup.string()
    .min(2, "Please use at least 2  characters")
    .max(50, "Can't be longer than 32 characters")
    .required("This field is required"),
  last_name: Yup.string()
    .min(2, "Please use at least 2 characters")
    .max(50, "Can't be longer than 32 characters")
    .required("This field is required"),
  phone: Yup.string()
    .required("This field is required")
    .test("isValidPhoneNumber", "Please Enter a valid phone number", (value) =>
      validator.isMobilePhone(value)
    ),
  email: Yup.string()
    .email("Please Enter a valid email address")
    .required("This field is required"),
});
export default function SignUp() {
  const options = useMemo(() => countryList().getData(), []);

  return (
    <div className="max-w-3xl px-4 pt-16 pb-24 mx-auto sm:px-6 lg:max-w-7xl lg:px-6 ">
      <Formik
        validationSchema={DisplayingErrorMessagesSchema}
        initialValues={{
          email: "",
          first_name: "",
          last_name: "",
          address: "",
          apartment: "",
          city: "",
          country: "",
          province: "",
          postal_code: "",
          phone: "",
        }}
        onSubmit={async (values) => {
          await localStorage.setItem("user", JSON.stringify({ ...values }));
          redirect("/");
        }}
      >
        {({
          values,
          handleSubmit,
          handleChange,
          setFieldValue,
          handleBlur,
          isSubmitting,
        }) => (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-center"
          >
            <div>
              {/* sign up title  */}
              <div className="mb-12 sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="pb-2 text-lg font-medium text-gray-900 border-b">
                  Sign up
                </h2>
              </div>

              <div className="px-6 py-10 mt-4 bg-white shadow sm:rounded-lg sm:px-12">
                {/* email */}
                <Input
                  handleChange={handleChange}
                  value={values?.email}
                  handleBlur={handleBlur}
                  placeholder="Example@gmail.com"
                  name="email"
                  label="Email"
                />
                <div className="grid grid-cols-1 mt-4 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                  {/* first_name */}
                  <Input
                    handleChange={handleChange}
                    value={values?.first_name}
                    handleBlur={handleBlur}
                    name="first_name"
                    label="First Name"
                  />
                  {/* last_name */}
                  <Input
                    handleChange={handleChange}
                    value={values?.last_name}
                    handleBlur={handleBlur}
                    name="last_name"
                    label="Last Name"
                  />
                  {/* Address */}
                  <Input
                    handleChange={handleChange}
                    value={values?.address}
                    handleBlur={handleBlur}
                    name="address"
                    label="Address"
                  />
                  {/* Apartment, suite, etc. */}
                  <Input
                    handleChange={handleChange}
                    value={values?.apartment}
                    handleBlur={handleBlur}
                    name="apartment"
                    label="Apartment, suite, etc"
                  />
                  {/* City */}
                  <Input
                    handleChange={handleChange}
                    value={values?.city}
                    handleBlur={handleBlur}
                    name="city"
                    label="City"
                    className="sm:col-span-1"
                  />
                  {/* Country */}
                  <div>
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Country
                    </label>
                    <div className="">
                      <Select
                        name="Country"
                        list={options}
                        handleSelect={(event) => {
                          setFieldValue("country", event);
                        }}
                        value={values?.Country}
                      />
                    </div>
                  </div>
                  {/* province */}
                  <Input
                    handleChange={handleChange}
                    value={values?.province}
                    handleBlur={handleBlur}
                    name="province"
                    label="State / Province"
                    className="sm:col-span-1"
                  />
                  {/* postal_code*/}
                  <Input
                    handleChange={handleChange}
                    value={values?.postal_code}
                    handleBlur={handleBlur}
                    name="postal_code"
                    label="Postal code"
                    className="sm:col-span-1"
                  />

                  {/* phone */}
                  <Input
                    handleChange={handleChange}
                    value={values?.phone}
                    handleBlur={handleBlur}
                    name="phone"
                    label="Phone"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center mt-5 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Sign up
                  </button>
                </div>
              </div>

              {/* sign up button  */}
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
