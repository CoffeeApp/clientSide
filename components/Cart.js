import React, { Component } from 'react'

class Cart extends Component {

  constructor (props) {
    super(props)
    }
  }

  render () {
    return (
      <div class="cart">
        <div class="itemscontainer">
          <div class="item">
            <div class="itemoverview w-clearfix">
              <a class="itemlink w-clearfix w-inline-block" href="#"><img class="itemimage" src="images/Americano.png">
              </a>
              <div class="itemdetails w-clearfix">
                <a class="itemlink w-inline-block" href="#">
                  <div class="itemtitle">Americano</div>
                </a>
                <div class="row w-clearfix">
                  <div class="itemquantity">1</div>
                  <a class="itemlink w-inline-block" href="#"><img class="quantity" src="images/plus.png">
                  </a>
                  <a class="itemlink w-inline-block" href="#"><img class="quantity" src="images/minus.png">
                  </a>
                </div>
              </div>
            </div>
            <div class="itemform w-form">
              <form class="itemform w-clearfix" data-name="Email Form 3" id="email-form-3" name="email-form-3">
                <select class="iteminput w-select" data-name="Milk" id="Milk" name="Milk">
                  <option value="">Select milk...</option>
                  <option value="none">None</option>
                  <option value="whole milk">Whole milk</option>
                  <option value="trim milk">Trim milk</option>
                  <option value="soy milk">Soy milk</option>
                </select>
                <select class="iteminput w-select" data-name="Sugar" id="Sugar" name="Sugar">
                  <option value="">Add sugar...</option>
                  <option value="none">None</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </form>
              <div class="w-form-done">
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div class="w-form-fail">
                <div>Oops! Something went wrong while submitting the form</div>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="itemoverview w-clearfix">
              <a class="itemlink w-clearfix w-inline-block" href="#"><img class="itemimage" sizes="60px" src="images/flat-white.jpg" srcset="images/flat-white-p-500x500.jpeg 500w, images/flat-white-p-800x800.jpeg 800w, images/flat-white-p-1080x1080.jpeg 1080w, images/flat-white-p-1600x1600.jpeg 1600w, images/flat-white.jpg 1708w">
              </a>
              <div class="itemdetails w-clearfix">
                <a class="itemlink w-inline-block" href="#">
                  <div class="itemtitle">Flat White</div>
                </a>
                <div class="row w-clearfix">
                  <div class="itemquantity">2</div>
                  <a class="itemlink w-inline-block" href="#"><img class="quantity" src="images/plus.png">
                  </a>
                  <a class="itemlink w-inline-block" href="#"><img class="quantity" src="images/minus.png">
                  </a>
                </div>
              </div>
            </div>
            <div class="itemform w-form">
              <form class="itemform w-clearfix" data-name="Email Form 3" id="email-form-3" name="email-form-3">
                <select class="iteminput w-select" data-name="Milk 2" id="Milk-2" name="Milk-2">
                  <option value="">Select milk...</option>
                  <option value="none">None</option>
                  <option value="whole milk">Whole milk</option>
                  <option value="trim milk">Trim milk</option>
                  <option value="soy milk">Soy milk</option>
                </select>
                <select class="iteminput w-select" data-name="Sugar 2" id="Sugar-2" name="Sugar-2">
                  <option value="">Add sugar...</option>
                  <option value="none">None</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </form>
              <div class="w-form-done">
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div class="w-form-fail">
                <div>Oops! Something went wrong while submitting the form</div>
              </div>
            </div>
          </div>
        </div>
        <div class="cartheader">
          <div class="w-form">
            <form data-name="Email Form 4" id="email-form-4" name="email-form-4">
              <input class="itemdescription w-input" data-name="Name" id="Name" maxlength="256" name="Name" placeholder="Your name" required="required" type="email">
              <input class="itemdescription w-input" data-name="Phone" id="Phone" maxlength="256" name="Phone" placeholder="Phone number" required="required" type="email">
            </form>
            <div class="w-form-done">
              <div>Thank you! Your submission has been received!</div>
            </div>
            <div class="w-form-fail">
              <div>Oops! Something went wrong while submitting the form</div>
            </div>
          </div>
          <div class="button next">Next</div>
        </div>
      </div>
    )
  }
}

export default Cart
