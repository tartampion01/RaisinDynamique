$( document ).ready(function() {
    
    // Bind click event on each filter link
    $('.filter-link').each(function(){
        
        $(this).on('click', function() {
            
            var selected = $(this).data('selected');
            //$('.filter-link').removeClass('selected');
            //$('.filter-link').data('selected', false);
            
            if(selected == true) {
                $(this).data('selected', false);
                $(this).removeClass('selected');
                //$('.filter-link').show();
                
                // Check if at leat we have a custom criteria
                var customCriteria = '';
                $('.GpcMenuCategory .filter-link.selected').each(function() {
                    if(customCriteria == '')
                        customCriteria = $(this).data('custom-criteria');
                });
                
                if(customCriteria == '') {
                    customCriteria = '';
                }
                
                fetchUsedRecords('', '', customCriteria, true);
            }
            else {
                $(this).addClass('selected');
                $(this).data('selected', true);
                
                // Get search params
                var field = $(this).attr('data-field');
                var value = $(this).attr('data-value');
                
                var customCriteria = $(this).data('custom-criteria');
                fetchUsedRecords(field, value, customCriteria, true);
            }
        });
    });
    
    // Bind click event on limit per page links
    $('.limit-per-page').on('click', function() {
        $('.limit-per-page').removeClass('selected');
        $(this).addClass('selected');
        
        var field = $('.GpcMenu').find('li.selected').data('field');
        var value = $('.GpcMenu').find('li.selected').data('value');
        var customCriteria = $('.GpcMenu').find('li.selected').data('custom-criteria');
        
        if(field == undefined) {
            field = '';
        }
        if(value == undefined) {
            value = '';
        }
        if(customCriteria == undefined) {
            customCriteria = '';
        }
        
        fetchUsedRecords(field, value, customCriteria, true);
    });
    
    // Bind click event on search sorting dropdown
    $('.search-sorting').on('change', function() {
        var field = $('.GpcMenu').find('li.selected').data('field');
        var value = $('.GpcMenu').find('li.selected').data('value');
        var customCriteria = $('.GpcMenu').find('li.selected').data('custom-criteria');
        
        if(field == undefined) {
            field = '';
        }
        if(value == undefined) {
            value = '';
        }
        if(customCriteria == undefined) {
            customCriteria = '';
        }
        
        fetchUsedRecords(field, value, customCriteria, true);
    });
    
    // On document load, search for all products (with default customCriteria)
    //fetchUsedRecords('', '', 'engine <> "-" AND marque <> "asetrail" and marque <> "doepker" AND ', true);
});

