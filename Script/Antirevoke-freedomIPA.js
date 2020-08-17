var domains = {
  // Apple OCSPs
  "ocsp.apple.com": 1,
  "ocsp-reno01.apple.com": 1,
  "ocsp-reno02.apple.com": 1,
  // Other OCSPs
  "ocsp.int-x3.letsencrypt.org": 1,
  "ocsp.usertrust.com": 1,
  "ocsp.digicert.com": 1,
  // Other Apple Servers
  'world-gen.g.aaplimg.com':1,
};
var proxy = "PROXY 127.0.0.1:1080;";
var direct = "DIRECT;";

function FindProxyForURL(url, host) {
  host = host.toLowerCase();
  var lastPos;
  do {
    if (domains.hasOwnProperty(host)) {
      return proxy
    }
    lastPos = host.indexOf('.') + 1;
    host = host.slice(lastPos)
  } while (lastPos >= 1);
  return direct
}