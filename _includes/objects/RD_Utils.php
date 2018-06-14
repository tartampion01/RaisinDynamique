<?php
class RD_Utils
{
    public static function test_input($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        
        return $data;
    }
    
    public static function GetDropDownSuccursalesBonTravail($succursaleToSelect)
    {
        //echo "----- $succursaleToSelect ------";
        $ddlDebut = "<select id='ddlSuccursales' name='ddlSuccursales' class='dropDownBonTravailDemandePieces'>";
        $options = "<option value='Q2FtaW9ucyUyMEludGVyLUFuam91'>Camions Inter-Anjou</option>";
        $options .= "<option value='Q2FtaW9ucyUyMEludGVyLUxhbmF1ZGklQzMlQThyZQ=='>Camions Inter-Lanaudière</option>";
        $options .= "<option value='Q2FtaW9ucyUyMEludGVybmF0aW9uYWwlMjAlQzMlODlsaXRl'>Camions International Élite</option>";
        $options .= "<option value='Q2VudHJlJTIwZHUlMjBDYW1pb24lMjBCZWF1ZG9pbg=='>Centre du Camion Beaudoin</option>";
        $options .= "<option value='R2FyYWdlJTIwUm9iZXJ0'>Garage Robert</option>";
        $options .= "<option value='SW50ZXItQm91Y2hlcnZpbGxl'>Inter-Boucherville</option>";
        $options .= "<option value='TGUlMjBDZW50cmUlMjBkdSUyMENhbWlvbiUyMChBbWlhbnRlKQ=='>Le Centre du Camion (Amiante)</option>";
        $options .= "<option value='TGUlMjBDZW50cmUlMjBkdSUyMENhbWlvbiUyMChCZWF1Y2Up'>Le Centre du Camion (Beauce)</option>";
        $options .= "<option value='TGUlMjBDZW50cmUlMjBSb3V0aWVyJTIwMTk5NA=='>Le Centre Routier 1994</option>";
        $options .= "<option value='TGVzJTIwQ2FtaW9ucyUyMEJlYXVkb2lu'>Les Camions Beaudoin</option>";
        $ddlFin = "</select>";
        
        $strIndex = strrpos( $options , $succursaleToSelect );
        if( $strIndex )
            $options = substr_replace($options, " selected=selected", $strIndex + strlen($succursaleToSelect) + 1, 0);
        
        echo $ddlDebut . $options . $ddlFin;
    }
    
    public static function GetDropDownSuccursalesDemandePiece($succursaleToSelect)
    {
        //echo "----- $succursaleToSelect ------";
        $ddlDebut = "<select id='ddlSuccursales' name='ddlSuccursales' class='dropDownBonTravailDemandePieces'>";
        $options = "<option value='Q2FtaW9ucyUyMEludGVyLUxhbmF1ZGklQzMlQThyZQ=='>Camions Inter-Lanaudière</option>";
        $options .= "<option value='Q2FtaW9ucyUyMEludGVyLUFuam91'>Camions Inter-Anjou</option>";
        $options .= "<option value='SW50ZXItQm91Y2hlcnZpbGxl'>Inter-Boucherville</option>";
        $options .= "<option value='TGVzJTIwQ2FtaW9ucyUyMEJlYXVkb2lu'>Les Camions Beaudoin</option>";
        $options .= "<option value='Q2VudHJlJTIwZHUlMjBDYW1pb24lMjBCZWF1ZG9pbg=='>Centre du Camion Beaudoin</option>";
        $options .= "<option value='Q2hhcmVzdCBJbnRlcm5hdGlvbmFs'>Charest International</option>";
        $options .= "<option value='R2FyYWdlIENoYXJlc3QgZXQgRnLDqHJlcw=='>Garage Charest et Frères</option>";        
        $options .= "<option value='TGUlMjBDZW50cmUlMjBkdSUyMENhbWlvbiUyMChBbWlhbnRlKQ=='>Le Centre du Camion (Amiante)</option>";
        $options .= "<option value='TGUlMjBDZW50cmUlMjBSb3V0aWVyJTIwMTk5NA=='>Le Centre Routier 1994</option>";
        $options .= "<option value='TGUlMjBDZW50cmUlMjBkdSUyMENhbWlvbiUyMChCZWF1Y2Up'>Le Centre du Camion (Beauce)</option>";
        $options .= "<option value='Q2FtaW9ucyUyMEludGVybmF0aW9uYWwlMjAlQzMlODlsaXRl'>Camions International Élite</option>";
        $options .= "<option value='R2FyYWdlJTIwUm9iZXJ0'>Garage Robert</option>";
        $ddlFin = "</select>";
        
        $strIndex = strrpos( $options , $succursaleToSelect );
        if( $strIndex )
            $options = substr_replace($options, ' selected="selected"', $strIndex + strlen($succursaleToSelect) + 1, 0);
        
        echo $ddlDebut . $options . $ddlFin;
    }

