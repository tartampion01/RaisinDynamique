<?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/header/_header.php'); ?>
<script type='text/javascript'>var _N = 1;</script>
<script src="../_assets/js/camions-rest.js" type="text/javascript"></script>
<body class="body"><?php RD_Utils::write_Gtag() ?>
    <form role="form" method="POST" action="/<?php echo $NOMPAGE; ?>">
    <div class="">
        <div class="content search-result">
            <div class="shrink">
                <div class="titrepage">
                    <h1>Camions neufs International</h1>
                </div>
                <div class="contenu contenu2">
                    <div class="more-info">
                        International compte le plus grand réseau de concessionnaires de camions lourds, moyens et services sévères en Amérique du Nord. Réseau Dynamique, fier membre de la famille International, offre une large sélection de camions lourds adaptés aux différents types d'industries et d'usages.
                    </div>
                    <div class="toggle">
                        <div class="btnToggle">
                            <a class="information-supplementaire" href="javascript:void(0);">Informations supplémentaires</a>
                        </div>
                        <div id="divToggle" class="showedZone" style="display:none;">
                            <span>
                                <h2>La puissance de l'innovation</h2>
                                <p>Que vous soyez sur la route pour la semaine ou pour la fin de semaine, vous avez besoin d'un camion qui vous permettra d'atteindre vos objectifs d'affaires. Élaborés selon les plus hautes normes de qualité obtenues par une recherche constante de l'innovation, les camions International possèdent style et puissance. Avec la fiabilité et la productivité offertes par ces véhicules vous serez en mesure de faire face à tous les défis rencontrés sur la route. International vous aide à respecter vos engagements envers vos clients et à conserver leur confiance.</p>
                                <p>Peu importe la nature et le poids de votre chargement, vous trouverez parmi l'offre de International des camions dont la maniabilité, la durabilité et le rendement en carburant sont optimaux. Quelque que soit votre entreprise, prenez les rênes d'un camion avec le cerveau et les muscles capables de suivre vos ambitions.</p>
                                <h2>Prenez le volant de vos "affaires"</h2>
                                <p>Nul ne passe autant de temps que vous sur la route. Les roues, la mécanique et la structure des camions International ont été soumises à des tests qui se sont étendus sur des millions de kilomètres. Soyez assurés que votre véhicule n'expérimentera aucune nouvelle expérience entre vos mains qui n'ait pas été déjà testée par les ingénieurs d’International. En tout temps, vous pourrez compter sur votre camion à 100 % pour vous mener, vous et votre charge, à bon port.</p>
                                <p>Avec la qualité éprouvée des camions International et la force du Réseau Dynamique vous optez pour un véhicule fiable et un service professionnel et dévoué.</p>
                                <p>"
                                    <a href="<?php echo RD_PageLink::getHref(folder::EXTERNAL,page::EXTERNAL_INTERNATIONAL)?>" target="_blank">Visitez le site officiel de International Trucks</a>
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
                                    <?PHP $results = selectNewTrucksDisctinctCriteria('marque', ' marque="international" AND ', 'COUNT', 'DESC' ); ?>
                                        <?PHP foreach($results as $key => $value){ ?>
                                        <li class="GpcMenuItem filter-link" data-field='marque' data-value='<?PHP echo $key ?>' data-custom-criteria=' marque="international" AND ' data-selected="false">
                                            <?PHP /*echo "<a class='GpcItemTitle' href='?marque=$key'>$key</a><span class='GpcMenuItemCount'>($value)</span>";}*/ ?>
                                            <?PHP echo "<a class='GpcItemTitle' href='javascript:void(0);'>$key <span class='GpcMenuItemCount'>($value)</span></a>";} ?>
                                        </li>
                                </ul>
                            </li>
                            <!-- MODÈLE -->
                            <li class="GpcMenuCategory expanded">
                                <a class="GpcMenuCategoryTitle" tabindex="">Modèle</a>
                                <ul class="Model" style="">
                                    <?PHP $results = selectNewTrucksDisctinctCriteria('Model', ' marque="international" AND ', 'Model', 'ASC'); ?>
                                        <?PHP foreach($results as $key => $value){ ?>
                                        <li class="GpcMenuItem filter-link" data-field='Model' data-value='<?PHP echo $key ?>' data-custom-criteria=' marque="international" AND ' data-selected="false">
                                            <?PHP /*echo "<a class='GpcItemTitle' href='?Model=$key'>$key</a><span class='GpcMenuItemCount'>($value)</span>";}*/ ?>
                                            <?PHP echo "<a class='GpcItemTitle' href='javascript:void(0);'>$key <span class='GpcMenuItemCount'>($value)</span></a>";} ?>
                                        </li>
                                </ul>
                            </li>
                            <!-- TRANSMISSION -->
                            <li class="GpcMenuCategory expanded">
                                <a class="GpcMenuCategoryTitle" tabindex="">Transmission</a>
                                <ul class="transtype" style="">
                                    <?PHP $results = selectNewTrucksDisctinctCriteria('transtype', '', 'transtype', 'ASC'); ?>
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
                                    <?PHP $results = selectNewTrucksDisctinctCriteria('engine', '', 'engine', 'ASC'); ?>
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
                        <div class="GpcPagedResultCount" style="display: none;">
                            <span class="GpcCountPrefixText">Résultats</span>
                            <span class="GpcPagedResultCurrentCount">1 - 4</span>
                            <span class="GpcBetweenCountText">sur</span>
                            <span class="GpcPagedResultTotalCount">4</span>
                        </div>
                        <div class="GpcResultPager">
                            <ul class="pagination" id="pagination"></ul>
                        </div>
                        <div class="orderBy clear">
                            <div class="libelle">
                                Classer par :
                            </div>
                            <div class="GpcResultOrderSelector">
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
                            <div class="GpcPagedResultCount" style="display: none;">
                                <span class="GpcCountPrefixText">Résultats</span>
                                <span class="GpcPagedResultCurrentCount">1 - 4</span>
                                <span  class="GpcBetweenCountText">sur</span>
                                <span class="GpcPagedResultTotalCount">4</span>
                            </div>
                            <div class="GpcResultPager">
                                <ul class="pagination" id="pagination"></ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="FacetedExplorerClear GpcClear"></div>
        </div>
    </div>    
    </form>
    <?php require_once($_SERVER['DOCUMENT_ROOT'] . '/../_includes/footer/_footer.php'); ?>
    
    <div class="loading-overlay">Loading&#8230;</div>
    
    <!-- Start : Javascript template -->
    <script id="resultsTemplate" type="text/x-jquery-tmpl">

        <div class="FacetedResultTemplate DefaultResultContainer">
            <a href="../details_new.php?id=${encodeURI(btoa(id))}">
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
                            <span class="ProductBrokerType_String">${config}</span>
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
    
    <script>
    $( document ).ready(function() {
    
        // On page load, trigger corresponding menu item
        $("li[data-value='International']").trigger('click');
    });
    </script>
</body>
</html>