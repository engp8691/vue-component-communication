export const stringLengthByMixin = {
    computed: {
        lengthMixin() {
            return `${this.myName} (${this.myName.length})`;
        }
    }
};