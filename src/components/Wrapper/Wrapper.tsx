import {Counter} from "components/Counter";
import {observer} from "mobx-react-lite";
import React, {FC} from "react";
import CounterStore from "stores/reusable-counter-store";

const counterStore1 = new CounterStore();
const counterStore2 = new CounterStore();

const Wrapper: FC = observer(() => {
    return (
        <>
            <Counter {...counterStore1} total={counterStore1.total} />
            <Counter {...counterStore2} total={counterStore2.total} />
        </>
    );
});

export default Wrapper;
