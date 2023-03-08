
let evenements = [{
    "title": "Oral Blanc - DevWeb", 
    "start": "2023-03-09 09:00:00",
    "end": "2023-03-09 12:00:00",
    "backgroundColor": "red",
},{   
    "title": "PHP", 
    "start": "2023-03-09 13:30:00",
    "end": "2023-03-09 17:00:00",
}]


document.addEventListener("DOMContentLoaded", function() {
    const calendarEl = document.getElementById("calendar");
    const calendar = new FullCalendar.Calendar(calendarEl, {
        height: "100%",
        initialView: "timeGridWeek", 
        locale : "fr",
        headerToolbar : {
            left:"prev next today", 
            center:"title",
            right:"dayGridMonth timeGridWeek",
        },
        buttonText:{
            today: `Aujourd'hui`, 
            month: `Mois`, 
            week: `Semaine`, 
            list: `Liste`, 
        },
        events: evenements,
        nowIndicator: true,
        editable: true,
        selectable: true,
        selectHelper: true,
        selectable: true,
        eventDrop: (infos)=> {
            if(!confirm("Êtes-vous sûr de vouloir déplacer l'évènement?")){
                infos.revert();
            }
        },
        eventResize: (infos)=> {
            console.log(infos.event.end);
        }
    });

    calendar.render();

});

var burger = document.querySelector('.burger');
var sidebarNav = document.querySelector('.sidebarnav');

burger.addEventListener('click', function() {
sidebarNav.classList.toggle('show');
});