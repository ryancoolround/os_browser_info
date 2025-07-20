async function getBrowserInfo() {
  const userAgent = navigator.userAgent;

  if (navigator.brave && typeof navigator.brave.isBrave === "function") {
    const isBrave = await navigator.brave.isBrave();
    if (isBrave) return "Браузер: Brave";
  }

  if (userAgent.includes("Firefox")) {
    return "Браузер: Firefox";
  } else if (userAgent.includes("OPR") || userAgent.includes("Opera")) {
    return "Браузер: Opera";
  } else if (userAgent.includes("Edg")) {
    return "Браузер: Microsoft Edge";
  } else if (userAgent.includes("Chrome") && !userAgent.includes("Edg") && !userAgent.includes("OPR")) {
    return "Браузер: Chrome";
  } else if (userAgent.includes("Safari") && !userAgent.includes("Chrome")) {
    return "Браузер: Safari";
  }

  return "Браузер: Неизвестный";
}

function getOSName() {
  const userAgent = navigator.userAgent;
  const platform = navigator.platform || '';
  let osName = "Неизвестная ОС";

  if (userAgent.includes("Windows")) {
    osName = "Windows";
    if (userAgent.includes("Windows NT 10.0")) {
      if (userAgent.includes("Windows 11") || userAgent.includes("WV") || userAgent.includes("rv:11.")) {
        osName += " 11";
      } else {
        osName += " 10";
      }
    } else if (userAgent.includes("Windows NT 6.3")) {
      osName += " 8.1";
    } else if (userAgent.includes("Windows NT 6.2")) {
      osName += " 8";
    } else if (userAgent.includes("Windows NT 6.1")) {
      osName += " 7";
    } else if (userAgent.includes("Windows NT 6.0")) {
      osName += " Vista";
    } else if (userAgent.includes("Windows NT 5.1") || userAgent.includes("Windows XP")) {
      osName += " XP";
    }
  } else if (userAgent.includes("Ubuntu") || platform.toLowerCase().includes("ubuntu")) {
    osName = "Ubuntu Linux";
  } else if (userAgent.includes("Linux")) {
    if (userAgent.includes("X11")) {
      osName = "Linux (возможно Ubuntu)";
    } else {
      osName = "Linux";
    }
  } else if (userAgent.includes("Mac")) {
    osName = "Macintosh";
  } else if (userAgent.includes("Android")) {
    osName = "Android";
  } else if (userAgent.includes("like Mac")) {
    osName = "iOS";
  } else if (userAgent.includes("FreeBSD")) {
    osName = "FreeBSD";
  } else if (userAgent.includes("OpenBSD")) {
    osName = "OpenBSD";
  } else if (userAgent.includes("NetBSD")) {
    osName = "NetBSD";
  } else if (userAgent.includes("SunOS")) {
    osName = "Solaris";
  } else if (userAgent.includes("OS/2")) {
    osName = "OS/2";
  } else if (userAgent.includes("BeOS")) {
    osName = "BeOS";
  } else if (userAgent.includes("CrOS")) {
    osName = "Chrome OS";
  }

  return osName;
}

// Печать данных в HTML
(async function () {
  const browser = await getBrowserInfo();
  const os = getOSName();
  const now = new Date().toLocaleString();

  document.write(`Твоя ОС: ${os}<br>`);
  document.write(`${browser}<br>`);
  document.write(`Текущее время: ${now}`);
})();
