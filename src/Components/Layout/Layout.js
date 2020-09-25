import React, { Component } from 'react'
import Aux from '../../hoc/UAX'

class Layout extends Component {
    render () {
        return(
            <Aux>
                <p>Toolbar, Sidedrawer</p>
                <header> TV SERIES REVIEW APP</header>
                {this.props.children}
            </Aux>
        )
    }
}   
  

export default Layout