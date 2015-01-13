Package.describe({
  summary: "Full-sized drag and drop event calendar (jQuery plugin)",
  version: "1.0.13",
  git: "https://github.com/priyadarshy/sift-fullcalendar2.git",
  name: "ashutosh:sift-fullcalendar2"
});

Package.on_use(function (api) {
  api.versionsFrom("METEOR@0.9.0");
    api.use("mrt:jquery-ui@1.9.2", 'client');
    api.add_files([
        'css/fullcalendar.css',
        'lib/fullcalendar.js',
        'lib/lang-all.js',
        'lib/gcal.js',
    ], 'client');
});
