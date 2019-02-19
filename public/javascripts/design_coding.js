'use strict';

const designCoding = angular.module('design_coding', ['ngRoute']);

designCoding.config(function ($routeProvider, $locationProvider) {
    console.log("Inside config");
    $routeProvider
        .when('/',
            {
                templateUrl: '/partials/welcome.html',
                controller: 'welcome'
            })
        .when('/page_content',
            {
                templateUrl: '/partials/page_content.html',
                controller: 'page_content'
            })
        .otherwise({redirectTo: '/'});
});


// Controllers below should have same name as mentioned above

designCoding.controller('welcome', function ($scope, $http, $window, $rootScope) {
    $scope.title = "to ma site!";
    $rootScope.current_page = 1;
    console.log("Current page set " + $rootScope.current_page);

    $scope.showPostContent = function () {
        $http({
            method: "GET",
            url: '/comment-analysis/' + $rootScope.current_page,
            params: {},
            headers: {'Content-Type': 'application/json'}
        }).then(function (response) {
            console.log(JSON.stringify(response.data.post_data));
            $rootScope.post_data = response.data.post_data;
            $window.location.href = "#/page_content";
        }, function (error) {
            console.log("Error " + error);
            $scope.error_msg = error;
            $scope.error = true;
        });
    };
});

designCoding.controller('page_content', function ($scope, $http, $window, $rootScope) {
    console.log("Current page value is " + $rootScope.current_page);
    console.log("Current page post data " + $rootScope.post_data);

    $scope.answer_coding = {
        post_id: $rootScope.post_data.post_id,
        comment_id: -1,
        phatic: false,
        issues_concern: false,
        issues_concern_virtue_ethics: false,
        issues_concern_consequentialist_ethics: false,
        issues_concern_deontological_ethics: false,
        proposed_remedy: false,
        proposed_remedy_types_legal: false,
        proposed_remedy_types_shame: false,
        proposed_remedy_types_hack: false,
        proposed_remedy_directed_to_individual: false,
        proposed_remedy_directed_to_society: false,
        modifiers: false,
        modifiers_extends: false,
        modifiers_example: false,
        modifiers_conditional: false,
        modifiers_disagree_counter: false,
        modifiers_futuring: false,
        sub_level_conversational_shift: false,
        code_notes: ""
    };

    if ($rootScope.post_data.all_comments.length > 0) {
        $scope.selected_id = $rootScope.post_data.all_comments[0].comment_id;
    }

    $scope.post_data = $rootScope.post_data;
    $rootScope.current_page = $rootScope.current_page + 1;


    $scope.onCommentClick = function (commentId) {
        console.log("Selected comment Id " + commentId);
        $scope.selected_id = commentId;
    };

    $scope.onAnswerSubmit = function () {
        $scope.answer_coding.comment_id = $scope.selected_id;
        console.log("Answer submitted " + JSON.stringify($scope.answer_coding))

        $http({
            method: "POST",
            url: '/submit-coding',
            data: {answer_coding: $scope.answer_coding},
            headers: {'Content-Type': 'application/json'}
        }).success(function (data) {
            console.log("Answer submit success ");
        }).error(function (error) {
            console.log("Error " + error);
            $scope.error_msg = error;
            $scope.error = true;
        });
    };

    $scope.showPrevPage = function (prevPage) {
        console.log("Show prev page " + prevPage);
    };

    $scope.showNexPage = function (nextPage) {
        console.log("Show next page " + nextPage);
    }
});