import './App.css';
import { Route } from 'react-router-dom'
import StarshipList from '../StarshipList/StarshipList'
import StarshipDetails from '../StarshipDetail/StarshipDetail'

function App(){
  return(
    <>
    <Route 
      exact path='/'
      render={() => <StarshipList />}
      />
    <Route 
      exact path='/details'
      render={({location}) => 
      <StarshipDetails location={location} /> 
    }
    />
    </>
  )
}
 
export default App;