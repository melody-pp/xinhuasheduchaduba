/**
 * Created by Administrator on 2017/1/23.
 */

var tongjiguanli = function(){
    var chart = null;
    var initTable1 = function () {

        var table = $('#sample_1');

        // begin first table
        table.dataTable({
            "searching": false,
            // Internationalisation. For more info refer to http://datatables.net/manual/i18n
            "language": {
                "lengthMenu": " ",
                "info": "第 _PAGE_ 页，共 _PAGES_ 页，共 _TOTAL_ 条",
                "processing": "加载中...",
                "zeroRecords": "没有查询到相关数据",
                "infoEmpty": "",
                "paginate": {
                    "previous": "上一页",
                    "next": "下一页",
                    "last": "末页",
                    "first": "首页"
                }
            },

            // Uncomment below line("dom" parameter) to fix the dropdown overflow issue in the datatable cells. The default datatable layout
            // setup uses scrollable div(table-scrollable) with overflow:auto to enable vertical scroll(see: assets/global/plugins/datatables/plugins/bootstrap/dataTables.bootstrap.js).
            // So when dropdowns used the scrollable div should be removed.
            //"dom": "<'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r>t<'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>",

            "bStateSave": true, // save datatable state(pagination, sort, etc) in cookie.

            "columns": [{
                "orderable": false
            }, {
                "orderable": true
            }, {
                "orderable": false
            }, {
                "orderable": false
            }],
            "lengthMenu": [
                [5, 10, 50, 100],
                [5, 10, 50, 100] // change per page values here
            ],
            // set the initial value
            "pageLength": 8,
            "pagingType": "bootstrap_full_number",
            "columnDefs": [{  // set default column settings
                'orderable': false,
                'targets': [0]
            }, {
                "searchable": false,
                "targets": [0]
            }],
            "order": [
                [1, "asc"]
            ] // set first column as a default sort by asc
        });

        var tableWrapper = jQuery('#sample_1_wrapper');

        table.find('.group-checkable').change(function () {
            var set = jQuery(this).attr("data-set");
            var checked = jQuery(this).is(":checked");
            jQuery(set).each(function () {
                if (checked) {
                    $(this).attr("checked", true);
                    $(this).parents('tr').addClass("active");
                } else {
                    $(this).attr("checked", false);
                    $(this).parents('tr').removeClass("active");
                }
            });
            jQuery.uniform.update(set);
        });

        table.on('change', 'tbody tr .checkboxes', function () {
            $(this).parents('tr').toggleClass("active");
        });

        tableWrapper.find('.dataTables_length select').addClass("form-control input-xsmall input-inline"); // modify table per page dropdown
    };

    var handleInitClickBzt = function(){
        $('#sample_editable_1_bzt').on("click", function(){
            $('#tongjiguanli_bzt').modal('show');
            Metronic.updateUniform();
        });
        $('#sample_editable_1_zzt').on("click", function(){
            $('#tongjiguanli_zzt').modal('show');
            Metronic.updateUniform();
        });
    };


    return {

        //main function to initiate the module
        init: function () {
            if (!jQuery().dataTable) {
                return;
            }

            initTable1();
            handleInitClickBzt();

        },
        initPieCharts: function() {

            var data = [];

            data[0] = {
                label:"送审稿",
                data: 1010
            };

            data[1] = {
                label:"报批件",
                data: 100
            };

            data[2] = {
                label:"采访活动报名",
                data: 60
            };


            data[3] = {
                label:"电话记录",
                data: 500
            };

            // GRAPH 1
            if ($('#pie_chart_1').size() !== 0) {
                $.plot($("#pie_chart_1"), data, {
                    series: {
                        pie: {
                            show: true
                        }
                    },
                    legend: {
                        show: false
                    }
                });
            }
        },
        initBarCharts: function() {

            // bar chart:
            var data = GenerateSeries(0);

            function GenerateSeries(added) {
                var data = [];

                data.push([1,1010]);
                data.push([2,100]);
                data.push([3,60]);
                data.push([4,500]);

                return data;
            }

            var options = {
                series: {
                    bars: {
                        show: true
                    }
                },
                bars: {
                    barWidth: 0.8,
                    lineWidth: 0, // in pixels
                    shadowSize: 0,
                    align: 'left'
                },

                grid: {
                    tickColor: "#eee",
                    borderColor: "#eee",
                    borderWidth: 1
                }
            };

            if ($('#chart_1_1').size() !== 0) {
                $.plot($("#chart_1_1"), [{
                    data: data,
                    lines: {
                        lineWidth: 1,
                    },
                    shadowSize: 0
                }], options);
            }
        }

    };
}();