$(document).foundation();

$(document).ready(function(){

    // Initialize
    clear_content();
    $("#content-type-1").show();

    // Event Listeners
    $("#about-link").click(function(){
        $("#content-type-1, #content-type-2, #content-type-3, #content-type-4").hide();
        $("#nav-1, #nav-2, #nav-3, #nav-4").removeClass("nav-item-active");
        $("#nav-1, #nav-2, #nav-3, #nav-4").addClass("nav-item");
        $("#about").show();
    });

    $("#nav-1, #nav-2, #nav-3, #nav-4").click(function(){
        $("#nav-1, #nav-2, #nav-3, #nav-4").removeClass("nav-item-active");
        $("#nav-1, #nav-2, #nav-3, #nav-4").addClass("nav-item");
        $(this).addClass("nav-item-active");
        $(this).removeClass("nav-item");
        let current_content = $(this).attr("id");
        clear_content();
        update_content(current_content);
    });

    $("#uiux-group-1, #uiux-group-2, #uiux-group-3, #uiux-group-4, #uiux-group-5, #uiux-group-6").click(function(){
        $("#lightbox").show();
        let current_uxui_gallery = $(this).attr("id");
        update_uxui_gallery(current_uxui_gallery);
    });

    $("#design-group-1, #design-group-2, #design-group-3, #design-group-4, #design-group-5, #design-group-6").click(function(){
        $("#lightbox").show();
        let current_design_gallery = $(this).attr("id");
        update_design_gallery(current_design_gallery);
    });

    $("#lightbox-close").click(function(){
        $("#lightbox").hide();
        $("#gallery-uiux-1, #gallery-uiux-2, #gallery-uiux-3, #gallery-uiux-4, #gallery-uiux-5, #gallery-uiux-6").hide();
        $("#gallery-design-1, #gallery-design-2, #gallery-design-3, #gallery-design-4, #gallery-design-5, #gallery-design-6").hide();
    });

    // Clear Content
    function clear_content(){
        $("#lightbox").hide();
        $("#about").hide();
        $("#content-type-1, #content-type-2, #content-type-3, #content-type-4").hide();
        $("#gallery-uiux-1, #gallery-uiux-2, #gallery-uiux-3, #gallery-uiux-4, #gallery-uiux-5, #gallery-uiux-6").hide();
        $("#gallery-design-1, #gallery-design-2, #gallery-design-3, #gallery-design-4, #gallery-design-5, #gallery-design-6").hide();
    };

    // Update Content
    function update_content(current_content){
        switch (current_content) {
            case "nav-1":
                $("#content-type-1, #content-type-2, #content-type-3, #content-type-4").hide();
                $("#content-type-1").show();
                break;
            case "nav-2":
                $("#content-type-1, #content-type-2, #content-type-3, #content-type-4").hide();
                $("#content-type-2").show();
                break;
            case "nav-3":
                $("#content-type-1, #content-type-2, #content-type-3, #content-type-4").hide();
                $("#content-type-3").show();
                break;
            case "nav-4":
                $("#content-type-1, #content-type-2, #content-type-3, #content-type-4").hide();
                $("#content-type-4").show();
                break;
        }
    };

    // Update UIUX Gallery
    function update_uxui_gallery(current_uxui_gallery){
        switch (current_uxui_gallery) {
            case "uiux-group-1":
                $("#gallery-uiux-1, #gallery-uiux-2, #gallery-uiux-3, #gallery-uiux-4, #gallery-uiux-5, #gallery-uiux-6").hide();
                $("#gallery-uiux-1").show();
                break;
            case "uiux-group-2":
                $("#gallery-uiux-1, #gallery-uiux-2, #gallery-uiux-3, #gallery-uiux-4, #gallery-uiux-5, #gallery-uiux-6").hide();
                $("#gallery-uiux-2").show();
                break;
            case "uiux-group-3":
                $("#gallery-uiux-1, #gallery-uiux-2, #gallery-uiux-3, #gallery-uiux-4, #gallery-uiux-5, #gallery-uiux-6").hide();
                $("#gallery-uiux-3").show();
                break;
            case "uiux-group-4":
                $("#gallery-uiux-1, #gallery-uiux-2, #gallery-uiux-3, #gallery-uiux-4, #gallery-uiux-5, #gallery-uiux-6").hide();
                $("#gallery-uiux-4").show();
                break;
            case "uiux-group-5":
                $("#gallery-uiux-1, #gallery-uiux-2, #gallery-uiux-3, #gallery-uiux-4, #gallery-uiux-5, #gallery-uiux-6").hide();
                $("#gallery-uiux-5").show();
                break;
            case "uiux-group-6":
                $("#gallery-uiux-1, #gallery-uiux-2, #gallery-uiux-3, #gallery-uiux-4, #gallery-uiux-5, #gallery-uiux-6").hide();
                $("#gallery-uiux-6").show();
                break;
        }
    };

    // Update Design Gallery
    function update_design_gallery(current_design_gallery){
        switch (current_design_gallery) {
            case "design-group-1":
                $("#gallery-design-1, #gallery-design-2, #gallery-design-3, #gallery-design-4, #gallery-design-5, #gallery-design-6").hide();
                $("#gallery-design-1").show();
                break;
            case "design-group-2":
                $("#gallery-design-1, #gallery-design-2, #gallery-design-3, #gallery-design-4, #gallery-design-5, #gallery-design-6").hide();
                $("#gallery-design-2").show();
                break;
            case "design-group-3":
                $("#gallery-design-1, #gallery-design-2, #gallery-design-3, #gallery-design-4, #gallery-design-5, #gallery-design-6").hide();
                $("#gallery-design-3").show();
                break;
            case "design-group-4":
                $("#gallery-design-1, #gallery-design-2, #gallery-design-3, #gallery-design-4, #gallery-design-5, #gallery-design-6").hide();
                $("#gallery-design-4").show();
                break;
            case "design-group-5":
                $("#gallery-design-1, #gallery-design-2, #gallery-design-3, #gallery-design-4, #gallery-design-5, #gallery-design-6").hide();
                $("#gallery-design-5").show();
                break;
            case "design-group-6":
                $("#gallery-design-1, #gallery-design-2, #gallery-design-3, #gallery-design-4, #gallery-design-5, #gallery-design-6").hide();
                $("#gallery-design-6").show();
                break;
        }
    };

});

