// student get profile
function stu_dir() {
    $.ajax({
        url: "/users/get_student",
        success: function (student) {
            var wall = $('#profile-well');
            student.forEach(stu => {
                    wall.append(`
                    <div class="card" style="height: 200px;padding: 10px;margin: 50px;box-shadow: 2px 2px 11px rgba(185, 181, 181, 0.87);">
                    <div class="col-sm-3">
                    <img src="img/uploads/${stu.profile}" class="img-circle" style="height: 180px;">
                    </div>
                    <div class="col-sm-9"> 
                    <h3>${stu.fname} ${stu.mname} ${stu.lname} ${stu.mname}</h3>
                    <h5>Email: ${stu.email}</h5>
                    <h5>Address: ${stu.address}</h5>
                    <h5>City: ${stu.city}</h5>
                    <h5>Mobile: ${stu.number}</h5>
                    <h5>Department: ${stu.department}</h5>
                    </div>
                    </div>
                    `);
            });
        }
    });
}
function staff_dir() {
    $.ajax({
        url: "/users/get_staff",
        success: function (staff) {
            var wall = $('#profile-well');
            staff.forEach(staff => {
                    wall.append(`
                    <div class="card" style="height: 250px;padding: 10px;margin: 50px;box-shadow: 2px 2px 11px rgba(185, 181, 181, 0.87);">
                    <div class="col-sm-3">
                    <img src="img/uploads/${staff.profile}" class="img-circle" style="height: 180px;">
                    </div>
                    <div class="col-sm-9"> 
                    <h3>${staff.fname} ${staff.mname} ${staff.lname}</h3>
                    <h5>Email: ${staff.email}</h5>
                    <h5>Address: ${staff.address}</h5>
                    <h5>City: ${staff.city}</h5>
                    <h5>Mobile: ${staff.number}</h5>
                    <h5>Department: ${staff.department}</h5>
                    <h5>DPost: ${staff.post}</h5>
                    </div>
                    </div>
                    `);
            });
        }
    });
}













