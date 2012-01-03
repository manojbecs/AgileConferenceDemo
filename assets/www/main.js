function bindToggleTracksStages() {
    $("#flip-tracks-stages a").live("click", function(e){
        e.preventDefault();
        $("#flip-tracks-stages a").removeClass("ui-btn-active");
        $(this).addClass("ui-btn-active");
        
        if($(this).attr("rel") == "tracks") {
            showTracksList();
        } else {
            showStagesList();
        }
    });
}
function showTracksList() {
    $(".tracks-list").removeClass("hidden");
    $(".stages-list").addClass("hidden");
}
function showStagesList() {
    $(".stages-list").removeClass("hidden");
    $(".tracks-list").addClass("hidden");
}