var calWin;

function newCal(src) {
    calWin = window.open("cal.asp?src=" + src, "Calendar", "location=no,status=no,width=300,height=131,screenX=150,screenY=550,left=550,top=350");
}

function set_dates() {
    var start_date = "";
    var end_date = "";
    var sel_arr_mon = document.forms[0].start_mon.options[document.forms[0].start_mon.options.selectedIndex].value;
    var sel_arr_date = document.forms[0].start_date.options[document.forms[0].start_date.options.selectedIndex].value;
    var sel_dep_mon = document.forms[0].end_mon.options[document.forms[0].end_mon.options.selectedIndex].value;
    var sel_dep_date = document.forms[0].end_date.options[document.forms[0].end_date.options.selectedIndex].value;
    var sel_st_mt = sel_arr_mon.substring(0, sel_arr_mon.indexOf("_"));
    var sel_st_yr = sel_arr_mon.substring(sel_arr_mon.indexOf("_") + 1);
    if (parseInt(sel_st_mt) < 10) {
        sel_st_mt = "0" + sel_st_mt;
    }
    var sel_ed_mt = sel_dep_mon.substring(0, sel_dep_mon.indexOf("_"));
    var sel_ed_yr = sel_dep_mon.substring(sel_dep_mon.indexOf("_") + 1);
    if (parseInt(sel_ed_mt) < 10) {
        sel_ed_mt = "0" + sel_ed_mt;
    }
    if (sel_st_yr > sel_ed_yr) {
        alert("Departure Date Should Be Greater Than Arrival Date");
        return false;
    } else if (sel_st_yr >= sel_ed_yr && sel_st_mt > sel_ed_mt) {
        alert("Departure Date Should Be Greater Than Arrival Date");
        return false;
    } else if (sel_st_yr >= sel_ed_yr && sel_st_mt >= sel_ed_mt && sel_arr_date >= sel_dep_date) {
        alert("Departure Date Should Be Greater Than Arrival Date");
        return false;
    } else {
        document.forms[0].arr_date.value = sel_arr_date + sel_st_mt + sel_st_yr;
        document.forms[0].dep_date.value = sel_dep_date + sel_ed_mt + sel_ed_yr;
        if (document.forms[0].regCode.value == "--Select a Property--") {
            alert("Please Choose Property.");
            return false;
        }
        document.forms[0].submit();
    }
}
var disp_mon = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
var curr_date = new Date();
var my_date = new Date();
my_date.setDate(my_date.getDate() + 1);
var curr_mon = curr_date.getMonth();
var curr_year = curr_date.getFullYear();
var curr_day = curr_date.getDate();
var disp_date;
var disp_yr;
var disp_mth;

function todayDate() {
    if (curr_date.getDate() < 10) {
        document.forms[0].start_date.value = '0' + curr_date.getDate();
    } else {
        document.forms[0].start_date.value = curr_date.getDate();
    }
    if (my_date.getDate() < 10) {
        document.forms[0].end_date.value = '0' + my_date.getDate();
    } else {
        document.forms[0].end_date.value = my_date.getDate();
    }
    document.forms[0].end_mon.value = (my_date.getMonth() + 1) + '_' + my_date.getFullYear();
    document.forms[0].start_mon.value = (curr_date.getMonth() + 1) + '_' + curr_date.getFullYear();
}

function MM_openBrWindow(theURL, winName, features) {
    window.open(theURL, winName, features);
}
$J = jQuery.noConflict();
$J(function() {
    var date_format = "dd M yy"
    $J('#img_frm_date').click(function() {
        $J('#arr_datepicker').datepicker('show');
    });
    $J("#arr_datepicker").datepicker({
        changeMonth: true,
        changeYear: true,
        dateFormat: date_format,
        minDate: 0,
        /*beforeShow: function(input, instance) {
            $J(input).datepicker('setDate', new Date());
        },*/
        onSelect: function(selectedDate) {
            var tempDt = new Date(selectedDate);
            tempDt.setDate(tempDt.getDate() + 1)
            $J("#dep_datepicker").val($J.datepicker.formatDate(date_format, tempDt));
        }
    });
    //$J("#arr_datepicker").val($J.datepicker.formatDate(date_format, new Date()));
    $J('#img_dep_date').click(function() {
        $J('#dep_datepicker').datepicker('show');
    });
    $J("#dep_datepicker").datepicker({
        changeMonth: true,

        changeYear: true,
        dateFormat: date_format,
        minDate: 1,
       /* beforeShow: function(input, instance) {
            var date = new Date($J('#arr_datepicker').datepicker('getDate'));
            date.setDate(date.getDate() + 1);
            $J(input).datepicker('setDate', date);
            $J(input).datepicker("option", "minDate", new Date(date));
        }*/
    });
    var depDt = new Date();
    depDt.setDate(depDt.getDate() + 1);
    //$J("#dep_datepicker").val($J.datepicker.formatDate(date_format, depDt));
});

function chkValidation() {
    var dt1 = new Date(

        $J("#arr_datepicker").val());
    var dt2 = new Date($J("#dep_datepicker").val());
    if ((dt1.getTime() > dt2.getTime()) || dt1.getTime() == dt2.getTime()) {
        alert("Departure Date Should Be Greater Than Arrival Date");
        return false;
    } else {
        dt1 = $J.datepicker.formatDate('dd MM yy', dt1);
        dt2 = $J.datepicker.formatDate('dd MM yy', dt2);
        var date1 = dt1.toString();
        var date2 = dt2.toString();
        $J("#arr_date").val(date1);
        $J("#dep_date").val(date2);
        document.hotelform.submit();
    }
}

function chkValidationNew() {
    var arr_datepicker = document.getElementById("arr_datepicker");
    var dep_datepicker = document.getElementById("dep_datepicker");
    var adult = document.getElementById("adult_1");
    var child = document.getElementById("child_1");
    var num_Rooms = document.getElementById("num_Rooms");
    var regCode = document.getElementById("regCode").value;
    var actionPage = document.getElementById("actionPage").value;

    document.forms[0].action = actionPage + regCode + "&targetTemplate=3";
    document.forms[0].submit();
    return true;
}