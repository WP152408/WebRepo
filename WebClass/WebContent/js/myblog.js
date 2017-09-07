function menu_over(e) {
	e.setAtribute("class", "nav-item active"); // <li class="nav-item active">
}
function menu_out(e) {
	e.setAtribute("class", "nav-item"); // <li class="nav-item">
}



function login() {
	var myModal = $("#myModal");
	myModal.modal();
	document.getElementById("TITLE").innerHTML = "Login";
	document.getElementById("registerForm").innerHTML = "";
	document.getElementById("justModal").innerHTML = "";
	document.getElementById("loginForm").innerHTML = '<div class="modal-body"><div><input class="form-control mr-sm-2" type="text" placeholder="아이디" id = "id" aria-label="PW"> <font size="2" color="lightgray" id = "inputID">*아이디를 입력해주세요.</font></div>'
			+ '<div><input class="form-control mr-sm-2" type="password" placeholder="비밀번호" id = "pw" aria-label="PW"> <font size="2" color="lightgray" id = "inputPW">*비밀번호를 입력해주세요.</font></div></div>'
			+ '<div class="modal-footer"><button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>'
			+ '<button type="submit" class="btn btn-primary">Login</button></div>'
}

function register() {
	var myModal = $("#myModal");
	myModal.modal();
	document.getElementById("TITLE").innerHTML = "Register";
	document.getElementById("loginForm").innerHTML = "";
	document.getElementById("justModal").innerHTML = "";
	document.getElementById("registerForm").innerHTML = '<div class="modal-body"><div><input class="form-control mr-sm-2" type="radio" id = "grade1" name="grade">1학년 <input class="form-control mr-sm-2" type="radio" id = "grade2" name="grade">2학년 <input class="form-control mr-sm-2" type="radio" id = "grade3" name="grade">3학년'
			+ '<font size="2" color="lightgray" id = "inputGD" style="margin-left: 18px">*학년을 선택해주세요.</font></div>'
			+ '<div><select id="class"><option value="class0">-- 반 선택 --</option>'
			+ '<option value="class1">---- 1 반 ----</option>'
			+ '<option value="class2">---- 2 반 ----</option>'
			+ '<option value="class3">---- 3 반 ----</option>'
			+ '<option value="class4">---- 4 반 ----</option>'
			+ '<option value="class5">---- 5 반 ----</option>'
			+ '<option value="class6">---- 6 반 ----</option></select>'
			+ '<font size="2" color="lightgray" id = "inputCL" style="margin-left: 99px">*반을 선택해주세요.</font></div>'
			+ '<div><input class="form-control mr-sm-2" type="text" placeholder="번호" id = "nb"> <font size="2" color="lightgray" id = "inputNB">*번호를 입력해주세요.</font></div>'
			+ '<div><input class="form-control mr-sm-2" type="text" placeholder="이름" id = "nm"> <font size="2" color="lightgray" id = "inputNM">*이름을 입력해주세요.</font></div></div>'
			+ '<div class="modal-footer"><button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>'
			+ '<button type="submit" class="btn btn-primary"">Register</button></div>'
}

function logout() {
	document.getElementById("profile").innerHTML = '<button class="btn btn-outline-success my-2 my-sm-0" type="button" onclick="login()">Login</button> '
			+ '<button class="btn btn-outline-success my-2 my-sm-0" type="button" onclick="register()">Register</button>'
}
