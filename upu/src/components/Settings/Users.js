import React, { useState } from 'react'
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { RiDeleteBin6Line } from "react-icons/ri";

const Users = ({user}) => {

    const [author, setauthor] = useState();

    const handleChange = (event) => {
      setauthor(event.target.value);
    };
  return (
    <div className="flex gap-5 sm:grid items-center group">
        <div className="flex items-center">
          <div className="h-12 w-12 sm:h-8 sm:w-8 ">
            <img
              className=" rounded-full h-12 w-12"
              src={user.profilePicture}
              alt="avatar"
            />
          </div>
          <div className="flex flex-col ml-6 sm:ml-2">
            <span className="text-[15px] font-medium">
              {user.userName}
            </span>
            <span className="text-sm text-gray-500">{user.mail}</span>
          </div>
        </div>
      <div className="flex items-center pl-10 sm:pl-3 gap-3">
        <FormControl sx={{ minWidth: 120 }} size="small">
          <Select
            id="demo-select-small"
            value={author}
            defaultValue={2} // veri tabanından gelen value`ya göre
            onChange={handleChange}
          >
            <MenuItem value={1}>Yönetici</MenuItem>
            <MenuItem value={2}>Normal</MenuItem>
            <MenuItem value={3}>Sınırlı</MenuItem>
            <MenuItem value={4}>Misafir</MenuItem>
          </Select>
        </FormControl>
        <button>
          <RiDeleteBin6Line className="text-xl opacity-0 group-hover:opacity-75" />
        </button>
      </div>
    </div>
  )
}

export default Users
