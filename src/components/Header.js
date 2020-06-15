import React from "react";

export default () => {
	return (
		<div style={styles.header} className="jumbotron-dark jumbotron-fluid ">
			<div className="container">
				<h1 className="display-4">Employee Directory</h1>
			</div>
		</div>
	);
};

const styles = {
	header: {
		marginBottom: 0,
		color: "white",
		display: "flex",
		backgroundColor: "black",
		textAlign: "center",
	},
};
