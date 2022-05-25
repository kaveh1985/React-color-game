import './App.css'
import React from 'react'
import AppHeader from './AppHeader'
import Options from './Options'
import Container from './Container'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.oneInSquare = this.oneInSquare.bind(this)
    this.easyButton = this.easyButton.bind(this)
    this.hardButton = this.hardButton.bind(this)
    this.resetButton = this.resetButton.bind(this)

    this.state = {
      selectedColor: '',
      matchedColor: false,
      squares: [],
      counter: 6,
      tryAgain: '',
    }
  }

  randomColor() {
    var r = Math.floor(Math.random() * 256)
    var g = Math.floor(Math.random() * 256)
    var b = Math.floor(Math.random() * 256)

    return 'rgb(' + r + ', ' + g + ', ' + b + ')'
  }

  generateRandomColor(num) {
    let arr = []

    for (var i = 0; i < num; i++) {
      arr.push(this.randomColor())
    }
    this.setState((prevState) => {
  
      return {
        squares: prevState.squares.concat(arr),
        selectedColor: arr[Math.floor(Math.random() * arr.length)]
      }
    })
  }


  pickedColor() {
    let colors = this.state.squares
    var randomInArray = Math.floor(Math.random() * colors.length)

    return colors[randomInArray]
  }

  componentDidMount() {
    console.log('componentDidMount!')
    let counter = this.state.counter
    this.generateRandomColor(counter)
  }


oneInSquare(e) {
    let color = e.target.style.backgroundColor
    let equalColor = this.state.selectedColor

      if(color !== equalColor) {
        const newArr = this.state.squares.map((element) => {
          return element === color? "rgb(255, 255, 255)" : element
        });
          this.setState(() => {
            return{
              squares: newArr
            }
          })
      
      } if (color === equalColor) {
        let result = this.state.squares.map((val) => {
          return color
        })
        this.setState((prevState) => ({
          matchedColor: true,
          squares: result,
        }))
      }
  }


  hardButton() {
    this.setState(() => {
      return {
        matchedColor: false,
        squares: [],
      }
    })
    this.generateRandomColor(6)
  }

  easyButton() {
    this.setState(() => {
      return {
        matchedColor: false,
        squares: [],
      }
    })

    this.generateRandomColor(3)
  }

  resetButton() {
    this.setState(() => {
      return {
        matchedColor: false,
        squares: [],
      }
    })
    if (this.state.squares.length > 3) {
      this.generateRandomColor(6)
    } else {
      this.generateRandomColor(3)
    }
  }


  render() {
    
    let color = "";

    if(this.state.matchedColor) {
      color = this.state.selectedColor;
    }
    
    
    return (
      <div style={{backgroundColor: `${color}`}}>
        <AppHeader header={this.state.selectedColor} />
        <Options
          verify={this.state.tryAgain}
          hard={this.hardButton}
          easy={this.easyButton}
          reset={this.resetButton}
        />
        <Container 
          oneInSquare={this.oneInSquare}
          squares={this.state.squares}
        />
      </div>
    )
  }
}

export default App