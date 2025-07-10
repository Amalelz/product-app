import React from 'react'

const Delete = () => {
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="column col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-2">
                        <div className="column col-12 col-sm-6 col-md-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Enter name to delete</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="column col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success">Delete</button>
                           
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Delete