'use strict';

const designCoding = angular.module('design_coding', ['ngRoute']);

designCoding.config(function ($routeProvider, $locationProvider) {
    console.log("Inside config");
    $routeProvider
        .when('/',
            {
                templateUrl: '/partials/home.html',
                controller: 'home'
            })
        .when('/page_content/:page',
            {
                templateUrl: '/partials/page_content.html',
                controller: 'page_content'
            })
        .when('/visual_content/:page',
            {
                templateUrl: '/partials/visual_analysis.html',
                controller: 'visual_content'
            })
        .when('/sequence_content',
            {
                templateUrl: 'partials/sequence_content.html',
                controller: 'sequence_content'
            })
        .otherwise({redirectTo: '/'});
});

designCoding.controller('home', function ($scope, $http, $window) {
    $scope.title = "#ashdesign coding";

    $scope.onStartClick = function () {
        $window.location.href = "#/page_content/0";
    };
});

designCoding.controller('page_content', function ($scope, $http, $window, $rootScope, $routeParams) {
    console.log("Route params " + $routeParams.page);

    const defaultCodes = {
        post_id: -1,
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


    $scope.getPageContent = function () {
        $http({
            method: "GET",
            url: '/comment-analysis/' + $routeParams.page,
            params: {},
            headers: {'Content-Type': 'application/json'}
        }).then(function (response) {
            console.log(JSON.stringify(response.data.post_data));
            $scope.initPageContent(response.data.post_data);
        }, function (error) {
            console.log("Error " + error);
            $scope.error_msg = error;
            $scope.error = true;
        });
    };

    $scope.initPageContent = function(post_data) {
        if (post_data.all_comments.length > 0) {
            $scope.selected_id = post_data.all_comments[0].comment_id;
            $scope.post_id = post_data.post_id;
        }
        $scope.getCodingForSelectedComment();
        $scope.post_data = post_data;
        $scope.answer_coding = defaultCodes;
        $scope.success = false;
        $scope.error = false;
        $scope.info = false;
    };

    $scope.onCommentClick = function (comment) {
        console.log("Selected comment Id " + comment.comment_id);
        $scope.selected_id = comment.comment_id;
        $scope.selected_comment = comment;
        $scope.answer_coding = defaultCodes;

        $scope.getCodingForSelectedComment();
    };

    $scope.onCommentDoubleClickCollapseThread = function() {
        $scope.selected_comment.is_collapsed = !($scope.selected_comment.is_collapsed);
        console.log("Double Click!" + $scope.selected_comment.is_collapsed);
    }

    $scope.getCodingForSelectedComment = function() {
        $http({
            method: "GET",
            url: '/get-status/' + $scope.selected_id,
            params: {},
            headers: {'Content-Type': 'application/json'}
        }).success(function (data) {
            if (data.status_code === 200) {
                console.log("Found coding");
                data.answer_coding.post_id = $scope.post_id;
                $scope.answer_coding = data.answer_coding;
            } else {
                console.log("Error " + data.msg);
                $scope.error_msg = error;
                $scope.error = true;
            }
        }).error(function (error) {
            console.log("Error " + error);
            $scope.error_msg = error;
            $scope.error = true;
        });
    };

    $scope.onAnswerSubmit = function () {
        $scope.answer_coding.comment_id = $scope.selected_id;
        let answers = $scope.answer_coding;
        $scope.answer_coding = defaultCodes;
        console.log("Answer submitted " + JSON.stringify($scope.answer_coding))

        $http({
            method: "POST",
            url: '/submit-coding',
            data: {answer_coding: answers},
            headers: {'Content-Type': 'application/json'}
        }).success(function (data) {
            if (data.status_code === 200) {
                console.log("Answer submit success ");

                $scope.selected_comment.is_coded = true;

                $scope.success = false;
                $scope.success_msg = "Submitted successfully";
            } else {
                console.log("Error " + data.msg);
                $scope.error_msg = error;
                $scope.error = true;
            }
        }).error(function (error) {
            console.log("Error " + error);
            $scope.error_msg = error;
            $scope.error = true;
        });
    };

    $scope.showPrevPage = function (prevPage) {
        console.log("Show prev page " + prevPage);
        $window.location.href = "#/page_content/" + prevPage;
    };

    $scope.showNextPage = function (nextPage) {
        console.log("Show next page " + nextPage);
        $window.location.href = "#/page_content/" + nextPage;
    };
});

designCoding.controller('visual_content', function ($scope, $http, $window, $rootScope, $routeParams) {
    console.log("Route params " + $routeParams.page);

    const defaultCodes = {
        post_id: -1,
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

    $scope.getVisualContent = function () {
        $http({
            method: "GET",
            url: '/comment-analysis/' + $routeParams.page,
            params: {},
            headers: {'Content-Type': 'application/json'}
        }).then(function (response) {
            console.log(JSON.stringify(response.data.post_data));
            $scope.initVisualPageContent(response.data.post_data);
        }, function (error) {
            console.log("Error " + error);
            $scope.error_msg = error;
            $scope.error = true;
        });
    };

    $scope.initVisualPageContent = function(post_data) {
        $scope.post_data = post_data;
        $scope.success = false;
        $scope.error = false;
        $scope.info = false;
    };
});

designCoding.controller('sequence_content', function ($scope, $http, $window, $rootScope, $routeParams) {
    console.log("Route params " + $routeParams.page);

    $scope.getSequenceContent = function () {
        $http({
            method: "GET",
            url: '/sequence-analysis',
            params: {},
            headers: {'Content-Type': 'application/json'}
        }).then(function(response) {
            console.log(JSON.stringify(response.data.post_data));
            $scope.initSequenceContent(response.data.post_data);
        }, function (error) {
            console.log("Error " + error);
            $scope.error_msg = error;
            $scope.error = true;
        });
    };

    $scope.initSequenceContent = function(post_data) {
        $scope.post_data = post_data;
        $scope.success = false;
        $scope.error = false;
        $scope.info = false;
    };
});