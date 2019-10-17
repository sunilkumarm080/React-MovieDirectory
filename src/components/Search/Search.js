import React from "react";
import './Search.css';
const MovieMockList = [
  {
  Name: 'hitman',
  Rating: '7.4',
  Duration: '2H'
  },
  {
    Name: 'Avengers',
    Rating: '5.4',
    Duration: '2H'
    }
];
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      rating:'',
      duration:'',
      MovieList:[]
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.id;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    const nameresult = this.filterByValue(MovieMockList,this.state.name);
    const ratingresult = this.filterByValue(MovieMockList,this.state.rating);
    const durationresult = this.filterByValue(MovieMockList,this.state.duration);    

    const MovieArray  = [...nameresult,...ratingresult,...durationresult];
    const unique = [...new Set(MovieArray)];
    this.setState({
      MovieList : unique
    });
    event.preventDefault();
    this.props.parentCallback("child message");
  }

  filterByValue(array, string) {
    return array.filter(o =>
        Object.keys(o).some(k => o[k].toLowerCase().includes(string.toLowerCase())));
}


  render () { 
    return (
    <div className="search container background">
    <form onSubmit={this.handleSubmit} >
      <label>
        Movie Name
        <input id="name" name="name-input" value={this.state.name} onChange={this.handleChange} type="text"  placeholder="Name"/>
      </label>
      <label>
        Ratings
        <input id="rating" name="ratings-input" value={this.state.rating} onChange={this.handleChange} type="text"  placeholder="Rating" />
      </label>
      <label>
        Duration
        <input id="duration" name="duration-input" value={this.state.duration} onChange={this.handleChange} type="text"  placeholder="Duration"/>
      </label>
      <input type="Submit" value="Submit" className="btn btn-primary" name="submit-button"/>
    </form>
    </div>
  );
  }
}

export default Search;