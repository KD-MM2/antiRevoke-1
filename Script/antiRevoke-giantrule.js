var domains = {
  "ocsp.apple.com": 1,
  "ocsp-reno01.apple.com": 1,
  "ocsp-reno02.apple.com": 1,
  "ocsp.int-x3.letsencrypt.org": 1,
  "world-gen.g.aaplimg.com":1,
  "crl.apple.com": 1,
  "crl.entrust.net": 1,
  "crl3.digicert.com": 1,
  "crl4.digicert.com": 1,
  "ocsp.digicert.com": 1,
  "ocsp2.digicert.com": 1,
  "ocsp.entrust.net": 1,
  "ocsp.verisign.net": 1,
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