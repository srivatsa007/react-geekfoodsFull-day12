import axios from 'axios'
import { useState, useEffect } from 'react'
import FoodCard from './FoodCard'

const Food = () => {
	const [search, setSearch] = useState('Chicken')
	const [recipes, setRecipes] = useState([])
	const [loading, setLoading] = useState(false)

	const handleSearchClick = (e) => {
		e.preventDefault()

		fetchRecipes()
	}

	const handleInputChange = (e) => {
		setSearch(e.target.value)
	}

	const fetchRecipes = async () => {
		if (!search) {
			return
		}

		setLoading(true)

		try {
			const response = await axios.get(
				`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
			)
			const data = response.data.meals

			setRecipes(data)
		} catch (error) {
			console.log(error)
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		fetchRecipes()
	}, [])

	return (
		<div className='flex flex-col items-center p-6'>
			<form className='flex items-center gap-4 mb-8'>
				<input
					type='text'
					placeholder='Search your recipe..'
					className='w-64 px-4 py-2 text-sm border rounded-lg'
					onChange={handleInputChange}
				/>
				<button
					className='px-4 py-2 text-sm font-medium text-white duration-200 bg-blue-500 rounded-lg hover:bg-blue-600'
					type='submit'
					onClick={handleSearchClick}
				>
					Search
				</button>
			</form>
			{loading && (
				<div className='flex items-center justify-center mb-8'>
					<span className='loading loading-dots loading-lg'></span>
				</div>
			)}
			<div className='grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4'>
				{recipes.map((item) => (
					<FoodCard item={item} key={item.idMeal} />
				))}
			</div>
		</div>
	)
}

export default Food
