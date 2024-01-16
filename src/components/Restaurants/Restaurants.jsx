import RCard from './Rcard'
import rList from './rlist.json'

import { useState } from 'react'

let searchKey = ''
let inputRating = 0

const Restaurants = () => {
	const [restaurants, setRestaurants] = useState(rList)

	const handleSearch = (e) => {
		if (e.target.id === 'searchInput') {
			searchKey = e.target.value
		} else if (e.target.id === 'ratingInput') {
			inputRating = e.target.value
			if (inputRating > 6) {
				e.target.value = 6
			}
		}

		setRestaurants(
			rList.filter(
				(item) =>
					item.name.toLowerCase().includes(searchKey.toLowerCase()) &&
					item.rating >= inputRating
			)
		)
	}

	return (
		<div>
			<div className='flex items-center justify-between mb-4'>
				<div className='mx-8 mt-16 mb-4'>
					<input
						type='text'
						placeholder='Search restaurants'
						className='p-2 pr-12 border rounded'
						onChange={handleSearch}
						id='searchInput'
					/>
				</div>
				<div className='mx-8 mt-16 mb-4'>
					<label htmlFor='minRating' className='mr-2'>
						Minimum Rating:
					</label>
					<input
						type='number'
						min='0'
						max='6'
						step='1'
						className='p-2 border rounded'
						onChange={handleSearch}
						id='ratingInput'
					/>
				</div>
			</div>
			<div className='grid grid-cols-1 gap-4 px-2 lg:px-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3'>
				{restaurants.length > 0 ? (
					restaurants.map((restaurant) => (
						<RCard
							key={restaurant._id._id}
							restaurant={restaurant}
						/>
					))
				) : (
					<p className='py-12 text-3xl font-bold text-center text-red-600'>
						No restaurants found
					</p>
				)}
			</div>
		</div>
	)
}

export default Restaurants
