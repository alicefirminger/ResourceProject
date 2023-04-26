//PLAN
//we need a function that returns all the items in the array
//  function maps through the array and gets the resource[0].title
//we want to display the image with the alt attribute and the title
//we want the image to be a link that goes to the page url

//use material UI to get a grid layout for display (later)

import "../Resource/Resource.js";

function ResourceListDisplay({ title }) {
	return (
		<div>
			<h1>{title}</h1>
		</div>
	);
}

export default ResourceListDisplay;
