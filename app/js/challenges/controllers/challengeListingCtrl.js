'use strict';

tc.controller('ChallengeListingCtrl', ['$scope', '$loading', 'Challenge',
  function($scope, $loading, Challenge) {

  $scope.challenges = [];

  $scope.loadingOptions = {
    text: 'Loading Challenges'
  };

  // @TODO this should be dynamic per type
  $scope.gridOptions = {
    data: 'challenges',
    columnDefs: [ //@TODO replace with row template
      {
        field: 'challengeName',
        displayName: 'Challenges'
      },
      {
        field: 'challengeType',
        displayName: 'Type'
        // @TODO add template
      },
      { // @TODO replace with "Timeline"
        field: 'postingDate',
        displayName: 'Timeline'
      },
      { // @TODO format of "timeleft"
        field: 'currentPhaseRemainingTime',
        displayName: 'Time Left'
      },
      {
        field: 'currentPhaseName',
        displayName: 'Current Phase'
      },
      {
        field: 'numRegistrants',
        displayName: 'Registrants'
      },
      {
        field: 'numSubmissions',
        displayName: 'Submissions'
      }
    ]
  };

  $loading.start('challenges');

  // @TODO make type dynamic by using $routeparams
  Challenge.all('active').getList({type: 'design'}).then(function(challenges) {
    $scope.challenges = challenges;
    //$loading.finish('challenges');
  });
}]);