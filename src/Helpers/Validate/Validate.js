export function createError (input,obj ) {
    let parent = input.current.parentNode;
    let errorLabel = document.createElement('div')

    errorLabel.textContent = obj
    errorLabel.style.color = "red"
    errorLabel.style.marginTop = "10px"
    parent.append(errorLabel)
}


export function removeError(input) {
    let parent = input.current.parentNode;
    let errorLabel = parent.querySelector('div');

    if(errorLabel) {
        errorLabel.remove()
    }
}