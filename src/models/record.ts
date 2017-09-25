import Base from './base';

export default class Record<T extends Base> {
    public isNew: boolean = false; 
    public isDirty: boolean = false; 
    public isEditing: boolean = false; 
    public item: T;
}