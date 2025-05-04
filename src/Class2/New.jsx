import ChildEl from './ChildEl';
import './New.css'
function New({ name, course , info }) {
    // console.log(props);

    let s={
        width:"600px",
        height:"400px",
        border:"2px solid white",
        padding:"20px",
        margin:"10px auto"
    }
    return (
        <>
            <div className="con" style={s}>
                <ChildEl d={name}/>
                {/* <h1>Student:{props.data}</h1> */}
                <h1>Student : {name}</h1>
                <h1>Course: {course}</h1>
                <p>Traits: {info}</p>
            </div>
        </>
    )
}

export default New;