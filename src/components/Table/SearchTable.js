import React from "react";
import './SearchTable.css'

class SearchTable  extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            MovieList:[]
          };
    }


 render(){
     return(
         <div>
             { 
             this.state.MovieList.length > 0 ? (
        <div className="SearchTable">
        <label>
            Search
            <br/><input type="text" name="search-input"  placeholder="Search for a movie" />
          </label>
            <table className="table"> 
            <thead>
            <tr>
             <th scope="col">Name</th>
             <th scope="col">Rating</th>
             <th scope="col">Duraing</th>
           </tr>
            </thead>
            <tbody>
            {
               this.state.MovieList.map(item => {
                 return <tr><td>{item.Name}</td><td>{item.Rating}</td><td>{item.Duration}</td></tr>;
               })
             }
            </tbody>

            </table>
        </div>
   ):(
     <p>

     </p>
   )}
         </div> 
         );
 }


}


export default SearchTable;