console.log("running")
$.ajax({
  type: "GET",
  url: "https://jsonplaceholder.typicode.com/users",
  
  
  success: function (response) {
    alert(response)
    console.log(response.data)
  }
});

