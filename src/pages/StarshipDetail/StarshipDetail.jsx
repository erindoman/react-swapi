import { Component } from "react"
import { Link } from 'react-router-dom'

class StarshipDetail extends Component {
    state = { 
        starship: this.props.location.state.starship
     }
    render() { 
        return ( 
            <div>
                {this.state.starship.name}<br/>
                {this.state.starship.model}<br/>
                <Link
                    to={{
                        pathname: '/'
                    }}
                    >
                    Return
                </Link>
            </div>
         );
    }
}
 
export default StarshipDetail;