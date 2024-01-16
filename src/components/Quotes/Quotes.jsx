import QuoteBox from './QuoteBox'
import quoteList from './qlist.json'

const Quotes = () => {
	return (
		<div className='grid gap-8 p-4 py-8 mx-auto lg:gap-12 max-w-7xl'>
			{quoteList.map((quote) => (
				<QuoteBox
					quote={quote.content}
					author={quote.author}
					key={quote._id}
				/>
			))}
		</div>
	)
}

export default Quotes
