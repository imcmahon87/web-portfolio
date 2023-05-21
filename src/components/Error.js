import { useRouteError } from 'react-router-dom';

function Error(){
    const error = useRouteError();
    console.error(error);

    return (
        <div id="errorPage">
            <h1>Oh, no!</h1>
            <p style={{textAlign: 'center'}}>Sorry, an error has occurred. Please go back to <a href="https://iandeveloper.com">iandeveloper.com</a> to try again.</p>
        </div>
    );
}

export default Error;