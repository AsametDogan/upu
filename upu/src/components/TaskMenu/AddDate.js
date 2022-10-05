import {  Menu, TextField } from "@mui/material";
import * as React from "react";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";

function AddDate({ anchorAddDate, openAddDate, handleCloseAddDate }) {
  const [value, setValue] = React.useState(dayjs());

  const [checked, setChecked] = React.useState(false);
  console.log(checked)

  const handleChange = (event) => {
    setChecked(event.target.checked);
    
  };
  handleChange()

  return (
    <div>
      <Menu
        id="date-menu"
        anchorEl={anchorAddDate}
        open={openAddDate}
        onClose={handleCloseAddDate}
      >
        <div className="pb-4">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StaticDatePicker
              displayStaticWrapperAs="desktop"
              openTo="day"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </div>
      </Menu>
    </div>
  );
}

export default AddDate;
