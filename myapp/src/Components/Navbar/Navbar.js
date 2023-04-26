import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";

function Navbar() {
	return (
		<AppBar position="sticky">
			<Toolbar
				sx={{
					backgroundColor: "#FCF7F1",
					boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
				}}
			>
				<Typography
					variant="h1"
					component="div"
					sx={{ flexGrow: 1, fontSize: "1rem", color: "#5C5C5C" }}
				>
					Bootcamper's Treasure Chest
				</Typography>

				<Link href="https://www.facebook.com/schoolofcode">
					<IconButton sx={{ mr: 1 }}>
						<FacebookRoundedIcon />
					</IconButton>
				</Link>

				<Link href="https://www.linkedin.com/school/school-of-code/">
					<IconButton sx={{ mr: 1 }}>
						<LinkedInIcon />
					</IconButton>
				</Link>

				<Link href="https://github.com">
					<IconButton sx={{ mr: 1 }}>
						<GitHubIcon />
					</IconButton>
				</Link>
			</Toolbar>
		</AppBar>
	);
}

export default Navbar;
