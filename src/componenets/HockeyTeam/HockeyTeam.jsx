import './HockeyTeam.css';

export default function Team(props) {
    return (
        <div className = "team">
            <h1>{props.name}</h1>
            <br />
            <h3>Health: {props.hitpoint}</h3>
            <br />
        </div>
    )
}