import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const FoodItem = () => {
	const { id } = useParams()
	const [loading, setLoading] = useState(true)
	const [recipe, setRecipe] = useState([])

	const fetchRecipe = async () => {
		try {
			const response = await axios.get(
				`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
			)
			const data = response.data.meals[0]
			console.log(data)

			setRecipe(data)
		} catch (error) {
			console.log(error)
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		window.scroll(0, 0)
		fetchRecipe()
	}, [])

	return (
		<div className='flex flex-col items-center p-6'>
			{loading && (
				<div className='flex items-center justify-center mb-8'>
					<span className='loading loading-dots loading-lg'></span>
				</div>
			)}
			{recipe && (
				<div className='flex flex-col gap-6'>
					<div className='flex flex-col justify-center lg:items-center lg:flex-row gap-x-12'>
						<img
							src={recipe.strMealThumb}
							alt={recipe.strMeal}
							className='w-full duration-300 scale-95 rounded-lg lg:w-1/4 hover:scale-100'
						/>
						<div className='flex flex-col gap-4 pl-4 md:pl-8'>
							<h2 className='text-xl font-bold lg:text-3xl'>
								{recipe.strMeal}
							</h2>
							<p className='italic text-gray-600'>Ingredients:</p>
							<ul className='flex flex-col pl-8 list-disc'>
								<li>{recipe.strIngredient1}</li>
								<li>{recipe.strIngredient2}</li>
								<li>{recipe.strIngredient3}</li>
								<li>{recipe.strIngredient4}</li>
								<li>{recipe.strIngredient5}</li>
								<li>{recipe.strIngredient6}</li>
								<li>{recipe.strIngredient7}</li>
							</ul>
						</div>
					</div>
					<div className='flex flex-col items-center justify-center mt-12'>
						<h3 className='mb-4 text-xl font-bold text-gray-600'>
							Instructions
						</h3>
						<p className='w-3/4 text-gray-600'>
							{recipe.strInstructions}
						</p>
					</div>
				</div>
			)}
		</div>
	)
}

export default FoodItem
