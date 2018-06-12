<script>
    pageName = 'page1.php';
</script>
<?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/header/_header.php'); ?>
<body class="body">
    <form role="form" method="POST" action="/page1.php">
    <div class="content" style="height: 80%">
        <div class="shrink">
            <div class="titrePage">
                <h1><span>Inventaire complet</span></h1>
            </div>
            <?php
                try{
                    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
                        if (isset($_POST['btnShowTruck'])) {

                            $truckResults = getNewTruck($_POST['tbShowTruck']);
                            $truckInfo = "";

                            if(mysqli_num_rows($truckResults) > 0){
                                while($row = mysqli_fetch_assoc($truckResults)) {
                                    $truckInfo .= "Marque <b>" . $row['marque'] . "</b></br>";
                                    $truckInfo .= "Modèle <b>" . $row['Model'] . "</b></br>";
                                    $truckInfo .= "Année <b>" . $row['strAnnee'] . "</b></br>";
                                    $truckInfo .= "No inventaire <b>" . $row['stock'] . "</b></br>";
                                    $truckInfo .= "No Série <b>" . $row['serial'] . "</b></br>";
                                    $truckInfo .= "Empattement <b>" . $row['wb'] . "</b></br>";
                                    $truckInfo .= "Essieu avant <b>" . $row['frontaxle'] . "</b></br>";
                                    $truckInfo .= "Essieu arrière <b>" . $row['rearaxle'] . "</b></br>";
                                    $truckInfo .= "Suspension arrière <b>" . $row['rearsuspension'] . "</b></br>";
                                    $truckInfo .= "Transmission <b>" . $row['transtype'] . "</b></br>";
                                    $truckInfo .= "Moteur <b>" . $row['engine'] . "</b></br>";
                                    $truckInfo .= "HP <b>" . $row['hp'] . "</b></br>";
                                    $truckInfo .= "Ratio essieu arrière <b>" . $row['ratio'] . "</b></br>";
                                }
                            }
                            echo $truckInfo;
                        }
                    }
                    else
                    {
                        $fieldCriteria = $marque = $model = $transtype = $engine = "";

                        if(isset($_GET['marque'])){
                            $marque = $_GET['marque'];
                            $fieldCriteria = "marque";
                        }
                        if(isset($_GET['Model'])){
                            $model = $_GET['Model'];
                            $fieldCriteria = "Model";
                        }
                        if(isset($_GET['transtype'])){
                            $transtype = $_GET['transtype'];
                            $fieldCriteria = "transtype";
                        }
                        if(isset($_GET['engine'])){
                            $engine = $_GET['engine'];
                            $fieldCriteria = "engine";
                        }
                        
                        $truckResults = false;
                        if($marque != "")
                            $truckResults = getNewTruck(0, $fieldCriteria, $marque);
                        if($model != "")
                            $truckResults = getNewTruck(0, $fieldCriteria, $model);
                        if($transtype != "")
                            $truckResults = getNewTruck(0, $fieldCriteria, $transtype);
                        if($engine != "")
                            $truckResults = getNewTruck(0, $fieldCriteria, $engine);
                        
                        $truckInfo = "";

//                        if(mysqli_num_rows($truckResults) > 0){
//                            while($row = mysqli_fetch_assoc($truckResults)) {
//                                $truckInfo .= "Marque <b>" . $row['marque'] . " " . $row['Model'] . " " . $row['config'] ."</b></br>";
//                                $truckInfo .= "No inventaire <b>" . $row['stock'] . "</b></br>";
//                                $truckInfo .= "Marque <b>" . $row['marque'] . "</b></br>";
//                                $truckInfo .= "Modèle <b>" . $row['Model'] . "</b></br>";
//                                $truckInfo .= "Moteur <b>" . $row['engine'] . "</b></br>";
//                            }
//                        }
//                        echo $truckInfo;
                        ?>
                        <!--<div class="GpcFacetedResults defaultFacet">
                        <div class=" GpcPagedResultCount">
                        <div class="GpcResultItemWrapper">
                        <?PHP if( $truckResults && (mysqli_num_rows($truckResults) > 0)){
                            while($row = mysqli_fetch_assoc($truckResults)) { ?>
                                <div class="FacetedResultTemplate DefaultResultContainer" >
                                    <a data-link="product link" href="<?php echo RD_PageLink::getHref(folder::Root,page::Details_New) . "?k=" . urlencode($row['id']); ?>">TROCK</a>
                                    <div class="ResultImage">
                                        <img src="" title="" alt="TODO">
                                        <div class="imgPromo" style="display: none;"></div>
                                    </div>
                                    <div class="ResultContent">
                                        <div class="ResultContentProductName">
                                            <h2>
                                                <span class="ProductBrokerType_String"><?PHP echo $row['marque'] ?></span>
                                                <span>&nbsp;</span>
                                                <span class="ProductBrokerType_String"><?PHP echo $row['Model'] ?></span>
                                                <span>&nbsp;</span>
                                                <span class="ProductBrokerType_String"><?PHP echo $row['config'] ?></span>
                                            </h2>
                                        </div>
                                        <div class="customField">
                                            <div class="forBroker label zoneForBroker">
                                                <span class="forBroker label spanForBroker">No d'inventaire : </span>
                                                <span class="ProductBrokerType_String"><?PHP echo $row['stock'] ?></span>
                                            </div>
                                        </div>
                                        <div class="customField">
                                                <div class="forBroker label zoneForBroker">
                                                        <span class="forBroker label spanForBroker">Marque : </span>
                                                        <span class="ProductBrokerType_String"><?PHP echo $row['marque'] ?></span>
                                                </div>
                                        </div>
                                        <div class="customField">
                                            <div class="forBroker label zoneForBroker">
                                                <span class="forBroker label spanForBroker">Modèle : </span>
                                                <span class="ProductBrokerType_String"><?PHP echo $row['Model'] ?></span>
                                            </div>
                                        </div>
                                        <div class="customField">
                                            <div class="forBroker label zoneForBroker">
                                                <span class="forBroker label spanForBroker">Moteur : </span>
                                                <span class="ProductBrokerType_String"><?PHP echo $row['engine'] ?></span>
                                            </div>
                                        </div>
                                        <div class="inPromo">
                                            <span class="ProductBrokerType_Boolean">False</span>
                                        </div>
                                        <div class="imgPlus"></div>
                                    </div>
                                    </a>
                                </div>
                        <?PHP }}?>
                        </div>
                        </div>
                        </div>-->
                        <?PHP
                    }
                }
                catch (Exception $e) {
                    echo 'Caught exception: ',  $e->getMessage(), "\n";
                }
            ?>
            <div class="contenu contenu2">
                <div>
                    International compte le plus grand réseau de concessionnaires de camions lourds, moyens et services sévères en Amérique du Nord. Réseau Dynamique, fier membre de la famille International, offre une large sélection de camions lourds adaptés aux différents types d'industries et d'usages.
                </div>
                <div class="toggle">
                    <div class="btnToggle">
                        <a name="hyperlien" onclick="toggleInformationSupplementaire('divToggle');" class="information-supplementaire" href="javascript:void(0);">Informations supplémentaires</a>
                    </div>
                    <div id="divToggle" class="showedZone" data-staticclassnames="showedZone" style="display:none;">
                        <span>
                            <h2>La puissance de l'innovation</h2>
                            <p>Que vous soyez sur la route pour la semaine ou pour la fin de semaine, vous avez besoin d'un camion qui vous permettra d'atteindre vos objectifs d'affaires. Élaborés selon les plus hautes normes de qualité obtenues par une recherche constante de l'innovation, les camions International possèdent style et puissance. Avec la fiabilité et la productivité offertes par ces véhicules vous serez en mesure de faire face à tous les défis rencontrés sur la route. International vous aide à respecter vos engagements envers vos clients et à conserver leur confiance.</p>
                            <p>Peu importe la nature et le poids de votre chargement, vous trouverez parmi l'offre de International des camions dont la maniabilité, la durabilité et le rendement en carburant sont optimaux. Quelque que soit votre entreprise, prenez les rênes d'un camion avec le cerveau et les muscles capables de suivre vos ambitions.</p>
                            <h2>Prenez le volant de vos "affaires"</h2>
                            <p>Nul ne passe autant de temps que vous sur la route. Les roues, la mécanique et la structure des camions International ont été soumises à des tests qui se sont étendus sur des millions de kilomètres. Soyez assurés que votre véhicule n'expérimentera aucune nouvelle expérience entre vos mains qui n'ait pas été déjà testée par les ingénieurs d’International. En tout temps, vous pourrez compter sur votre camion à 100 % pour vous mener, vous et votre charge, à bon port.</p>
                            <p>Avec la qualité éprouvée des camions International et la force du Réseau Dynamique vous optez pour un véhicule fiable et un service professionnel et dévoué.</p>
                            <p>
                                <a name="hyperlien" onclick="javascript:RegisterClick(this);" href="http://ca.internationaltrucks.com/" target="_blank">Visitez le site officiel de International Trucks</a>
                            </p>
                        </span>
                    </div>
                </div>
            </div>
            <div class="FacetedExplorer">
                <div class="GpcMenuWrapper">
                    <ul class="GpcMenu FacetedNavigation">
                        <!-- MARQUE -->
                        <li class="GpcMenuCategory expanded">
                            <a class="GpcMenuCategoryTitle" tabindex="">Marque</a>
                            <ul class="marque" style="">
                                <?PHP $results = selectNewTrucksDisctinctCriteria('marque', 'engine <> "-" AND marque <> "asetrail" and marque <> "doepker" AND ' ); ?>
                                    <?PHP foreach($results as $key => $value){ ?>
                                    <li class="GpcMenuItem filter-link" data-field='marque' data-value='<?PHP echo $key ?>' data-custom-criteria='engine <> "-" AND marque <> "asetrail" and marque <> "doepker" AND ' data-selected="false">
                                        <?PHP /*echo "<a class='GpcItemTitle' href='?marque=$key'>$key</a><span class='GpcMenuItemCount'>($value)</span>";}*/ ?>
                                        <?PHP echo "<a class='GpcItemTitle' href='javascript:void(0);'>$key <span class='GpcMenuItemCount'>($value)</span></a>";} ?>
                                    </li>
                            </ul>
                        </li>
                        <!-- MODÈLE -->
                        <li class="GpcMenuCategory expanded">
                            <a class="GpcMenuCategoryTitle" tabindex="">Modèle</a>
                            <ul class="Model" style="">
                                <?PHP $results = selectNewTrucksDisctinctCriteria('Model', 'engine <> "-" AND marque <> "asetrail" and marque <> "doepker" AND '); ?>
                                    <?PHP foreach($results as $key => $value){ ?>
                                    <li class="GpcMenuItem filter-link" data-field='Model' data-value='<?PHP echo $key ?>' data-custom-criteria='engine <> "-" AND marque <> "asetrail" and marque <> "doepker" AND ' data-selected="false">
                                        <?PHP /*echo "<a class='GpcItemTitle' href='?Model=$key'>$key</a><span class='GpcMenuItemCount'>($value)</span>";}*/ ?>
                                        <?PHP echo "<a class='GpcItemTitle' href='javascript:void(0);'>$key <span class='GpcMenuItemCount'>($value)</span></a>";} ?>
                                    </li>
                            </ul>
                        </li>
                        <!-- TRANSMISSION -->
                        <li class="GpcMenuCategory expanded">
                            <a class="GpcMenuCategoryTitle" tabindex="">Transmission</a>
                            <ul class="transtype" style="">
                                <?PHP $results = selectNewTrucksDisctinctCriteria('transtype', ''); ?>
                                    <?PHP foreach($results as $key => $value){ ?>
                                    <li class="GpcMenuItem filter-link" data-field='transtype' data-value='<?PHP echo str_replace('+', '%2B', $key) ?>' data-custom-criteria='' data-selected="false">
                                        <?PHP /*echo "<a class='GpcItemTitle' href='?transtype=$key'>$key</a><span class='GpcMenuItemCount'>($value)</span>";}*/ ?>
                                        <?PHP echo "<a class='GpcItemTitle' href='javascript:void(0);'>$key <span class='GpcMenuItemCount'>($value)</span></a>";} ?>
                                    </li>
                            </ul>
                        </li>
                        <!-- MOTEUR -->
                        <li class="GpcMenuCategory expanded">
                            <a class="GpcMenuCategoryTitle" tabindex="">Moteur</a>
                            <ul class="engine" style="">
                                <?PHP $results = selectNewTrucksDisctinctCriteria('engine', ''); ?>
                                    <?PHP foreach($results as $key => $value){ ?>
                                    <li class="GpcMenuItem filter-link" data-field='engine' data-value='<?PHP echo $key ?>' data-custom-criteria='' data-selected="false">
                                        <?PHP /*echo "<a class='GpcItemTitle' href='?engine=$key'>$key</a><span class='GpcMenuItemCount'>($value)</span>";}*/ ?>
                                        <?PHP echo "<a class='GpcItemTitle' href='javascript:void(0);'>$key <span class='GpcMenuItemCount'>($value)</span></a>";} ?>
                                    </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                
                <!-- Results Content -->
                <div class="GpcFacetedResults defaultFacet">
                    
                    <div class="GpcPagerCountSelector">
                        <span class="GpcItemsPerPageText">Afficher par page</span>
                        <div data-value="12" class="limit-per-page GpcDisplayOption selected">12</div>
                        <div data-value="24" class="limit-per-page GpcDisplayOption">24</div>
                        <div data-value="48" class="limit-per-page GpcDisplayOption">48</div>
                    </div>
                    <div class="GpcPagedResultCount">
                        <span class="GpcCountPrefixText">Résultats</span>
                        <span class="GpcPagedResultCurrentCount">1 - 4</span>
                        <span class="GpcBetweenCountText">sur</span>
                        <span class="GpcPagedResultTotalCount">4</span>
                    </div>
                    <div class="GpcResultPager">
                        <ul class="pagination" id="pagination"></ul>
                        <!--
                        <a disabled="disabled" class="GpcPagerFirst">&lt;&lt;</a>
                        <a disabled="disabled" class="GpcPagerPrevious">Précédent</a>
                        <a class="selected">1</a>
                        <a class="selected">1</a>
                        <a class="selected">1</a>
                        <a disabled="disabled" class="GpcPagerNext">Suivant</a>
                        <a disabled="disabled" class="GpcPagerLast">&gt;&gt;</a>
                        -->
                    </div>
                    <div class="orderBy clear">
                        <div class="libelle">
                            Classer par :
                        </div>
                        <div class="GpcResultOrderSelector">
                            <!--
                            <div class="GpcWrapFakeSelectBox">
                                <div class="GpcFakeSelectValue">Nom ascendant</div>
                                <div class="GpcFakeSelect">
                                    <div class="GpcFakeSelectOption selected" data-value="{&quot;PropertyName&quot;:4096,&quot;IdentifierGuid&quot;:&quot;00000000-0000-0000-0000-000000000000&quot;,&quot;IsDesc&quot;:false,&quot;Text&quot;:&quot;Nom ascendant&quot;}">Nom ascendant</div>
                                    <div class="GpcFakeSelectOption" data-value="{&quot;PropertyName&quot;:4096,&quot;IdentifierGuid&quot;:&quot;00000000-0000-0000-0000-000000000000&quot;,&quot;IsDesc&quot;:true,&quot;Text&quot;:&quot;Nom descendant&quot;}">Nom descendant</div>
                                    
                                </div>
                            </div>
                            -->
                            <select name="SearchSorting" class="search-sorting" style="font-size: .8em; line-height: 3em; padding: .15em;">
                                <option value="asc">Nom ascendant</option>
                                <option value="desc">Nom descendant</option>
                            </select>
                        </div>
                    </div>
                    
                    <div class="GpcResultItemWrapper results-container">
                        
                        <!-- Template product -->
                        
                    </div>
                    <div class="GpcFooter clear">
                        <div class="GpcPagedResultCount">
                            <span class="GpcCountPrefixText">Résultats</span>
                            <span class="GpcPagedResultCurrentCount">1 - 4</span>
                            <span  class="GpcBetweenCountText">sur</span>
                            <span class="GpcPagedResultTotalCount">4</span>
                        </div>
                        <div class="GpcResultPager">
                            <ul class="pagination" id="pagination"></ul>
                            <!--
                            <a disabled="disabled" class="GpcPagerFirst">&lt;&lt;</a>
                            <a disabled="disabled" class="GpcPagerPrevious">Précédent</a>
                            <div style="display: inline-block">
                                <a class="selected actual-page">1</a>
                            </div>
                            <a disabled="disabled" class="GpcPagerNext">Suivant</a>
                            <a disabled="disabled" class="GpcPagerLast">&gt;&gt;</a>
                            -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <div class="FacetedExplorerClear GpcClear">
                </div>
    </div>
        <!--
        exemples REST
        <a href="_includes/objects/read.php?field=marque&value=international">INTERNATIONAL</a></br>
        <a href="_includes/objects/read.php?field=Model&value=4300">4300</a></br>
        <a href="_includes/objects/read.php?field=transtype&value=AISIN A460">AISIN A460</a></br>
        <a href="_includes/objects/read.php?field=marque&value=international">INTERNATIONAL</a></br>
        <a href="_includes/objects/read.php?field=marque&value=international">INTERNATIONAL</a></br>
        <a href="_includes/objects/read.php?field=marque&value=international">INTERNATIONAL</a></br>        
        ID:<input type="text" id="tbShowTruck" name="tbShowTruck" value="" text="" />
        <input type="submit" id="btnShowTruck" name="btnShowTruck" text="Afficher">
        -->
        <?php
            //echo '<img src="' . RD_Utils::getBase64Image() . '" />';
            //echo '<img src="data:image/jpeg;base64,' . RD_Utils::getBinaryImage() . '" />';
        ?>
        <?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/footer/_footer.php'); ?>
    </form>
    
    <div class="loading-overlay">Loading&#8230;</div>

