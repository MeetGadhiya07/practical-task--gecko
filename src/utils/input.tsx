import React from "react";
import { Field, ErrorMessage } from "formik";

interface CustomFieldProps {
  name: string;
  type: string;
  placeholder: string;
}

const CustomField: React.FC<CustomFieldProps> = ({
  name,
  type,
  placeholder,
}) => {
  return (
    <div>
      <Field
        name={name}
        type={type}
        className="border-b border-secondary w-full focus:border-0 py-[12px] text-[15px]"
        placeholder={placeholder}
      />
      <ErrorMessage
        name={name}
        component="div"
        className="text-red text-base"
      />
    </div>
  );
};

export default CustomField;
