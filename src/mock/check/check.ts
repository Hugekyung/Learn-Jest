export function check(
    predicate: Function,
    onSuccess: Function,
    onFail: Function
) {
    if (predicate()) {
        onSuccess("yes");
    } else {
        onFail("no");
    }
}
