$(document).ready(function () {
	//	Colapsar menú en mobile
    $("nav").find("li").on("click", "a", function () {
        $('.navbar-collapse.in').collapse('hide');
    });
});