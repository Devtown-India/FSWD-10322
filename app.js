const todoList = document.querySelector("ol");
const input = document.querySelector("input");
const addBtn = document.querySelector("button");

const handleAdd = () => {
  const eleToAdd = document.createElement("li");
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "delete";
  deleteButton.addEventListener("click", () => {
    eleToAdd.remove();
  });

  eleToAdd.innerHTML = input.value;
  eleToAdd.appendChild(deleteButton);
  todoList.appendChild(eleToAdd);
};

addBtn.addEventListener("click", handleAdd);
