/**
 * Created by Administor on 2017/1/23.
 */

var zhibanrizhi = function(){
    var chart = null;
    var initTable1 = function () {

        var table = $('#zhibanrizhi_table_id');

        // begin first table
        table.dataTable({
            "searching": false, // false隐藏右上角的搜索框,true则显示
            "processing": false,
            "filter":false,
            //"sort": false,
            // Internationalisation. For more info refer to http://datatables.net/manual/i18n
            "language": {
                "lengthMenu": "",
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
                "orderable": true
            }, {
                "orderable": true
            }, {
                "orderable": true
            }, {
                "orderable": true
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
            "pageLength": 5,
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

            Metronic.initUniform();
        });
    };

    // var handleInitAmChart = function(){
    //     chart = AmCharts.makeChart( "chartdiv", {
    //         "type": "pie",
    //         "theme": "light",
    //         "dataProvider": [ {
    //             "country": "电话记录",
    //             "value": 500
    //         }, {
    //             "country": "采访活动报名",
    //             "value": 60
    //         }, {
    //             "country": "报批件",
    //             "value": 100
    //         }, {
    //             "country": "送审稿",
    //             "value": 1010
    //         }],
    //         "valueField": "value",
    //         "titleField": "country",
    //         "outlineAlpha": 0.4,
    //         "depth3D": 15,
    //         "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
    //         "angle": 30,
    //         "export": {
    //             "enabled": true
    //         }
    //     } );
    // };


    var initChartSample2 = function() {
        var chart = AmCharts.makeChart("chart_2", {
            "type": "serial",
            "theme": "light",

            "fontFamily": 'Open Sans',
            "color":    '#888888',

            "legend": {
                "equalWidths": false,
                "useGraphSettings": true,
                "valueAlign": "left",
                "valueWidth": 120
            },
            "dataProvider": [{
                "date": "1月",
                "distance": 227,
                "townName": "",
                "townName2": " ",
                "townSize": 25,
                "latitude": 40.71,
                "duration": 408
            }, {
                "date": "2月",
                "distance": 371,
                "townName": "",
                "townSize": 14,
                "latitude": 38.89,
                "duration": 482
            }, {
                "date": "3月",
                "distance": 433,
                "townName": "",
                "townSize": 6,
                "latitude": 34.22,
                "duration": 562
            }, {
                "date": "4月",
                "distance": 345,
                "townName": "",
                "townSize": 7,
                "latitude": 30.35,
                "duration": 379
            }, {
                "date": "5月",
                "distance": 480,
                "townName": "",
                "townName2": "",
                "townSize": 10,
                "latitude": 25.83,
                "duration": 501
            }, {
                "date": "6月",
                "distance": 386,
                "townName": "",
                "townSize": 7,
                "latitude": 30.46,
                "duration": 443
            }, {
                "date": "7月",
                "distance": 348,
                "townName": "",
                "townSize": 10,
                "latitude": 39.94,
                "duration": 405
            },{
                "date": "8月",
                "distance": 248,
                "townName": "",
                "townSize": 10,
                "latitude": 19.94,
                "duration": 255
            },{
                "date": "9月",
                "distance": 288,
                "townName": "",
                "townSize": 10,
                "latitude": 29.94,
                "duration": 385
            },{
                "date": "10月",
                "distance": 388,
                "townName": "",
                "townSize": 10,
                "latitude": 29.94,
                "duration": 405
            },{
                "date": "11月",
                "distance": 448,
                "townName": "",
                "townSize": 10,
                "latitude": 29.94,
                "duration": 505
                }, {
                "date": "12月",
                "distance": 238,
                "townName": "",
                "townName2": "",
                "townSize": 16,
                "latitude": 29.76,
                "duration": 309
            }],
            "valueAxes": [{
                "id": "distanceAxis",
                "axisAlpha": 0,
                "gridAlpha": 0,
                "position": "left",
                "title": "报批件"
            }],
            "graphs": [{
                "alphaField": "alpha",
                "balloonText": "[[value]] miles",
                "dashLengthField": "dashLength",
                "fillAlphas": 0.7,
                "legendValueText": "[[value]] mi",
                "title": "报批件",
                "type": "column",
                "valueField": "distance",
                "valueAxis": "distanceAxis"
            }, {
                "balloonText": "latitude:[[value]]",
                "bullet": "round",
                "bulletBorderAlpha": 1,
                "useLineColorForBulletBorder": true,
                "bulletColor": "#FFFFFF",
                "bulletSizeField": "townSize",
                "dashLengthField": "dashLength",
                "descriptionField": "townName",
                "labelPosition": "right",
                "labelText": "[[townName2]]",
                "legendValueText": "[[description]]/[[value]]",
                "title": "审稿件",
                "fillAlphas": 0,
                "valueField": "latitude",
                "valueAxis": "latitudeAxis"
            }, {
                "bullet": "square",
                "bulletBorderAlpha": 1,
                "bulletBorderThickness": 1,
                "dashLengthField": "dashLength",
                "legendValueText": "[[value]]",
                "title": "电话记录",
                "fillAlphas": 0,
                "valueField": "duration",
                "valueAxis": "durationAxis"
            }],
            "chartCursor": {
                "categoryBalloonDateFormat": "DD",
                "cursorAlpha": 0.1,
                "cursorColor": "#000000",
                "fullWidth": true,
                "valueBalloonsEnabled": false,
                "zoomable": false
            },
            "dataDateFormat": "YYYY-MM-DD",
            "categoryField": "date",
            "exportConfig": {
                "menuBottom": "18px",
                "menuRight": "18px",
                "menuItems": [{
                    "icon": Metronic.getGlobalPluginsPath() + "amcharts/amcharts/images/export.png",
                    "format": 'png'
                }]
            }
        });

        $('#chart_2').closest('.portlet').find('.fullscreen').click(function() {
            chart.invalidateSize();
        });
    };

    var initChartSampleTwo = function() {
        var chart = AmCharts.makeChart("chartTwo", {
            "type": "serial",
            "theme": "light",

            "fontFamily": 'Open Sans',
            "color":    '#888888',

            "legend": {
                "equalWidths": false,
                "useGraphSettings": true,
                "valueAlign": "left",
                "valueWidth": 120
            },
            "dataProvider": [{
                "date": "1月",
                "townName": "",
                "townName2": "",
                "townSize": 25,
                "latitude": 40.71,
                "duration": 408
            }, {
                "date": "2月",
                "townName": "",
                "townSize": 14,
                "latitude": 38.89,
                "duration": 482
            }, {
                "date": "3月",
                "townName": "",
                "townSize": 6,
                "latitude": 34.22,
                "duration": 562
            }, {
                "date": "4月",
                "townName": "",
                "townSize": 7,
                "latitude": 30.35,
                "duration": 379
            }, {
                "date": "5月",
                "townName": "",
                "townName2": "",
                "townSize": 10,
                "latitude": 25.83,
                "duration": 501
            }, {
                "date": "6月",
                "townName": "",
                "townSize": 7,
                "latitude": 30.46,
                "duration": 443
            }, {
                "date": "7月",
                "townName": "",
                "townSize": 10,
                "latitude": 29.94,
                "duration": 405
            }, {
                "date": "8月",
                "townName": "",
                "townName2": "",
                "townSize": 10,
                "latitude": 25.83,
                "duration": 501
            }, {
                "date": "9月",
                "townName": "",
                "townSize": 7,
                "latitude": 30.46,
                "duration": 443
            }, {
                "date": "10月",
                "townName": "",
                "townSize": 10,
                "latitude": 29.94,
                "duration": 405
            }, {
                "date": "11月",
                "townName": "",
                "townSize": 10,
                "latitude": 29.94,
                "duration": 405
            }, {
                "date": "12月",
                "townName": "",
                "townName2": "",
                "townSize": 16,
                "latitude": 29.76,
                "duration": 309
            }],
            "valueAxes": [{
                "id": "latitudeAxis",
                "axisAlpha": 0,
                "gridAlpha": 0,
                "labelsEnabled": "left",
                "position": "left"
            }],
            "graphs": [{
                "balloonText": "latitude:[[value]]",
                "bullet": "round",
                "bulletBorderAlpha": 1,
                "useLineColorForBulletBorder": true,
                "bulletColor": "#FFFFFF",
                "bulletSizeField": "townSize",
                "dashLengthField": "dashLength",
                "descriptionField": "townName",
                "labelPosition": "right",
                "labelText": "[[townName2]]",
                "legendValueText": "[[description]]/[[value]]",
                "title": "采访数量",
                "fillAlphas": 0,
                "valueField": "latitude",
                "valueAxis": "latitudeAxis"
            }, {
                "bullet": "square",
                "bulletBorderAlpha": 1,
                "bulletBorderThickness": 1,
                "dashLengthField": "dashLength",
                "legendValueText": "[[value]]",
                "title": "线性（采访数量）",
                "fillAlphas": 0,
                "valueField": "duration",
                "valueAxis": "durationAxis"
            }],
            "chartCursor": {
                "categoryBalloonDateFormat": "DD",
                "cursorAlpha": 0.1,
                "cursorColor": "#000000",
                "fullWidth": true,
                "valueBalloonsEnabled": false,
                "zoomable": false
            },
            "dataDateFormat": "YYYY-MM-DD",
            "categoryField": "date",
            "exportConfig": {
                "menuBottom": "20px",
                "menuRight": "22px",
                "menuItems": [{
                    "icon": Metronic.getGlobalPluginsPath() + "amcharts/amcharts/images/export.png",
                    "format": 'png'
                }]
            }
        });

        $('#chart_2').closest('.portlet').find('.fullscreen').click(function() {
            chart.invalidateSize();
        });
    }

    return {

        //main function to initiate the module
        init: function () {
            if (!jQuery().dataTable) {
                return;
            }

            initTable1();
            handleInitClickBzt();
            initChartSample2();
            initChartSampleTwo();
            // handleInitAmChart();
        }

    };
}();