// Let's define some template helpers to display our data.
// 
teagrams.views.innerListItemTpl = function () {
    return "<div class='item-wrap'> " +

   "<img class='teagram-image' width='120' height='120' src='http://localhost:7070/controller/photo/Person/{id}'/>" +
// using the image directly from Instagram

// using Src to resize the image in the cloud
   
	
    "<div class='copy-wrap'><h2><span class='username'>{name}</span></h2></div>" +
    "</div>";
};