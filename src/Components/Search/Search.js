import React from 'react'

import SearchHeader from './SearchHeader'
import SearchDetails from './SearchDetails'

class Search extends React.Component {
    render() {
        
        return (
            <div className = 'Search'>
                <SearchHeader/>
                <br/>
                <SearchDetails/>
            </div>
        )
    }
}

export default Search
