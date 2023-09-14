const App = () => {
    let [buttonText, setbuttonText] = React.useState('Click me please');
    const onButtonClick = ()=>{
        setbuttonText('Hello from React!!!');
    };
    return(
        <div class="app">
        
        <button onClick={onButtonClick}>{buttonText}</button>
        </div>
    )
}


const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(<App />);