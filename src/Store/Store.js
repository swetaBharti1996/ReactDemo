import './Store.css';
// import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import 'tachyons';




class Store extends React.Component {
    render() {
      return(
<div>
    <div className="row">
        <div className="col-sm-1"></div>
        <div className=" col-sm-3">
            <div className="card">
            <img class="card-img-top" src="https://cdn.pixabay.com/photo/2016/03/02/20/13/shopping-1232944_960_720.jpg" alt="Card image cap" />

                   <p className="ml-3"><b className="books mt-5">{this.props.name}</b> <h6>{this.props.place} </h6>Address
                    <h6 className="contact mb-0">Contact now ></h6>
                    </p>
            </div>
            
        
    </div>
    <div className=" col-sm-3 ml-5">
            <div className="card">
            <img class="card-img-top" src="https://cdn.pixabay.com/photo/2016/03/02/20/13/shopping-1232944_960_720.jpg" alt="Card image cap" />

                   <p className="ml-3"><b className="books mt-5">SKC Jewellery</b> <h6>KR Puram </h6>Address
                    <h6 className="contact mb-0">Contact now ></h6>
                    </p>
            </div>
            
        
    </div>
    <div className=" col-sm-3 ml-5">
            <div className="card">
            <img class="card-img-top" src="https://cdn.pixabay.com/photo/2016/03/02/20/13/shopping-1232944_960_720.jpg" alt="Card image cap" />

                   <p className="ml-3"><b className="books mt-5">{this.props.name}</b> <h6>{this.props.place} </h6>Address
                    <h6 className="contact mb-0">Contact now ></h6>
                    </p>
            </div>
            
        
    </div>
    </div>
</div>
    );
}
}

export default Store;