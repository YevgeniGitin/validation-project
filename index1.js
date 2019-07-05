function start() {
    document.querySelector("#name").addEventListener("keyup", function(event) {
        if (event.keyCode === 13)
            document.querySelector("#check").click();
    });
    document.querySelector("#address").addEventListener("keyup", function(event) {
        if (event.keyCode === 13)
            document.querySelector("#check").click();
    });
}

function check(event) {
    let nameflag = 0;
    let addressflag = 0;
    let res = "";
    if (document.querySelector("#name").value.length < 5) {
        nameflag = 1;
        res += "Name should be more than 5 characters";
    }
    if (document.querySelector("#address").value.length > 9) {
        if (nameflag)
            res += " and ";
        res += "Address should contain less than 10 characters";

    }
    if (res === "")
        res = "Hellow " + document.querySelector("#name").value;
    window.alert(res);
}