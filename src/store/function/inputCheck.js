import alertState from "../modules/alert/index.js";

// DON'T DO THIS
// const alert = alertState() // register as an interface
const illegal = [ ".", "#", "$", "[", "]"]

function LoginInputCheck(inputObject) {
    const alert = alertState()
    if (Object.values(inputObject).some((value) => (value === "") || ([...value].some((w)=>illegal.includes(w))) )) {
        alert.showAlert = true;
        alert.alertTitle = "Empty Fields or illegal fields";
        return false;
    }
    return true;
}

function RegisterInputCheck(input) {
    const alert = alertState()
    if (!input) {
        alert.showAlert = true;
        alert.alertContent = "Please enter a Valid User Name.";
        alert.alertTitle = "EMPTY UserName";
        return false;
    }
    return true;
}

function SubmitInputCheck(inputObject) {
    const alert = alertState()
    if (
        Object.values(inputObject).some((value) => value === "") ||
        inputObject.link.split("://").at(-1).length === 0 ||
        !inputObject.link.includes("http")
    ) {
        // || inputObject.link.split('://')[-1].length !== 0) ['ok', ''][-1] === undefined
        console.log(inputObject.link.split("://").at(-1).length === 0);
        alert.showAlert = true;
        alert.alertTitle = "Data Check Failed";
        alert.alertContent = "Please check your input and try again";
        return false;
    }
    return true;
}

export {LoginInputCheck, SubmitInputCheck,RegisterInputCheck};

