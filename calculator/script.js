function calculate() {
	var price = document.getElementById("price").value;
	var weight = document.getElementById("weight").value;
	var result = document.getElementById("result").value;

	// ������������ ���������
	var output = (+price + +result +(weight == "5t" ? 0: weight == "15t" ? 799 : weight == "5kg" ? 1299 : weight == "15kg" ? 1699 : weight == "50kg" ? 3599 : 6499)) / 0.84;

	// ������� ��������� �� ��������
	document.getElementById("output").innerHTML = "�������� ���� ��� �����: " + Math.round(output);
}