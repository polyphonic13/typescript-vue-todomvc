import Record from '../../models/record';
import Label from '../../models/label';

const LabelStore = {
    state: {
        records: new Array<Record<Label>>(),
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
