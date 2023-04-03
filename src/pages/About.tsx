import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export interface IAboutProps {}

const AboutPage: React.FunctionComponent<IAboutProps> = (props) => {
    const [msg, setMsg] = useState('');
    const { number } = useParams();

    useEffect(() => {
        if (number) {
            setMsg('Number is ' + number);
        } else {
            setMsg('No Numba provided');
        }
    }, []);

    return (
        <div>
            <h1>This is the about page</h1>
            <p>{msg}</p>
        </div>
    );
};

export default AboutPage;
