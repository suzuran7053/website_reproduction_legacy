$("document").ready(function() {
    $(".fa-bars").on("click", showMenu);
    $(".fa-search").on("click", showSearchBar);
    $(".fa-times").on("click", closeSearchBar);

    function showMenu() {
        let showMenuDisplay = $("#hiddenMenu").css("display");
        if (showMenuDisplay == "none") {
            $("#hiddenMenu").css("display", "block");
        } else {
            $("#hiddenMenu").css("display", "none");
        }
    }

    function showSearchBar() {
        $("header").css("height", "52.56px");
        $("#hiddenSearchBar").css({
            "display": "flex",
            "justify-content": "space-between",
            "align-items": "center",
            "height": "100%"
        });
        $("#hiddenSearchBar input").css({
            "width": "100%",
            "padding": "4px"
        });
        $("#searchForm").css({
            "flex-grow": "2",
        });
        $("#defaultMenu").css("display", "none");
    }

    function closeSearchBar() {
        $("#hiddenSearchBar").css("display", "none");
        $("#defaultMenu").css("display", "flex");
    }
})