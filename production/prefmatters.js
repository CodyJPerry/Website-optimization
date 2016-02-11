// Measuring the Critical Rendering Path with Navigation Timing
// https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp

function logCRP() {
  var t = window.performance.timing,
    dcl = t.domContentLoadedEventStart - t.domLoading,
    complete = t.domComplete - t.domLoading;
  var stats = document.getElementById("crp-stats");
  stats.textContent = 'DCL: ' + dcl + 'ms, onload: ' + complete + 'ms';
}

window.addEventListener("load", function(event) {
  logCRP();
});

function logCRP(){var o=window.performance.timing,n=o.domContentLoadedEventStart-o.domLoading,t=o.domComplete-o.domLoading,d=document.getElementById("crp-stats");d.textContent="DCL: "+n+"ms, onload: "+t+"ms"}window.addEventListener("load",function(o){logCRP()});