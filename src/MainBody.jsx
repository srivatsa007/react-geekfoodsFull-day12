import { Outlet, useLocation } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

const Mbody = () => {
	const location = useLocation()

	return (
		<>
			<Header />
			<TransitionGroup>
				<CSSTransition
					key={location.key}
					timeout={300}
					classNames='animate-fade animate-once'
				>
					<Outlet />
				</CSSTransition>
			</TransitionGroup>
			<Footer />
		</>
	)
}

export default Mbody
