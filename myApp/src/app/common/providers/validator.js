export function usernameValidator(control) {
    if (!control.value.match(/^[(\u4e00-\u9fa5)0-9a-zA-Z\_\s@]+$/)) {
        return { invalidUsername: true };
    }
}
//# sourceMappingURL=validator.js.map