function MasterControl($scope) {
    $scope.kerberoses = [];

    $scope.kerberos = "";
    $scope.last_kerberos = "";

    $scope.init = function() {
        var kerberoses = localStorage.getItem("kerberoses");
        if (kerberoses === null) {
            $scope.kerberoses = [];
        } else {
            $scope.kerberoses = jQuery.parseJSON(kerberoses);
        }
    }

    $scope.enter = function(keyEvent) {
        if ((keyEvent === undefined) || (keyEvent.which === 13)) {

            if ($scope.isValidKerberos()) {
                // success!
                $scope.save($scope.kerberos);

                $scope.last_kerberos = $scope.kerberos;
                $scope.kerberos = "";

                jQuery('#success').dimmer('show');
            }
        }
    }

    $scope.isValidKerberos = function() {
        var kerberos = $scope.kerberos.toLowerCase();
        if (kerberos.length < 3 || kerberos.match(/^[a-z][a-z0-9]*$/) === null) {
            return false;
        }

        var hashes = kerberos_hashes[kerberos[0]][kerberos[1]];
        var hash = CryptoJS.MD5(kerberos).toString()
        return (jQuery.inArray(hash, hashes) >= 0)
    }

    $scope.save = function(kerberos) {
        var kerberoses;
        if (localStorage.getItem("kerberoses") === null) {
            kerberoses = [];
        } else {
            kerberoses = jQuery.parseJSON(localStorage.getItem("kerberoses"));
        }
        console.log(kerberoses);

        if (jQuery.inArray(kerberos, kerberoses) < 0) {
            kerberoses.push(kerberos);
            localStorage.setItem("kerberoses", JSON.stringify(kerberoses));
        }
    }

}

