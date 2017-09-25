import Record from '../../models/record';
import Todo from '../../models/todo';

const TodoStore = {
    state: {
        records: new Array<Record<Todo>>(),
    },
    mutations: {
        updateRecords(state, payload) {
            state.records = payload;
        },
    },
    actions: {
        saveRecords(context) {
            return new Promise((resolve) => {
                // axios
                resolve();
            })
        },
    },
    getters: {
        getRecords: state => state.records
    },
}

