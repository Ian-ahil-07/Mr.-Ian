/*seacrh category*/
const filterInput = document.getElementById("filter");
const workItems = document.querySelectorAll(".work-item");

filterInput.addEventListener("keyup", function() {
  const filterValue = filterInput.value.toLowerCase();

  workItems.forEach(function(item) {
    const category = item.getAttribute("data-category").toLowerCase();
    const itemTitle = item.querySelector("h3").innerHTML.toLowerCase();
    const itemDescription = item.querySelector("p").innerHTML.toLowerCase();

    if (category.indexOf(filterValue) > -1 || itemTitle.indexOf(filterValue) > -1 || itemDescription.indexOf(filterValue) > -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});


	
	/*---------tooogle menu-------------*/


	var sidemenu = document.getElementById("sidemenu");

	function openmenu(){
		sidemenu.style.right = "0"
	}
	function closemenu(){
		sidemenu.style.right = "-200px"
	}
	

/*------------------ Parallax----------------------*/
const observer = new IntersectionObserver((entries)=>{
	entries.forEach((entry)=>{
		if(entry.isIntersecting){
			entry.target.classList.add("show-items");
		}else{
			entry.target.classList.remove("show-items");
		}
	})
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el)=>observer.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollScale.forEach((el)=>observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollScale.forEach((el)=>observer.observe(el));


/*------------Dark Mode-----------------*/

let sun = document.querySelector('#sun');
let moon = document.querySelector('#moon');
sun.addEventListener('click', ()=>{
	moon.style.display='inline-block'
	sun.style.display= 'none'
	document.querySelector('body').classList.add('light-mode')

	
});
moon.addEventListener('click', ()=>{
	sun.style.display='inline-block'
	moon.style.display= 'none'
	document.querySelector('body').classList.remove('light-mode')

	
});



