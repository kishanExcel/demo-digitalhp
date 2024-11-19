import React, { useState } from "react";

const ToggleSwitch: React.FC = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div className="relative inline-block w-[27px] h-[11px]">
      <input
        type="checkbox"
        id="toggle"
        className="hidden"
        checked={checked}
        onChange={handleChange}
      />
      <label
        htmlFor="toggle"
        className={`flex items-center cursor-pointer  rounded-full p-1 w-full ${
          checked ? " bg-limeGreen" : "bg-white"
        }`}
      >
        <div
          className={`w-[9px] h-[9px]  rounded-full shadow-md transition-transform ${
            checked
              ? "transform translate-x-full bg-white"
              : " bg-darkSilverColor"
          }`}
        ></div>
      </label>
    </div>
  );
};

export default ToggleSwitch;
