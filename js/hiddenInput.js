function  hiddenInput(inputsForHidden){
    let i=1,
        j=1;

    j = inputsForHidden.every(el => {
        let hiddenParams=decoder();
        hiddenParams=hiddenParams.name.toString();
        let temp;
        temp = hiddenParams.split("\"")[j];
        temp = temp.split("=")[i];
        el.value=temp;
        j = j+2;
        return j;
    });
}