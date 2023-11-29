function fun() {
  let input = document.getElementById("input").value;
  let div = document.createElement("div");
  const deleteButton = document.createElement("span");
  deleteButton.textContent = "X";
  deleteButton.className = "delete-button";
  deleteButton.addEventListener("click", function () {
    div.remove();
  });
  div.innerHTML = `<div class="taskdiv"><span class="check" >☑️</span><span>${input}</span</div>`;
  div.append(deleteButton);

  div.addEventListener("click", function () {
    div.getElementsByTagName("span")[1].classList.toggle("completed");
    div.getElementsByTagName("span")[0].classList.toggle("check");
  });
  let parent = document.getElementsByClassName("fdiv")[0];
  div.setAttribute("class", "myclass");
  parent.appendChild(div);
}
