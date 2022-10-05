import { Menu, MenuItem } from '@mui/material'
import React from 'react'
import { HiOutlineArrowUp } from 'react-icons/hi'

function AddStatus({ openAddStatus, handleCloseAddStatus, anchorAddStatus }) {
    return (
        <div>
            <Menu
                id="status-menu"
                anchorEl={anchorAddStatus}
                open={openAddStatus}
                onClose={handleCloseAddStatus}

            >
                <div className=''>
                    <MenuItem className='!flex  !text-sm !text-gray-600  !gap-2 ' onClick={() => { console.log("s") }}>
                        <HiOutlineArrowUp className='text-[#eb425e] h-4 w-4' />
                        Acil
                    </MenuItem>
                    <MenuItem className='!text-sm !text-gray-600 !flex !gap-2 ' onClick={() => { console.log("s") }}>
                        <HiOutlineArrowUp className='text-[#ffb20f] h-4 w-4' />
                        Yüksek
                    </MenuItem>

                    <MenuItem className='!text-sm !text-gray-600 !flex !gap-2 ' onClick={() => { console.log("s") }}>
                        <HiOutlineArrowUp className=' h-4 w-4' />
                        Hiçbiri
                    </MenuItem>
                    <MenuItem className='!text-sm !text-gray-600 !flex !gap-2 ' onClick={() => { console.log("s") }}>
                        <HiOutlineArrowUp className='text-[#1ab4d6] h-4 w-4' />
                        Düşük
                    </MenuItem>

                </div>
            </Menu>
        </div>
    )
}

export default AddStatus