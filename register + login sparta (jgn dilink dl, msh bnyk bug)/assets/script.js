// CSS transition

const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signInButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signUpButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

// CSS transition

const credentials_toko = (() => {
  const fieldValue = localStorage.getItem("data_toko");
  return fieldValue === null ? [] : JSON.parse(fieldValue);
})();

const credentials_user = (() => {
  const fieldValue = localStorage.getItem("data_user");
  return fieldValue === null ? [] : JSON.parse(fieldValue);
})();

var current_user = "";
var current_business = "";

function onStart() {
  if (credentials_toko[0] == null || credentials_user[0] == null) {
    credentials_toko.push({
      nama_toko: "Kawanjasa",
      nama_pemilik: "Yola",
      email_pemilik: "mencintaiSPARTA@gmail.com",
      pass_toko: "bersamaKawanjasa",
      type_toko: "install_service",
    });
    credentials_user.push({
      nama_user: "Gilang",
      email_user: "bersamamu.gilang@gmail.com",
      pass_user: "sukaYola",
    });
    localStorage.setItem("data_toko", JSON.stringify(credentials_toko));
    localStorage.setItem("data_user", JSON.stringify(credentials_user));
    localStorage.setItem("user", JSON.stringify(current_user));
    localStorage.setItem("business", JSON.stringify(current_business));

    alert("Initial Data Loaded Successfully");
  }
  alert("Page Loaded Successfully");
}

function storeBusinessLogin() {
  var update_business = document.getElementById("new_business_b");
  var update_name = document.getElementById("new_name_b");
  var update_email = document.getElementById("new_email_b");
  var update_pass = document.getElementById("new_pass_b");
  var update_type = document.getElementById("new_type_b");
  var availability = false;
  for (var i = 0; i < credentials_toko.length; i++) {
    if (credentials_toko[i]["nama_toko"] == update_business.value) {
      availability = true;
      break;
    }
  }

  if (update_business.value == "" || update_pass.value == "") {
    alert("Text empty, try again");
  } else if (availability) {
    alert("Name exists, try again");
  } else {
    credentials_toko.push({
      nama_toko: update_business.value,
      nama_pemilik: update_name.value,
      email_pemilik: update_email.value,
      pass_toko: update_pass.value,
      type_toko: update_type.value,
    });
    localStorage.setItem("data_toko", JSON.stringify(credentials_toko));
    alert("Data Telah Tersimpan! Silahkan Login!");
  }
}

function storeUserLogin() {
  var update_name = document.getElementById("new_name_u");
  var update_email = document.getElementById("new_email_u");
  var update_pass = document.getElementById("new_pass_u");
  var availability = false;
  for (var i = 0; i < credentials_user.length; i++) {
    if (
      credentials_user[i]["nama_user"] == update_name.value ||
      credentials_user[i][1] == update_email
    ) {
      availability = true;
      break;
    }
  }

  if (update_name.value == "" || update_pass.value == "") {
    alert("Text empty, try again");
  } else if (availability) {
    alert("Name exists");
  } else {
    credentials_user.push({
      nama_user: update_name.value,
      email_user: update_email.value,
      pass_user: update_pass.value,
    });
    localStorage.setItem("data_user", JSON.stringify(credentials_user));
    alert("Data berhasil Tersimpan! Silahkan Login!");
  }
}

function checkBusinessLogin() {
  var check_email = document.getElementById("check_email_b");
  var check_pass = document.getElementById("check_pass_b");
  var position = 0;
  for (var i = 0; i < credentials_toko.length; i++) {
    if (credentials_toko[i]["email_pemilik"] == check_email) {
      position = i;
      break;
    }
  }
  if (position < 0) {
    alert("Data anda belum terdaftar atau credentials anda salah!");
  } else if (credentials_toko[position]["pass_toko"] == check_pass.value) {
    alert(
      "Anda berhasil login. Selamat datang " +
        credentials_toko[position]["nama_pemilik"]
    );
    current_business = credentials_toko[position]["nama_pemilik"];
    localStorage.setItem("business", current_business);
  } else {
    alert("Credentials anda salah!");
  }
}

function checkUserLogin() {
  var check_email = document.getElementById("check_email_u");
  var check_pass = document.getElementById("check_pass_u");
  var position = -1;
  for (var i = 0; i < credentials_user.length; i++) {
    if (credentials_user[i]["email_user"] == check_email.value) {
      position = i;
      break;
    }
  }
  if (position < 0) {
    alert("Data anda belum terdaftar atau credentials anda salah!");
  } else if (credentials_user[position]["pass_user"] == check_pass.value) {
    alert(
      "Anda berhasil login. Selamat datang " +
        credentials_user[position]["nama_user"]
    );
    current_user = credentials_user[position]["nama_user"];
    localStorage.setItem("user", current_user);
  } else {
    alert("Credentials anda salah!");
  }
}

window.onload = onStart();
