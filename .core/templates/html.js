const htmlTemplate = (reference) => (
`<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>UI Interactions - ${reference}</title>
		<link rel="stylesheet" href="/base/base.css">
		<link rel="stylesheet" href="/ui-${reference}.css">
		<script src="/ui-${reference}.js"></script>
	</head>
	<body>
		<button class="ui-${reference}" data-ui></button>
		<script src="/base/base.js"></script>
	</body>
</html>
`
)

module.exports = htmlTemplate;