console.log(React);
console.log(ReactDOM);

// const domContainer = document.querySelector('#root');

// ReactDOM.render('hello world',domContainer)
/* render: ƒ render(element, container, callback) */
/* react-dom.development.js:73 Warning: ReactDOM.render is no longer supported in React 18. */

/* const domContainer = document.querySelector('#root');
const myElement = React.createElement('div', null, "hello world")
createElement: ƒ createElementWithValidation(type, props, children) 
ReactDOM.render(myElement, domContainer) */

// another element 📢 add
/* const domContainer = document.querySelector('#root');
const myElement = React.createElement(
    'div', null,
    React.createElement("p", null, "hello bangladesh")
);
ReactDOM.render(myElement, domContainer) */

/* const domContainer = document.querySelector('#root');
const myElement = React.createElement(
    'div', null, [
        React.createElement("p", null, "hello bangladesh"),
        React.createElement("p", null, "hello europe")
    ]
    
);
ReactDOM.render(myElement, domContainer) */

/* const domContainer = document.querySelector('#root');
const myElement = (
    <div class="container">
        <h1 class="counter" id="display2">0</h1>
        <div class="increamen">
            <button class="button" id="button2">increament +</button>
        </div>
    </div>
);
ReactDOM.render(myElement, domContainer) */


/* const domContainer = document.querySelector('#root');
const increment = () => {
    return (
        <div class="container">
        <h1 class="counter" id="display2">0</h1>
        <div class="increamen">
            <button class="button" id="button2">increament +</button>
        </div>
     </div>
    )
}

ReactDOM.render(increment(), domContainer) */


/* const domContainer = document.querySelector('#root');
const Increment = () => {
    return (
        <div class="container">
        <h1 class="counter" id="display2">0</h1>
        <div class="increamen">
            <button class="button" id="button2">increament +</button>
        </div>
     </div>
    )
}

ReactDOM.render(<Increment />, domContainer)  */


/* const domContainer = document.querySelector('#root');
const Increment = () => {
    return (
        <div class="container">
        <h1 class="counter" id="display2">0</h1>
        <div class="increamen">
            <button class="button" id="button2">increament +</button>
        </div>
     </div>
    )
}

ReactDOM.render(<Increment />, domContainer);

const button2 = document.getElementById('button2');
const display2 = document.getElementById('display2')
let number2 = 0;

button2.addEventListener('click', function () {
    number2++;
    display2.textContent = number2;
}) */




/* 
const domContainer = document.querySelector('#root');
const Increment = () => {
    const reactState = React.useState(0);
    useState: ƒ useState(initialState)
    return (
        <div class="container">
        <h1 class="counter" id="display2">0</h1>
        <div class="increamen">
            <button class="button" id="button2">increament +</button>
        </div>
     </div>
    )
}

ReactDOM.render(<Increment />, domContainer); */




const domContainer = document.querySelector('#root');
const Increment = () => {
    const [counter,setCounter] = React.useState(0);
    return (
        <div className="container">
        <h1 className="counter" id="display2">{counter}</h1>
        <div className="increamen">
                <button className="button" id="button2"
                    onClick={() => setCounter(counter + 1)}>increament +</button>
        </div>
     </div>
    )
}

ReactDOM.render(
    <div className="container">
        <Increment />
        <Increment />
         <Increment />
    </div>, domContainer
);