import { createSlice } from "@reduxjs/toolkit";

const getStoredBookings = () => {
  try {
    const list = localStorage.getItem("morent_bookings");
    return list ? JSON.parse(list) : [];
  } catch (e) {
    return [];
  }
};

const initialState = {
  bookings: getStoredBookings(),
  pickupLocation: "",
  dropoffLocation: "",
  pickupDate: "",
  dropoffDate: "",
  pickupTime: "",
  dropoffTime: "",
};

const rentalSlice = createSlice({
  name: "rental",
  initialState,
  reducers: {
    addBooking: (state, action) => {
      
      const uniqueId = `BK-${Date.now()}-${Math.floor(1000 + Math.random() * 9000)}`;
      
      const newBooking = {
        id: uniqueId,
        bookingDate: new Date().toISOString(),
        status: "Confirmed", 
        ...action.payload
      };
      
      state.bookings.push(newBooking);
      localStorage.setItem("morent_bookings", JSON.stringify(state.bookings));
    },
    setPickupLocation: (state, action) => {
      state.pickupLocation = action.payload;
    },
    setDropoffLocation: (state, action) => {
      state.dropoffLocation = action.payload;
    },
    setPickupDate: (state, action) => {
      state.pickupDate = action.payload;
    },
    setDropoffDate: (state, action) => {
      state.dropoffDate = action.payload;
    },
    setPickupTime: (state, action) => {
      state.pickupTime = action.payload;
    },
    setDropoffTime: (state, action) => {
      state.dropoffTime = action.payload;
    },
    swapLocations: (state) => {
      const tmpLoc = state.pickupLocation;
      state.pickupLocation = state.dropoffLocation;
      state.dropoffLocation = tmpLoc;
      
      const tmpDate = state.pickupDate;
      state.pickupDate = state.dropoffDate;
      state.dropoffDate = tmpDate;
      
      const tmpTime = state.pickupTime;
      state.pickupTime = state.dropoffTime;
      state.dropoffTime = tmpTime;
    },
    resetRentalInfo: (state) => {
      state.pickupLocation = "";
      state.dropoffLocation = "";
      state.pickupDate = "";
      state.dropoffDate = "";
      state.pickupTime = "";
      state.dropoffTime = "";
    },
    
    clearBookingsHistory: (state) => {
      state.bookings = [];
      localStorage.removeItem("morent_bookings");
    }
  }
});

export const {
  addBooking,
  setPickupLocation,
  setDropoffLocation,
  setPickupDate,
  setDropoffDate,
  setPickupTime,
  setDropoffTime,
  swapLocations,
  resetRentalInfo,
  clearBookingsHistory
} = rentalSlice.actions;

export default rentalSlice.reducer;