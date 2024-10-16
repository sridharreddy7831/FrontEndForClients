let StartFunc = ({ inDataAsArray }) => {
    var $table = $('#table');

    $table.bootstrapTable('load', inDataAsArray);
};

export { StartFunc };
