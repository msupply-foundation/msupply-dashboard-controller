interface Variable {
    "name": string,
    "label": string,
    "datasource": string,
    "definition": string,
    "query": string,
    "regex": string,
    "includeAll": boolean,
    "multi": boolean,
    "refresh": number
}

interface Dashboard {
    "id": number | null,
    "uid": number | null,
    "title": string,
    "panels": [ Panel ],
    "tags": [ string ],
    "style": string,
    "version": number,
    "templating": {
        "list": [ Variable ]
    }
}