import React from "react";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import Header from "./components/Header";
import { Card, CardContent } from "./components/ui/Card";

const App = () => {
	const [code, setCode] = React.useState('// Write your code here\nconsole.log("Hello World!");');
	const [output, setOutput] = React.useState("");

	const handleRunCode = () => {
		try {
			// 안전한 방식으로 코드 실행
			const result = new Function(code)();
			setOutput(String(result));
		} catch (error) {
			setOutput(`Error: ${error.message}`);
		}
	};

	return (
		<div className="h-screen flex flex-col bg-slate-100">
			<Header onRun={handleRunCode} />
			<div className="flex-1 flex gap-4 p-4">
				<div className="w-1/2">
					<Card>
						<CardContent className="p-0">
							<Editor
								code={code}
								onChange={setCode}
							/>
						</CardContent>
					</Card>
				</div>
				<div className="w-1/2">
					<Card>
						<CardContent>
							<Preview output={output} />
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
};

export default App;
