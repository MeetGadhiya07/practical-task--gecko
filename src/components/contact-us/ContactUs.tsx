import React from "react";
import { Formik, Form, FormikHelpers } from "formik";
import * as Yup from "yup";
import CustomField from "../../utils/input";
import { Toaster } from "../../utils/toaster";
import { post } from "../../services/apiService";
import Transition, { TransitionX } from "../../utils/animations";

interface FormValues {
  name: string;
  lastName: string;
  mail: string;
  phone: string;
  budget: string;
  description: string;
}

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  mail: Yup.string().email("Invalid email address").required("Required"),
  phone: Yup.string().required("Required"),
  budget: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
});

const initialValues: FormValues = {
  name: "",
  lastName: "",
  mail: "",
  phone: "",
  budget: "",
  description: "",
};

const ContactUs = () => {
  const handleSubmit = async (
    values: FormValues,
    { resetForm }: FormikHelpers<FormValues>
  ) => {
    const payload = {
      fname: values.name,
      lname: values.lastName,
      email: values.mail,
      phone: values.phone,
      budget: values.budget,
      description: values.description,
    };

    try {
      const response = await post<typeof payload, any>(
        "/contact/send",
        payload
      );
      if (response.success) {
        resetForm();
        Toaster("success", response.data.message);
      }
    } catch (error) {
      Toaster("error", "Failed to send message. Please try again.");
    }
  };

  return (
    <section className="container mt-10 mb-[122px]">
      <TransitionX xPosition={-200}>
        <h1 className="text-secondary text-[47px] leading-[58.99px] font-bold mb-20">
          Contact Us
        </h1>
      </TransitionX>

      <Transition>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form>
              <div className="max-w-[785px] mx-auto grid grid-cols-2 gap-[60px]">
                <div className="flex flex-col gap-[40px]">
                  <CustomField name="name" type="text" placeholder="Name" />
                  <CustomField name="mail" type="email" placeholder="Mail" />
                  <CustomField name="budget" type="text" placeholder="Budget" />
                </div>
                <div className="flex flex-col gap-[40px]">
                  <CustomField
                    name="lastName"
                    type="text"
                    placeholder="Last Name"
                  />
                  <CustomField name="phone" type="text" placeholder="Phone" />
                  <CustomField
                    name="description"
                    type="text"
                    placeholder="Description"
                  />
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-primary text-white px-[65px] py-[15px] rounded-full text-xl leading-6 shadow-[0_4px_4px_0px_#00000040] mt-[64px]"
                >
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </Transition>
    </section>
  );
};

export default ContactUs;
