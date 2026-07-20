import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserProfile {
  email: string;
  fullName?: string;
  isVerified?: boolean;
  role?: string;
  assessmentType?: string;
}

export interface AuthState {
  user: UserProfile | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

const initialState: AuthState = {
  user: {
    email: "chidi.umeh@email.com",
    fullName: "Chidi Umeh",
    isVerified: true,
  },
  token: null,
  isAuthenticated: false,
  isLoading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{ user: UserProfile; token?: string }>
    ) => {
      state.user = action.payload.user;
      state.token = action.payload.token || null;
      state.isAuthenticated = true;
    },
    updateEmail: (state, action: PayloadAction<string>) => {
      if (!state.user) {
        state.user = { email: action.payload };
      } else {
        state.user.email = action.payload;
      }
    },
    setRole: (state, action: PayloadAction<string>) => {
      if (state.user) {
        state.user.role = action.payload;
      } else {
        state.user = { email: "", role: action.payload };
      }
    },
    setAssessmentType: (state, action: PayloadAction<string>) => {
      if (state.user) {
        state.user.assessmentType = action.payload;
      } else {
        state.user = { email: "", assessmentType: action.payload };
      }
    },
    markVerified: (state) => {
      if (state.user) {
        state.user.isVerified = true;
      }
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
    },
  },
});

export const {
  setCredentials,
  updateEmail,
  setRole,
  setAssessmentType,
  markVerified,
  logout,
} = authSlice.actions;
export const authReducer = authSlice.reducer;
