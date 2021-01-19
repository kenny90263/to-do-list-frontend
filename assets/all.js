jQuery(document).ready(function () {

    // 代辦事項內容從左滑出
    $(".to-do-list li").on('click', function (e) {
        if (e.target !== this)
            return;
        $(".to-do-detail").toggleClass("show-detail");
    });

    // 當代辦事項打勾後，刪除此項 li
    $("#to-do-list li input").on('click', function (e) {
        if ($("#to-do-list li input").is(':checked')) {
            $(this).parent('li').remove();
        }

        // 代辦事項數量重新計算
        var ToDoListNum = $('.to-do li').length;
        if (ToDoListNum >= 1) {
            $('.to-do .title span').text("(" + ToDoListNum + ")");
        } else {
            $('.to-do .title span').text("(0)");
        }

    });

    $('.to-do-delete').on('click', function (e) {
       
            $(this).parent('li').remove();


        // 代辦事項數量重新計算
        var ToDoListNum = $('.to-do li').length;
        if (ToDoListNum >= 1) {
            $('.to-do .title span').text("(" + ToDoListNum + ")");
        } else {
            $('.to-do .title span').text("(0)");
        }

    });

   



    // 代辦事項數量計算
    var ToDoListNum = $('.to-do li').length;
    if (ToDoListNum >= 1) {
        $('.to-do .title span').text("(" + ToDoListNum + ")");
    } else {
        $('.to-do .title span').text("(0)");
    }


    // 已完成事項數量計算
    var ToDoneListNum = $('.done-list li').length;
    if (ToDoneListNum >= 1) {
        $('.to-done .title span').text("(" + ToDoneListNum + ")");
    } else {
        $('.to-done .title span').text("(0)");
    }




});