$(document).ready(function () {
    var student = null;
    $.ajax({
        url: "users/get_dummy",
        success: function (result) {
            console.log(result);
            $('span[data="stu_id"]').html(result.id);
            $('span[data="stu_email"]').html(result.email);
            $('span[data="stu_fname"]').html(result.fname);
            $('span[data="stu_lname"]').html(result.id);
            $('span[data="stu_mname"]').html(result.id);
            $('span[data="stu_momname"]').html(result.id);
            $('span[data="stu_address"]').html(result.address);
            $('span[data="stu_city"]').html(result.city);
            $('span[data="stu_number"]').html(result.number);
            $('span[data="stu_department"]').html(result.department);
            $('span[data="stu_year"]').html(result.year);
         }
    });
});





