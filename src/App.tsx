import React from "react";
import "./App.scss";
import {Counter, Wrapper} from "components";
import counterStore from "stores/counter-store";
import {observer} from "mobx-react-lite";

const App = observer(() => {
    const {count, decrement, increment, total} = counterStore;
    return (
        <div className="app">
            <Counter count={count} decrement={decrement} increment={increment} total={total} />
            <Wrapper />
        </div>
    );
});

export default App;
