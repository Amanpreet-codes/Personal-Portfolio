document.querySelectorAll("a").forEach(function (link){
    link.addEventListener("click", function(event){
        const userConfirmed = confirm( "You will be directed to another website.");
        if(!userConfirmed){
            event.preventDefault();
        }
    }
    )
}
)