function fetchUsedRecords(field, value, customCriteria, resetPage) {
    
    // Show loading spinner
    $('.loading-overlay').show();

    var currentPage = 1;
    if(typeof $pagination !== 'undefined' && resetPage == false)
        currentPage = $pagination.twbsPagination('getCurrentPage');
    else
        currentPage = 1;
    var limitPerPage = $('.GpcPagerCountSelector').children('div.selected').html();

    // Get sortBy value
    var sortBy = $('.search-sorting option:selected').val();
    
    var params = {
        'field' : field,
        'value' : value,
        'customCriteria' : customCriteria,
        'sortBy' : sortBy,
        'currentPage' : currentPage,
        'limitPerPage' : limitPerPage,
        'arrayFilters' : getSearchTerms()
    };

    $.ajax({
        url: 'http://reseaudynamique.com/api/readUsed.php',
        type: "GET",
        data: 'params='+JSON.stringify(params),
        dataType: 'json',
        async: true,
        success: function(data){

            if(data.records != null) {
                if(data.records.length > 0) {

                    // Empty out the div that will hold the generated content
                    $(".results-container").empty();
                    // Call the tmpl function, pass in the data and have it append to resultsTemplate
                    $("#resultsTemplate").tmpl( data.records ).appendTo(".results-container");

                    // Get total page count
                    var totalPages = Math.ceil(data.countRows / limitPerPage);
                    
                    // Set total records count
                    $('.GpcPagedResultTotalCount').html(data.countRows);
                    
                    // Set page results current count
                    var resultsRange = '';
                    if(currentPage == 1)
                        resultsRange = '1 - ' + limitPerPage;
                    else if(currentPage == totalPages)
                        resultsRange = parseInt(limitPerPage * currentPage - limitPerPage + 1) + ' - ' + parseInt(data.countRows);
                    else
                        resultsRange = parseInt(limitPerPage * currentPage - limitPerPage + 1) + ' - ' + parseInt(limitPerPage * currentPage);
                    
                    $('.GpcPagedResultCurrentCount').html(resultsRange);
                    
                    // Set paginator control
                    $pagination = $('.pagination')
                    $pagination.twbsPagination('destroy');
                    $pagination.twbsPagination($.extend({}, {
                        startPage: currentPage,
                        totalPages: totalPages,
                        visiblePages: 5,
                        first: '&lt;&lt;',
                        prev: 'Précédent',
                        next: 'Suivant',
                        last: '&gt;&gt;',
                        initiateStartPageClick: false,
                        onPageClick: function (event, page) {
                            
                            fetchUsedRecords(field, value, customCriteria, false);
                        }
                    }));
                    
                    // Reset filter links count number
                    $(".GpcMenuCategory").each(function() {

                        var countField = $(this).find('.filter-link:first').data('field');
                        var countCustomCriteria = $(this).find('.filter-link:first').data('custom-criteria');
                        var countParams = {
                            'field' : countField,
                            'value' : value,
                            'customCriteria' : countCustomCriteria,
                            'searchType' : field,
                            'arrayFilters' : getSearchTerms()
                        };

                        $.ajax({
                            url: 'http://reseaudynamique.com/api/read-count-filterUsed.php',
                            type: "GET",
                            data: 'params='+JSON.stringify(countParams),
                            dataType: 'json',
                            async: false,
                            success: function(dataCount){

                                if(Object.keys(dataCount).length) {

                                    //console.log(dataCount);
                                    // Update every filter links count
                                    $('.GpcMenuCategory').find('.filter-link[data-field="'+countField+'"]').each(function(index) {

                                        $(this).hide();

                                        for(i=0; i<dataCount.length; i++) {
                                            //console.log($(this).attr('data-value') + ' = ' + $(this).attr('data-value'));
                                            if (Object.values(dataCount[i]).indexOf($(this).attr('data-value').replace('%2B', '+')) > -1) {

                                                $(this).find('.GpcMenuItemCount').html('(' + dataCount[i].count + ')');
                                                $(this).show();
                                            }
                                        }
                                    });
                                }
                            }
                        });
                    });
                }
                else {
                    $('.results-container').html('AUCUN PRODUIT');
                }
            }
            else {
                $('.results-container').html(data.message);
            }
            
            // Scroll page to top of search results
            /*$('html, body').animate({
                scrollTop: $(".GpcMenuWrapper").offset().top
            }, 750);*/

            // Hide loading spinner
            $('.loading-overlay').hide();
        },
        error: function(xhr, status, error) {
            $('.results-container').html('ERREUR DU SERVEUR');
        }
    });
}

function getSearchTerms() {
    
    var where = [];
    var counter = 0;
    
    $('.GpcMenuCategory .filter-link.selected').each(function() {
        //console.log($(this).parents('ul').attr('class'));
        
        var field = $(this).parents('ul').attr('class');
        var value = $(this).attr('data-value');
        
        /*where[counter].field = field;
        where[counter].value = value;
        console.log(where);*/
        
        var newElement = {};
        newElement.field = field;
        newElement.value = value;
        where.push(newElement);
        
        counter++;
    });
    
    //console.log(where);
    return where;
}

// Function that refresh the paginator control
function refreshPagination() {
    $('.pagination').empty();
    $('.pagination').removeData("twbs-pagination");
    $('.pagination').unbind("page");
}