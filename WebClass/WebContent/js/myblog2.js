
$(document)
		.ready(
				function() {

					$('#loginForm')
							.submit(
									function(event) {
										//자동 submit을 통한 새로고침 방지
										event.preventDefault();

										//id, pwd 값 가져오기

										var id = $("#id").val();
										var pw = $("#pw").val();

										var input = true;
										if (id == '') {
											document
													.getElementById("inputID").style.color = "red";
											input = false;
										} else
											document
													.getElementById("inputID").style.color = "lightgray";
										if (pw == '') {
											document
													.getElementById("inputPW").style.color = "red";
											input = false;
										} else
											document
													.getElementById("inputPW").style.color = "lightgray"
										if (input == false)
											return;
										console.log(id, pw)

										//서버로 post 방식 전송
										$
												.post(
														"http://httpbin.org/post",
														{
															id : id,
															pw : pw
														},
														function(data) {
															//서버로부터 응답을 받으면

															var myModal = $("#myModal");
															document.getElementById("registerForm").innerHTML = "";
															document.getElementById("loginForm").innerHTML = "";
															document
																	.getElementById("justModal").innerHTML = "<div class='modal-body'><strong>"
																	+ id
																	+ "</strong>님 로그인되었습니다.</div>"
																	+ '<div class="modal-footer"><button type="button" class="btn btn-primary" data-dismiss="modal">OK</button></div>';

															document
																	.getElementById("profile").innerHTML = "<strong><font color='white'><div>"
																	+ id
																	+ "</strong>님, 환영합니다.</font><button type='button' class='btn btn-outline-success' style='margin-left: 20px' onclick='logout()'>logout</button></div>"
														});
									})

					$('#registerForm')
							.submit(
									function(event) {
										//자동 submit을 통한 새로고침 방지
										event.preventDefault();

										var input = false;
										var gd, cl, nb, nm;
										for (var i = 1; i <= 3; i++) {
											if (document
													.getElementById("grade"
															+ i).checked) {
												document
														.getElementById("inputGD").style.color = "lightgray";
												input = true;
												gd = i;
												break;
											}
										}

										if (input == false)
											document
													.getElementById("inputGD").style.color = "red";

										cl = document
												.getElementById("class").selectedIndex;
										if (cl == '0') {
											document
													.getElementById("inputCL").style.color = "red";
											input = false;
										} else
											document
													.getElementById("inputCL").style.color = "lightgray";


										nb = $("#nb").val();
										if (nb == '') {
											document
													.getElementById("inputNB").style.color = "red";
											input = false;
										} else
											document
													.getElementById("inputNB").style.color = "lightgray";
										nm = $("#nm").val();
										if (nm == '') {
											document
													.getElementById("inputNM").style.color = "red";
											input = false;
										} else
											document
													.getElementById("inputNM").style.color = "lightgray"
										if (input == false)
											return;
										

										//서버로 post 방식 전송
										$
												.post(
														"http://httpbin.org/post",
														{
															gd : gd,
															cl : cl,
															nb : nb,
															nm : nm
														},
														function(data) {
															//서버로부터 응답을 받으면

															var myModal = $("#myModal");
															document.getElementById("registerForm").innerHTML = "";
															document.getElementById("loginForm").innerHTML = "";
															document
																	.getElementById("justModal").innerHTML = "<div class='modal-body'><strong>"
																	+ nm
																	+ "</strong>님 회원가입되었습니다.</div>"
																	+ '<div class="modal-footer"><button type="button" class="btn btn-primary" data-dismiss="modal">OK</button></div>';
														});
									})

				});