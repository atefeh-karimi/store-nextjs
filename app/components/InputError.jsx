import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import React from "react";

function InputError({ massage }) {
  return (
    <span className="flex items-center gap-1 pl-1 mt-2 text-sm text-rose-600">
      <ExclamationTriangleIcon className="w-4 h-4" />
      {massage}
    </span>
  );
}

export default InputError;
