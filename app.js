var myDate = new Date();
var hrs = myDate.getHours();

var gret;

if(hrs<12){
    gret = 'Good Morning';
}
else if (hrs >= 12 && hrs <= 17){
    gret = 'Good Afternoon';
}
else if (hrs >=17 && hrs <= 24){
    gret = 'Good Evening';
}

document.getElementById('grt').innerHTML = '<b>'+gret+' , Guest! </b>';



// pop up functioning

// Display pop up after 1 sec and hide after 10 sec
window.addEventListener("load",function(){
    setTimeout(
        function open(event){
            document.querySelector(".popup").style.display = "block";
        },1000)

        setTimeout(
            function open(event){
                document.querySelector(".popup").style.display = "none";
            },9000)
})


// Hide pop up on clicking the button

document.querySelector("#close").addEventListener("click",function(){
    document.querySelector(".popup").style.display ="none";
});


// Navbar Functions
var a_parent =  document.querySelectorAll(".a_parent");
// var dd_menu_a = document.querySelectorAll(".dd_menu_a");

a_parent.forEach(function(aitem){

		aitem.addEventListener("click", function(){
			a_parent.forEach(function(aitem){
				aitem.classList.remove("active");
			})
			// dd_menu_a.forEach(function(dd_menu_item){
			// 	dd_menu_item.classList.remove("active");
			// })
			aitem.classList.add("active");
		})
})


// Color input

function changeBackground() {
    var color = document.getElementById("color").value;
    document.body.style.backgroundColor = color;

    // document.getElementById("coltext").style.color = color;
}

document.addEventListener('keydown',(e) =>{
    
    if (e.key === 'Enter'){
        e.preventDefault();
        changeBackground()
    }
})