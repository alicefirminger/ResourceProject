import "./App.css";
import ResourceListDisplay from "../ResourceList/ResourceList";
import { resource } from "../Resource/Resource";
import React from "react";

function App() {
	return (
	<box >
		<ResourceListDisplay resource={resource} />
	</box>
	);
}

export default App;
