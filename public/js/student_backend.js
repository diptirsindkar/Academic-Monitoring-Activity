var student = null;
$(document).ajaxStart(function () {
    $("#wait").css("display", "block");
    $("#wait2").css("display", "block");
    $("#wait3").css("display", "block");
    $(".wait4").css("display", "block");
});

$.ajax({
    url: "users/get_student",
    success: function (student) {
        console.log(student);
        if (student === "") {
            alert('Something went wrong, Please Login again');
            window.location = '/';
        }
        $('span[data="stu_id"]').html(student.id);
        $('span[data="stu_email"]').html(student.email);
        $('span[data="stu_fname"]').html(student.fname);
        $('span[data="stu_lname"]').html(student.id);
        $('span[data="stu_mname"]').html(student.id);
        $('span[data="stu_momname"]').html(student.id);
        $('span[data="stu_address"]').html(student.address);
        $('span[data="stu_city"]').html(student.city);
        $('span[data="stu_number"]').html(student.number);
        $('span[data="stu_department"]').html(student.department);
        $('span[data="stu_year"]').html(student.year);


        $("#wait").css("display", "none");
    }
});

$.ajax({
    url: "/get_report_stu",
    success: function (report) {
        $('span[data="report_month"]').html(report[0].month);
        $('span[data="report_total_days"]').html(report[0].total_days);
        $('span[data="report_ut1"]').html(report[0].ut1);
        $('span[data="report_ut2"]').html(report[0].ut2);
        $('span[data="report_present"]').html(report[0].present);
        $('span[data="report_absent"]').html(report[0].total_days - report[0].present);
        $('span[data="report_leave_taken"]').html(report[0].leave_taken);
        $('span[data="report_avrage"]').html(Math.floor(report[0].present / report[0].total_days * 100));

        $(".wait4").css("display", "none");
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
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
            $("#accordion").append(`<div class="panel panel-default">
                <div class="panel-heading">
                <h4 class="panel-title">
                <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">${noti[i].header}</a>
                </h4>
                </div><div id="collapse1" class="panel-collapse collapse in">
                <div class="panel-body">${noti[i].description}</div>
                </div>
                </div>
                `);
        }
        $("#wait2").css("display", "none");
    }
});

 











