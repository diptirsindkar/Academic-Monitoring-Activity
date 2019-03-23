$(document).ajaxStart(function () {
    $("#wait").css("display", "block");
    $("#wait2").css("display", "block");
    $("#wait3").css("display", "block");
});
$.ajax({
    url: "users/get_staff",
    success: function (staff) {
        if (staff === "") {
            alert('Something went wrong, Please Login again');
            window.location = '/';
        }
        $('span[data="staff_id"]').html(staff.id);
        $('span[data="staff_email"]').html(staff.email);
        $('span[data="staff_fname"]').html(staff.fname);
        $('span[data="staff_lname"]').html(staff.id);
        $('span[data="staff_mname"]').html(staff.id);
        $('span[data="staff_momname"]').html(staff.id);
        $('span[data="staff_address"]').html(staff.address);
        $('span[data="staff_city"]').html(staff.city);
        $('span[data="staff_number"]').html(staff.number);
        $('span[data="staff_department"]').html(staff.department);
        $('span[data="staff_year"]').html(staff.post);
        $('span[data="staff_profile"]').html(staff.profile);
    }
});

$.ajax({
    url: "/get_report_sta",
    success: function (report) {
        $('span[data="report_month"]').html(report[0].month);
        $('span[data="report_total_days"]').html(report[0].total_days);
        $('span[data="report_present"]').html(report[0].present);
        $('span[data="report_absent"]').html(report[0].total_days - report[0].present);
        $('span[data="report_leave_taken"]').html(report[0].leave_taken);
        $('span[data="report_avrage"]').html(Math.floor(report[0].present / report[0].total_days * 100));


        var width = $(".skills.html").text();
        $(".skills.html").css({
            "width": width
        });
        var width2 = $(".skills.css").text();
        $(".skills.css").css({
            "width": width2
        });
        var width3 = $(".skills.js").text();
        $(".skills.js").css({
            "width": width3
        });
        $("#wait3").css("display", "none");
    }
});

$.ajax({
    url: "/get_notification",
    success: function (noti) {
        for (let i = 0; i < noti.length; i++) {
            $("#accordion").append(`<div class="panel panel-default post">
            <div class="panel-heading">
            <h4 class="panel-title">
            <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">${noti[i].header}</a>
            </h4>
            </div><div id="collapse1" class="panel-collapse collapse in">
            <div class="panel-body">${noti[i].description}</div>
            </div>
            </div>
            `);
        };
        $("#wait2").css("display", "none");
    }
});

$(document).ajaxComplete(function () {
    $("#wait").css("display", "none");
});