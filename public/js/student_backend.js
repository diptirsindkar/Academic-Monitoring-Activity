$(document).ready(function () {
    $.ajax({
        url: "/notification",
        success: function (result) { noti_html(result); }
    });
});


function noti_html(result) {
    result.forEach(element => {
        var html = `<div class="panel panel-default">
<div class="panel-heading">
    <h4 class="panel-title">
        <a data-toggle="collapse" data-parent="#accordion"
            href="#collapse1">${element.header}</a>
    </h4>
</div>
<div id="collapse1" class="panel-collapse collapse in">
    <div class="panel-body">${element.content}</div>
</div>
</div>`;

$(".panel-group").append(html);
    });
    


}
