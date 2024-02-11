import { createSlice } from '@reduxjs/toolkit'

export const tasksSlice = createSlice({
  name: 'counter',
  initialState: {
    items: [],
  },
  reducers: {
    addTask: (state, action) => {
      state.items.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.items = state.items.filter(item => item.key !== action.payload.key);
    },
    checkTask: (state, action) => {
      const { key, checked } = action.payload;

      for(const item of state.items) {
        if(item.key === key) {
          item.checked = checked;
          break;
        }
      }
    },
    editTask: (state, action) => {
      const { key, text } = action.payload;
  
      for(const item of state.items) {
        if(item.key === key) {
          item.text = text;
          break;
        }
      }
    }
  },
})

export const { addTask, deleteTask, checkTask, editTask } = tasksSlice.actions

export default tasksSlice.reducer