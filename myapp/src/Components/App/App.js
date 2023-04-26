import "./App.css";
import ResourceListDisplay from "../ResourceList/ResourceList";
import { resource } from "../Resource/Resource";
import React from "react";
import Box from "@mui/material/Box";

function App() {
	return (
		<Box>
			<ResourceListDisplay resource={resource} />
		</Box>
	);
}

export default App;
