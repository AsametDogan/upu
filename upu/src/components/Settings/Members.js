import React from "react";
import { BiPlus } from "react-icons/bi";
import Users from "./Users";
import InviteMembers from "./InviteMembers";
import { Divider } from "@mui/material";

const Members = () => {
  const users = [
    {
      profilePicture:
        "https://www.shareicon.net/data/512x512/2016/07/26/802043_man_512x512.png",
      userName: "Mert Adem Gülenç",
      mail: "mertademgulenc@gmail.com",
    },
    {
      profilePicture:
        "https://www.shareicon.net/data/512x512/2016/07/26/802043_man_512x512.png",
      userName: "Mert Adem Gülenç",
      mail: "mertademgulenc@gmail.com",
    },
    {
      profilePicture:
        "https://www.shareicon.net/data/512x512/2016/07/26/802043_man_512x512.png",
      userName: "Mert Adem Gülenç",
      mail: "mertademgulenc@gmail.com",
    }
  ];

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="absolute top-0 left-0 w-[70%] h-full flex flex-col gap-6">
        <h1 className="text-xl text-[#181d25] font-medium">Üyeler</h1>
        <span className="text-sm text-gray-500">1 üye</span>
        {
          users.map((user, index) => (
            <Users key={index} user={user}/>
          ) )
        }
        <Divider />
        <button
          onClick={handleClickOpen}
          className="w-44 h-[34px] mt-4 flex items-center justify-center border border-solid border-[#048190] rounded-md text-sm text-[#048190] hover:bg-[#04819015]"
        >
          <BiPlus className="text-base" />
          Yeni üyeler davet et
        </button>
      </div>
      <InviteMembers
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        open={open}
      />
    </>
  );
};

export default Members;
