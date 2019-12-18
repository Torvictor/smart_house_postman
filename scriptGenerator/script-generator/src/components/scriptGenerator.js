import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TablePagination from '@material-ui/core/TablePagination';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';

import SelectComponent from '../components/selector';
import UploadFileForm from '../components/uploadFileForm';

import selectorOptions from '../data/selectorOptionsData';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "rgb(40, 44, 52)",
    color: "white;",
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

export default class ScriptGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentJsonString: "{}",
      accessToActivate: false,
      activateB: "lightgray",
      counter: 1,
      components: [],
      postName: "",
      API_url: "",
      API_name: "",
      API_method: "",
      page: 0,
      rowsPerPage: 7
    };
    this.selectorOptions = selectorOptions;

    this.addPost = this.addPost.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.setStateCurrentJsonString = this.setStateCurrentJsonString.bind(this);
    this.setStateAccessToActivate = this.setStateAccessToActivate.bind(this);
    this.setStateActivateB = this.setStateActivateB.bind(this);
    this.setPostParamsStates = this.setPostParamsStates.bind(this);
    this.setRefreshStates = this.setRefreshStates.bind(this);
    this.setNewStates = this.setRefreshStates.bind(this);
    this.fetchAJAXRequest = this.fetchAJAXRequest.bind(this);
  }

  //из upload component
  setStateCurrentJsonString(JSONstr){
    this.setState({
      currentJsonString: JSONstr
    });
  }

  //из upload component
  setStateAccessToActivate(boolVal){
    this.setState({
      accessToActivate: boolVal
    });
  }

  //из upload component
  setStateActivateB(color){
    this.setState({
      activateB: color
    });
  }

  //из selector component
  setPostParamsStates(postName, API_url, API_name, API_method){
    this.setState({
      postName: postName,
      API_url: API_url,
      API_name: API_name,
      API_method: API_method
    });
    this.fetchAJAXRequest(API_url, "get", "{}", null);
  }

  //when fetch get/put/delete
  setRefreshStates(method, data, val){
    if(method === "get"){
      let dataObj = data;
      let newArray=[];
      dataObj.forEach(function(item, i) {
      newArray = [...newArray, Object.assign({id: i + 1}, item)];
      console.log( i + ": " + item );
    });

    this.setState({
      components: newArray,
      counter: newArray.length,
      page: 0,
      rowsPerPage: 7
    })
    }

    if(method === "put"){
      let dataObj = data;
      let count = this.state.counter;
  
      let newArray=this.state.components;
      dataObj.forEach(function(item, i) {
        count++;
        newArray = [...newArray, Object.assign({id: count}, item)];
        console.log( i + ": " + item );
        
      });

      this.setState({
        counter: count,
        components: newArray
      })
    }

    if(method === "delete"){
      const copyComponents= this.state.components.filter(component => component.id != val);

      this.setState({
          components: copyComponents
      })

      console.log("len = " + copyComponents.length);
      if(copyComponents.length === 0){
        this.setState({
          counter: 0
        });
        console.log("There aren't elements -> counter has been set in initial state.");
      }
    }
  }

  fetchAJAXRequest(url, method, datar, delval, refFunc=this.setRefreshStates){
    if(method === "get"){
      datar = null;
    }

    console.log("data = " + datar);
    console.log("method = " + method);
    console.log("url = " + url);

    fetch(url, {
      method: method,
      headers: {
          'Accept': 'application/json, text/plain, ',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': url
      },
      body: datar
    }).then(function(response) {
      if (!response.ok) {
          return Promise.reject(new Error(
              'Response failed: ' + response.status + ' (' + response.statusText + ')'
          ));
      }
      return response.json();
  }).then(function(data) {
    console.log("FETCH DATA = " + JSON.stringify(data));
    refFunc(method, data, delval);
    console.log("data = " + data)

  }).catch(function(error) {
      console.log(error);
      return false;
  });
  return true;
  }

  isValidSelector(){
    if(this.state.postName === 'None' || this.state.postName ===""
      || this.state.postName === null || this.state.postName === undefined){
        alert("Choose a post (not 'None') that you need.");
        return false;
      }
    return true;
  }

  addPost() {
    if(this.state.accessToActivate === false){
      console.log("Unimpossible activate a script without a script's JSON file.")
      return;
    }
    if(this.isValidSelector() === false){
      return;
    }
    console.log("In addPost API is " + this.state.API_url + " and method is " + this.state.API_method);
    this.fetchAJAXRequest(this.state.API_url, "put", this.state.currentJsonString, null);
  }

  deletePost(val){
      if(this.isValidSelector() === false){
        return;
      }
      console.log("Number of deleting element is " + val.target.dataset.id)
      let requestString = `{
        "${this.state.API_name}": ["${val.target.dataset.uuid}"]
      }`;
      this.fetchAJAXRequest(this.state.API_url, "delete", requestString, val.target.dataset.id);
      
  }

  showPostWithJSON(val){
    alert("JSON of the " + val.target.API_method + " post №" + val.target.dataset.id + " is:\n" + val.target.dataset.json);
    console.log("JSON showed:\n" + val.target.dataset.json);
    //document.write(JSON.stringify(val.target.dataset.json));
  }

  //pagination functions:
  handleChangePage = (event, newPage) => {
    this.setState({
      page: newPage
    });
  };

  handleChangeRowsPerPage = event => {
    this.setState({
      page: 0,
      rowsPerPage:+event.target.value
    });
  };

  render() {
    return (
      <div className="scriptGenerator">
        <SelectComponent optionsData={this.selectorOptions} 
          setPostParamsStates={this.setPostParamsStates}/>
        <UploadFileForm setStateCurrentJsonString={this.setStateCurrentJsonString} 
          setStateAccessToActivate={this.setStateAccessToActivate} 
          setStateActivateB={this.setStateActivateB}/>

        <div className="listOfScripts">
          <button className="activeBtn" style={{backgroundColor: this.state.activateB}} onClick={this.addPost}>Activate</button>
          <br /><br />
          
          <Paper className="scriptItem">
              <div>
              <Table>
                <TableHead>
                  <TableRow>
                  <StyledTableCell>Number</StyledTableCell>
                  <StyledTableCell align="right">UUID</StyledTableCell>
                  <StyledTableCell align="right">Name</StyledTableCell>
                  <StyledTableCell align="right">Type</StyledTableCell>
                  <StyledTableCell align="right">Drop</StyledTableCell>
                  </TableRow>
              </TableHead>
              
              <TableBody>
              {this.state.components.slice(
                this.state.page * this.state.rowsPerPage, this.state.page * this.state.rowsPerPage + this.state.rowsPerPage).map(
                row => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                        <StyledTableCell component="th" scope="row">
                          <span>{row.id}</span>
                        </StyledTableCell>
                        <StyledTableCell align="right">{row.uuid}</StyledTableCell>
                        <StyledTableCell align="right">{row.name}</StyledTableCell>
                        <StyledTableCell align="right">{row.type}</StyledTableCell>
                        <StyledTableCell align="right"><i className="fa fa-trash-o urna" aria-hidden="true" data-id={row.id} data-uuid={row.uuid} 
                        onClick={this.deletePost.bind(this)}></i></StyledTableCell>             
                    </TableRow>
                  )})}
              </TableBody>
            </Table>
            </div>
            <TablePagination
              rowsPerPageOptions={[7, 10, 25, 100]}
              component="div"
              count={this.state.components.length}
              rowsPerPage={this.state.rowsPerPage}
              page={this.state.page}
              onChangePage={this.handleChangePage}
              onChangeRowsPerPage={this.handleChangeRowsPerPage}
            />
          </Paper>
      </div>
    </div>
  )}
}
