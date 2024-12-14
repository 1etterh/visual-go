import React from "react";
import { Button } from "./ui/Button";
import { Play } from "lucide-react";

const Header = ({ onRun }) => {
	return (
		<header className="bg-white border-b p-4 flex items-center justify-between">
			<h1 className="text-xl font-bold">Code Sandbox</h1>
			<Button
				onClick={onRun}
				className="flex items-center gap-2">
				<Play size={16} />
				Run Code
			</Button>
		</header>
	);
};

export default Header;
