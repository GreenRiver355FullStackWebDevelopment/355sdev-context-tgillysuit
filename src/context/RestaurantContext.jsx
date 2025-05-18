import { createContext, useContext } from "react";

// Instantiating a Context variable
export const RestaurantContext = createContext();

// Instantiating a Provider
export const useRestaurants = () => useContext(RestaurantContext);