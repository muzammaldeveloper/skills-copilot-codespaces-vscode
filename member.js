function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'modules/skills/client/views/member.html',
        controller: 'SkillsMemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: '='
        }
    }; 
}