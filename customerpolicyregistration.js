var flag=false;
function validate() {
    flag=true;
    $('[data-toggle="tooltip"]').tooltip('dispose');
    $('[data-toggle="tooltip"]').removeAttr("title");
    $('[data-toggle="tooltip"]').removeAttr("data-toggle");
    validateCustId();
    validatePolId();
    validateName();
    validateDate();
    validateSum();
    validateRelation();
    validateDob();
    $('[data-toggle="tooltip"]').tooltip({ placement: 'right', trigger: 'manual'}).tooltip('show');
    return flag;
}

function validateCustId(){
    var str = $("#custid").val();
    if(str==''){
        $("#custid").attr("data-toggle", "tooltip");
        $("#custid").attr("title", "Mandatory");
       flag=false;
    }
}

function validatePolId(){
    var str = $("#polid").val();
    if(str==''){
        $("#polid").attr("data-toggle", "tooltip");
        $("#polid").attr("title", "Mandatory");
       flag=false;
    }
}


function validateName(){
    var str = $("#name").val();
    if(str==''){    
        $("#name").attr("data-toggle", "tooltip");
        $("#name").attr("title", "Mandatory");
       flag=false;
    }
    else{
        var b=new RegExp("[^A-Za-z ]").test(str);
        if(b){
            $("#name").attr("data-toggle", "tooltip");
            $("#name").attr("title", "Name can contain only letters and spaces");
            flag=false;
        }
    }
}

function validateDate() {
    var str = $("#date").val();
    if (str == '') {
        $("#date").attr("data-toggle", "tooltip");
        $("#date").attr("title", "Mandatory");
        flag = false;
    }
    else {

        var d1 = Date.parse(str);
        var d2 = new Date().getTime();
        if (d1 > d2) {
            $("#date").attr("data-toggle", "tooltip");
            $("#date").attr("title", "Date can't be more than system date");
            flag = false;
        }
    }
}


function validateSum(){
    var str = $("#sum").val();
    if(str==''){
        $("#sum").attr("data-toggle", "tooltip"); 
        $("#sum").attr("title", "Mandatory");
       flag=false;
    }
    else{
        var match = str.match("[0-9]+");
        if(!(match != null && str == match[0])){
            $("#sum").attr("data-toggle", "tooltip"); 
            $("#sum").attr("title", "Sum should only contain digits");
            flag=false;
        }
    }
}



function validateRelation(){
    var str = $("#relation").val();
    if(str==''){
        $("#relation").attr("data-toggle", "tooltip");
        $("#relation").attr("title", "Mandatory");
       flag=false;
    }
}


function validateDob() {
    var str = $("#dob").val();
    if (str == '') {
        $("#dob").attr("data-toggle", "tooltip");
        $("#dob").attr("title", "Mandatory");
        flag = false;
    }
    else {
        var d1 = Date.parse(str);
        var d2 = new Date().getTime();
        if (d1 > d2) {
            $("#dob").attr("data-toggle", "tooltip");
            $("#dob").attr("title", "DOB can't be more than system date");
            flag = false;
        }
    }
}


