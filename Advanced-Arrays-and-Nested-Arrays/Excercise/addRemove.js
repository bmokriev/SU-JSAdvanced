function addRemove(arr) {
    let result = [];

    for (let i = 1; i <= arr.length; i++) {
        if (arr[i - 1] == 'add') {
            result.push(i)
        } else {
            result.pop()
        }
    }
    if (result.length > 0) {
        console.log(result.join('\n'));
    } else (
        console.log("Empty")
    )

}
addRemove(['add',
    'add',
    'add',
    'add']
)
addRemove(['add',
    'add',
    'remove',
    'add',
    'add']
)
addRemove(['remove',
    'remove',
    'remove']
)