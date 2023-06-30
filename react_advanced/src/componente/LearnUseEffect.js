import React from "react";

function LearnUseEffect() {
    const [toggle, setToggle] = React.useState(false);

    const clickHandler = () => {
        setToggle(!toggle);
    }

    React.useEffect(() => {
        document.title = toggle ? "Welcome to Little Lemon" : "Using the useEffect hook"
    }, [toggle]);

    return (
        <div>
            <h1>Using the useEffect hook</h1>
            <button onClick={clickHandler}>
                Toggle message
            </button>
            {toggle && <h2>Welcome to my little Lemon</h2>}
        </div>
    );
}

export default LearnUseEffect;