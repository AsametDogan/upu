import * as React from "react";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Slide from "@mui/material/Slide";
import { GrClose } from "react-icons/gr";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function InviteMembers({ handleClose, open }) {
  const [author, setauthor] = React.useState("");

  const handleChange = (event) => {
    setauthor(event.target.value);
  };

  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar
          sx={{
            backgroundColor: "transparent",
            boxShadow: "none",
            border: "1px solid #00000020",
            color: "#000",
            height: "70px",
          }}
        >
          <div className="w-full h-full flex items-center justify-between px-8">
            <div className="flex flex-col">
              <span className="text-xs text-gray-500">M. organizasonu</span>
              <span className="text-base text-gray-800">proje 1</span>
            </div>
            <button onClick={handleClose}>
              <GrClose className="text-2xl" />
            </button>
          </div>
        </AppBar>
        <div className="w-full flex justify-center mt-[70px]">
          <div className="w-[40%] sm:w-[80%] h-full my-[7%] flex flex-col justify-items-center gap-24 sm:gap-16">
            <h1 className="text-[32px] w-full sm:text-2xl">Üyeleri davet et</h1>
            <div className="w-full flex flex-row gap-6">
              <input
                type="text"
                placeholder="E-posta ile üyeleri ekle"
                className="w-full border-b border-gray-200 focus:border-purple-700"
              />
              <FormControl
                sx={{ minWidth: 120, marginLeft: "auto" }}
                size="small"
              >
                <Select
                  id="demo-select-small"
                  value={author}
                  defaultValue={2}
                  onChange={handleChange}
                >
                  <MenuItem value={1}>Yönetici</MenuItem>
                  <MenuItem value={2}>Normal</MenuItem>
                  <MenuItem value={3}>Sınırlı</MenuItem>
                  <MenuItem value={4}>Misafir</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="flex justify-end gap-6">
              <button className="w-[85px] h-[37px] border bg-[#6941C6] text-white rounded-md text-sm  hover:opacity-80">
                Davet et
              </button>
              <button
                onClick={handleClose}
                className="w-[68px] h-[35px] border border-gray-300 rounded text-sm text-gray-500 shadow hover:bg-gray-100"
              >
                Kapat
              </button>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
