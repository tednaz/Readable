import React from 'react'


class Category extends React.Component{
    
    
    render(){
    return(
        <div>
            <h2>Category.js.  Count = {this.props.categories.length}</h2>
            <ol>
                {
                    this.props.categories.map((item)=><li key={item.name}>{item.name} </li>)
                }
            </ol>

        </div>

    )
}}

export default Category