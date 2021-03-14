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

// export default class People extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       guestCanPause: true,
//       votesToSkip: this.defaultVotes,
//     };
//
//     this.handleAddPeoplePressed = this.handleAddPeoplePressed.bind(this);
//   }
//
//   handleAddPeoplePressed() {
//     const requestOptions = {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//     };
//     fetch("/logs/people/");
//   }
//
//   render() {
//     return (
//       <Grid container spacing={1}>
//         <Grid item xs={12} align="center">
//           <Typography component="h4" variant="h4">
//             People!
//           </Typography>
//         </Grid>
//         <Grid item xs={12} align="center">
//           <ButtonGroup row >
//             <FormControlLabel color="primary" label= 'Add People' variant="contained" to="/logs/people/" component={Link}></FormControlLabel>
//             <FormControlLabel color="secondary" label = 'Back' variant="contained" to="/" component={Link}></FormControlLabel>
//           </ButtonGroup>
//         </Grid>
//         <Grid item xs={12} align="center">
//           <FormControl>
//             <TextField
//               required={true}
//               type="text"
//               // onChange={this.handleVotesChange}
//               // defaultValue={this.defaultVotes}
//               inputProps={{
//                 style: { textAlign: "center" },
//               }} />
//             <FormHelperText>
//               <div align="center">Search</div>
//             </FormHelperText>
//           </FormControl>
//         </Grid>
//       </Grid>
//     );
//   }
// }



export default class People extends Component {
  render(){
    return(
      <div>Hi</div>
      // <FormControl>
      //   <InputLabel htmlFor="my-input">Email address</InputLabel>
      //   <Input id="my-input" aria-describedby="my-helper-text" />
      //   <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
      // </FormControl>
    )
  }
}
