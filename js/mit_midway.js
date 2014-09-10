function MasterControl($scope, $interval, $timeout) {
    $scope.kerberoses = [];

    $scope.kerberos = "";
    $scope.last_kerberos = "";

    $scope.init = function() {
        $scope.update();
        $interval($scope.update, 1000);
    }

    $scope.update = function() {
        var kerberoses = localStorage.getItem("kerberoses");
        if (kerberoses === null) {
            $scope.kerberoses = [];
        } else {
            $scope.kerberoses = jQuery.parseJSON(kerberoses);
        }
    }

    $scope.enter = function(keyEvent) {
        //  keyEvent undefined covers the mouse case; keyEvent.which === 13
        //  covers the enter case
        if ((keyEvent === undefined) || (keyEvent.which === 13)) {

            if ($scope.isValidKerberos($scope.kerberos)
                || keyEvent === undefined) {  // either is valid or click to override
                // success!
                $scope.save($scope.kerberos);

                $scope.last_kerberos = $scope.kerberos;
                $scope.kerberos = "";

                jQuery('#success').dimmer('show');
                
                $timeout(function() {
                    jQuery('#success').dimmer('hide');
                }, 2000);
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

    $scope.save = function(kerberos) {
        if (localStorage.getItem("kerberoses") !== null) {
            $scope.kerberoses = jQuery.parseJSON(localStorage.getItem("kerberoses"));
        }

        if (jQuery.inArray(kerberos, $scope.kerberoses) < 0) { // not already added
            $scope.kerberoses.push(kerberos);

            localStorage.setItem("kerberoses", JSON.stringify($scope.kerberoses));
        }
    }
}
