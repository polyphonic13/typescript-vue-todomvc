interface RequestCallback {
    (response: any): void;
}

export default class RequestParams {
    constructor(
        public url: string,
        public data: any,
        public done: RequestCallback
    ) {}
}