import './Offlinetext.css';
// import ReactDOM from 'react-dom';
import React, { Component } from 'react';




class Offlinetext extends Component {
    render() {
      return(
<div>
    <div className="row">
        <div className="col-sm-1"></div>
        <div className=" col-sm-11">
        <p>Showing offline result in <b>Bengalore</b>
        <p className="locations">change my locations</p></p>
        <p className="home">Home> <b>Off-line partners</b></p>
        <h4 className="offline"><b>Off-line partners</b></h4>
        <h6 className="feature">Featured</h6>
    </div>
    </div>
</div>
    );
}
}

export default Offlinetext;