import { Autocomplete, Chip, Menu, Stack, TextField } from '@mui/material'
import React from 'react'

function AddLabel({ openAddLabel, handleCloseAddLabel, anchorAddLabel }) {
    const top100Films = [
        { title: 'The Sha', year: 1994, color: "red" },
        { title: 'The G', year: 1972,color: "red" },
        { title: 'The Godf', year: 1974,color: "red" },
        { title: 'The', year: 2008 ,color: "red"}
    ]
    return (
        <div>
            <Menu
                id="label-menu"
                anchorEl={anchorAddLabel}
                open={openAddLabel}
                onClose={handleCloseAddLabel}
                
            >
                <div className='flex p-5'>
                    <Stack spacing={3} sx={{ width: 260 }}>
                        <Autocomplete
                        freeSolo

                            multiple
                            id="tags-filled"
                            options={top100Films.map((option) => option.title)}
                            renderTags={(value, getTagProps) =>
                                value.map((option, index) => (
                                    <Chip style={{ backgroundColor: option.color }}  variant="outlined" label={option} {...getTagProps({ index })} />
                                ))
                            }
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    placeholder="Etiket"
                                />
                            )}
                        />
                    </Stack>
                </div>
            </Menu>
        </div>
    )
}

export default AddLabel