$(document).ready(function () {
    var student = null;
    $.ajax({
        url: "users/get_dummy",
        success: function (student) {
            console.log(student);
             if(student === ""){
                 alert('Something went wrong, Please Login again');
                window.location= '/';
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
         }
    });

    $.ajax({
        url: "/get_report",
        success: function (report) {
            $('span[data="report_month"]').html(report[0].month);
            $('span[data="report_total_days"]').html(report[0].total_days);
            $('span[data="report_ut1"]').html(report[0].total_ut1);
            $('span[data="report_ut2"]').html(report[0].total_ut2);
            $('span[data="report_present"]').html(report[0].present);
            $('span[data="report_absent"]').html(report[0].total_days - report[0].present);
            $('span[data="report_leave_taken"]').html(report[0].leave_taken);
            $('span[data="report_avrage"]').html(Math.floor(report[0].present / report[0].total_days * 100));
         }
    });

});





