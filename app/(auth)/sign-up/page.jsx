"use client";
import InputError from "@/app/components/InputError";
import React, { useState, useMemo } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";
import countryList from "react-select-country-list";

export default function SignUp() {
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  const changeHandler = (value) => {
    setValue(value);
  };
  return (
    <div className="max-w-3xl px-4 pt-16 pb-24 mx-auto sm:px-6 lg:max-w-7xl lg:px-6 ">
      <form
        className="flex flex-col items-center justify-center"
        onSubmit={handleSubmit(onSubmit)}
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
            <div>
              <label
                htmlFor="email-address"
                className="block text-sm font-medium text-gray-700"
              >
                Email
                <span className="text-red-600">*</span>
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  id="email-address"
                  name="email-address"
                  autoComplete="email"
                  {...register("email", { required: true })}
                  className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.email && errors.email.type === "required" && (
                  <InputError massage="This field is required." />
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 mt-4 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
              {/* First name */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First name
                  <span className="text-red-600">*</span>
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    {...register("firstName", {
                      required: true,
                      maxLength: 20,
                      pattern: /^[A-Za-z]+$/i,
                    })}
                    autoComplete="given-name"
                    className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {errors?.firstName?.type === "required" && (
                    <InputError massage="This field is required" />
                  )}
                  {errors?.firstName?.type === "maxLength" && (
                    <InputError massage="Cannot exceed 20 characters" />
                  )}
                </div>
              </div>
              {/* Last name */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="lastName"
                    {...register("lastName", {
                      maxLength: 20,
                      pattern: /^[A-Za-z]+$/i,
                    })}
                    name="lastName"
                    autoComplete="family-name"
                    className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {errors?.lastName?.type === "maxLength" && (
                    <InputError massage="Cannot exceed 20 characters." />
                  )}
                </div>
              </div>
              {/* Address */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Address
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="address"
                    id="address"
                    autoComplete="street-address"
                    className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              {/* Apartment, suite, etc. */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="apartment"
                  className="block text-sm font-medium text-gray-700"
                >
                  Apartment, suite, etc.
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="apartment"
                    id="apartment"
                    className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              {/* City */}
              <div>
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700"
                >
                  City
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="address-level2"
                    className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              {/* Country */}
              <div>
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700"
                >
                  Country
                </label>
                <div className="mt-1">
                  <Select
                    options={options}
                    value={value}
                    onChange={changeHandler}
                  />
                </div>
              </div>
              {/* State / Province */}
              <div>
                <label
                  htmlFor="region"
                  className="block text-sm font-medium text-gray-700"
                >
                  State / Province
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="region"
                    id="region"
                    autoComplete="address-level1"
                    className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              {/* Postal code */}
              <div>
                <label
                  htmlFor="postalCode"
                  className="block text-sm font-medium text-gray-700"
                >
                  Postal code
                </label>
                <div className="mt-1">
                  <input
                    type="number"
                    {...register("postalCode", {
                      maxLength: 5,
                      pattern: /[\d]/,
                    })}
                    name="postalCode"
                    id="postalCode"
                    autoComplete="postalCode"
                    className="block w-full px-2 number-input rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {errors?.postalCode?.type === "maxLength" && (
                    <InputError massage="Cannot exceed 5-digit numbers." />
                  )}
                </div>
              </div>
              {/* Phone */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone
                  <span className="text-red-600">*</span>
                </label>
                <div className="mt-1">
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    {...register("phone", {
                      required: true,
                      pattern: /^(0|[1-9]\d*)(\.\d+)?$/,
                    })}
                    autoComplete="tel"
                    className="block w-full number-input px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {errors?.phone?.type === "required" && (
                    <InputError massage="This field is required." />
                  )}
                </div>
              </div>
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
    </div>
  );
}
