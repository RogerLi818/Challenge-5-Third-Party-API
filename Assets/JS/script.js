//set up today's date.
var now=moment().format("dddd,  MMM Do");
$("#currentDay").text(now);

//setup function to get each textarea's time and compare with current time.
var auditTask=function(){
    $(".row").each(function(){
        //to get each textarea's id, which is match the time in <p>
        var timeTitle=parseInt($(this).attr("id"));    
        //compare each timeTitle with current time, add class for different situation.
        if(timeTitle>moment().hours()){
            $(this).addClass("future");
        }else if(timeTitle<moment().hours()){
            $(this).addClass("past")
        }else{
            $(this).addClass("present")
        }         
    });
};
//run the auditTask function. 
auditTask();  

//save button
$(".saveBtn").click(function(){
    var taskText=$(this)
    //siblings under same parant. Get text.
    .siblings(".row")
    .val()
    .trim();
    //get hour in front
    var taskHour=$(this)
    .siblings(".hour")
    .text();
    //save in local storage
    localStorage.setItem(taskHour, taskText);    
});


//not a good way, but works
$("#9").val(localStorage.getItem("9AM"));
$("#10").val(localStorage.getItem("10AM"));
$("#11").val(localStorage.getItem("11AM"));
$("#12").val(localStorage.getItem("12AM"));
$("#13").val(localStorage.getItem("13AM"));
$("#14").val(localStorage.getItem("14AM"));
$("#15").val(localStorage.getItem("15AM"));
$("#16").val(localStorage.getItem("16AM"));
$("#17").val(localStorage.getItem("17AM"));