    public static function GetDropDownSuccursalesCarrieres($succursaleToSelect)
    {
        $ddlDebut = "<select name='ddlSuccursales' id='ddlSuccursales'" . $succursaleToSelect . " class='dropDownBonTravailDemandePieces' onchange='form.submit();'>";
        $options = "<option value='Toutes'>Toutes les succursales</option>";        
        $options .= "<option value='Anjou'>Anjou - Camions Inter-Anjou</option>";
        $options .= "<option value='Boucherville'>Boucherville - Inter-Boucherville</option>";
        $options .= "<option value='Drummondville'>Drummondville - Les Camions Beaudoin</option>";
        $options .= "<option value='Joliette'>Joliette - Camions Inter-Lanaudière</option>";
        $options .= "<option value='Québec'>Québec - Camions International Élite</option>";
        $options .= "<option value='Rivière-du-Loup'>Rivière-du-Loup - Le Centre Routier 1994</option>";
        $options .= "<option value='St-Hyacinthe'>St-Hyacinthe - Centre du Camion Beaudoin</option>";
        $options .= "<option value='St-Georges'>St-Georges - Le Centre du Camion (Beauce)</option>";
        $options .= "<option value='Shawinigan'>Shawinigan - Garage Robert</option>";
        $options .= "<option value='Trois-Rivières'>Trois-Rivières - Garage Charest et Frères</option>";
        $options .= "<option value='Thetford Mines'>Thetford Mines - Le Centre du Camion (Amiante)</option>";
        $options .= "<option value='Victoriaville'>Victoriaville - Charest International</option>";
        
        $ddlFin = "</select>";

        $strIndex = strrpos( $options , "value='" . $succursaleToSelect );
        if( $strIndex )
            $options = substr_replace($options, " SELECTED", $strIndex-1, 0);

        print_r($ddlDebut . $options . $ddlFin);
    }
    
    function getBase64Image(){
        global $conn;
        //$sql = "SELECT COUNT($field) AS COUNT,$field FROM inventory WHERE DisplayOnWebSite=1 GROUP BY $field ORDER BY " . $field;
        $sql = "SELECT base64_picture FROM pictures WHERE id=4559";
        $pic = "";
        
        $result = mysqli_query($conn, $sql);

        if(mysqli_num_rows($result) > 0){
            while($row = mysqli_fetch_assoc($result)) {
                $pic = $row['picture_base64'];
            }
        }

        return $pic;
    }
    
    function getBinaryImage(){
        global $conn;
        //$sql = "SELECT COUNT($field) AS COUNT,$field FROM inventory WHERE DisplayOnWebSite=1 GROUP BY $field ORDER BY " . $field;
        $sql = "SELECT base64_picture FROM pictures WHERE id=4559";
        $pic = "";
        
        $result = mysqli_query($conn, $sql);

        if(mysqli_num_rows($result) > 0){
            while($row = mysqli_fetch_assoc($result)) {
                $pic = $row['picture_binary'];
            }
        }

        return $pic;
    }
    
    static function validateRecaptcha($captchaResponse){
        global $applicationConfig;

        $postParams = array(
            'secret'=>$applicationConfig['google.recaptcha.privateKey'],
            'response'=>$captchaResponse,
            'remoteip'=>(isset($_SERVER['HTTP_X_FORWARDED_FOR']) ? $_SERVER['HTTP_X_FORWARDED_FOR'] : $_SERVER['REMOTE_ADDR'])
        );
        $peer_key = version_compare(PHP_VERSION, '5.6.0', '<') ? 'CN_name' : 'peer_name';
        $options = array(
            'http' => array(
                'header' => "Content-type: application/x-www-form-urlencoded\r\n",
                'method' => 'POST',
                'content' => http_build_query($postParams, '', '&'),
                'verify_peer' => true,
                $peer_key => 'www.google.com',
            ),
        );
        $context = stream_context_create($options);

        $results = json_decode(file_get_contents('https://www.google.com/recaptcha/api/siteverify', false, $context));
        if(!$results)
            return false;

        return $results->success;
    
    }
    
