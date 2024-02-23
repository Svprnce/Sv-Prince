import '../styles/quotes.css'
const Quotes = ({quote,author})=>{
    return(
        <div className="quotes">
        <p className='intro-quote'><span className='quote'>{`"${quote} "`}</span>  By {author}</p>
        </div>
    )
}

export default Quotes