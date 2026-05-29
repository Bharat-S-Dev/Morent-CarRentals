import { createSlice } from "@reduxjs/toolkit";

const getStoredUser = () => {
  try {
    const user = localStorage.getItem("morent_user");
    return user ? JSON.parse(user) : null;
  } catch (e) {
    return null;
  }
};

const getStoredUsers = () => {
  try {
    const users = localStorage.getItem("morent_registered_users");
    if (!users) {
      const demoUsers = [
        {
          name: "Demo User",
          email: "user@demo.com",
          password: "password123",
          phone: "9876543210",
          address: "16/5 Indira Vikas colony, Mukherjee Nagar",
          city: "Delhi"
        }
      ];
      localStorage.setItem("morent_registered_users", JSON.stringify(demoUsers));
      return demoUsers;
    }
    return JSON.parse(users);
  } catch (e) {
    return [];
  }
};

const initialState = {
  user: getStoredUser(),
  registeredUsers: getStoredUsers(),
  isAuthenticated: !!getStoredUser(),
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registerUser: (state, action) => {
      const { name, email, password, phone, address, city } = action.payload;
      const userExists = state.registeredUsers.some(u => u.email === email);
      
      if (userExists) {
        state.error = "User with this email already exists.";
        return;
      }
      
      const newUser = { 
        name, 
        email, 
        password, 
        phone: phone || "", 
        address: address || "", 
        city: city || "" 
      };
      
      state.registeredUsers.push(newUser);
      localStorage.setItem("morent_registered_users", JSON.stringify(state.registeredUsers));
      state.error = null;
    },
    loginUser: (state, action) => {
      const { email, password } = action.payload;
      const foundUser = state.registeredUsers.find(
        u => u.email === email && u.password === password
      );
      
      if (foundUser) {
        state.user = { 
          name: foundUser.name, 
          email: foundUser.email,
          phone: foundUser.phone || "",
          address: foundUser.address || "",
          city: foundUser.city || ""
        };
        state.isAuthenticated = true;
        state.error = null;
        localStorage.setItem("morent_user", JSON.stringify(state.user));
        localStorage.setItem("currentUser", foundUser.email);
      } else {
        state.error = "Invalid email or password.";
      }
    },
    logoutUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.error = null;
      localStorage.removeItem("morent_user");
      localStorage.removeItem("currentUser");
    },
    clearAuthError: (state) => {
      state.error = null;
    }
  }
});

export const { registerUser, loginUser, logoutUser, clearAuthError } = authSlice.actions;
export default authSlice.reducer;