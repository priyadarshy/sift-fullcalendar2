Package.describe({
  name: 'ashutosh:sift-fullcalendar2',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.addFiles('ashutosh:sift-fullcalendar2.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('ashutosh:sift-fullcalendar2');
  api.addFiles('ashutosh:sift-fullcalendar2-tests.js');
});
