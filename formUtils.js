/*
    Biblioteca Form Utilities V1.0

    Examples:
        Initialize: $("form#IdForm").hasRequired();
        put mandatory field in element ( insert of class required ): <input class="required"/> -> (*)
        compare if passwords are the same:
            Input paswword: <input type="password" id="passwd" />
            Input confirm: <input type="password class="confirm-password" password="#passwd"/>
        change displayed text: <input class="required" required-text="new text" />
 */


var formUtils = {
    bool : true,
    text: function (text) {
        return "<span class=\"invalid-feedback form-text-required d-block\">"+text+"</span>";
    },
    changeClass : function (object, bool){
        if (bool) {
            if($(object).closest("div.form-group").children("span.form-text-required").length < 1) {
                $(object).closest("div.form-group").children("input, select, textarea").removeClass("is-valid").addClass("is-invalid");
                $(object).closest("div.form-group").append(formUtils.text(($(object).attr('required-text') ?? 'Este campo é obrigatório!')));
            }else{
                $(object).closest("div.form-group").children("span.form-text-required").html(($(object).attr('required-text') ?? 'Este campo é obrigatório!'));
            }
        }else{
            $(object).closest("div.form-group").children("input, select, textarea").removeClass("is-invalid").addClass("is-valid");
            $(object).closest("div.form-group").children("span.form-text-required").remove();
        }
        return bool;
    },
    changePwdClass : function (object, bool){
        if(bool){
            $(object).closest("div.form-group").children("input").removeClass("is-valid").addClass("is-invalid");
            if($(object).closest("div.form-group").children("span.form-text-required").length < 1) {
                $(object).closest("div.form-group").append(formUtils.text(($(object).attr('required-text') ?? 'As senhas não conferem!')));
            }else{
                $(object).closest("div.form-group").children("span.form-text-required").html(($(object).attr('required-text') ?? 'As senhas não conferem!'));
            }
        }
        else{
            $(object).closest("div.form-group").children("input, select, textarea").removeClass("is-invalid").addClass("is-valid");
            $(object).closest("div.form-group").children("span.form-text-required").remove();
        }
        return bool;
    },
    start: function (object) {
        formUtils.bool = false;
        $(object).find("input, select, textarea").each(function () {
            if ($(this).hasClass("required") && $(this).val() === "") { formUtils.bool = formUtils.changeClass(this, true) }
            else if($(this).hasClass("confirm-password") && $(this).val() !== $($(this).attr("password")).val()){formUtils.bool = formUtils.changePwdClass(this, true)}
            else{formUtils.changeClass(this, false)}
        })
        return (formUtils.bool);
    }
}

$.fn.hasAttr = function (name) {
    var attr = this.attr(name);
    if (typeof attr !== 'undefined' && attr !== false) {
        return true;
    }
    return false;
}
$.fn.hasRequired = function () {
    $(this).find(".confirm-password").on("input", function (e) {
        formUtils.changePwdClass(this, ($(this).hasClass("confirm-password") && $(this).val() != $($(this).attr("password")).val()));
    })
    $(this).submit(function (e) {
        if(formUtils.start(this)){
            e.preventDefault();
        }
    });
}
$(document).ready(function () {
    $("form#formUser").hasRequired();
})
