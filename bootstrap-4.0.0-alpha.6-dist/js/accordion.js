$(function () {
        var active = true;
        $('#collapse-init').click(function () {
            if (active) {
                active = false;
                $('.panel-collapse').collapse('show');
                $('.panel-title').attr('data-toggle', '');
                $(this).text('Collapse All');
            } else {
                active = true;
                $('.panel-collapse').collapse('hide');
                $('.panel-title').attr('data-toggle', 'collapse');
                $(this).text('Expand All');
            }
        });
        $('#accordion').on('show.bs.collapse', function () {
            if (active) $('#accordion .in').collapse('hide');
        });
        });

$(function () {
        var active = true;
        $('#collapse-init2').click(function () {
            if (active) {
                active = false;
                $('.panel-collapse2').collapse('show');
                $('.panel-title2').attr('data-toggle', '');
                $(this).text('Collapse All');
            } else {
                active = true;
                $('.panel-collapse2').collapse('hide');
                $('.panel-title2').attr('data-toggle', 'collapse');
                $(this).text('Expand All');
            }
        });
        $('#accordionTwo').on('show.bs.collapse', function () {
            if (active) $('#accordionTwo .in').collapse('hide');
        });
        });