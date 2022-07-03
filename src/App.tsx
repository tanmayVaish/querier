import Box from "@mui/material/Box";
import "./App.css";
import Tabs from "./hoc/Tabs";
import Main from "./components/Main";

function App() {
	return (
		<Box>
			<Tabs>
				<Main />
			</Tabs>
		</Box>
	);
}

export default App;
