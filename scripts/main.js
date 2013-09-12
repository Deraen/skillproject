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
  var el = $('#hours table tbody');
  $.get('hours.tsv', function (data, status) {
    var r = '';
    data.split('\n').forEach(function (line) {
      if (line === '') return;

      var c = line.split('\t');

      var participants = c[3].split(',').join(', ');
      var category = '<abbr title="' + categories[c[2]] + '">' + c[2] + '</abbr>';

      r += '<tr><td>' + c[0] + '</td><td>' + c[1] + 'h</td><td>' + category + '</td><td>' + participants + '</td><td>' + c[4] + '</td></tr>';
    });
    el.html(r);
  });
});
