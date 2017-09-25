import Base from './base';
import Label from './label';

export default class Todo extends Base {
    constructor(
        public id?: string,
        public isActive?: boolean,
        public createdAt?: Date,
        public name?: string,
        public description?: string,
        public labels?: Label[],
        public isCompleted?: boolean,
        
    ) { 
        super(id, isActive, createdAt);
    }
}
