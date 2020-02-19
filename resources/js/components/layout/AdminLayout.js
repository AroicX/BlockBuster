import React, { Component } from 'react';
import Film from './../../Pages/Films'

class AdminLayout extends Component {

    constructor(props){
        super(props)
        this.state = {
            userIn: false
        }
    }

    componentWillMount(){
       
        let cache = localStorage.staleState;
        if (cache && typeof JSON.parse(cache) === 'object') {

            this.setState({userIn: true})
            
          
        }else{
            return(
               window.location.replace('/films')
            )
        }

    }


    
    render() {
        
        return (
            <div>
            <Film/>
            </div>
        );
    }
}

export default AdminLayout;