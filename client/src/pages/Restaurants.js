import React, { useContext } from 'react'
import RestaurantCard from '../components/RestaurantCard'
import { RestaurantsContext } from '../context/RestaurantsContext'

const Restaurants = () => {
  const { restaurants, isLoading } = useContext(RestaurantsContext)
  if (isLoading)
    return <h2 className="text-2xl text-center mt-12">Loading...</h2>
  return (
    <main className="px-6">
      <h1 className="text-2xl md:text-4xl text-center my-12">
        Book a reservation at a restaurant of your choosing.
      </h1>
      <section className="w-full justify-center mb-12 max-w-[1280px] mx-auto flex flex-wrap gap-x-4 gap-y-6">
        {restaurants.map((restaurant) => {
          return <RestaurantCard restaurant={restaurant} key={restaurant.id} />
        })}
      </section>
    </main>
  )
}

export default Restaurants
