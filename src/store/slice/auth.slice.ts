import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface AuthState {
    getAuth: boolean;
    username: string;
    email: string;
    token: string;
    error: string;
    success: boolean;
}

const initialState: AuthState = {
  getAuth: false,
  username: '',
  email: '',
  token: '',
  error: '',
  success: false
}

export const authSlice = createSlice({
  name: 'Auth Slice',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<AuthState>) => {
      state.getAuth = action.payload.getAuth
      state.username = action.payload.username
      state.email = action.payload.email
      state.token = action.payload.token
      state.error = action.payload.error
      state.success = action.payload.success
    },
    logout: (state) => {
      state.getAuth = false
      state.token = ''
      state.username = ''
      state.email = ''
      state.error = ''
      state.success = false
    },
    register: (state, action: PayloadAction<AuthState>) => {
      state.getAuth = false
      state.token = ''
      state.username = ''
      state.email = ''
      state.error = ''
      state.success = true
    }
  }
})

export const { logout, login } = authSlice.actions
export default authSlice.reducer
