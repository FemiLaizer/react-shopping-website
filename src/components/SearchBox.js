import './SearchBox.css'

const SearchBox = () => {
    return (
        <div className='SearchBox'>
            <p>
                <input className='search' type='search' placeholder='Sort items by name' />
            </p>
        </div>
    )
}

export default SearchBox