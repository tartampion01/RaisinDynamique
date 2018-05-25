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
        $options = "<option value='Q2FtaW9ucyBJbnRlci1BbmpvdQ=='>Camions Inter-Anjou</option>";
        $options .= "<option value='Q2FtaW9ucyBJbnRlci1MYW5hdWRpw6hyZQ=='>Camions Inter-Lanaudière</option>";
        $options .= "<option value='Q2FtaW9ucyBJbnRlcm5hdGlvbmFsIMOJbGl0ZQ=='>Camions International Élite</option>";
        $options .= "<option value='Q2VudHJlIGR1IENhbWlvbiBCZWF1ZG9pbg=='>Centre du Camion Beaudoin</option>";
        $options .= "<option value='R2FyYWdlIFJvYmVydA=='>Garage Robert</option>";
        $options .= "<option value='SW50ZXItQm91Y2hlcnZpbGxl'>Inter-Boucherville</option>";
        $options .= "<option value='TGUgQ2VudHJlIGR1IENhbWlvbiAoQW1pYW50ZSk='>Le Centre du Camion (Amiante)</option>";
        $options .= "<option value='TGUgQ2VudHJlIGR1IENhbWlvbiAoQmVhdWNlKQ=='>Le Centre du Camion (Beauce)</option>";
        $options .= "<option value='TGUgQ2VudHJlIFJvdXRpZXIgMTk5NA=='>Le Centre Routier 1994</option>";
        $options .= "<option value='TGVzIENhbWlvbnMgQmVhdWRvaW4='>Les Camions Beaudoin</option>";
        $ddlFin = "</select>";
        
        $strIndex = strrpos( $options , $succursaleToSelect );
        if( $strIndex )
            $options = substr_replace($options, ' selected="selected"', $strIndex + strlen($succursaleToSelect) + 1, 0);
        
        echo $ddlDebut . $options . $ddlFin;
    }
    
    public static function GetDropDownSuccursalesDemandePiece($succursaleToSelect)
    {
        //echo "----- $succursaleToSelect ------";
        $ddlDebut = "<select id='ddlSuccursales' name='ddlSuccursales' class='dropDownBonTravailDemandePieces'>";
        $options = "<option value='Q2FtaW9ucyBJbnRlci1MYW5hdWRpw6hyZQ=='>Camions Inter-Lanaudière</option>";
        $options .= "<option value='Q2FtaW9ucyBJbnRlci1BbmpvdQ=='>Camions Inter-Anjou</option>";
        $options .= "<option value='SW50ZXItQm91Y2hlcnZpbGxl'>Inter-Boucherville</option>";
        $options .= "<option value='TGVzIENhbWlvbnMgQmVhdWRvaW4='>Les Camions Beaudoin</option>";
        $options .= "<option value='Q2VudHJlIGR1IENhbWlvbiBCZWF1ZG9pbg=='>Centre du Camion Beaudoin</option>";
        $options .= "<option value='Q2hhcmVzdCBJbnRlcm5hdGlvbmFs'>Charest International</option>";
        $options .= "<option value='R2FyYWdlIENoYXJlc3QgZXQgRnLDqHJlcw=='>Garage Charest et Frères</option>";        
        $options .= "<option value='TGUgQ2VudHJlIGR1IENhbWlvbiAoQW1pYW50ZSk='>Le Centre du Camion (Amiante)</option>";
        $options .= "<option value='TGUgQ2VudHJlIFJvdXRpZXIgMTk5NA=='>Le Centre Routier 1994</option>";
        $options .= "<option value='TGUgQ2VudHJlIGR1IENhbWlvbiAoQmVhdWNlKQ=='>Le Centre du Camion (Beauce)</option>";
        $options .= "<option value='Q2FtaW9ucyBJbnRlcm5hdGlvbmFsIMOJbGl0ZQ=='>Camions International Élite</option>";
        $options .= "<option value='R2FyYWdlIFJvYmVydA=='>Garage Robert</option>";
        $ddlFin = "</select>";
        
        $strIndex = strrpos( $options , $succursaleToSelect );
        if( $strIndex )
            $options = substr_replace($options, ' selected="selected"', $strIndex + strlen($succursaleToSelect) + 1, 0);
        
        echo $ddlDebut . $options . $ddlFin;
    }

    public static function GetDropDownSuccursalesCarrieres($succursaleToSelect=0)
    {
        $ddlDebut = "<select name='ddlSuccursales' id='ddlSuccursales'" . $succursaleToSelect . " class='dropDownBonTravailDemandePieces' onchange='form.submit();'>";
        $options = "<option value='0'>Toutes les succursales</option>";
        $options .= "<option value='1'>Camions Inter-Lanaudière</option>";
        $options .= "<option value='2'>Camions Inter-Anjou</option>";
        $options .= "<option value='3'>Inter-Boucherville</option>";
        $options .= "<option value='4'>Les Camions Beaudoin</option>";
        $options .= "<option value='5'>Centre du Camion Beaudoin</option>";
        $options .= "<option value='6'>Charest International</option>";
        $options .= "<option value='7'>Garage Charest et Frères</option>";
        $options .= "<option value='8'>Le Centre du Camion (Amiante)</option>";
        $options .= "<option value='9'>Le Centre du Camion (Beauce)</option>";
        $options .= "<option value='10'>Le Centre Routier 1994</option>";
        $options .= "<option value='11'>Camions International Élite</option>";
        $options .= "<option value='12'>Garage Robert</option>";        
        $ddlFin = "</select>";
        
        if( $succursaleToSelect != 0 )
        {
            $strIndex = strrpos( $options , "value='" . $succursaleToSelect );
            if( $strIndex )
                $options = substr_replace($options, " SELECTED", $strIndex-1, 0);
        }
        
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
}
?>