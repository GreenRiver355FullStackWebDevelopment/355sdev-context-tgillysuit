import Restaurant from "./Restaurant";
import { updateRestaurants } from "../context/RestaurantContext"; // imported this context

function RestaurantsContainer() {
  const { restaurants } = updateRestaurants(); // added this context
  return (
    <div className="restaurantContainer">
      {restaurants.map((restaurant) => (
        <Restaurant key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
}

export default RestaurantsContainer;
