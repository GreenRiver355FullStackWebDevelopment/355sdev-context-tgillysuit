import RestaurantsContainer from "../components/RestaurantsContainer"; // Added this import for proper rendering

function RestaurantSection() {
  return (
    <section>
      <RestaurantFilter />
      <RestaurantsContainer />
    </section>
  );
}

export default RestaurantSection
