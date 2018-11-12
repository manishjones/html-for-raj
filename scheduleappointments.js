var flag=false;
function validate() {
    flag=true;
    $('[data-toggle="tooltip"]').tooltip('dispose');
    $('[data-toggle="tooltip"]').removeAttr("title");
    $('[data-toggle="tooltip"]').removeAttr("data-toggle");
    validateDoa();
    $('[data-toggle="tooltip"]').tooltip({ placement: 'right', trigger: 'manual'}).tooltip('show');
    return flag;
}

function validateDoa() {
    var str = $("#doa").val();
    if (str == '') {
        $("#doa").attr("data-toggle", "tooltip");
        $("#doa").attr("title", "Mandatory");
        flag = false;
    }
    else {
        var d1 = Date.parse(str);
        var d2 = new Date().getTime();
        if (d2>=d1) {
            $("#doa").attr("data-toggle", "tooltip");
            $("#doa").attr("title", "Appointment date should be at least tomorrow");
            flag = false;
        }
    }
}