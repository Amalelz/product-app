import React from 'react'
import NavBar from './NavBar'

const AddProduct = () => {
  return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="row">
                <div className="column col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-2">
                        <div className="column col-12 col-sm-6 col-md-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Product Name</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="column col-12 col-sm-6 col-md-6 col-xl-6 col-xxl-6">
                             <label htmlFor="" className="form-label">Description</label>
                            <textarea name="" id="" className="form-control"></textarea>
                        </div>
                        <div className="column col-12 col-sm-6 col-md-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Warrenty</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="column col-12 col-sm-6 col-md-6 col-xl-6 col-xxl-6">
                             <label htmlFor="" className="form-label">Expiry date</label>
                             <input type="date" name="" id="" className="form-control" />
                        </div>
                        <div className="column col-12 col-sm-6 col-md-6 col-xl-6 col-xxl-6">
                              <label htmlFor="" className="form-label">Manufactoring date</label>
                             <input type="date" name="" id="" className="form-control" />
                        </div>
                        <div className="column col-12 col-sm-6 col-md-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Price</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="column col-12 col-sm-6 col-md-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Product Photo</label>
                            <input type="file" name="" id="" className="form-control" />
                        </div>
                        <div className="column col-12 col-sm-6 col-md-6 col-xl-6 col-xxl-6">
                              <label htmlFor="" className="form-label">Customer Care</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="column col-12 col-sm-6 col-md-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddProduct