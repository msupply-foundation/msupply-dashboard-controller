"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gridPos = {
    x: 0,
    y: 0,
    w: 10,
    h: 2
};
var valueMaps = [
    {
        op: "=",
        text: "N/A",
        value: "null"
    }
];
var targets = [
    {
        rawQuery: true,
        rawSql: "\n      select current_date as time, sum(a.value)\n      from aggregator a\n      join store s on a.storeid = s.id\n      where a.dataelement='totalStockValue' and s.name in ([[store]])\n      group by 1\n    ",
    }
];
var gauge = {
    maxValue: 100,
    minValue: 0,
    show: false,
    thresholdLabels: false,
    thresholdMarkers: true
};
var stockValue = {
    id: 1,
    title: "Total Stock Value",
    type: "singlestat",
    format: "currencyUSD",
    prefix: "USD",
    prefixFontSize: "50%",
    valueName: "avg",
    valueFontSize: "80%",
    datasource: "PostgreSQL",
    gridPos: gridPos,
    valueMaps: valueMaps,
    targets: targets,
    gauge: gauge,
};
exports.default = stockValue;
