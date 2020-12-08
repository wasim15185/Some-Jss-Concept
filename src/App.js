import logo from "./logo.svg";
import "./App.css";
import { withStyles } from "@material-ui/styles";
const styles = {
	//basically is 'main' is css Class
	main: {
		backgroundColor: "purple",
		"& h1": {
			color: "pink",
			backgroundColor: "blue",
		},
	},
};

function App(props) {
	console.log(props);
	const { classes } = props;
	return (
		<div className="App">
			<div className={classes.main}>
				<h1>Hello</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
					voluptatem labore magnam consequatur itaque officiis, perspiciatis
					nihil odit possimus saepe!
				</p>
			</div>
		</div>
	);
}

//1. first of All do this 'withStyles(styles)(App)'
export default withStyles(styles)(App);
