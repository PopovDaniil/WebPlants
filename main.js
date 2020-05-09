/**
 * 
 * @param {string} id id dropdown-элемента
 */
function showDropdown(id) {
  let x = document.getElementById(id);
  x.classList.toggle("w3-show")
}
function showAside() {
  let x = document.getElementsByTagName("aside")[0];
  x.classList.toggle("show-sidebar");
}