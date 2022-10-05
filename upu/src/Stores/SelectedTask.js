import { createSlice } from '@reduxjs/toolkit'


export const selectedTask = createSlice({
    name: 'task',
    initialState: {
        task: {
            title: "İş Adı",
            number:"5",
            startDate: "07.09.2022",
            deadline: "17.09.2022",
            responsibles: ["Sorumlu kişi1", "Sorumlu kişi2"],
            labels: ["etiket1", "etiket2"],
            description: "burası açıklama alanı",
            generation: 0,
            subTasks: [
                {
                    title: "sub İş Adı",
                    number:"5",
                    startDate: "07.09.2022",
                    deadline: "17.09.2022",
                    responsibles: ["Sorumlu kişi1", "Sorumlu kişi2"],
                    labels: ["etiket1", "etiket2"],
                    description: "burası açıklama alanı",
                    generation: 1,
                    subTasks: [""]
                },
                {
                    title: "sub İş Adı-1",
                    number:"5",
                    startDate: "07.09.2022-1",
                    deadline: "17.09.2022-1",
                    responsibles: ["Sorumlu kişi1-1", "Sorumlu kişi2-1"],
                    labels: ["etiket1-1", "etiket2-1"],
                    description: "burası açıklama alanı-1",
                    generation: 1,
                    subTasks: [""]
                },
            ]
        },
    },
    reducers: {
        setSelectedTask: (state, action) => { state.task = (action.payload) },
    },

})

export const { setSelectedTask } = selectedTask.actions
export default selectedTask.reducer