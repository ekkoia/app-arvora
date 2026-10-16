const IOS = "https://apps.apple.com/br/app/arvora-investimentos/id6800067538";
const ANDROID = "https://play.google.com/store/apps/details?id=br.com.arvora.investimentos&hl=pt_BR";
const WEB = "https://grupoarvora.com.br/";

module.exports = (req, res) => {
  const ua = req.headers["user-agent"] || "";

  const isIOS = /iPhone|iPad|iPod/i.test(ua);
  const isAndroid = /Android/i.test(ua);

  const destino = isIOS ? IOS : isAndroid ? ANDROID : WEB;

  res.setHeader("Cache-Control", "no-store");
  res.writeHead(302, { Location: destino });
  res.end();
};
