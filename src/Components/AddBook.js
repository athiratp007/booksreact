import React from 'react'
import Nave from './Nave'

const AddBook = () => {
  return (
    <div>
        <Nave/>
    <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

            <label for="" className="form-label">Book Title</label><br/>
            <input type="text" className="form-control"/>
        </div>
        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label for="" className="form-label">Author</label>
            <input type="text" className="form-control"/>

        </div>
        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label for="" className="form-label">Price</label>
            <input type="text" className="form-control"/>
        </div>
        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <button className="btn-success">SUBMIT</button>
           </div>
           </div> 
        </div>
    </div>
</div>
</div>
    
  )
}

export default AddBook