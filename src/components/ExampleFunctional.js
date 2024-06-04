import React, { useEffect, useState } from 'react'

export default function ExampleFunctional() {
    // const initialValues = () => {
    //     let total = 0
    //     for (let i = 0; i < 1000000; i++) {
    //         total += i;
    //     }
    //     console.log('initialValues');
    //     return total;
    // }

    const [count, setCount] = useState(0);  // tham so: 0 - gia tri khoi tao
    // -> return array [1. count, 2. setCount - method dung de cap nhat lai gia tri cho count]
    // const [count, setCount] = useState(() => {
    //     return initialValues();
    // });

    // const [user, setUser] = useState({
    //     name: 'Test',
    //     age: 12
    // });

    // const handleClick = () => {
    //     setCount((prevState) => {
    //         return prevState + 1;
    //     });
        
    //     setCount((prevState) => {
    //         return prevState + 1;
    //     });

    //     setUser({ name: 'updated' });
    // };

    const [action, setAction] = useState('');
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        setScrollPosition(window.scrollY);
    }

    useEffect(() => {
        // componentDidMount & componentDidUpdate
        document.title = `You clicked ${count} times`;
        console.log('useEffect');

        return () => {
            // clean-up function
            console.log('useEffect - count - cleanup');
        };

    }, [count]);

    useEffect(() => {
        fetch(`https://reqres.in/api/${action}`)
            .then((res) => console.log({ res }))
            .catch((err) => console.log(err));
    }, [action]);

    useEffect(() => {
        // componentDidMount
        document.addEventListener('scroll', handleScroll);

        return () => {
            // componentWillUnmount
            document.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div style={{ height: '3000px' }}>
            <pre>Fucntional Component</pre>
            <p>You clicked {count} times</p>
            {/* <button onClick={handleClick}>Click me</button> */}
            <button onClick={ () => setCount(count + 1) }>Click me</button>
            {/* <p>{JSON.stringify(user)}</p> */}

            <button onClick={ () => setAction('user') }>Get Users</button>
            <button onClick={ () => setAction('comments') }>Get comments</button>

            <p style={{ position: 'fixed', bottom: '20px', left: '20px' }}>{scrollPosition}</p>
        </div>
    );
}
