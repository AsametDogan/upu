import { createSlice } from '@reduxjs/toolkit'


export const selectedProject = createSlice({
    name: 'project',
    initialState: {
        project: {

        },
    },
    reducers: {
        setSelectedProject: (state, action) => { state.project = (action.payload) },
    },

})

export const { setSelectedProject } = selectedProject.actions
export default selectedProject.reducer