<!-- Start : Javascript template -->

<img class="" name="image" title="" src="_assets/images/camions/noimage.png" alt="Camions, Remorques et Véhicules">

<script id="resultsTemplate" type="text/x-jquery-tmpl">
    
    <div class="FacetedResultTemplate DefaultResultContainer">
        <a href="details_new.php?id=${encodeURI(btoa(id))}">
            <div class="ResultImage">                
                <img src="${pictures[0]}" title="" alt="">
                <div class="imgPromo" style="display: none;"></div>
            </div>
            <div class="ResultContent">
                <div class="ResultContentProductName">
                    <h2>
                        <span class="ProductBrokerType_String">${marque}</span>
                        <span>&nbsp;</span>
                        <span class="ProductBrokerType_String">${Model}</span>
                        <span>&nbsp;</span>
                        <span>
                            <span class="ProductBrokerType_String">6 x 4</span>
                        </span>
                    </h2>
                </div>
                <div class="customField">
                    <div class="forBroker label zoneForBroker">
                        <span class="forBroker label spanForBroker">No d'inventaire : </span>
                        <span class="ProductBrokerType_String">${stock}</span>
                    </div>
                </div>
                <div class="customField">
                    <div class="forBroker">
                        <span class="forBroker">Marque : </span>
                            <span>${marque}</span>
                    </div>
                </div>
                <div class="customField">
                    <div class="forBroker">
                        <span class="forBroker">Modèle : </span>
                        <span class="ProductBrokerType_String">${Model}</span>
                    </div>
                </div>
                <div class="customField">
                    <div class="forBroker">
                        <span class="forBroker">Moteur : </span>
                        <span class="ProductBrokerType_String">${engine}</span>
                    </div>
                </div>
                <div class="inPromo">
                    <span class="ProductBrokerType_Boolean">False</span>
                </div>
                <div class="imgPlus"></div>
            </div>
        </a>
    </div>
</script>
<!-- End : Javascript template -->
</body>
</html>
