import React, {Component} from 'react';

export default class UploadFileForm extends Component {
    constructor(props) {
        super(props);
        this.file = React.createRef();
        this.handleFiles = this.handleFiles.bind(this);
    }

    handleFiles(){
        var selectedFile = this.file.current.files[0];
        if(selectedFile === undefined){
          console.log("This file is undefined, returning.");
          return;
        }
        let reader = new FileReader();
        reader.readAsText(selectedFile);
        
        reader.onload = () =>{
          if(this.IsJsonString(reader.result)){
            this.getJSONscript(reader.result);
          }
          return;
        };
    
        reader.onerror = function() {
          console.log(reader.error);
          return;
        }
    }

    IsJsonString(str) {
        try {
            JSON.parse(str);
        } catch (e) {
            this.props.setStateAccessToActivate(false);
            this.props.setStateActivateB("lightgray");
            console.log("Format of file isn't JSON.");
            return false;
        }

        this.props.setStateAccessToActivate(true);
        return true;
      }
    
    getJSONscript(res){
        console.log(res);
        this.props.setStateCurrentJsonString(res);
        this.props.setStateActivateB("white");
    }

    render() {
        return (
            <div className="example-2">
                <div className="form-group">
                    <input type="file" name="file" id="file" className="input-file" onChange={this.handleFiles.bind(this)} ref={this.file}/>
                        <label htmlFor="file" className="btn btn-tertiary js-labelFile">
                            <i className="icon fa fa-check"></i>
                            <span className="js-fileName">&nbsp;Upload file</span>
                        </label>
                </div>
            </div>
        );
    }
}

/*<div key={item.id}>
                    <div className="scriptItem" >
                        <div>
                        <span>{item.id}</span>&nbsp;|&nbsp;<span>{item.API_method.toUpperCase()}</span>&nbsp;|&nbsp;<span style={{color: "orange"}}>{item.name}</span>&nbsp;&nbsp;&nbsp;
                        <i className="fa fa-trash-o urna" aria-hidden="true" data-id={item.id}onClick={this.deletePost.bind(this)}></i>
                        </div>
                    </div>
                </div>
*/