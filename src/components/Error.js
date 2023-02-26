import { useRouteError } from 'react-router-dom';

function Error(){
    const error = useRouteError();
    console.error(error);

    return (
        <div id="errorPage">
            <h1>Oops!</h1>
            <p>Sorry, an error has occurred</p>
        </div>
    );
}

export default Error;