$(document).ready(function () {
    $.ajax({
        url: "users/get_dummy",
        success: function (result) { get_stu(result); }
    });

    function get_stu(resulet) { $('[mongo-data="student_id"]').html(student.id); }

});





