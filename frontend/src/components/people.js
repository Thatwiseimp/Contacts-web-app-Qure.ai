import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import { Link, Redirect } from "react-router-dom";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { ButtonGroup } from "@material-ui/core";


class SearchBar extends Component {
  render(){
    return(
      <div>
        <input onChange={this.props.onChange}/>
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
      return (lst.map((key) => (<li>{key.name}</li>)))
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
        <p>hiii</p>
        <ul>
          {this.renderPerson(this.state.search_list)}
        </ul>
        <p>adsfsfsd</p>
      </div>
    )
  }

}
