
var title;
var rating;
var text;
var count = 1;
var deleteBtn;
var ViewBooks = document.getElementById("ViewBooks");
var unit = [];


function addNew(){

	title = document.getElementById("title").value;
	rating = document.getElementById("rating").value;

	if (title && rating) {
		ViewBooks.innerHTML += `<tr id="item${count}">
									<th scope="row">${count}</th>
									<td>${title}</td>
									<td>${rating}</td>
									<td>
										<button class="edit" type="button" onclick="editBtn()" >Edit</button>
										<button class="delete" type="button" onclick="deleteBtn('item${count}')" >Delete</button>
									</td>
								</tr>`

																

	}

	unit.push(
		{title: title,rating: rating}
		);
	console.log(unit);

	localStorage.setItem("id", JSON.stringify(unit));
	
count++;

}




function deleteBtn(value){
	
	document.getElementById(value).remove()
}


if(localStorage.getItem("id") !== null){
	unit = JSON.parse(localStorage.getItem('id'))
	

for (let i = 0; i < unit.length; i++) {
		ViewBooks.innerHTML += `<tr id="itemcash${i}">
									<th scope="row">${i+1}</th>
									<td>${unit[i].title}</td>
									<td>${unit[i].rating}</td>
									<td>
									<button class="edit" type="button" onclick="editBtn()" >Edit</button>
										<button class="delete" type="button" onclick="deleteBtn('itemcash${i}')" >Delete</button>
									</td>
								</tr>`

count++;
}
}























































	
	/*function add() {

		var new_data = document.getElemenById('input').value;

		if (localStorage.getItem('data') == null) {

			localStorage.setItem('data', '[]');
		}

		var old-data = JSON.parse(localStorage.getItem('data'));
		old-data.push(new_data);

		localStorage.setItem('data',JSON.stringify(old-data));

	}*/













		/*<script type="text/javascript">
		let arr=[
		{name:"book2",price:"50"},
		{name:"book2",price:"50"},
		{name:"book2",price:"50"},
		{name:"book2",price:"50"},
		{name:"book2",price:"50"},
		{name:"book2",price:"50"},
		{name:"book2",price:"50"},
		{name:"book2",price:"50"},
		{name:"book2",price:"50"},

		]
		localStorage.setItem("books",JSON.stringify(arr))

		var data = (localStorage.getItem("books"))
console.log(data)

	var link ={id:1234}
	console.log(link.id)

	localStorage.setItem("id",JSON.stringify (link))
	var khaled = (localStorage.getItem("id"))
	console.log(khaled)
	console.log(khaled.id)


	var link2 = (JSON.stringify(link))
	console.log(link2)

	var link3 = JSON.parse(link2)
	console.log(link3)*/