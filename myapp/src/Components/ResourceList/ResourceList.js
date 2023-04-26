//PLAN
//we need a function that returns all the items in the array
//  function maps through the array and gets the resource[0].title
//we want to display the image with the alt attribute and the title
//we want the image to be a link that goes to the page url

//use material UI to get a grid layout for display (later)

import "../Resource/Resource.js";

function ResourceListDisplay({ resource }) {
	return (
		<div className="resource-list">
			{resource.map((item) => ( 
				<a href={item.link}>
				<div className="resource" key={item.key}>
					<img src={item.imgSrc} alt={item.imgAlt} />
					<h2 className="resource-title">{item.title}</h2>
				</div>
				</a>
			))}
		</div>
	);
}

export default ResourceListDisplay;
