import React from "react"
import ReactDOM from "react-dom"


console.log("ok!")

function  App() {
	return (
		<h1>titolo</h1>
	)
}

var rootNode = document.getElementById("app")
ReactDOM.render(<App/>,rootNode)