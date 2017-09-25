import Base from './base';

export default class Label extends Base {
    constructor(
        public id?: string,
        public isActive?: boolean,
        public createdAt?: Date,
        public name?: string,
    ) { 
        super(id, isActive, createdAt);
    }
}
