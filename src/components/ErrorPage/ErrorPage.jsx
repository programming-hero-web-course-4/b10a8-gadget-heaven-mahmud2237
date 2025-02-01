import { NavLink } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <h2 className='font-bold text-7xl'>404</h2>
            <p className='text-2xl'>Page not found</p>
            <button className='mt-5 btn btn-primary'><NavLink to='/'>Go back to Homepage</NavLink></button>
        </div>
    );
};

export default ErrorPage;