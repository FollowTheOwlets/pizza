const ajaxMock = (array) => new Promise((res, rej) => {
    setTimeout(() => res(), 500);
});

$(document).ready(() => {
    $('form').validate({
        rules: {
            name: {
                required: true,
                minlength: 3
            },
            tel: {
                required: true
            },
            address: {
                required: true,
                minlength: 12
            }
        },
        messages: {
            name: "Введите свое имя",
            tel: "Укажите телефон в формате +7ХХХХХХХХХХ",
            address: "Введите адрес для доставки пиццы"
        },
        submitHandler: (form) => {
            form.submit();
        }
    });
});


$('#send_order').on('click', (e) => {
    e.preventDefault();
    $('form').validate();

    if (!$('form').valid()) {
        return;
    }

    ajaxMock($('form').serializeArray()).then(() => {
        window.newOrder.showModal();
        $(':input', 'form')
            .not(':button, :submit, :reset, :hidden')
            .val('');
    });
});


$('.dialog__button').on('click', (e) => {
    window.newOrder.close();
});

$('#in_name').on('keypress', (e) => {
    if (e.key === '.') {
        e.preventDefault();
        return;
    }
});