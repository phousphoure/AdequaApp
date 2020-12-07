import React, {Component, Fragment} from 'react'
import ReactDOM from 'react-dom'
import Register from './Register'


{/*React App*/}
function App() {
    return (

        <Fragment>

            {/*Background style*/}
          <div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">

              {/*Form to register*/}
              <Register/>
          </div>

        </Fragment>

    );
}

{/*Default export*/}
export default App;

{/*Run the react app where a div with app ID is set*/}
if (document.getElementById('app'))
    {
        ReactDOM.render(<App/>, document.getElementById('app'));
    }



