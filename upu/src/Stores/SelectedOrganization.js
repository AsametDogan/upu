import { createSlice } from '@reduxjs/toolkit'


export const selectedOrganization = createSlice({
    name: 'organization',
    initialState: {
        organization: {

        },
    },
    reducers: {
        setSelectedOrganization: (state, action) => { state.organization = (action.payload) },
    },

})

export const { setSelectedOrganization } = selectedOrganization.actions
export default selectedOrganization.reducer