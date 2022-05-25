import './Options.css'


const Options = (props) => {
    return (
        <div id="options">
            <span onClick={props.reset} className="hovering" id="ressetButton"> New Colors </span>
            <span>{  props.verify}</span>
            <span onClick={props.easy} className="hovering"  id="easy">Easy</span>
            <span onClick={props.hard} className="hovering selected"  id="hard">Hard</span>
        </div>
        )
   }

   export default Options;