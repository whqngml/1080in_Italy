$(function () {
    let strWidth = 450 + (window.outerWidth - window.innerWidth);
    let strHeight = 450 + (window.outerHeight - window.innerHeight);
    window.resizeTo(strWidth, strHeight);

    const now = new Date();
    $("#startDate").datepicker({
        "dateFormat": 'yy-mm-dd',
        "minDate": 0,
        "setDate": now,
        "showOn": 'button',
        "buttonImageOnly": true,
        "buttonImage": "/static/image/calendar.png",
        "onClose": function (selectedDate) {
            $("#endDate").datepicker("option", "minDate", selectedDate);
        }
    });
    
    $("#endDate").datepicker({
        "dateFormat": 'yy-mm-dd',
        "showOn": 'button',
        "buttonImageOnly": true,
        "buttonImage": "/static/image/calendar.png",
        "minDate": 0,
        "setDate": new Date(now.setDate(now.getDate() + 7))
    });
    $("#startDate").val(getToday());
    $("#endDate").val(getAddDate(7));
});

$('.ticketBtn').click(function (e) {
    e.preventDefault();
    let destiSelec = $('.desti option:selected').val();
    let startDate = $("#startDate").val().replaceAll('-', '');
    let endDate = $("#endDate").val().replaceAll('-', '');
    let adult = $("#adult").val().replaceAll('-', '');
    let child = $("#child").val().replaceAll('-', '');
    let infant = $("#infant").val().replaceAll('-', '');
    if (adult + child + infant == 0) {
        alert("한명 이상 선택해주세요.");
        return;
    }
    let people = `adult=${adult}&child=${child}&infant=${infant}`
    let fareType = $('.fareType option:selected').val();
    const start = `SEL-${destiSelec}-${startDate}`;
    const end = `${destiSelec}-SEL-${endDate}`;
    let url = `https://m-flight.naver.com/flights/international/${start}/${end}?${people}&fareType=${fareType}`
    if ($('input[name=isDirect]:checked').val()) {
        url += '&isDirect=true';
    }
    window.open(url);
    window.close();
})
