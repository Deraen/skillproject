var categories = {
  'DOC': 'Documentation',
  'REQ': 'Requirements',
  'DES': 'Design',
  'IMP': 'Implementation',
  'TEST': 'Testing',
  'MEET': 'Meetings',
  'TEA': 'Teaching',
  'OTH': 'Other'
};
var users = ['Juho', 'Jussi', 'Masi', 'Niko', 'Oskari', 'Taina'];

var tasks = [];
var weeks = {};
var totals = {};

function displayWeeks() {
  $('.table-weeks tbody').html(_.template(
    '<% _.each(weeks, function (week) { %><tr>' +
    '<td>Viikko <%= week[0] %></td>' +
    '<% _.each(users, function (name) { %><td><%= (week[1][name] || 0) %></td><% }); %>' +
    '</tr><% }); %>', {weeks: _.sortBy(_.pairs(weeks), 0), users: users}));

  $('.table-weeks tfoot').html(_.template(
    '<tr><td>Koko projekti</td>' +
    '<% _.each(users, function (name) { %><td><%= totals[name] %></td><% }); %>' +
    '</tr>', {totals: totals, users: users}));
}

function displayHours(filter, sort, inverse) {
  filter = filter || {};
  sort = sort || 'date';

  var sorting = inverse ? 'sort-desc' : 'sort-asc';
  var foreach = inverse ? _.eachRight : _.each;

  $('.table-hours .sort').removeClass('sort-asc sort-desc').addClass('sort-inactive');
  $('.table-hours .sort[data-sort="' + sort + '"]').removeClass('sort-inactive').addClass(sorting);


  var filtered = _.filter(tasks, function (task) {
    return !filter.participants || _.indexOf(task.participants, filter.participants) !== -1;
  });

  var sorted = _.sortBy(filtered, sort);

  $('.table-hours tbody').html(_.template(
    '<% foreach(sorted, function (task) { %><tr>' +
    '<td><%= task.date.format(\'D.M.YYYY\') %></td>' +
    '<td><%= task.duration %>h</td>' +
    '<td><abbr title="<%= task.category %>"><%= categories[task.category] %></abbr></td>' +
    '<td><% if (task.participants.length === users.length) { %><abbr title="<%= task.participants %>">Kaikki</abbr><% } else { %><%= task.participants %><% } %></td>' +
    '<td><%= task.summary %></td>' +
    '</tr><% }); %>', {sorted: sorted, categories: categories, users: users, foreach: foreach}));

  var total = _.reduce(tasks, function (result, task) {
    return result + task.duration;
  }, 0);
  $('.table-hours .total-hours').html(_.template('<%= total %>h', {total: total}));
}

function displayUsers() {
  $('.dropdown-users ul').html(_.template('<% _.each(users, function (name) { %><li><a href="#"><%= name %></a></li><% }); %>', {users: users}));

  $('.dropdown-users ul a').bind('click', function (e) {
    e.preventDefault();
    displayHours({'participants': $(this).text()});
  });
}

$(function() {
  $("a[href^=http]").attr("target", "_blank");

  $('body').scrollspy({
    offset: 50,
    target: '.navbar-default'
  });

  // Smooth(er) jumping to anchors:
  $("a[href*=#]").bind("click", function(e) {
    var t = $(this).attr("href");
    var target = $('a[name="' + t.substr(1) + '"]');
    if (target.length === 0) return true;

    e.preventDefault();

    $("html, body").stop().animate({
      scrollTop: target.offset().top
    }, 600, function() {
      location.hash = t;
    });
    return false;
  });

  $.get('hours.tsv', function (data, status) {
    var lines = _.filter(data.split('\n'), function (line) {
      return line !== '';
    });

    tasks = _.map(lines, function (line) {
      var c = line.split('\t');
      return {
        date: moment(c[0], 'D.M.YYYY'),
        duration: parseFloat(c[1]),
        category: c[2],
        participants: c[3].split(','),
        summary: c[4]
      };
    });

    weeks = _.reduce(tasks, function (result, task, key) {
      var week = task.date.format('YYYY-W');

      if (!_.has(result, week)) result[week] = {};

      _.each(task.participants, function (name) {
        result[week][name] = (result[week][name] || 0) + task.duration;
      });

      return result;
    }, {});

    totals = _.reduce(tasks, function (result, task, key) {
      _.each(task.participants, function (name) {
        result[name] = (result[name] || 0) + task.duration;
      });

      return result;
    }, {});

    displayHours(undefined, undefined, true);
    displayWeeks();
  });

  displayUsers();

  $('.table-hours .sort').each(function () {
    var inverse = true;
    $(this).bind('click', function (e) {
      e.preventDefault();

      inverse = !inverse;
      displayHours(null, $(this).data('sort'), inverse);
      return false;
    });
  });
});
