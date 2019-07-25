function start() {
    document.querySelector("#name").addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            document.querySelector("#check").click();
        }
    });
    document.querySelector("#address").addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            document.querySelector("#check").click();
        }
    });
}

function check(event) {
    let nameflag = false;
    let res = "";
    if (document.querySelector("#name").value.length < 5) {
        nameflag = true;
        res += "Name should be more than 5 characters";
    }
    if (document.querySelector("#address").value.length > 9) {
        if (nameflag) {
            res += " and ";
        }
        res += "Address should contain less than 10 characters";
    }
    if (res === "") {
        res = "Hellow " + document.querySelector("#name").value;
    }
    document.querySelector("#name").value = "";
    document.querySelector("#address").value = "";
    window.alert(res);
}