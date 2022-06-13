import React, { Component } from "react";
import Chart from "react-apexcharts";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			options: {
				chart: {
					animations: {
						enabled: true,
						easing: 'easeinout',
						speed: 800,
						animateGradually: {
							enabled: true,
							delay: 350
						},
						dynamicAnimation: {
							enabled: true,
							speed: 1000
						}
					}
				}

			},
			series: [
				{
					name: "series-1",
					data: [30, 40, 45, 50, 49, 60, 70, 91, 40]
				}
			]
		};
	}

	render() {
		return (
			<div className="app">
				<div className="row">
					<div className="mixed-chart">
						<Chart
							options={this.state.options}
							series={this.state.series}
							type="line"
							width="500"
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;