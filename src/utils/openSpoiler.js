export const handleClick = (state, setState) => {
    if(state === true) {
        return setState(false)
    }
    return setState(true)
}
