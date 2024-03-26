$(document).ready(function () {
    var hash = window.location.hash;
    if (!hash) {
        // loader animation
        $("#loading").css({
            width: "100%",
            height: "100%",
            display: "flex",
        });

        $("#loading img").css({
            width: "0px",
            animation: "moveAnimation 2s linear forwards",
        });

        // reload top
        $(window).scrollTop(0);

        // instagram delay
        $(".index-instagram").addClass("instagram-delay");

        // end_loader
        setTimeout(end_loader, 1200);
    }
    if (hash) {
        $(".shop-container").css({
            opacity: "1",
        });
        $(".point-container").css({
            opacity: "1",
        });
    }



    // fadeTrigger
    function fadeAnime() {
        // 関数レベルの厳格モード構文
        ("use strict");

        //fadeIn
        $(".fadeInTrigger").each(function () {
            //fadeInTriggerというクラス名が
            var elemPos = $(this).offset().top; //- 50 で要素より、50px上の
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll >= elemPos - windowHeight) {
                $(this).addClass("fadeIn"); // 画面内に入ったらfadeInというクラス名を追記
            } else {
                $(this).removeClass("fadeIn"); // 画面外に出たらfadeInというクラス名を外す
            }
        });

        // fadeUp
        $(".fadeUpTrigger").each(function () {
            //fadeUpTriggerというクラス名が
            var elemPos = $(this).offset().top; //- 50 で要素より、50px上の
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll >= elemPos - windowHeight) {
                $(this).addClass("fadeUp"); // 画面内に入ったらfadeUpというクラス名を追記
                // $(this).css("opacity", "1");
                // this.offsetHeight;
            } else {
                $(this).removeClass("fadeUp"); // 画面外に出たらfadeUpというクラス名を外す
            }
        });

        // fadeUpCirc
        $(".fadeUpCircTrigger").each(function () {
            //fadeUpCircTriggerというクラス名が
            var elemPos = $(this).offset().top; //- 50 で要素より、50px上の
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll >= elemPos - windowHeight) {
                $(this).addClass("fadeUpCirc"); // 画面内に入ったらfadeUpCircというクラス名を追記
            } else {
                $(this).removeClass("fadeUpCirc"); // 画面外に出たらfadeUpCircというクラス名を外す
            }
        });

        // fadeLeft
        $(".fadeLeftTrigger").each(function () {
            //fadeLeftTriggerというクラス名が
            var elemPos = $(this).offset().top; //- 50 で要素より、50px上の
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll >= elemPos - windowHeight) {
                $(this).addClass("fadeLeft"); // 画面内に入ったらfadeLeftというクラス名を追記
            } else {
                $(this).removeClass("fadeLeft"); // 画面外に出たらfadeLeftというクラス名を外す
            }
        });

        // fadeRight
        $(".fadeRightTrigger").each(function () {
            //fadeRightTriggerというクラス名が
            var elemPos = $(this).offset().top; //- 50 で要素より、50px上の
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll >= elemPos - windowHeight) {
                $(this).addClass("fadeRight"); // 画面内に入ったらfadeRightというクラス名を追記
            } else {
                $(this).removeClass("fadeRight"); // 画面外に出たらfadeRightというクラス名を外す
            }
        });

        // rotateCircle
        $(".rotateCircleTrigger").each(function () {
            //rotateCircleTriggerというクラス名が
            var elemPos = $(this).offset().top; //- 50 で要素より、50px上の
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll >= elemPos - windowHeight) {
                $(this).addClass("rotateCircle"); // 画面内に入ったらrotateCircleというクラス名を追記
            } else {
                $(this).removeClass("rotateCircle"); // 画面外に出たらrotateCircleというクラス名を外す
            }
        });
    }

    // 画面をスクロールをしたら動かしたい場合の記述
    $(window).scroll(function () {
        fadeAnime(); /* アニメーション用の関数を呼ぶ*/
    }); // ここまで画面をスクロールをしたら動かしたい場合の記述

    // 画面が読み込まれたらすぐに動かしたい場合の記述
    $(window).on("load", function () {
        fadeAnime(); /* アニメーション用の関数を呼ぶ*/
    }); // ここまで画面が読み込まれたらすぐに動かしたい場合の記述

    // smooth scroll
    $(".smooth-scroll").click(function (event) {
        event.preventDefault(); // デフォルトのアクション（即座にジャンプする）をキャンセル
        var target = this.hash ? $(this.hash) : $("html"); // ハッシュ（#以降の部分）が存在する場合と、存在しない（#のみ）場合で処理を分ける

        // スムーズにスクロールするアニメーション
        $("html, body").animate(
            {
                scrollTop: target.offset().top,
            },
            400
        ); // 800ミリ秒（0.8秒）かけてスクロール
    });

    //overlay nav
    //open
    $("#navOpen").click(function (event) {
        event.preventDefault();
        $(".nav-overlay").addClass("active");
        // $(".nav-overlay").css("width", "100%");
    });

    //close
    $(".navClose").click(function () {
        $(".nav-overlay").removeClass("active");
        // $(".nav-overlay").css("width", "0%");
    });

    //link
    $(".nav-text a").click(function () {
        $(".nav-overlay").removeClass("active");
        // $(".nav-overlay").css("width", "0%");
    });

    // slider slick
    $(".slider").slick({
        autoplay: true, //自動的に動き出すか。初期値はfalse。
        infinite: true, //スライドをループさせるかどうか。初期値はtrue。
        speed: 500, //スライドのスピード。初期値は300。
        slidesToShow: 3, //スライドを画面に3枚見せる
        slidesToScroll: 1, //1回のスクロールで1枚の写真を移動して見せる
        prevArrow: '<div class="slick-prev"></div>', //矢印部分PreviewのHTMLを変更
        nextArrow: '<div class="slick-next"></div>', //矢印部分NextのHTMLを変更
        centerMode: true, //要素を中央ぞろえにする
        variableWidth: true, //幅の違う画像の高さを揃えて表示
        dots: true, //下部ドットナビゲーションの表示
    });
});

// loading
function end_loader() {
    $("#loading").fadeOut(300, function () {
        $("#loading img").css("display", "none");
    });
}
