const panel = {
  id: 1,
  title: "Total Stock Value",
  gridPos: { x: 0, y: 0, w: 10, h: 2 }
}

const style = {
  type: "singlestat",
  format: "currencyUSD",
  prefix: "USD",
  prefixFontSize: "50%",
  valueName: "avg",
  valueFontSize: "80%",
  valueMaps: [ { op: "=", text: "N/A", value: "null" } ],
  gauge: {
    maxValue: 100,
    minValue: 0,
    show: false,
    thresholdLabels: false,
    thresholdMarkers: true
  }
}

const data = {
  datasource: "PostgreSQL",
  targets: [
    {
      rawQuery: true,
      rawSql: `
        select current_date as time, sum(a.value)
        from aggregator a
        join store s on a.storeid = s.id
        where a.dataelement='totalStockValue' and s.name in ([[store]])
        group by 1
      `,
    }
  ]
}

module.exports = {...panel, ...style, ...data};