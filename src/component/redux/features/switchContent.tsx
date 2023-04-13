import { createSlice,PayloadAction  } from '@reduxjs/toolkit'

export const listContent = createSlice({
  name: 'mainContent',
  initialState: {
    content: "Recommand"
  },
  reducers: {
    switchList: (state, action:PayloadAction<string>) => {
      state.content = action.payload
    }
  }
})
// 每个 case reducer 函数会生成对应的 Action creators
export const { switchList } = listContent.actions

export const listReducer =  listContent.reducer