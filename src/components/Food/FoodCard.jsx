import { useNavigate } from 'react-router-dom'

const FoodCard = ({ item }) => {
	const navigate = useNavigate()

	return (
		<div className='flex flex-col duration-300 scale-95 hover:scale-100'>
			<div className='h-48'>
				<img
					src={item.strMealThumb}
					alt={item.strMeal}
					className='object-cover h-48 rounded-lg cursor-pointer w-96'
					onClick={() => navigate(`${item.idMeal}`)}
				/>
			</div>
			<a
				href={item.strYoutube}
				className='pl-2 mt-2 font-semibold text-blue-900 duration-200 hover:text-blue-500'
			>
				{item.strMeal}
			</a>
			<h5 className='pl-2 font-medium text-gray-800'>Ingredients:</h5>
			<ul className='pl-3 italic text-gray-700 font-sm'>
				<li>{item.strIngredient1}</li>
				<li>{item.strIngredient2}</li>
				<li>{item.strIngredient3}</li>
				<li>{item.strIngredient4}</li>
				<li>{item.strIngredient5}</li>
			</ul>
		</div>
	)
}
export default FoodCard
