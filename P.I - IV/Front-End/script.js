function toggleSenha() {

    var in2Input = document.getElementById("in2");

    if (in2Input.type === "password") {
      in2Input.type = "text";
    } else {
      in2Input.type = "password";
    }
  }
  