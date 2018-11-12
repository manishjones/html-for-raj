var flag = true;
function validate() {
    flag = true;
    $('[data-toggle="tooltip"]').tooltip('dispose');
    $('[data-toggle="tooltip"]').removeAttr("title");
    $('[data-toggle="tooltip"]').removeAttr("data-toggle");
    validateDates();
    $('[data-toggle="tooltip"]').tooltip({ placement: 'right', trigger: 'manual' }).tooltip('show');
    return flag;
}

function selectAgents(){
    if($("#agentselect").find(":selected").text()=='All Agents'){
        $("#agentid").hide();
    }
    else if($("#agentselect").find(":selected").text()=='Single Agent'){
        $("#agentid").show();
    }
}

function validateDates(){
    var s1=$("#from").val();
    var s2=$("#to").val();
    if(s1!=''&&s2!=''){
        var d1=new Date(s1);
        var d2=new Date(s2);
        var dif=(d2.getTime()-d1.getTime())/2592000000;
        if(d1>d2){
            $("#to").attr("data-toggle", "tooltip");
            $("#to").attr("title", "Cannot exceed the above date");
            flag = false;
        }
        else if(dif>3){
            $("#to").attr("data-toggle", "tooltip");
            $("#to").attr("title", "Commission calculation can't exceed 3 months");
            flag = false;
        }
    }
}