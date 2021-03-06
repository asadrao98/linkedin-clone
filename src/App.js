import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Header from "./components/Header";
import { useEffect } from "react";
import { getUserAuth } from "./actions";
import { connect } from "react-redux";

function App(props) {
	useEffect(() => {
		props.getUserAuth();
	}, []);

	return (
		<div>
			<Router>
				{/* <Switch> */}
					<Route exact path="/">
						<Login />
					</Route>
					<Route path="/home">
						<Header />
						<Home />
					</Route>
				{/* </Switch> */}
			</Router>
		</div>
	);
}

const mapStateTopProps = (state) => {
	return {};
};

const mapDispatchToProps = (dispatch) => ({
	getUserAuth: () => dispatch(getUserAuth()),
});

export default connect(mapStateTopProps, mapDispatchToProps)(App);
