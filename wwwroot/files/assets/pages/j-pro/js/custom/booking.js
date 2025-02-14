$(document).ready(function () {
    $("#phone").mask("(+999) 999-999-999", { placeholder: "x" });
    function dateFrom(date_from, date_to) {
        $(date_from).datepicker({
            dateFormat: "yy-mm-dd",
            prevText: '<i class="fa fa-caret-left"></i>',
            nextText: '<i class="fa fa-caret-right"></i>',
            onClose: function (selectedDate) {
                $(date_to).datepicker("option", "minDate", selectedDate);
            },
        });
    }
    function dateTo(date_from, date_to) {
        $(date_to).datepicker({
            dateFormat: "yy-mm-dd",
            prevText: '<i class="fa fa-caret-left"></i>',
            nextText: '<i class="fa fa-caret-right"></i>',
            onClose: function (selectedDate) {
                $(date_from).datepicker("option", "maxDate", selectedDate);
            },
        });
    }
    function destroyDate(date) {
        $(date).datepicker("destroy");
    }
    dateFrom("#date_from", "#date_to");
    dateTo("#date_from", "#date_to");
    $("#j-pro").justFormsPro({
        rules: {
            name: { required: true },
            email: { required: true, email: true },
            phone: { required: true },
            adults: { required: true, integer: true, minvalue: 0 },
            children: { required: true, integer: true, minvalue: 0 },
            room_type: { required: true },
            number_of_rooms: { required: true, integer: true, minvalue: 0 },
            date_from: { required: true },
            date_to: { required: true },
            message: { required: true },
        },
        messages: {
            name: { required: "Add your name" },
            email: {
                required: "Add your email",
                email: "Incorrect email format",
            },
            phone: { required: "Add your phone" },
            adults: {
                required: "Field is required",
                integer: "Only integer allowed",
                minvalue: "Value not less than 0",
            },
            children: {
                required: "Field is required",
                integer: "Only integer allowed",
                minvalue: "Value not less than 0",
            },
            room_type: {
                required: "Field is required",
            },
            number_of_rooms: {
                required: "Field is required",
                integer: "Only integer allowed",
                minvalue: "Value not less than 0",
            },
            date_from: { required: "Select check-in date" },
            date_to: { required: "Select check-out date" },
            message: { required: "Enter your message" },
        },
        afterSubmitHandler: function () {
            destroyDate("#date_from");
            destroyDate("#date_to");
            dateFrom("#date_from", "#date_to");
            dateTo("#date_from", "#date_to");
            return true;
        },
    });
});
