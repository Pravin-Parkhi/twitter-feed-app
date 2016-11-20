var twitterFeedApp = angular.module('TwitterFeedApp', []);

twitterFeedApp.controller('twitterFeedCtrl', ['$scope', '$sce', function ($scope, $sce) {

    $scope.twitterFeedData = {
        "feeds": [{
            "twitter": "Kerem Suer",
            "twitterHandle": "kerem",
            "twitterImgUrl": "http://res.cloudinary.com/dmwvws7yf/image/upload/v1479630962/Directi/kerem-min.png",
            "tweetVideoUrl": null,
            "tweet": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
            "retweetCount": 20,
            "tweetTime": "2m"
  }, {
            "twitter": "Axel Herrmann",
            "twitterHandle": "axel_herrmann",
            "twitterImgUrl": "http://res.cloudinary.com/dmwvws7yf/image/upload/v1479630962/Directi/herrmann-min.png",
            "tweetVideoUrl": null,
            "tweet": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "retweetCount": null,
            "tweetTime": "1h"
  }, {
            "twitter": "Kerem Suer",
            "twitterHandle": "kerem",
            "twitterImgUrl": "http://res.cloudinary.com/dmwvws7yf/image/upload/v1479630962/Directi/kerem-min.png",
            "tweetVideoUrl": "https://www.youtube.com/embed/GDDapdpgCd8?rel=0&amp;showinfo=0",
            "tweet": null,
            "retweetCount": null,
            "tweetTime": "5h"
  }, {
            "twitter": "Kerem Suer",
            "twitterHandle": "kerem",
            "twitterImgUrl": "http://res.cloudinary.com/dmwvws7yf/image/upload/v1479630962/Directi/kerem-min.png",
            "tweetVideoUrl": null,
            "tweet": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
            "retweetCount": null,
            "tweetTime": "Yesterday"
  }],
        "tweets": 200,
        "media": 200,
        "followings": 200,
        "followers": "1M"
    };

    $scope.trustSrc = function (src) {
        return $sce.trustAsResourceUrl(src);
    };

}]);

/*START :: MOBILE VIEW HEADER TABS*/
$(document).ready(function () {
    $("#headerTab a").click(function (event) {
        event.preventDefault();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        var tab = $(this).attr("href");
        $(".subHeaderTab-content").not(tab).css("display", "none");
        $(tab).fadeIn();
    });
});
/*START :: MOBILE VIEW HEADER TABS*/

/*START :: WEB VIEW HEADER TABS*/
$(document).ready(function () {
    $(".mainHeaderWeb a").click(function (event) {
        event.preventDefault();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        var tab = $(this).attr("href");
        $(".main-content").not(tab).css("display", "none");
        $(tab).fadeIn();
    });
});
/*START :: WEB VIEW HEADER TABS*/


/*START :: WEB VIEW MAIN TABS*/
$(document).ready(function () {
    $(".tabs-menu a").click(function (event) {
        event.preventDefault();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        var tab = $(this).attr("href");
        $(".tab-content").not(tab).css("display", "none");
        $(tab).fadeIn();
    });
});
/*START :: WEB VIEW MAIN TABS*/