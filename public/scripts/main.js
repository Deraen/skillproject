$(function() {
  $("a[href^=http]").attr("target", "_blank");

  $('body').scrollspy({
    offset: 50,
    target: '.navbar-default'
  });

  // Smooth(er) jumping to anchors:
  $("a[href*=#]").bind("click", function(e) {
    var el = $(this);
    var t = el.attr("href");
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
  var users = ['Juho', 'Masi', 'Oskari', 'Niko', 'Taina', 'Jussi'];

  var el = $('#hours table tbody');
  var tasks = [];
  $.get('hours.tsv', function (data, status) {
    data.split('\n').forEach(function (line) {
      if (line === '') return;

      var c = line.split('\t');

      tasks.push({
        date: moment(c[0], 'D.M.YYYY'),
        duration: c[1],
        category: c[2],
        participants: c[3].split(','),
        summary: c[4]
      });
    });
    displayHours(undefined, undefined, true);
  });

  function displayHours(filter, sort, inverse) {
    filter = filter || {};
    sort = sort || 'date';

    $('#hours .sort').removeClass('sort-asc sort-desc').addClass('sort-inactive');
    var sorting = 'sort-asc';
    if (inverse) {
      sorting = 'sort-desc';
    }
    $('#hours .sort[data-sort="' + sort + '"]').removeClass('sort-inactive').addClass(sorting);

    tasks = _.sortBy(tasks, sort);

    var totalHours = 0;
    var r = '';
    for (var i = 0; i < tasks.length; ++i) {
      var task = tasks[i];
      if (inverse) {
        task = tasks[tasks.length - i - 1];
      }
      if (filter.participants) {
        if (_.indexOf(task.participants, filter.participants) === -1) {
          continue;
        }
      }

      totalHours += parseFloat(task.duration);

      var date = task.date.format('D.M.YYYY');
      var participants = task.participants.join(', ');
      if (task.participants.length === 6) {
        participants = '<abbr title="' + participants + '">Kaikki</abbr>';
      }
      var category = '<abbr title="' + categories[task.category] + '">' + task.category + '</abbr>';

      r += '<tr><td>' + date + '</td><td>' + task.duration + 'h</td><td>' + category + '</td><td>' + participants + '</td><td>' + task.summary + '</td></tr>';
    }
    el.html(r);
    $('.table-hours .total-hours').html(totalHours + 'h');
  }

  var r = '';
  users.forEach(function (user) {
    r += '<li><a href="#">' + user + '</a></li>';
  });
  $('.dropdown-users ul').html(r);
  $('.dropdown-users ul a').bind('click', function (e) {
    e.preventDefault()
    var el = $(this);
    var user = $(this).text();
    displayHours({'participants': user});
  });

  $('#hours .sort').each(function () {
    var el = $(this);
    var inverse = false;
    el.bind('click', function (e) {
      e.preventDefault();
      var sort = $(this).data('sort');
      console.log(sort, inverse);
      inverse = !inverse;
      displayHours(null, sort, inverse);
      return false;
    })
  });
});
