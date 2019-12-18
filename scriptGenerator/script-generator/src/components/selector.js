import React, {Component} from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import Helper from '../components/helper';

import preface from '../data/prefaceInfoAPIData';
import infoAPI from '../data/infoAPIData';

export default class SelectComponent extends Component {
  constructor(props) {
        super(props);
        this.state = {
          currentSelectedValue: ""
        };

        this.API_URL ='http://83.217.12.41:5000/api/demo/';
        this.preface = preface;
        this.infoAPI = infoAPI;
        this.options = props.optionsData;
  }
  
    setAPIValues(postName, API_url, API_name, API_method){
    this.props.setPostParamsStates(postName, API_url + API_name, API_name, API_method);
    console.log("Current selected API is: " + API_url + API_name + ' ' 
      + API_method + ' ' + postName);
  }
    
  handleChange = event => {
    this.setState({currentSelectedValue: event.target.value});
    var label = "";
    this.options.forEach((elem, index) => {
      if(elem.value == event.target.value){
        label = elem.label
      }
    });
  
    switch (label) {
      case this.options[0].label://None
        this.setAPIValues('None', 'None', 'None', 'None');
        break;
      case this.options[1].label://PUT endpoints
        this.setAPIValues('Endpoints', this.API_URL, "endpoints", 'put');
        break;
      case this.options[2].label://PUT devices
        this.setAPIValues('Devices', this.API_URL, "devices", 'put');
        break;
      case this.options[3].label://PUT rooms
        this.setAPIValues('Rooms', this.API_URL, "rooms", 'put');
        break;
      default://None
        this.setAPIValues('None', 'None', 'None', 'None');
        console.log("Set default value 'None' in selector.");
    }
  };

  render() {
    return (
    <div className="selectContainer">
      <FormControl>
        <InputLabel shrink id="demo-simple-select-placeholder-label-label">
          <Helper mainHeader="API Documentation" preface={this.preface} info={this.infoAPI}/>
        </InputLabel>
        <Select
          labelId="demo-simple-select-placeholder-label-label"
          id="demo-simple-select-placeholder-label"
          value={this.state.currentSelectedValue}
          onChange={this.handleChange}
          displayEmpty
          className="select"
        >
        {
            this.options.map((obj, i) => (
                <MenuItem key={i} value={obj.value}>{obj.label}</MenuItem>
            ))
        }  
        </Select>
      </FormControl>
    </div>
  );
 }
}