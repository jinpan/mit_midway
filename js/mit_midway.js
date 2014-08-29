function MasterControl($scope, $interval) {
    $scope.kerberoses = [];
    $scope.referrers = [];

    $scope.kerberos = "";
    $scope.last_kerberos = "";
    $scope.referrer = "";

    $scope.init = function() {
        $scope.update();
        $interval($scope.update, 1000);
    }

    $scope.update = function() {
        var kerberoses = localStorage.getItem("kerberoses");
        var referrers = localStorage.getItem("referrers");
        if (kerberoses === null) {
            $scope.kerberoses = [];
            $scope.referrers = [];
        } else {
            $scope.kerberoses = jQuery.parseJSON(kerberoses);
            $scope.referrers = jQuery.parseJSON(referrers);
        }
    }

    $scope.enter = function(keyEvent) {
        if ((keyEvent === undefined) || (keyEvent.which === 13)) {

            if ($scope.isValidKerberos($scope.kerberos)) {
                // success!
                $scope.save($scope.kerberos, $scope.referrer);

                $scope.last_kerberos = $scope.kerberos;
                $scope.kerberos = "";
                $scope.referrer = "";

                jQuery('#success').dimmer('show');
            }
        }
    }

    $scope.isValidKerberos = function(kerberos) {
        var kerberos = kerberos.toLowerCase();
        if (kerberos.length < 3 || kerberos.match(/^[a-z][a-z0-9]*$/) === null) {
            return false;
        }

        var hashes = kerberos_hashes[kerberos[0]][kerberos[1]];
        var hash = CryptoJS.MD5(kerberos).toString()
        return (jQuery.inArray(hash, hashes) >= 0)
    }

    $scope.save = function(kerberos, referrer) {
        if (localStorage.getItem("kerberoses") !== null) {
            $scope.kerberoses = jQuery.parseJSON(localStorage.getItem("kerberoses"));
            $scope.referrers = jQuery.parseJSON(localStorage.getItem("referrers"));
        }

        if (jQuery.inArray(kerberos, $scope.kerberoses) < 0) { // not already added
            $scope.kerberoses.push(kerberos);
            $scope.referrers.push(referrer);

            localStorage.setItem("kerberoses", JSON.stringify($scope.kerberoses));
            localStorage.setItem("referrers", JSON.stringify($scope.referrers));
        }
    }
}
