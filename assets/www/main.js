function getStageNames(){
    var stages = {
            "0":"Generic",
            "1":"Leadership and Organizational Transformation", 
            "2":"Enterprise Agile", 
            "3":"Agile & Outsourcing",
            "4":"Agile Development Practices",
            "5":"DevOps", 
            "6":"Culture , People & Teams",
            "7":"Lean Principles & Practices",
            "8":"Agile Product Management",
            "9":"Coaching & Mentoring",
            "10":"Lean Startups",
            "11":"Research Cafe",
            "12":"Lightning Talks"};
    return stages;
}

function getProgramData(){
    var programData = {
            "tracks":{
                "Track 1":{
                    "17th Friday": {
                        "09:00 - 09:30": {"type": "generic","topic" : "Opening Talk","stage": "0","speaker": ""},
                        "09:30 - 10:30": {"type": "talk","topic": "Conquer Chaos - Designing the Business System for Agility","stage": "1","speaker": "Mike Russell"},
                        "10:30 - 10:45": {"type": "break","topic": "Coffee/Tea Break","stage": "0","speaker": ""},
                        "10:45 - 12:15": {"type": "talk","topic": "Confronting Business Uncertainty","stage": "1","speaker": "Charlie Rudd"}
                    },
                    "18th Saturday" :{

                    },
                    "19th Sunday":{

                    }
                },
                "Track 2":{

                },
                "Track 3":{

                },
                "Track 4":{

                },
                "Track 5":{

                },
                "Track 7":{

                },
                "Track 8":{

                }
            }
    };
    return programData;
}

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
    $(".stages-list").removeClass("slide-in-right");
    $(".stages-list").addClass("slide-out-right");
    
    $(".tracks-list").removeClass("slide-out-left");
    $(".tracks-list").addClass("slide-in-left");
}

function showStagesList() {
    $(".stages-list").removeClass("hidden");
    $(".tracks-list").removeClass("slide-in-left");
    $(".tracks-list").addClass("slide-out-left");
    $(".stages-list").removeClass("slide-out-right");
    $(".stages-list").addClass("slide-in-right");
}