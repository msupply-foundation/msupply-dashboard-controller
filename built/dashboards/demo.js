"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stockValue_js_1 = require("./panels/stockValue.js");
var demo = {
    "id": null,
    "uid": null,
    "title": "mSupply Demo",
    "panels": [stockValue_js_1.default],
    "tags": ["mSupply"],
    "style": "dark",
    "version": 1,
    "templating": {
        "list": [
            {
                "name": "store",
                "label": "Store",
                "datasource": "PostgreSQL",
                "definition": "select distinct n.name from name n join name_store_join nsj on n.id=nsj.name_id where n.type='store' and nsj.inactive=false order by n.name",
                "query": "select distinct n.name from name n join name_store_join nsj on n.id=nsj.name_id where n.type='store' and nsj.inactive=false order by n.name",
                "regex": "",
                "includeAll": true,
                "multi": true,
                "refresh": 1
            }
        ]
    }
};
exports.default = demo;
