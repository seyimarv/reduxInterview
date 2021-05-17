
import './App.css';
import { Component } from 'react';
import { getData } from './reduxx/action';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);

     this.state = {
       loading: true
     }
  
  }

  async componentDidMount() {
    const response = await fetch('https://reqres.in/api/users?page=2');
    const json = await response.json();
    this.props.setData(json.data);
    console.log(this.props.data)
    if (this.props.data) {
       this.setState({
         loading: false
       })
    }

    
      
  }


  render() {
      const fetchedData = this.props.data.currentData
      console.log(fetchedData)
    return (
      <div>
      {
         !this.state.loading ?
         <>
        { 
          fetchedData.map(({id, email, first_name}) => (
          <div key={id}>
             <p >Hello, {email}</p>
             <p>{first_name}</p>
          </div>
      
       ))} 
       </>
       : <h1>Loading</h1>

      }
       

      </div>
    )
  
  }
 
}


const mapStateToProps = state => ({
  data: state
})

const mapDispatchToProps = dispatch => ({
  setData: data => dispatch(getData(data)),
}); 

export default connect(mapStateToProps, mapDispatchToProps)(App)