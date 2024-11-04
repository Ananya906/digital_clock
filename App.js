
// import React from 'react';
// import ReactDOM from 'react-dom';

// function App(){
//   return <h1> Hello,React!</h1>;
// }
// ReactDOM.render(<App />,document.getElementById('root'));
// export default App





//import necessary React components
// import React from 'react';
// import ClickerCounter from './ClickerCounter';
// import ClickerCounter1 from './ClickerCounter1';
// //functional component for the main App
// const App=() =>  {
//   //render the ClickerCounter component
//   return (
//     <div>
//       <ClickerCounter />
//       <ClickerCounter1 />
//     </div>
//   );
// };

// //export the App component for use in other parts of the application
// export default App;





import React from 'react';
import DigitalClock from './digital';

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Digital Clock</h1>
      <DigitalClock />
    </div>
  );
}

export default App;
 

