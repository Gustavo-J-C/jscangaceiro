class DataInvalidaException extends ApplicationException {
    constructor() {
        super('A data deve estra no formato dd/mm/aaaa');
    }
}