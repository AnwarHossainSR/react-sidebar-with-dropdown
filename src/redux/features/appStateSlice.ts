import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AppState = {
  appState: string;
};

const initialState: AppState = {
  appState: '',
};

export const appStateSlice = createSlice({
  name: 'appState',
  initialState,
  reducers: {
    setAppState: (state, action: PayloadAction<string>) => {
      // eslint-disable-next-line no-param-reassign
      state.appState = action.payload;
    },
  },
});

export const { setAppState } = appStateSlice.actions;

export default appStateSlice.reducer;
