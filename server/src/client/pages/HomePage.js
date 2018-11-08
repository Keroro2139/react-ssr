import React from 'react';

const Home = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 'calc(100vh - 80px)'
        }}>
            <h3>Welcome to React SSR</h3>
        </div>
    );
};

export default {
    component: Home
}
