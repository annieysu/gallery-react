require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

// get image data
let imageData = require('../data/imageData.json');

// self execute function to generate image url
let imageUrl = (function (imageDataArr) {
	for (var i=0, j=imageDataArr.length; i<j; i++) {
		var singleImage = imageDataArr[i];
		singleImage.imageUrl = require('../images/' + singleImage.fileName);
		imageDataArr[i] = singleImage;
	}

	return imageDataArr;
})(imageData);

class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
          <section className="img-sec">
          </section>
          <nav className="controller-nav">
          </nav>
       </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
