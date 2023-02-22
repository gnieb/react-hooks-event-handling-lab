// Code Keypad Component Here

function Keypad (){
    return (
        <div>
            <input type = "password" onChange={handleClick} />
        </div>
    )
}

function handleClick () {
    console.log("Entering password...")
}

export default Keypad;