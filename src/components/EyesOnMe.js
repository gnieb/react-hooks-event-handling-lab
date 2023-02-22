// Code EyesOnMe Component Here

function EyesOnMe () {
    return (
        <div>
            <button onBlur={handleBlur} onFocus={handleFocus}>Eyes on me</button>
        </div>
    )
}

function handleFocus () {
console.log("Good!")
}

function handleBlur () {
    console.log("Hey! Eyes on me!")
}

export default EyesOnMe