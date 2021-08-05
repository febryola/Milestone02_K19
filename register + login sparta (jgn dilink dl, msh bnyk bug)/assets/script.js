const credentials_toko = (() => {
    const fieldValue = localStorage.getItem("data_toko");
    return fieldValue === null
    ?   []
    :   JSON.parse(fieldValue)
})()

const credentials_user = (() => {
    const fieldValue = localStorage.getItem("data_user");
    return fieldValue === null
    ?   []
    :   JSON.parse(fieldValue)
})()

function objToArr(arrOfObj) {
    var keyArr = [];
    var result = [];

    for (var key in arrOfObj[0]) {
        keyArr.push(key);
    }

    for (var i = 0; i < arrOfObj.length; i++) {
        var obj = arrOfObj[i];
        var valArr = [];

        for (var j = 0; j < keyArr.length; j++) {
            valArr.push(obj[keyArr[j]]);
        }

        result.push(valArr);
    }
    return result;
}

var database_toko = []
var database_user = []

function onStart() {
    alert("start");
    if ((credentials_toko[0] == null) || (credentials_user[0] == null)) {    
        alert("test")
        credentials_toko.push({"nama_toko":"Kawanjasa","nama_pemilik":"Yola","email_pemilik":"mencintaiSPARTA@gmail.com","pass_toko":"bersamaKawanjasa","type_toko":"install_service"});
        credentials_user.push({"nama_user":"Gilang","email_user":"bersamamu.gilang@gmail.com","pass_user":"sukaYola"});
        localStorage.setItem("data_toko", JSON.stringify(credentials_toko));
        localStorage.setItem("data_user", JSON.stringify(credentials_user));
    } else {
        alert("end");
        database_toko.push(objToArr(credentials_toko));
        database_user.push(objToArr(credentials_user));
        alert(database_user)
        alert(database_toko[3])
        alert(database_toko)
    }
}

function storeBusinessLogin() {
    var update_business = document.getElementById("new_business_b");
    var update_name = document.getElementById("new_name_b");
    var update_email = document.getElementById("new_email_b");
    var update_pass = document.getElementById("new_pass_b");
    var update_type = document.getElementById("new_type_b");
    var availability = false;
    for (var i = 0; i < credentials_toko.length; i++) {
        if (credentials_toko[i][0] == update_business) {
            availability = true;
            break
        }
    }

    if ((update_business.value == "") || (update_pass.value == "")) {
        alert("Text empty, try again");
    } else if (availability) {
        alert("Name exists, try again")
    } else {
        credentials_toko.push({"nama_toko":update_business.value,"nama_pemilik":update_name.value,"email_pemilik":update_email.value,"pass_toko":update_pass.value,"type_toko":update_type.value});
        localStorage.setItem("data_toko", JSON.stringify(credentials_toko));
        alert("Data Telah Tersimpan! Silahkan Login!")
    }
}

function storeUserLogin() {
    var update_name = document.getElementById("new_name_u");
    var update_email = document.getElementById("new_email_u");
    var update_pass = document.getElementById("new_pass_u");
    var availability = false;
    for (var i = 0; i < credentials_user.length; i++) {
        if ((credentials_user[i][0] == update_name) || credentials_user[i][1] == update_email) {
            availability = true;
            break
        }
    }

    if ((update_name.value == "") || (update_pass.value == "")) {
        alert("Text empty, try again");
    } else if (availability) {
        alert("Name exists")
    } else {
        credentials_user.push({"nama_user":update_name.value,"email_user":update_email.value,"pass_user":update_pass.value});
        localStorage.setItem("data_user", JSON.stringify(credentials_user));
        alert("Data berhasil Tersimpan! Silahkan Login!");
    }
}

function checkBusinessLogin() {
    var check_email = document.getElementById("check_email_b");
    var check_pass = document.getElementById("check_pass_b");
    var position = 0;
    for (var i = 0; i < credentials_toko.length; i++) {
        if (credentials_toko[i][2] == check_email) {
            position = i;
            break
        }
    }
    
    if (position < 0) {
        alert("Data anda belum terdaftar atau credentials anda salah!")
    } else if ((position >= 0) && (credentials_toko[position][3] == check_pass)) {
        alert("Anda berhasil login. Selamat datang " + credentials_toko[position][1])
    } else {
        alert("Credentials anda salah!")
    }
}

function checkUserLogin() {
    var data_user = localStorage.getItem("data_user")
    var check_email = document.getElementById("check_email_u");
    var check_pass = document.getElementById("check_pass_u");
    var position = -1;
    for (var i = 0; i < credentials_user.length; i++) {
        if (credentials_user[i][0] == check_email) {
            position = i;
            break
        }
    }
    
    if (position < 0) {
        alert("Data anda belum terdaftar atau credentials anda salah!")
    } else if ((position >= 0) && (credentials_user[position][2] == check_pass)) {
        alert("Anda berhasil login. Selamat datang " + credentials_user[position][1])
    } else {
        alert("Credentials anda salah!")
    }
}

window.onload = onStart()