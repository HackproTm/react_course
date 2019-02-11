import React from 'react'

import AddHeader from './AddHeader'
import AddContent from './AddContent'
import AddFooter from './AddFooter';

class AddProduct extends React.Component {
    render() {
        
        return (
            <div className = 'AddProduct' border='10'>
                <AddHeader/>
                <br/>
                <AddContent/>
                <br/>
                <AddFooter/>
            </div>
        )
    }
}

export default AddProduct
