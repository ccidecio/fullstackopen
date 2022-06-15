
const Header = (props) => {
    return (
        <h1>{props.course.name}</h1>
    )
}

const Content = (props) => {
    return (
		<>
			<Part part={props.course.parts[0]} exercise={props.course.parts[0]}/>
			<Part part={props.course.parts[1]} exercise={props.course.parts[1]}/>
			<Part part={props.course.parts[2]} exercise={props.course.parts[2]}/>
		</>
    )
}

const Part = (props) => {
	return (
		<p>
			{props.part.name} {props.part.exercise}
		</p>
	)
}

const Total = (props) => {
	return (
		<p>Number of exercises {props.course.parts[0].exercise + props.course.parts[1].exercise + props.course.parts[2].exercise}</p>
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


	const course2 = {
		name: 'Half Stack application development',
		parts: [
			{
				name: 'Fundamentals of React',
				exercise: 10
			},
			{
				name: 'Using props to pass data',
				exercise: 7
			},
			{
				name: 'State of a component',
				exercise: 14
			}
		]
	}

	return (
		<div>
			<Header course={course2}/>
			<Content course={course2}/>
			<Total course={course2} />
		</div>
    )
}

export default App