    static function getBonTravail($succursale)
    {
        global $conn;

        $noBon = $conn->query("SELECT no_bon FROM bon_travail_succursales WHERE nom_succ_base64='$succursale'")->fetch_object()->no_bon;

        $nouveauBon = $noBon + 1;
        mysqli_query($conn, "UPDATE bon_travail_succursales SET no_bon=$nouveauBon WHERE nom_succ_base64='$succursale'");

        return $noBon;
    }
    
    public static function GetSearchFiles()
    {
        $filesToSearch = array();
        
        $filesToSearch[] = "a-propos.php";
        $filesToSearch[] = "accueil.php";
        $filesToSearch[] = "camions-occasion.php";
        $filesToSearch[] = "carrieres.php";
        $filesToSearch[] = "fournisseurs.php";
        $filesToSearch[] = "location-camions.php";
        $filesToSearch[] = "mentions-legales.php";
        $filesToSearch[] = "nous-joindre.php";
        $filesToSearch[] = "obtenir-prix.php";
        $filesToSearch[] = "page1.php";
        $filesToSearch[] = "plan-site.php";
        $filesToSearch[] = "postuler.php";
        $filesToSearch[] = "promotions-nouvelles.php";
        $filesToSearch[] = "urgence-routiere-24h.php";
        $filesToSearch[] = "camions-neufs/camions-lourds-neufs-international.php";
        $filesToSearch[] = "camions-neufs/inventaire-camion-neufs.php";
        $filesToSearch[] = "camions-neufs/isuzu.php";
        $filesToSearch[] = "camions-neufs/ottawa-kalmar.php";
        $filesToSearch[] = "nous-joindre/camions-inter-anjou.php";
        $filesToSearch[] = "nous-joindre/camions-international-elite.php";
        $filesToSearch[] = "nous-joindre/camions-isuzu.php";
        $filesToSearch[] = "nous-joindre/centre-camion-beaudoin.php";
        $filesToSearch[] = "nous-joindre/centre-routier-1994.php";
        $filesToSearch[] = "nous-joindre/charest-international.php";
        $filesToSearch[] = "nous-joindre/garage-charest-freres.php";
        $filesToSearch[] = "nous-joindre/garage-robert.php";
        $filesToSearch[] = "nous-joindre/inter-boucherville.php";
        $filesToSearch[] = "nous-joindre/inter-lanaudiere.php";
        $filesToSearch[] = "nous-joindre/le-centre-camion-amiante.php";
        $filesToSearch[] = "nous-joindre/le-centre-camion-beauce.php";
        $filesToSearch[] = "nous-joindre/les-camions-beaudoin.php";
        $filesToSearch[] = "pieces-services/apres-vente.php";
        $filesToSearch[] = "pieces-services/financement.php";
        $filesToSearch[] = "pieces-services/pieces-accessoires.php";
        $filesToSearch[] = "pieces-services/service-routier.php";
        $filesToSearch[] = "promotions-nouvelles/concours.php";
        $filesToSearch[] = "promotions-nouvelles/nouvelles.php";
        $filesToSearch[] = "promotions-nouvelles/promo-pieces.php";
        $filesToSearch[] = "promotions-nouvelles/promotions.php";
        $filesToSearch[] = "remorques-neuves/inventaire-remorques.php";
        $filesToSearch[] = "remorques-neuves/remorques-di-mond.php";
        $filesToSearch[] = "remorques-neuves/remorques-doepker.php";
        $filesToSearch[] = "vehicules-utilitaires/chargeuses-yanmar-v3-v4.php";
        $filesToSearch[] = "vehicules-utilitaires/mini-excavatrices.php";
        $filesToSearch[] = "vehicules-utilitaires/skid-steer-chargeur-chenilles.php";
        $filesToSearch[] = "vehicules-utilitaires/transporteurs-tout-terrain.php";

        return $filesToSearch;
    }
}
?>