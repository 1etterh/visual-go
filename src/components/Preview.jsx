import React from "react";

const Preview = ({ output }) => {
	return (
		<div className="h-[calc(100vh-140px)] bg-black text-white font-mono overflow-auto">
			<pre>{output || "Output will appear here..."}</pre>
		</div>
	);
};

export default Preview;
