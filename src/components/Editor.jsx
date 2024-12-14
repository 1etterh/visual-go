import React from "react";
import MonacoEditor from "@monaco-editor/react";

const Editor = ({ code, onChange }) => {
	return (
		<MonacoEditor
			height="calc(100vh - 140px)"
			defaultLanguage="javascript"
			theme="vs-dark"
			value={code}
			onChange={onChange}
			options={{
				minimap: { enabled: false },
				fontSize: 14,
				wordWrap: "on",
				automaticLayout: true,
				tabSize: 2,
				scrollBeyondLastLine: false,
			}}
		/>
	);
};

export default Editor;
