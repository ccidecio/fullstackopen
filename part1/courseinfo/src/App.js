
const Header = (props) => {
    return (
        <h1>{props.course}</h1>
    )
}

const Content = (props) => {
    return (
		<>
			<Part part={props.parts[0].name} exercise={props.parts[0].exercise}/>
			<Part part={props.parts[1].name} exercise={props.parts[1].exercise}/>
			<Part part={props.parts[2].name} exercise={props.parts[2].exercise}/>
		</>
    )
}

const Part = (props) => {
	return (
		<p>
			{props.part} {props.exercise}
		</p>
	)
}

const Total = (props) => {
	return (
		<p>Number of exercises {props.total[0] + props.total[1] + props.total[2]}</p>
    )
}


const App = () => {
	const course = 'Half Stack application development'
	const part1 = 'Fundamentals of React'
	const exercises1 = 10
	const part2 = 'Using props to pass data'
	const exercises2 = 7
	const part3 = 'State of a component'
	const exercises3 = 14

	const part1_ = {
		name: part1,
		exercise: exercises1
	}
	const part2_ = {
		name: part2,
		exercise: exercises2
	}
	const part3_ = {
		name: part3,
		exercise: exercises3
	}

	const parts = [part1_, part2_, part3_]

	return (
		<div>
			<Header course={course}/>
			<Content parts={parts}/>
			<Total total={[exercises1, exercises2, exercises3]} />
		</div>
    )
}

export default App