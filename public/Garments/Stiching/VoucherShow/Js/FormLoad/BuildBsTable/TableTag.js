const StartFunc = () => {
    var $table = $('#table');

    
    $table.attr("data-search", "true");
    $table.attr("data-searchable", "true");
    $table.attr("data-filter-control", "true");
    $table.attr("data-show-footer", "true");
    $table.attr("data-show-columns", "true");
    $table.attr("data-show-columns-toggle-all", "true");
    $table.attr("data-click-to-select", "true");
    $table.attr("data-filter-control", "true");
    $table.attr("data-show-export", "true");
    $table.attr("data-detail-formatter", "detailFormatter");
    $table.attr("data-id-field", "pk");
    $table.attr("data-show-toggle", "true");
    //$table.attr("data-url", "/bin/StichingPOS/DataOnly");
    

};

export { StartFunc };
