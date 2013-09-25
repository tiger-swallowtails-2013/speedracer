var test_function = function() {
  document.getElementById("test_Id").addEventListener('click', other_test);
};

var other_test = function() {
  document.getElementById("test_Id").setAttribute('type', 'button');
};
