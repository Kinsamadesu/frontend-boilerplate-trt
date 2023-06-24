import { createSlice } from '@reduxjs/toolkit'

export interface SettingsState {
  mode: 'dark' | 'light'
}

const initialState: SettingsState = {
  mode: 'dark',
}

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    switchMode: (state) => {
      state.mode = state.mode === 'dark' ? 'light' : 'dark'
    },
  },
})

// Action creators are generated for each case reducer function
export const { switchMode } = settingsSlice.actions

export default settingsSlice.reducer
