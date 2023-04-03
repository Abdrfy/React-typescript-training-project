import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export interface IHomeProps {}

const HomePage: React.FunctionComponent<IHomeProps> = (props) => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>This is the home page</h1>
            <Link to="/about">Go to the about page</Link>
            <br />
            <button onClick={() => navigate('/layout/5')}>Go to layout, with a numba</button>
        </div>
    );
};

export default HomePage;
