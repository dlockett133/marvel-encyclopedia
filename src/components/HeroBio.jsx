import React from 'react'

function HeroBio() {
  return (
    <div className="row mb-4">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-3 text-center">
              <img
                alt="Bootstrap Image Preview"
                src="https://www.layoutit.com/img/sports-q-c-140-140-3.jpg"
                className="img-thumbnail"
              />
            </div>
            <div className="col-md-9">
              <p>
                Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Aliquam eget
                sapien sapien. Curabitur in metus urna. In hac habitasse platea
                dictumst. Phasellus eu sem sapien, sed vestibulum velit. Nam
                purus nibh, lacinia non faucibus et, pharetra in dolor. Sed
                iaculis posuere diam ut cursus.
                <em
                  >Morbi commodo sodales nisi id sodales. Proin consectetur,
                  nisi id commodo imperdiet, metus nunc consequat lectus, id
                  bibendum diam velit et dui.</em
                >
                    Proin massa magna, vulputate nec bibendum nec, posuere nec
                    lacus.
                <small>
                    Aliquam mi erat, aliquam vel luctus eu, pharetra quis elit.
                    Nulla euismod ultrices massa, et feugiat ipsum consequateu.
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default HeroBio