const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title> Title </title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" />
                <link rel="stylesheet" href="/css/index.css" />
            </head>
            <body>
                { html.children }
                <footer class="footer">
                    <h3>Best Footer</h3>
                </footer>
            </body>
        </html>
    )
}

module.exports = Def;
