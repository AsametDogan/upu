import { configureStore } from '@reduxjs/toolkit'
import selectedOrganizationReducer  from './Stores/SelectedOrganization'
import  selectedProjectReducer  from './Stores/SelectedProject'
import selectedTaskReducer from './Stores/SelectedTask'
import userReducer from './Stores/User'

export default configureStore({
    reducer: {
        selectedTask: selectedTaskReducer,
        user: userReducer,
        organization: selectedOrganizationReducer,
        project: selectedProjectReducer

    },
})