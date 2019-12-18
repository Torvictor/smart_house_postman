import React, {Component} from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

export default class Helper extends Component {
    constructor(props) {
        super(props);
        this.state = {
          visibilityOfHelper: "none",
        }
    }

    mouseClickHelp = () => {
      this.setState({visibilityOfHelper: 'block'});
    };

    mouseClickHelpOut = () => {
      this.setState({visibilityOfHelper: 'none'});
    };

    render() {
      return (
        <div>
              <div style={{display: this.state.visibilityOfHelper}}className="helperListAPI">
                <div className="closeHelperListAPI" onClick={this.mouseClickHelpOut}><i className="fa fa-times-circle-o" aria-hidden="true"></i></div>
                <h1>{this.props.mainHeader}</h1>
                <hr />
                <Scrollbars style={{ height: 700 }}>
                <p>{this.props.preface}</p>
                <hr />
                {
                this.props.info.map((data, i) => (
                  <div key={i}>
                    <h2>{data.header}</h2>
                    <p><b>Метод:</b> {data.method}</p>
                    <p><b>Информация:</b> {data.text}</p>
                    <p><b>Дополнение:</b> {data.extra}</p>
                    <p><b>Пример JSON:</b> <br />{data.example}</p>
                    <hr />
                  </div>
                ))
                } 
                </Scrollbars>
              </div>      
            <div onClick={this.mouseClickHelp} className="helpAPI">?</div>&nbsp;&nbsp;API
          </div>
      );
    }
  }
