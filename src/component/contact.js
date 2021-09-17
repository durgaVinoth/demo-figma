import React from'react';

const Contact =()=>{
    return<div className="contact">
        <div className="row">
				<div className="col-sm-3"></div>
				
				<div className="col-sm-6 p-3 mt-5">
					<h1 className="text-center">Contact Us</h1>
					
					
					<div class="row form-group mt-4">
						<div className="col-sm-3 "><label>Name</label></div>
						<div className="col-sm-9 "><input type="text" className="form-control"/></div>
					</div>
					
					<div class="row form-group mt-4">
						<div className="col-sm-3"><label>Mobile No</label></div>
						<div className="col-sm-9"><input type="number" className="form-control"/></div>
					</div>
					
					<div class="row form-group mt-4">
						<div className="col-sm-3"><label>Email</label></div>
						<div className="col-sm-9"><input type="email" className="form-control"/></div>
					</div>
					
					
					
					<div className="row form-group mt-4">
						<div className="col-sm-3"><label>Message</label></div>
						<div className="col-sm-9"><textarea className="form-control"></textarea></div>
					</div>
					
					<div className=" form-group text-center mt-4">
						<button className="btn btn-info m-2">Submit</button>
						
					</div>
				</div>
				<div className="col-sm-3">
                   
                </div>
				
			</div>
    </div>
}
export default Contact;