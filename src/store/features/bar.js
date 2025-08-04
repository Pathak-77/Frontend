import { createSlice } from "@reduxjs/toolkit"

export const initialState = {
  visible: false,  
};

export const barSlice = createSlice({
  name: 'barSlice',   
  initialState,       
  reducers: {
    setVisible: (state, action) => {
      
      state.visible = action.payload; 
    }
  }
});


export const { setVisible } = barSlice?.actions;
export default barSlice.reducer;