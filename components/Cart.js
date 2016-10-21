import React, { Component } from 'react'

class Cart extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className="cart">
        <div className="itemscontainer">
          <div className="item">
            <div className="itemoverview">
              <a className="itemlink"><img className="itemimage" src="images/Americano.png"/>
              </a>
              <div className="itemdetails">
                <a className="itemlink">
                  <div className="itemtitle">Americano</div>
                </a>
                <div className="row">
                  <div className="itemquantity">1</div>
                  <a className="itemlink" href="#"><img className="quantity" src="images/plus.png"/>
                  </a>
                  <a className="itemlink" href="#"><img className="quantity" src="images/minus.png"/>
                  </a>
                </div>
              </div>
            </div>
            <div className="itemform">
              <form className="itemform" dataName="Email Form 3" id="email-form-3" name="email-form-3">
                <select className="iteminput" dataName="Milk" id="Milk" name="Milk">
                  <option value="">Select milk...</option>
                  <option value="none">None</option>
                  <option value="whole milk">Whole milk</option>
                  <option value="trim milk">Trim milk</option>
                  <option value="soy milk">Soy milk</option>
                </select>
                <select className="iteminput" dataName="Sugar" id="Sugar" name="Sugar">
                  <option value="">Add sugar...</option>
                  <option value="none">None</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </form>
            </div>
          </div>
          <div className="item">
            <div className="itemoverview">
              <a className="itemlink"><img className="itemimage" sizes="60px" src="images/flat-white.jpg" srcset="images/flat-white-p-500x500.jpeg 500w, images/flat-white-p-800x800.jpeg 800w, images/flat-white-p-1080x1080.jpeg 1080w, images/flat-white-p-1600x1600.jpeg 1600w, images/flat-white.jpg 1708w"/>
              </a>
              <div className="itemdetails">
                <a className="itemlink">
                  <div className="itemtitle">Flat White</div>
                </a>
                <div className="row">
                  <div className="itemquantity">2</div>
                  <a className="itemlink"><img className="quantity" src="images/plus.png"/>
                  </a>
                  <a className="itemlink" href="#"><img className="quantity" src="images/minus.png"/>
                  </a>
                </div>
              </div>
            </div>
            <div className="itemform">
              <form className="itemform" dataName="Email Form 3" id="email-form-3" name="email-form-3">
                <select className="iteminput" dataName="Milk 2" id="Milk-2" name="Milk-2">
                  <option value="">Select milk...</option>
                  <option value="none">None</option>
                  <option value="whole milk">Whole milk</option>
                  <option value="trim milk">Trim milk</option>
                  <option value="soy milk">Soy milk</option>
                </select>
                <select className="iteminput" dataName="Sugar 2" id="Sugar-2" name="Sugar-2">
                  <option value="">Add sugar...</option>
                  <option value="none">None</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </form>
            </div>
          </div>
        </div>
        <div className="cartheader">
          <div>
            <form dataName="Email Form 4" id="email-form-4" name="email-form-4">
              <input className="itemdescription" dataName="Name" id="Name" maxlength="256" name="Name" placeholder="Your name" required="required" type="email"/>
              <input className="itemdescription" dataName="Phone" id="Phone" maxlength="256" name="Phone" placeholder="Phone number" required="required" type="email"/>
            </form>
          </div>
          <div className="button next">Next</div>
        </div>
      </div>
    )
  }
}

export default Cart
