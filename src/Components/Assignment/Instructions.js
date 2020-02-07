import React from 'react'

import ReactMarkdown from 'react-markdown'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles( () => ({
    Instructions: {
        backgroundColor: 'lightgray',
        height: '680px',
        overflow: 'auto',
        padding: '0px 25px 0px 25px'
    },
}))

const instructions = '# Grabana\n' +
    '\n' +
    '![CI](https://github.com/K-Phoen/grabana/workflows/CI/badge.svg) [![Go Report Card](https://goreportcard.com/badge/github.com/K-Phoen/grabana)](https://goreportcard.com/report/github.com/K-Phoen/grabana) [![codecov](https://codecov.io/gh/K-Phoen/grabana/branch/master/graph/badge.svg)](https://codecov.io/gh/K-Phoen/grabana) [![GoDoc](https://godoc.org/github.com/K-Phoen/grabana?status.svg)](https://godoc.org/github.com/K-Phoen/grabana)\n' +
    '\n' +
    'Grabana provides a developer-friendly way of creating Grafana dashboards.\n' +
    '\n' +
    'If you are looking for a way to version your dashboards configuration or\n' +
    'automate tedious and error-prone creation of dashboards, this library is meant\n' +
    'for you.\n' +
    '\n' +
    '## Design goals\n' +
    '\n' +
    '* provide an understandable abstraction over dashboards configuration\n' +
    '* expose a developer-friendly API\n' +
    '* allow IDE assistance and auto-completion\n' +
    '\n' +
    '## Example\n' +
    '\n' +
    'Dashboard configuration:\n' +
    '\n' +
    '```go\n' +
    'dashboard := grabana.NewDashboardBuilder(\n' +
    '    "Awesome dashboard",\n' +
    '    grabana.AutoRefresh("5s"),\n' +
    '    grabana.Tags([]string{"generated"}),\n' +
    '    grabana.VariableAsInterval(\n' +
    '        "interval",\n' +
    '        interval.Values([]string{"30s", "1m", "5m", "10m", "30m", "1h", "6h", "12h"}),\n' +
    '    ),\n' +
    '    grabana.Row(\n' +
    '        "Prometheus",\n' +
    '        row.WithGraph(\n' +
    '            "HTTP Rate",\n' +
    '            graph.DataSource("prometheus-default"),\n' +
    '            graph.WithPrometheusTarget(\n' +
    '                "rate(prometheus_http_requests_total[30s])",\n' +
    '                prometheus.Legend("{{handler}} - {{ code }}"),\n' +
    '            ),\n' +
    '        ),\n' +
    '    ),\n' +
    ')\n' +
    '```\n' +
    '\n' +
    'Dashboard creation:\n' +
    '\n' +
    '```go\n' +
    'ctx := context.Background()\n' +
    'client := grabana.NewClient(&http.Client{}, os.Args[1], os.Args[2])\n' +
    '\n' +
    '// create the folder holding the dashboard for the service\n' +
    'folder, err := client.GetFolderByTitle(ctx, "Test Folder")\n' +
    'if err != nil && err != grabana.ErrFolderNotFound {\n' +
    '    fmt.Printf("Could not create folder: %s\\n", err)\n' +
    '    os.Exit(1)\n' +
    '}\n' +
    'if folder == nil {\n' +
    '    folder, err = client.CreateFolder(ctx, "Test Folder")\n' +
    '    if err != nil {\n' +
    '        fmt.Printf("Could not create folder: %s\\n", err)\n' +
    '        os.Exit(1)\n' +
    '    }\n' +
    '\n' +
    '    fmt.Printf("Folder created (id: %d, uid: %s)\\n", folder.ID, folder.UID)\n' +
    '}\n' +
    '\n' +
    'if _, err := client.UpsertDashboard(ctx, folder, dashboard); err != nil {\n' +
    '    fmt.Printf("Could not create dashboard: %s\\n", err)\n' +
    '    os.Exit(1)\n' +
    '}\n' +
    '```\n' +
    '\n' +
    'For a more complete example, see the [`example`](./cmd/example/) directory.'

export default (props) => {
    const classes = useStyles();

    return (
        <ReactMarkdown source={instructions} className={classes.Instructions}/>
    );
}