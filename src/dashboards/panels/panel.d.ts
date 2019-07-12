interface GridPosition {
    x: number,
    y: number,
    w: number,
    h: number
}

interface ValueMap {
    op: string,
    text: string,
    value: string
}

interface Target {
    rawQuery: boolean,
    rawSql: string
}

interface Gauge {
    maxValue: number,
    minValue: number,
    show: boolean,
    thresholdLabels: boolean,
    thresholdMarkers: boolean
}

interface Panel {
    id: number,
    title: string,
    gridPos: GridPosition,
    type: string,
    format: string,
    prefix: string,
    prefixFontSize: string,
    valueName: string,
    valueFontSize: string,
    valueMaps: [ ValueMap ],
    datasource: string,
    targets: [ Target ]
}

interface GaugePanel extends Panel {
    gauge: Gauge
}