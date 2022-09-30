function decoder(){
    const urlSearchParams = new URLSearchParams(window.location.search),
    params = Object.fromEntries(urlSearchParams.entries());
    return params;
}
