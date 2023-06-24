import './SearchBox.css'

const SearchBox = () => {
    return (
        <div className='SearchBox'>
            <p>
                <input className='search' type='search' placeholder='Sort by popularity' />
            </p>
            <p className='icon'>
                <span>D!</span>
                <span>C!</span>
            </p>
        </div>
    )
}

export default SearchBox