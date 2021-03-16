import React, { Component } from "react";

class SearchBar extends Component {
  render(){
    return(
      <div className='search'>
        <input placeholder='Search' onChange={this.props.onChange}/>
//        <button onclick="location.href'http://localhost:8000/logs/add/call';" id="Button" class="float-left submit-button" >Add!</button>

      </div>
    )
  }
}

export default class People extends Component {
  constructor(props){
    super(props);
    this.state ={
      people : [],
      search_list : [],
      search_term : '',
    }
  }

  renderPerson(lst){
    for (let i=0; i<lst.length; i++){
      return (lst.map((key) => (<li>{key.name} / {key.phone_number}</li>)))
    }
  }

  componentDidMount(){
    // console.log("hi");
    let my_list = [];
    fetch('http://localhost:8000/logs/people_list', ).then((response) => response.json()).then((data) => {
      for (let i=0; i<data.length; i++){
        my_list.push(data[i]);
      }
      this.setState({
        people: my_list,
        search_list: my_list
      })
      // console.log(data);
      console.log(this.state.search_list);
    })
  }

  update_search(){
    let searched_list = this.state.people.filter(person => (person.name).toLowerCase().includes(this.state.search_term.toLowerCase()))
    this.setState({
      search_list: searched_list
    })
    console.log(this.state.search_list);
  }

  searcher = (e) => {
    console.log(e.target.value);
    this.setState({
      search_term: e.target.value
    })
    this.update_search();
  }


  render(){

    // console.log(this.state.people);

    return(
      <div className="People">
        <SearchBar value={this.state.searchterm} onChange={this.searcher} placeholder="search me"/>
        <div>
          <ul>
            {this.renderPerson(this.state.search_list)}
          </ul>
        </div>
      </div>
    )
  }

}
