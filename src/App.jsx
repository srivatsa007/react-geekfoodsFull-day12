import About from './components/About/About'
import Error from './Error'
import Food from './components/Food/Food'
import FoodItem from './components/Food/FoodItem'
import Mbody from './MainBody'
import Main from './components/Main/Main'
import Quotes from './components/Quotes/Quotes'
import Restaurants from './components/Restaurants/Restaurants'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
	{
		path: '/',
		element:  <Mbody/>,
		children: [
			{
				path: '/',
				element: <Main />,
			},
			{
				path: '/quote',
				element: <Quotes />,
			},
			{
				path: '/restaurant',
				element: <Restaurants />,
			},
			{
				path: '/food',
				element: <Food />,
			},
			{
				path: '/food/:id',
				element: <FoodItem />,
			},

			{
				path: '/contact',
				element: <About />,
			},
		],
		errorElement: <Error />,
	},
])

const App = () => {
	return (
		<div className='relative'>
			<RouterProvider router={router} />
		</div>
	)
}

export default App
