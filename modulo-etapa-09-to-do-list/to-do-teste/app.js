$(document).ready(function () {
  $("form").submit(function (event) {
    event.preventDefault();
    var newTask = $("#new-task").val();
    $("#task-list").append('<li class="list-group-item">' + newTask + "</li>");
    $("#new-task").val("");
  });
});
