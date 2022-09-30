//regex dict
const regExpDic = {
    email: /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/,
    username: /^[a-zA-Z]{2,18}$/,
    phone: /^[0-9\x2B]{6,18}$/,
    city: /^[a-zA-Z0-9_ ]{2,18}$/,
    address:/^[a-zA-Z0-9_ ]{2,25}$/,
    state:/^[a-zA-Z]{2,12}$/,
    zip:/^[0-9]{4,16}$/,
        }
;
/////
//validate func
function validate(el) {
    console.log(el);
    const regExpName = el.dataset.required;
    if (!regExpDic[regExpName]) return true;
    return regExpDic[regExpName].test(el.value);
}

///

//Error show
function showInputError(el) {
    const parent = el.parentElement;
    const msg = el.dataset.invalidMessage || 'Invalid input';
    return msg;

}

//Handlers
function onSubmit(inputs) {
    console.log(inputs);
    const isValidForm = inputs.every(el => {
        const isValidInput = validate(el);
        // if(isValidInput&&inputs[1].value===inputs[3].value){
        //     return isValidInput;
        // }
        // else
        if (!isValidInput) {
            alert(showInputError(el));
        }
        return isValidInput;
    });
    if (isValidForm) {
        return true;
    } else {
        return false;
    }
}

////
