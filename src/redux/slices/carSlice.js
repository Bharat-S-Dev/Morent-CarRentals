import { createSlice } from "@reduxjs/toolkit";
import { carsData } from "../../data/carsData";

const getStoredCars = () => {
  try {
    const storedCars = localStorage.getItem("morent_inventory");
    return storedCars ? JSON.parse(storedCars) : carsData;
  } catch (e) {
    return carsData;
  }
};

const getStoredWishlist = () => {
  try {
    const currentUser = localStorage.getItem("currentUser");
    if (!currentUser) return [];
    const list = localStorage.getItem(`morent_wishlist_${currentUser}`);
    return list ? JSON.parse(list) : [];
  } catch (e) {
    return [];
  }
};

const currentInventory = getStoredCars();
const absoluteMaxPrice = Math.max(...currentInventory.map(c => c.price), 100);

const initialState = {
  cars: currentInventory,
  searchQuery: "",
  wishlist: getStoredWishlist(),
  filters: {
    types: [],
    capacities: [],
    maxPrice: absoluteMaxPrice,
  }
};

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    loadWishlist: (state) => {
      const currentUser = localStorage.getItem("currentUser");

      if (!currentUser) {
        state.wishlist = [];
        return;
      }

      const storedWishlist = localStorage.getItem(`morent_wishlist_${currentUser}` );

      state.wishlist = storedWishlist
        ? JSON.parse(storedWishlist)
        : [];
    },

    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    toggleTypeFilter: (state, action) => {
      const type = action.payload;
      const index = state.filters.types.indexOf(type);
      if (index === -1) {
        state.filters.types.push(type);
      } else {
        state.filters.types.splice(index, 1);
      }
    },
    toggleCapacityFilter: (state, action) => {
      const capacity = Number(action.payload);
      const index = state.filters.capacities.indexOf(capacity);
      if (index === -1) {
        state.filters.capacities.push(capacity);
      } else {
        state.filters.capacities.splice(index, 1);
      }
    },
    setMaxPrice: (state, action) => {
      state.filters.maxPrice = Number(action.payload);
    },
    resetFilters: (state) => {
      state.filters.types = [];
      state.filters.capacities = [];
      state.filters.maxPrice = Math.max(...state.cars.map(c => c.price), 100);
      state.searchQuery = "";
    },
    toggleWishlist: (state, action) => {
      const carId = action.payload;
      const index = state.wishlist.indexOf(carId);
      if (index === -1) {
        state.wishlist.push(carId);
      } else {
        state.wishlist.splice(index, 1);
      }
      const currentUser = localStorage.getItem("currentUser");
      localStorage.setItem(`morent_wishlist_${currentUser}`, JSON.stringify(state.wishlist));
    },
    addReview: (state, action) => {
      const { carId, review } = action.payload;
      const car = state.cars.find(c => c.id === carId);
      if (car) {
        car.reviews = [review, ...car.reviews];
        car.reviewsCount += 1;
        
        const totalRating = car.reviews.reduce((sum, r) => sum + r.rating, 0);
        car.rating = Number((totalRating / car.reviews.length).toFixed(1));
        
        localStorage.setItem("morent_inventory", JSON.stringify(state.cars));
      }
    }
  }
});

export const {
  setSearchQuery,
  toggleTypeFilter,
  toggleCapacityFilter,
  setMaxPrice,
  resetFilters,
  toggleWishlist,
  loadWishlist,
  addReview
} = carSlice.actions;

export default carSlice.reducer;