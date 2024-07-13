// import {action, computed, makeObservable, observable} from "mobx";

import {makeAutoObservable} from "mobx";

class CounterStore {
    count = 0;

    get total() {
        return this.count * 2;
    }

    constructor() {
        // Only if needed to assign everything by hand
        // makeObservable(this, {
        //     count: observable,
        //     increment: action,
        //     decrement: action,
        //     total: computed
        // });

        // The most common case
        makeAutoObservable(this);
    }

    increment = (value: number) => {
        this.count += value;
    };

    decrement = (value: number) => {
        this.count -= value;
    };
}

// export default new CounterStore();
export default CounterStore;
