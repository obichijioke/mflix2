import React from 'react'
import { Input } from 'antd';




const Search = props => {
    const Search = Input.Search;

    return (
        <Search
            className="searchInput"
            placeholder="search movie"
            style={{ width: 200, height:'30px', backgroundColor:'#ffffff36', border:'0px', marginRight:'2rem' }}
            onSearch={value => console.log(value)}
        />
    )
}



export default Search
