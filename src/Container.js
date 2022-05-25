import './Container.css'
const Container = (props) => {
    return (
        <div id="container">
            {
                props.squares.map((value, index) => {
                    return(
                         <div onClick={props.oneInSquare} key={index} style={{backgroundColor: value}}
                         className="square hovering"></div>
                    )
                })
            }
       </div>

        )
}


export default Container;