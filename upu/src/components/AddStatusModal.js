import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Modal from "react-modal";
import Grid from "@mui/material/Grid";
import Slider from "@mui/material/Slider";
import MuiInput from "@mui/material/Input";

const Input = styled(MuiInput)`
  width: 50px;
  border: 1px solid #00000020;
  border-radius: 6px;
  outline:hover : "none";
  padding: 3px 0 0 8px;
`;

const AddStatusModal = ({ modalIsOpen, closeModal }) => {


  const [value, setValue] = React.useState(30);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === "" ? "" : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };

  const colors = [
    "#fbca03",
    "#ffb20f",
    "#ff8610",
    "#fa6c00",
    "#ff725c",
    "#f54d45",
    "#d81f1e",
    "#bc1312",
    "#f88992",
    "#f5707f",
    "#f0596e",
    "#eb425e",
    "#f06cb2",
    "#de5283",
    "#bf3263",
    "#880e4f",
    "#959af1",
    "#7f80ec",
    "#6f6ae6",
    "#6155e0",
    "#ba72db",
    "#9f53c2",
    "#843db9",
    "#631c99",
    "#6ad5d9",
    "#3ec8da",
    "#1ab4d6",
    "#009bd4",
    "#6696ff",
    "#5082eb",
    "#2a5dc9",
    "#1f2ea1",
    "#98d62e",
    "#74c81f",
    "#53b919",
    "#36a816",
    "#23ba8f",
    "#0a966f",
    "#006e5f",
    "#005247",
    "#bdbdbd",
    "#adadad",
    "#949494",
    "#828282",
    "#7792a6",
    "#5e7b8f",
    "#3e5d73",
    "#2d4454",
  ];

  const [selectedColor, setSelectedColor] = useState("");

  const handleChangeColor = (event) => {
    setSelectedColor(event.target.id);
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      style={{
        overlay: {
          backgroundColor: "#00000005",
          display: "flex",
          justifyContent: "center",
        },
      }}
      className="w-72 bg-white h-[516px] border border-gray-300 mt-9 rounded-2xl shadow-lg p-6"
    >
      <h1 className="font-medium text-2xl">Durum Ekle</h1>
      <label className="flex flex-col gap-2 mt-4 text-sm text-gray-500">
        Adı
        <input
          className="w-full h-8 border border-gray-300/75 rounded-md"
          type="text"
        />
      </label>
      <div className="flex flex-col w-full gap-3 mt-5">
        <span className="text-sm text-gray-500">İlerleme</span>
        <div className="flex flex-row items-center gap-3">
          <Grid item xs>
            <Slider
              value={typeof value === "number" ? value : 0}
              onChange={handleSliderChange}
              aria-labelledby="input-slider"
              sx={{ color: "#6941C6" }}
            />
          </Grid>
          <Grid item>
            <Input
              value={value}
              size="small"
              onChange={handleInputChange}
              onBlur={handleBlur}
              inputProps={{
                step: 10,
                min: 0,
                max: 100,
                type: "number",
                "aria-labelledby": "input-slider",
              }}
            />
          </Grid>
        </div>
      </div>
      <span className="text-sm text-gray-500 mt-3">Renk</span>
      <div className="grid grid-cols-8 gap-2 mt-1">
        {colors.map((color, index) => (
          <div
            onClick={handleChangeColor}
            id={color}
            key={index}
            className={`h-6 w-6 rounded cursor-pointer ${selectedColor === color
              ? "ring-2 ring-gray-500 ring-offset-1"
              : ""
              }`}
            style={{ backgroundColor: color }}
          ></div>
        ))}
      </div>
      <div className="mt-6 flex items-center justify-end gap-3">
        <button className="w-20 h-[34px] bg-[#6941C6] text-white rounded-md text-sm hover:opacity-80">
          Kaydet
        </button>
        <button onClick={closeModal} className="w-16 h-[34px] border border-gray-400 rounded-md text-sm hover:bg-gray-200/60">
          İptal
        </button>
      </div>
    </Modal>
  );
};

export default AddStatusModal;
