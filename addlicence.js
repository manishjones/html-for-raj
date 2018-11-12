var flag = true;
function validate() {
    flag = true;
    $('[data-toggle="tooltip"]').tooltip('dispose');
    $('[data-toggle="tooltip"]').removeAttr("title");
    $('[data-toggle="tooltip"]').removeAttr("data-toggle");
    validateName();
    validateComName();
    validateAddress();
    validateContact();
    validateEMail();
    validateId();
    validateDor();
    $('[data-toggle="tooltip"]').tooltip({ placement: 'right', trigger: 'manual' }).tooltip('show');
    return flag;
}

function validateName() {
    var str = $("#name").val();
    if (str == '') {
        $("#name").attr("data-toggle", "tooltip");
        $("#name").attr("title", "Mandatory");
        flag = false;
    }
    else {
        var b = new RegExp("[^A-Za-z ]").test(str);
        if (b) {
            $("#name").attr("data-toggle", "tooltip");
            $("#name").attr("title", "Name can contain only letters and spaces");
            flag = false;
        }
    }
}

function validateComName() {
    var str = $("#comname").val();
    if (str == '') {
        $("#comname").attr("data-toggle", "tooltip");
        $("#comname").attr("title", "Mandatory");
        flag = false;
    }
    else {
        var b = new RegExp("[^A-Za-z ]").test(str);
        if (b) {
            $("#comname").attr("data-toggle", "tooltip");
            $("#comname").attr("title", "Name can contain only letters and spaces");
            flag = false;
        }
    }
}

function validateDor() {
    var str = $("#dor").val();
    console.log(str);
    if (str == '') {
        $("#dor").attr("data-toggle", "tooltip");
        $("#dor").attr("title", "Mandatory");
        flag = false;
    }
}

    function validateAddress() {
        var str = $("#address").val();
        if (str == '') {
            $("#address").attr("data-toggle", "tooltip");
            $("#address").attr("title", "Mandatory");
            flag = false;
        }
    }

    function validateContact() {
        var str = $("#contactno").val();
        if (str == '') {
            $("#contactno").attr("data-toggle", "tooltip");
            $("#contactno").attr("title", "Mandatory");
            flag = false;
        }
        else {
            var match = str.match("[0-9]{10}");
            if (!(match != null && str == match[0])) {
                $("#contactno").attr("data-toggle", "tooltip");
                $("#contactno").attr("title", "Contact No. should be of 10 digits");
                flag = false;
            }
        }
    }

    function validateEMail() {
        var str = $("#email").val();
        if (str == '') {
            $("#email").attr("data-toggle", "tooltip");
            $("#email").attr("title", "Mandatory");
            flag = false;
        }
        else {
            var match = str.match("[a-zA-z0-9]{2,}@[a-zA-z0-9]{2,}\\.[a-zA-z]{2,}");
            if (!(match != null && str == match[0])) {
                $("#email").attr("data-toggle", "tooltip");
                $("#email").attr("title", "Please enter a valid email address");
                flag = false;
            }
        }
    }

    function calExp(){
        var date=new Date($("#dor").val());
        var mth=parseInt($("#period").val());
        var newm=parseInt(date.getMonth()+mth);
        date.setMonth(newm);
        var strd=(date.getFullYear())+'-'+(date.getMonth()<9?('0'+(date.getMonth()+1)):(date.getMonth()+1))+'-'+(date.getDate()<10?('0'+date.getDate()):date.getDate());
        $("#doe").val(strd);
    }

    function validateId(){
        var str = $("#id").val();
        if (str == '') {
            $("#id").attr("data-toggle", "tooltip");
            $("#id").attr("title", "Mandatory");
            flag = false;
        }
        else {
            var match = str.match("[0-9]{2,}[A-Z]{2,}");
            if (!(match != null && str == match[0])) {
                $("#id").attr("data-toggle", "tooltip");
                $("#id").attr("title", "Company ID should start with 4 digits and be followed by at least 2 capital letters");
                flag = false;
            }
        }
    }