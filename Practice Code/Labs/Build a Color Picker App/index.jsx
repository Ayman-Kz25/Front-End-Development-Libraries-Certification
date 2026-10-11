import { useState } from "react";

export const ColorPicker = () => {
  const [color, setColor] = useState("#ffffff");
  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <div id="color-picker-container" style={{ backgroundColor: color }}>
      <input
        type="color"
        id="color-input"
        onChange={handleColorChange}
        value={color}
      />
    </div>
  );
};
