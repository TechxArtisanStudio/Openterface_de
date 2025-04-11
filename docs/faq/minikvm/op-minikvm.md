---
title: FAQs für Openterface Mini-KVM
description: Detaillierte FAQ für unser Flaggschiffprodukt Mini-KVM, das technische Spezifikationen, Nutzungshinweise und Tipps zur Fehlersuche abdeckt.
keywords: Mini-KVM, Openterface, KVM-Switch, technische Spezifikationen, Nutzungshinweise, Fehlersuche, Open-Source-Hardware, Videoaufnahme, USB-Anschluss, Dateiübertragung, Kompatibilität, Community-Support
---

# FAQs für Openterface Mini-KVM

Willkommen zu den speziellen FAQs für unser Flaggschiffprodukt, das **Openterface Mini-KVM**. Wenn Sie die gesuchte Antwort nicht finden können, zögern Sie nicht, **uns eine E-Mail an [info@openterface.com](mailto:info@openterface.com)** zu senden oder **unserer Community beizutreten**, wie [Discord](/discord) und Reddit(/reddit), wo Sie mit unserem Entwicklerteam und einer großartigen Gruppe von Nutzern in Kontakt treten können!

## :material-clipboard-list: Liste der Fragen

##### Grundlegendes

- [Was macht das Mini-KVM zu unserem Flaggschiffprodukt?](#flagship-product)
- [Was ist der Unterschied zwischen dem Basic Pack und dem Toolkit Pack?](#package-differences)
- [Was sind die wichtigsten Funktionen?](#key-features)
- [Welche Host-Computer sind kompatibel?](#mini-kvm-host-compatibility)
- [Wie sieht es mit der Kompatibilität von Zielgeräten aus?](#mini-kvm-target-compatibility)
- [Gibt es technischen Support und Dokumentation?](#mini-kvm-support)
- [Kann ich Zubehör wie VGA-zu-HDMI-Adapterkabel separat bestellen?](#accessories)
- [Kann ich das Mini-KVM verwenden, um ein Zielgerät zu steuern, das nur über einen USB-C-Anschluss verfügt (z. B. bestimmte Telefone, Tablets oder neuere MacBooks)?](#typec-target)

##### Software

- [Wo kann ich die Host-Anwendungen herunterladen?](#host-app-download)
- [Warum unterscheiden sich die Funktionen zwischen verschiedenen Host-Apps?](#host-app-differences)
- [Welche Host-App bietet derzeit die beste Erfahrung?](#best-host-app)
- [Gibt es eine Host-App, die ChromeOS unterstützt?](#host-app-chromeos)
- [Gibt es eine Host-App, die Apples mobile Geräte unterstützt?](#host-app-ios)
- [Was ist, wenn F11 in macOS-Anwendungen nicht funktioniert?](#f11-macos-issue)

##### Wechselbarer USB-Anschluss & Dateiübertragung

- [Kann das Mini-KVM Dateiübertragungen unterstützen?](#file-transfer)
- [Kann der wechselbare USB-A-Anschluss softwareseitig umgeschaltet werden?](#usb-port-toggle)
- [Warum USB 2.0 statt USB 3.0?](#usb-2-vs-3)

##### Technisch

- [Ist das Mini-KVM Open Source?](#mini-kvm-open-source)
- [Kann ich auf die BIOS-Einstellungen eines Geräts zugreifen?](#bios-access)
- [Wie werden Video/Daten übertragen?](#video-data-transmission)
- [Wie versorgt das Mini-KVM Strom?](#mini-kvm-power)
- [Kann ich ein längeres orangefarbenes USB-C-Kabel für die Host-Verbindung verwenden?](#orange-cable-length)

##### Steuermechanismus

- [Wird es eine Version mit drahtloser oder Ethernet-Konnektivität geben?](#wireless-version)
- [Wie unterscheidet sich das von anderen KVM-Lösungen?](#mini-kvm-vs-other-kvms)
- [Funktioniert es mit einem PS/2-Computer?](#ps2-compatibility)
- [Kann ich mehrere Mini-KVMs mit einem Master-Computer verwenden?](#multiple-mini-kvm)
- [Kann es den angeschlossenen Computer ein- oder ausschalten?](#power-control)

##### Video bezogen

- [Wie sieht es mit Video-Latenz und Auflösung aus?](#video-latency-resolution)
- [Welche Eingangs- und Ausgangsauflösungen unterstützt das Openterface Mini-KVM?](#video-resolution-guide)
- [Ist es für Spiele geeignet?](#gaming-compatibility)
- [Werden zukünftige Versionen hochwertigere Displays unterstützen?](#future-display-support)
- [Warum streamt es kein Video über lokale IP?](#no-ip-streaming)
- [Wie sieht es mit KVM-Steuerung über das Internet aus?](#no-internet-control)
- [Kann es mit VGA, DVI, DisplayPort usw. arbeiten?](#video-output-support)
-   [Wird es eine Videoaufzeichnungsfunktion zur Fehlersuche geben?](#video-recording-feature)

##### Fehlersuche

- [Warum gibt es manchmal Probleme mit USB-Hubs?](#usb-hub-issues)
- [Was ist, wenn die App den Zielbildschirm nicht anzeigt oder die Eingabe nicht reagiert?](#unstable-issues)
- [Ich habe die Capture-Firmware neu geflasht, aber ich kann immer noch keine normale Videoaufnahme erhalten. Was kann ich sonst noch versuchen?](#firmware-reflash-issue)
- [Warum ist mein Bildschirm komplett schwarz, wenn ich ein VGA-zu-HDMI-Kabel oder einen Adapter verwende?](#vga-black-screen)

##### Mehr

- [Wie kann ich zu diesem Projekt beitragen?](#contribute)
- [Möchten Sie unser Gadget testen?](#review-request)
- [Welche fortgeschrittenen Funktionen sind geplant?](#future-features)
- [Wie integriert es sich mit KI?](#ai-integration)
- [Welche Zubehörteile sind verfügbar?](#mini-kvm-accessories)

### :fontawesome-solid-book: Grundlegend

#### :material-chat-question:{ .faq } Was macht das Mini-KVM zu unserem Flaggschiffprodukt? {: #flagship-product }

Das Openterface Mini-KVM stellt unsere vollständigste KVM-Lösung dar und bietet:

- Plug-and-Play-Funktionalität für schnelles, stabiles Troubleshooting
- Keine Abhängigkeit von Netzwerkverbindungen
- Voller BIOS-Zugriff
- Wechselbarer USB-Anschluss für nahtlose Dateiübertragungen
- Breite Kompatibilität über Betriebssysteme hinweg
- Open-Source-Hardware und -Software
- Unterstützt von einer aktiven und hilfsbereiten Community

#### :material-chat-question:{ .faq } Was ist der Unterschied zwischen dem Basic Pack und dem Toolkit Pack? {: #package-differences }

Wir bieten zwei Kaufoptionen an:

-   **Basic Pack**: Enthält das **Openterface Mini-KVM** und einen **Schnellstartleitfaden**.
-   **Toolkit Pack**: Enthält alles im Basic Pack **plus** eine **Toolkit-Tasche, HDMI- & USB-Kabel, eine Erweiterungsstiftkappe und einen Maskottchen-Aufkleber** für zusätzlichen Komfort.

Für eine detaillierte Aufschlüsselung besuchen Sie: [Openterface Mini-KVM Produktseite](/product/minikvm/whats-in-the-box/)

#### :material-chat-question:{ .faq } Was sind die wichtigsten Funktionen des Openterface MiniKVM? {: #key-features }

- **Videoeingang**: Bis zu 3840x2160@30Hz über HDMI (Hinweis: Mit einem Adapter kann es auch VGA, Micro HDMI, DVI und andere Videoeingangsquellen unterstützen)
- **Unterstützte Videoauflösungen**: Bis zu 1920x1080@30Hz
- **Steuerung**: Vollständige Emulation von Tastatur und Maus
- **Dateiübertragung**: Wechselbarer USB 2.0-Anschluss
- **Stromversorgung**: USB-betrieben (kein externes Netzteil erforderlich)
- **Software**: Plattformübergreifende Host-Anwendungen
- **Kompatibilität**: Funktioniert mit den meisten Betriebssystemen
- **Open Source**: Sowohl Hardware als auch Software

#### :material-chat-question:{ .faq } Welche Host-Computer sind kompatibel? {: #mini-kvm-host-compatibility }

Um dieses Mini-KVM zu verwenden, muss der Host-Computer eine dieser [Host-Anwendungen](/app) installieren, um **MacOS, Windows, Linux und Android** zu unterstützen.

#### :material-chat-question:{ .faq } Welche Zielgeräte sind kompatibel? {: #mini-kvm-target-compatibility }

Es sind keine Vorinstallationen oder Konfigurationen auf dem Zielgerät erforderlich. Solange das Zielgerät UI-Operationen mit **Videoausgabe (z. B. HDMI, VGA)** unterstützt und einen USB-Anschluss hat, um **emulierte Tastatur- und Maussteuerung (HID)-Signale** zu empfangen, kann es verwendet werden. Unterstützte Zielgeräteplattformen sind Windows, MacOS, Linux, Android und iOS.

#### :material-chat-question:{ .faq } Wird es technischen Support und Dokumentation geben? {: #mini-kvm-support }

Umfassende Dokumentation für das Openterface Mini-KVM finden Sie auf unserer Website unter [Openterface.com](/). Wir aktualisieren diese Ressourcen kontinuierlich, um Ihre Erfahrung mit dem Gerät zu optimieren. Für technischen Support laden wir Sie ein, unserer [Community](/community/) beizutreten, um Fragen und Einblicke mit anderen Nutzern und unserem Expertenteam auszutauschen. Wenn Ihr Problem weiterhin ungelöst bleibt, steht unser Team zur Verfügung, um weitere technische Unterstützung zu bieten. Sie können uns über diese E-Mail erreichen: [info@openterface.com](mailto:info@openterface.com).

#### :material-chat-question:{ .faq } Kann ich Zubehör wie VGA-zu-HDMI-Adapterkabel separat bestellen? {: #accessories }

Ja! Sie können alle verfügbaren **Zubehörteile** [hier](product/accessories/) finden und sie separat über unseren **[TechxArtisan Shop](http://shop.techxartisan.com/)** kaufen.

#### :material-chat-question:{ .faq } Kann ich das Mini-KVM verwenden, um ein Zielgerät zu steuern, das nur über einen USB-C-Anschluss verfügt (z. B. bestimmte Telefone, Tablets oder neuere MacBooks)? {: #typec-target }
Ja. Um den Bildschirm des Zielgeräts über HDMI auszugeben und Tastatur-/Maus-Signale (HID) über USB-A zu empfangen, benötigen Sie einen **USB-C zu HDMI + USB-A** Adapter. Sobald Sie diesen Adapter eingesteckt haben, verbinden Sie ihn wie gewohnt mit dem Mini-KVM. [Hier ist ein Beispiel-Szenario](https://www.reddit.com/r/macbookpro/comments/1hwkh64/uh_a_way_to_save_the_day_of_this_pink_screen/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button), das zeigt, wie ein MacBook Pro von einem anderen MacBook Pro über das Mini-KVM gesteuert wird.

??? warning "Einige Geräte unterstützen möglicherweise keine HDMI-Ausgabe"
    Nicht alle Telefone und Tablets mit USB-C-Anschlüssen können ein Videosignal über HDMI senden. Überprüfen Sie die Spezifikationen Ihres Geräts oder testen Sie, indem Sie es an einen Standardmonitor anschließen, um zu bestätigen, dass es funktioniert, bevor Sie das Mini-KVM verwenden.

---

### :fontawesome-solid-book: Software

#### :material-chat-question:{ .faq } Wo kann ich die Host-Anwendungen herunterladen? {: #host-app-download }

Besuchen Sie unsere [Install Host Application-Seite](/quick-start/#install-host-application) für offizielle Downloads zur Unterstützung von **MacOS, Windows, Linux und Android**. 

??? warning "Datenschutz & Sicherheit: Seien Sie vorsichtig bei der Verwendung von Drittanbieter-Host-Apps"
    Da unser Projekt Open Source ist, finden Sie möglicherweise alternative Versionen von Host-Anwendungen, die von anderen entwickelt wurden und mit unserem Mini-KVM kompatibel sind. Während diese zusätzliche Funktionen bieten können, stellen Sie bitte sicher, dass Sie deren Sicherheits- und Datenschutzpraktiken überprüfen. **Das Openterface-Team kann die Sicherheit von Drittanbieteranwendungen nicht garantieren oder dafür verantwortlich gemacht werden**.

#### :material-chat-question:{ .faq } Warum unterscheiden sich die Funktionen zwischen verschiedenen Host-Apps? {: #host-app-differences }

Unser Entwicklerteam pflegt aktiv Host-Anwendungen für macOS, Linux, Windows und Android, aber aufgrund plattformspezifischer Herausforderungen und begrenzter Ressourcen variiert der Entwicklungsfortschritt. Das bedeutet, dass einige Funktionen zuerst auf einer Plattform erscheinen und länger auf anderen benötigen.

Wir tun unser Bestes, um die Entwicklung von Funktionen über alle Plattformen hinweg zu synchronisieren, aber es ist ein fortlaufender Prozess. 

Ihr Feedback spielt eine große Rolle bei der Gestaltung unseres Entwicklungsplans — sei es durch unsere [Community](/community/) oder [GitHub-Repository](/app/). Jeder Vorschlag hilft uns, das zu priorisieren, was Ihnen am wichtigsten ist!

Wenn Sie ein Entwickler sind, sind Ihre Beiträge unglaublich wertvoll — und wir würden uns freuen, wenn Sie uns helfen, den Prozess zu beschleunigen!

#### :material-chat-question:{ .faq } Welche Host-App bietet derzeit die beste Erfahrung? {: #best-host-app }

Stand März 2025 bieten die auf Qt basierenden Host-Apps für Windows und Linux das umfassendste Funktionsset insgesamt. Die macOS-Version sticht durch ihre reibungsloseste und ausgefeilteste Benutzererfahrung hervor, dank tieferer Systemintegration und UI-Verbesserungen. Die Android-App ist eine praktische Option für unterwegs, mit immer mehr Funktionen, die aufholen.

#### :material-chat-question:{ .faq } Gibt es eine Web-App, die ich in Chrome oder anderen Plattformen verwenden kann? {: #host-app-chromeos }

Ja! Einer unserer großartigen Community-Mitglieder, [Kashall](https://github.com/kashalls/openterface-viewer/), hat **eine leichte Open-Source-Web-App** erstellt, die Sie direkt in Ihrem Browser verwenden können: [openterface-viewer.pages.dev](openterface-viewer.pages.dev). Sie ist noch nicht Teil unserer offiziellen Dokumentation, aber unser Entwicklerteam hat sie ausprobiert und für solide, benutzerfreundlich und super praktisch befunden — besonders in Chrome oder wenn Sie etwas Schnelles und Browserbasiertes möchten. Probieren Sie es aus!

#### :material-chat-question:{ .faq } Gibt es eine Host-App, die Apples mobile Geräte unterstützt? {: #host-app-ios }

Wir erkunden derzeit die Kompatibilität mit Apples mobilen Systemen, wie iOS und iPadOS. Aufgrund von Apples strengen Kontrollen unterstützen diese Plattformen möglicherweise keine kabelgebundenen Verbindungen mit Drittanbietergeräten. Die Situation könnte sich jedoch ändern, oder es könnten potenzielle Workarounds vorhanden sein. Wenn Sie Einblicke oder Vorschläge haben, laden wir Sie ein, unserer Community beizutreten, um sie mit uns zu besprechen. Wir sind bestrebt, die Benutzerfreundlichkeit unseres Geräts zu verbessern, indem wir so viele Systeme wie möglich unterstützen. Wenn Sie daran interessiert sind, bei unserer Entwicklung zu helfen, kommen Sie in unsere Community oder senden Sie uns eine E-Mail!

#### :material-chat-question:{ .faq } Was ist, wenn F11 in macOS-Anwendungen nicht funktioniert? {: #f11-macos-issue }

In macOS zeigt das Drücken von F11 den macOS-Desktop an, anstatt die F11-Taste an die App und den Zielcomputer weiterzuleiten. Um dies zu beheben, können Sie F11 von der Funktion "Desktop anzeigen" trennen.

???+ info "Behebung des F11-Tastenproblems in macOS"
    1. Gehen Sie zu **Systemeinstellungen**.  
    2. Wählen Sie **Desktop & Dock**.  
    3. Scrollen Sie nach unten und klicken Sie auf die Schaltfläche **"Tastenkombinationen…"**.  
    4. Finden Sie **"Desktop anzeigen"** und setzen Sie es auf den Bindestrich **(-)** am Ende der Dropdown-Liste.  
    5. Diese Änderung ermöglicht es der F11-Taste, an Ihre Anwendung auf dem Zielcomputer weitergegeben zu werden.  

---

### :fontawesome-solid-book: Wechselbarer USB-Anschluss und Dateiübertragung

#### :material-chat-question:{ .faq } Kann das Mini-KVM Dateiübertragungen unterstützen? {: #file-transfer }

Ja, das Openterface Mini-KVM enthält [einen wechselbaren USB-A-Anschluss](/product/minikvm/usb-switch), der zwischen den Host- und Zielgeräten geteilt wird.

#### :material-chat-question:{ .faq } Kann der wechselbare USB-A-Anschluss softwareseitig umgeschaltet werden? {: #usb-port-toggle }

Mit dem Hardware-Upgrade auf v1.9, ja! Es unterstützt sowohl physisches Umdrehen als auch das Umschalten auf Softwareebene.

#### :material-chat-question:{ .faq } Warum USB 2.0 statt USB 3.0? {: #usb-2-vs-3 }

USB 2.0 ist vollständig in der Lage, Videoaufnahmen bei 1080p@30Hz zu verarbeiten, HID-Signale (für Tastatur und Maus) zu übertragen und Dateiübertragungen mit Standardgeschwindigkeit zwischen den Ziel- und Host-Computern zu verwalten. Dies macht unser Produkt zu einer schnellen, leichten und tragbaren Lösung, genau wie entworfen.

Die Verwendung von USB 3.0 würde das PCB-Design viel komplexer machen und die Produktionskosten erheblich erhöhen. Darüber hinaus bietet USB 3.0 zwar schnellere Dateiübertragungen, erzeugt jedoch auch mehr Wärme, was die Lebensdauer des Geräts verkürzen könnte.

Wir ziehen die Anwendung von USB 3.0 für die nächste Version in Betracht, die auf professionellere Nutzungsszenarien und stationäre KVM-Lösungen abzielt.

---

### :fontawesome-solid-book: Technisch

#### :material-chat-question:{ .faq } Ist das Mini-KVM Open Source? {: #mini-kvm-open-source }

Ja! Das Openterface Mini-KVM ist vollständig Open Source in sowohl [Hardware](/how-it-works/#explore-hardware-details) als auch [Software](/quick-start/#install-host-application), zertifiziert von [OSHWA](https://certification.oshwa.org/cn000015.html) und unterstützt von [einer lebhaften Community](/community/). Wenn Sie an [Beiträgen](/contributing/) interessiert sind, kontaktieren Sie uns bitte unter info@openterface.com. Bleiben Sie dran!

#### :material-chat-question:{ .faq } Kann ich auf die BIOS-Einstellungen eines Geräts zugreifen? {: #bios-access }

Ja, die direkte Verbindung des Openterface Mini-KVM ermöglicht den Zugriff auf niedrigstufige BIOS- oder Firmware-Einstellungen.

Dieses Feature steht im Gegensatz zu softwarebasierten KVM-Lösungen oder Fernsteuerungsanwendungen wie TeamViewer und VNC, die typischerweise keine BIOS-Ebene-Interaktionen ermöglichen.

#### :material-chat-question:{ .faq } Warum funktioniert die Tastatursteuerung auf BIOS-Ebene bei einigen älteren Zielcomputern nicht?

Es scheint, dass das BIOS einiger alter Computer unser USB-Hub nicht erkennen kann, was dazu führen kann, dass unsere emulierte Tastatur und Maus auf BIOS-Ebene nicht richtig funktionieren. Wir behalten dieses Problem im Auge.

Wir haben einen Bericht erhalten, dass auf einem bestimmten HP-Computer, dem HP Engage Flex Pro, die Tastatur auf dem BIOS-Bildschirm nicht funktioniert, obwohl sie normal funktioniert, sobald das Betriebssystem hochgefahren ist.

Wenn Sie dasselbe Problem haben, melden Sie es bitte über ein GitHub-Problem.

#### :material-chat-question:{ .faq } Wie werden Video/Daten übertragen? {: #video-data-transmission }

Videodaten werden über HDMI erfasst und über USB 2.0 an den Host-Computer zur Anzeige übertragen. Der wechselbare USB 2.0-Anschluss ermöglicht das Teilen von USB-Laufwerken oder anderen USB-Geräten zwischen dem Ziel und dem Host.

#### :material-chat-question:{ .faq } Wie versorgt das Mini-KVM Strom? {: #mini-kvm-power }

Das Gerät benötigt keine externe Stromversorgung, da es so konzipiert ist, dass es über seine USB-Type-C-Anschlüsse vom Host mit Strom versorgt wird, was die Portabilität erhöht. In Szenarien, in denen das Zielgerät ein stromsparender Mikrocomputer wie ein Raspberry Pi ist, könnte es über den Host über den wechselbaren USB-Anschluss des Mini-KVM mit Strom versorgt werden. Dies wird jedoch nicht empfohlen. Die Standardbetriebsart besteht darin, eine externe Stromversorgung für das Zielgerät zu haben.

#### :material-chat-question:{ .faq } Kann ich dieses Gerät selbst bauen?

Absolut! Wir sind eine Gruppe leidenschaftlicher Bastler, die DIY lieben, und wir stellen sicher, dass dieses Projekt sowohl in Hardware als auch in Software Open Source ist. Sie können es technisch von Grund auf neu bauen. Wir denken sogar darüber nach, einen Leitfaden zu veröffentlichen, wie man eine Breadboard-Version unseres Produkts DIY-fähig macht, die auch mit unserer Software kompatibel wäre.

Unsere Community experimentiert bereits mit verschiedenen Hardware-Versionen. Schauen Sie sich unsere Community-Beiträge an, um mehr zu erfahren, Ihre eigenen DIY-Erfahrungen zu teilen oder sogar an unserem [USB DIY-Wettbewerb](https://www.crowdsupply.com/techxartisan/usb-kvm-diy-challenge-2024) teilzunehmen, der gemeinsam mit Crowd Supply veranstaltet wird! Außerdem könnten Sie feststellen, dass mit ein paar Anpassungen am Code unsere Software nahtlos mit Ihrem kreativen DIY-Setup funktionieren könnte!

#### :material-chat-question:{ .faq } Kann ich ein längeres orangefarbenes USB-C-Kabel für die Host-Verbindung verwenden? {: #orange-cable-length }

Wir empfehlen nicht, ein **USB-C-Hostkabel länger als 1,5 Meter** (das orange) zu verwenden, da dies zu Signal- und Stromstabilitätsproblemen führen kann.

Wenn Sie **unbedingt** ein längeres Hostkabel verwenden müssen, müssen Sie **zusätzliche Energie einspeisen**, um eine zuverlässige Leistung aufrechtzuerhalten. Hier sind drei unterstützte Methoden:

1. **USB-A-Stromversorgung**  
   Stecken Sie ein **USB-A-Männchen-zu-Männchen-Kabel** in den [**wechselbaren USB-A-Anschluss**](/product/minikvm/usb-switch/) des Mini-KVM, um 5V Strom bereitzustellen.

2. **Stromversorgung über Erweiterungsstift**  
   Verwenden Sie den versteckten [Erweiterungsstift](/product/minikvm/extension-pins/) (unter der Schutzkappe), um direkt Strom zu liefern.

3. **Type-C-Stromverteiler**  
   Verwenden Sie einen **USB-C-Y-Verteiler** (1 männlich zu 2 weiblich) zwischen dem Kabel und dem Mini-KVM. Ein Bein verbindet sich mit Ihrem Host-Computer, das andere mit einer Stromquelle.

Warum ist das wichtig?

Aus unseren Tests haben längere Kabel auf der Host-Seite (über 1,5 m) zu Spannungsabfällen und Signalverschlechterungen führen können, insbesondere bei hohen Datenraten wie Videoübertragungen. Deshalb ist unser mitgeliefertes orangefarbenes Kabel kurz und energieeffizient gestaltet.

✅ **Hinweis zur Zielseite**: Das Gleiche gilt für das **schwarze USB-Kabel** (Zielseite). Versuchen Sie, es ebenfalls unter 1,5 Metern zu halten — das Mini-KVM kann von beiden Seiten Strom beziehen, und die Stabilität hängt von der Kabelqualität und -länge ab.

---

### :fontawesome-solid-book: Steuermechanismus

#### :material-chat-question:{ .faq } Wird es eine Version mit drahtloser oder Ethernet-Konnektivität geben? {: #wireless-version }

Derzeit planen wir nicht, drahtlose oder Ethernet-Konnektivität zu unseren Openterface-Produkten hinzuzufügen. Wir konzentrieren uns darauf, eine schnelle, stabile Steuerung über USB direkt zu Ihrem Zielgerät bereitzustellen, sodass Sie sich keine Sorgen über Netzwerkprobleme machen müssen.

Aber hey, wir sind immer offen für Feedback! Wenn Sie denken, dass es einen echten Bedarf für diese Funktion gibt oder wenn Sie Schwierigkeiten haben, eine gute KVM-over-IP-Lösung zu finden, senden Sie uns eine E-Mail: info@openterface.com. Und denken Sie daran, wenn wir uns entscheiden, unsere Konnektivitätsoptionen zu erweitern, wird unsere [Community](/community) die erste sein, die es erfährt.

#### :material-chat-question:{ .faq } Wie unterscheidet sich das von anderen KVM-Lösungen? {: #mini-kvm-vs-other-kvms }

Neugierig, wie sich das Openterface Mini-KVM im Vergleich zu anderen Lösungen schlägt? Schauen Sie sich unsere detaillierte [Vergleichsseite](/faq/usbkvm/openterface/#comparison-openterface-mini-kvm-vs-other-kvm-solutions) an.

#### :material-chat-question:{ .faq } Funktioniert es mit einem PS/2-Computer? {: #ps2-compatibility }

Nein. Wir sind uns bewusst, dass es immer noch viele alte headless Computer gibt, die PS/2-Tastaturen und -Mäuse benötigen. Soweit wir wissen, gibt es noch keine elegante Lösung, um USB-HID-Signale in PS/2-Tastatur- und -Maus-Signale zu splitten. Wir untersuchen dieses Thema weiterhin und überlegen, wie wir PS/2 in zukünftigen Versionen des Mini-KVM unterstützen können. Wenn Sie Lösungen kennen, die elegant mit unserem Mini-KVM funktionieren könnten, teilen Sie uns dies bitte mit. Vielen Dank!

#### :material-chat-question:{ .faq } Kann ich mehrere Mini-KVMs mit einem Master-Computer verwenden? {: #multiple-mini-kvm }

Ja, das können Sie! Unser Mini-KVM kann dies technisch bewältigen, aber wir optimieren noch den Code und führen Tests durch. Wir konzentrieren uns darauf, sicherzustellen, dass unsere Software die Tastatur und Maus automatisch mit der richtigen Videoquelle verknüpfen kann, wenn Sie mehr als ein Mini-KVM gleichzeitig verwenden. Außerdem verbessern wir die Benutzeroberfläche der Software, um sie besser für diese Art von Setup zu gestalten. Bleiben Sie dran für unsere Community-Updates, wenn wir diese Funktion einführen!

#### :material-chat-question:{ .faq } Kann es den angeschlossenen Computer ein- oder ausschalten? {: #power-control }

Nicht direkt — MiniKVM hat keine integrierte ATX-Stromsteuerung. Es enthält jedoch [Erweiterungsstifte](/product/minikvm/extension-pins/), die die Möglichkeit für ein Add-on-Modul eröffnen, um die ATX-Stromschaltung zu steuern.  

Obwohl unser Entwicklerteam diese Hardwareerweiterung bisher nicht priorisiert hat, steht sie definitiv auf unserem Radar. Wenn Sie sich für Hardwareentwicklung interessieren und einen ATX-Erweiterung prototypisieren möchten, würden wir uns freuen, von Ihnen zu hören! Treten Sie der Community bei und helfen Sie mit, was als Nächstes kommt.

---

### :fontawesome-solid-book: Video bezogen

#### :material-chat-question:{ .faq } Wie sieht es mit Video-Latenz und Auflösung aus? {: #video-latency-resolution }

Unser Gerät verarbeitet 1080p Videoausgabe mit weniger als 140 Millisekunden Latenz, was Ihre Steuererfahrung reibungslos und nahtlos macht. Überprüfen Sie die [Spezifikationen](/product/minikvm/specifications/).

#### :material-chat-question:{ .faq } Welche Eingangs- und Ausgangsauflösungen unterstützt das Openterface Mini-KVM? {: #video-resolution-guide }

Das Openterface Mini-KVM unterstützt eine Vielzahl von Videoeingangsauflösungen, einschließlich bis zu **4K (4096 x 2160 @ 30Hz)**. Die **effektive Erfassungsauflösung** — die Auflösung, die tatsächlich auf Ihrem Host-Computer verarbeitet und angezeigt wird — beträgt **1920x1080**. Auflösungen darüber werden herunterskaliert, was zu einer leichten visuellen Unschärfe aufgrund von Pixelverschmelzung führen kann.

??? info "Wichtige Definitionen: Eingangsauflösung & Effektive Maximalerfassung"
    - **Eingangsauflösung**: Die Auflösung, die von Ihrem Zielcomputer ausgegeben wird.
    - **Erfassungsauflösung**: Die Auflösung, mit der das Mini-KVM Video erfasst und an den Host-Computer überträgt.  
    - **Effektive Maximalerfassung**: 1920x1080 — für die beste Klarheit und Leistung.

??? info "Unterstützte Eingangsauflösungen"
    Das Mini-KVM kann gängige Standardauflösungen akzeptieren und verarbeiten, einschließlich, aber nicht beschränkt auf:

    -   4096 x 2160 @ 30Hz, 29.97Hz (Höchste Auflösung, die vom Openterface Mini-KVM unterstützt wird)
    -   3840 x 2160 @ 30Hz, 29.97Hz (4k-Auflösung mit 16:9-Seitenverhältnis)
    -   2100 x 1050 @ 60Hz (optimiert für mobile Geräte mit 16:9-Seitenverhältnis)
    -   1920 x 1200 @ 60Hz (16:10-Seitenverhältnis)
    -   1920 x 1080 @ 60Hz (Die beste Anzeigeauflösung mit 16:9-Seitenverhältnis)
    -   1680 x 1050 @ 60Hz (16:9-Seitenverhältnis)
    -   1600 x 900 @ 60Hz (16:9-Seitenverhältnis)
    -   1440 x 900 @ 60Hz (16:9-Seitenverhältnis)
    -   1280 x 1024 @ 60Hz (5:4-Seitenverhältnis)
    -   1280 x 960 @ 60Hz (4:3-Seitenverhältnis)
    -   1280 x 800 @ 60Hz (16:10-Seitenverhältnis)
    -   1280 x 720 @ 60Hz (16:9-Seitenverhältnis)
    -   1152 x 864 @ 60Hz (4:3-Seitenverhältnis)
    -   1024 x 768 @ 60Hz (Optimiert für alte CRT-Monitorauflösungen mit 4:3-Seitenverhältnis)
    -   800 x 600 @ 60Hz (Optimiert für alte CRT-Monitorauflösungen mit 4:3-Seitenverhältnis)
    -   640 x 480 @ 60Hz (Optimiert für alte CRT-Monitorauflösungen mit 4:3-Seitenverhältnis)

???+ tip "Beste Praxis"
    Stellen Sie sowohl die Zielausgabe als auch die Mini-KVM-Erfassungsauflösung auf **1920x1080** für optimale Schärfe und minimale Latenz ein.

**Was passiert mit Zielausgaben, die über 1080p liegen?**

Wenn Ihr Zielcomputer mit einer höheren Auflösung als 1080p ausgibt, wird das Mini-KVM **mehrere Pixel** zu einem für die Anzeige auf dem Host zusammenführen. Dies kann dazu führen, dass das Bild **unscharf** erscheint.

???+ info "Verbesserung unscharfer Bilder"
    Sie können die visuelle Klarheit auf der Host-Seite verbessern, indem Sie die **Anzeige skalieren**. Während dies nicht alle Details wiederherstellt, glättet es die Ausgabe und verbessert die Sichtbarkeit.

**Fehlerbehebung bei Störungen**

Wenn Sie Video-Störungen oder kein Signal nach einer Änderung der Auflösung oder Bildwiederholfrequenz sehen:

1. Senken Sie in der Host-App vorübergehend die Erfassungsauflösung auf **640x480 @ 30Hz**.
2. Setzen Sie das Zielgerät auf eine unterstützte Standardauflösung (wie 1080p) zurück.
3. Wechseln Sie zurück zu Ihrer gewünschten Auflösung in der Host-App, sobald die Stabilität zurückkehrt.

???+ warning "Vermeiden Sie nicht-standardisierte Einstellungen"
    Nicht-standardisierte Auflösungen oder Bildwiederholfrequenzen über **60Hz** können die stabilen Betriebsgrenzen des Mini-KVM überschreiten und zu Störungen oder Instabilität führen.

##### Zusammenfassende Tipps

- **Beste Klarheit**: 1920x1080 Eingabe + 1920x1080 Erfassung
- **Vermeiden Sie Unschärfe**: Versuchen Sie, die 1080p-Erfassungsgrenze nicht zu überschreiten
- **Skalierung hilft**: Erhöhen Sie die Anzeige-Skalierung auf der Host-Seite, wenn Sie 4K-Eingaben verwenden
- **Fehlerbehebung mit niedriger Auflösung**: Verwenden Sie 640x480 @ 30Hz als Rückfalloption

Durch das Verständnis, wie Eingangs- und Erfassungsauflösungen interagieren, können Sie Ihr Setup für eine reibungslose, qualitativ hochwertige Fernsteuerung mit dem Openterface Mini-KVM optimieren.

#### :material-chat-question:{ .faq } Ist es für Spiele geeignet? {: #gaming-compatibility }

Das aktuelle Design ist auf technische und IT-Operationen ausgerichtet — es wurde für zuverlässige Gerätesteuerung, Konfiguration und Fehlersuche entwickelt, nicht für hochauflösende oder latenzempfindliche Spiele.

Das gesagt, haben einige unserer spielerischen und neugierigen Nutzer es bereits mit leichteren Spielen wie Minecraft oder Emulatoren getestet, und es funktioniert dafür einwandfrei! Während es also nicht für AAA-Spiele konzipiert ist, sind gelegentliche oder retro-stil Spiele definitiv machbar.

#### :material-chat-question:{ .faq } Werden zukünftige Versionen hochwertigere Displays unterstützen? {: #future-display-support }

Wir wissen, dass viele von Ihnen nach erstklassigen Anzeige-Funktionen suchen. Während es derzeit nicht unser Hauptfokus ist, ziehen wir basierend auf Ihrem Feedback in Betracht, verbesserte Anzeige-Funktionen in einer professionellen Version des Openterface Mini-KVM hinzuzufügen.

#### :material-chat-question:{ .faq } Warum streamt es kein Video über lokale IP? {: #no-ip-streaming }

Das Openterface Mini-KVM ist für eine stabile, latenzarme Steuerung über direkte HDMI- und USB-Verbindungen konzipiert. Während es technisch möglich ist, Video über ein lokales Netzwerk zu streamen, konzentrieren wir uns derzeit auf Zuverlässigkeit durch kabelgebundene Verbindungen. Das gesagt, erkunden wir Funktionen wie VLC oder sogar VNC-Integration in unseren Host-Apps für zukünftige Releases.

#### :material-chat-question:{ .faq } Wie sieht es mit KVM-Steuerung über das Internet aus? {: #no-internet-control }

Was das Streaming über das Internet betrifft, ist das eine ganz andere Herausforderung — es beinhaltet das Hosten von Remote-Diensten, die Handhabung von Sicherheit und das Überdenken von Teilen unseres Geschäftsmodells. Es ist nicht vom Tisch, aber es ist ein großer Schritt.

Das gesagt, da unser Mini-KVM auf Ihrem Host-Computer basiert, können Sie es bereits mit bestehenden Remote-Desktop-Tools kombinieren, um Ihren Zielcomputer aus der Ferne zu steuern.

Wir sind immer offen für Ideen — wenn Sie Gedanken dazu haben, wie Sie sich das Remote-Streaming vorstellen, zögern Sie nicht, uns eine E-Mail zu senden oder an der Diskussion in der Community teilzunehmen!

#### :material-chat-question:{ .faq } Kann es mit VGA, DVI, DisplayPort usw. arbeiten? {: #video-output-support }

Sozusagen. Das Openterface Mini-KVM erfasst Video über einen HDMI-Anschluss. Sie können jedoch verschiedene Videoadapter wie [VGA-zu-HDMI](/use-cases/#streamlined-server-management), [DVI-zu-HDMI](/use-cases/#unified-control-for-diverse-devices), [miniHDMI-zu-HDMI](/use-cases/#simplified-setup-for-tech-enthusiasts) oder DP-zu-HDMI verwenden, um verschiedene Videoquellen anzuschließen.

#### :material-chat-question:{ .faq } Wird es eine Videoaufzeichnungsfunktion zur Fehlersuche geben? {: #video-recording-feature }

Ja! Wir entwickeln eine "Dashcam-ähnliche" kontinuierliche Aufzeichnungsfunktion, die:

-   Kurze Videoabschnitte des Zielcomputers aufnimmt
-   Eine frameweise Überprüfung kritischer Momente (wie schnell verschwindende Fehlermeldungen) ermöglicht
-   Mindestens 30fps für eine klare Analyse schneller Ereignisse (z. B. Kernel-Paniken während des Bootvorgangs) unterstützt

Dies wird besonders wertvoll für Debugging-Szenarien sein, in denen:

-   Fehlermeldungen zu schnell blitzen, um sie zu lesen
-   Systeme während der frühen Boot-Sequenzen abstürzen
-   Sie eine forensische Analyse der Konsolenausgabe benötigen

Die Funktion steht derzeit auf unserem Entwicklungsfahrplan - bleiben Sie dran für Updates!

---

### :fontawesome-solid-book: Fehlersuche

#### :material-chat-question:{ .faq } Warum gibt es manchmal Probleme mit USB-Hubs? {: #usb-hub-issues }

Wenn ein USB-Hub auf der Zielseite verwendet wird, kann das Openterface Mini-KVM instabil werden. Dies liegt daran, dass das Openterface Mini-KVM hauptsächlich auf den Zielanschluss für die Stromversorgung angewiesen ist. Wenn der USB-Hub, der mit dem Ziel verbunden ist, vollständig ausgelastet ist, kann dies zu einem signifikanten Spannungsabfall führen, was zu Instabilität im Openterface Mini-KVM aufgrund unzureichender Stromversorgung führt. Wenn Sie einen USB-Hub auf der Zielseite verwenden müssen, ziehen Sie in Betracht, einen powered USB-Hub mit einer externen Stromversorgung zu verwenden, um einen stabilen Betrieb sicherzustellen.

#### :material-chat-question:{ .faq } Was ist, wenn die App den Zielbildschirm nicht anzeigt oder die Eingabe nicht reagiert? {: #unstable-issues }

Wenn Sie auf Instabilität mit dem Openterface Mini-KVM stoßen — wie z. B. dass die App den Zielbildschirm nicht anzeigt oder die Steuerung von Maus und Tastatur nicht möglich ist — versuchen Sie, alle Kabel zu trennen. Warten Sie einen kurzen Moment, schließen Sie die Kabel wieder an und versuchen Sie es erneut. Dieser einfache Reset löst oft Verbindungsprobleme.

---

#### :material-chat-question:{ .faq } Meine Host-App oder mein System zeigt absurde Auflösungen wie 43184x24228@44Hz an, und es gibt kein Video. Was soll ich tun?

Dieses Symptom weist oft auf ein Firmware-Problem im Capture-Chip hin. Öffnen Sie unter Windows "USB Tree Viewer" und bestätigen Sie, dass Sie " **MACROSILION Openterface USB Composite Device**" sehen, anstatt nur "MACROSILION USB Composite Device". Unter Linux/macOS überprüfen Sie die `lsusb -v` Ausgabe auf "Openterface". Wenn die Capture-Firmware auf die Werkseinstellungen zurückgesetzt wurde, **flashen Sie die Openterface-Firmware neu** (verfügbar auf unserer [GitHub-Releases-Seite](https://github.com/TechxArtisanStudio/Openterface_QT/releases)). Wenn das nicht hilft, wenden Sie sich bitte an unser Support-Team.

#### :material-chat-question:{ .faq } Ich habe die Capture-Firmware neu geflasht, aber ich kann immer noch keine normale Videoaufnahme erhalten. Was kann ich sonst noch versuchen?  {: #firmware-reflash-issue }

1. Überprüfen Sie, ob Ihr Gerät in einer Windows-Umgebung korrekt aufgelistet wird, indem Sie "USB Tree Viewer" öffnen oder `lsusb -v` unter Linux verwenden.
2. Bestätigen Sie, dass Ihre Host-App die neueste offizielle Version ist.
3. Wenn Sie weiterhin keine Verbesserung sehen — oder bizarre Auflösungen und kein Display — kontaktieren Sie unseren Support. Wir arbeiten mit Ihnen an zusätzlichen Diagnosen und arrangieren gegebenenfalls einen Ersatz.

#### :material-chat-question:{ .faq } Warum ist mein Bildschirm komplett schwarz, wenn ich ein VGA-zu-HDMI-Kabel oder einen Adapter verwende?  {: #vga-black-screen }
Unser [VGA-zu-HDMI-Adapterkabel](/product/accessories/vga-to-hdmi-cable/) **benötigt zusätzliche Energie**, um zu funktionieren. Wenn Sie nur einen schwarzen Bildschirm sehen, fehlt Ihnen möglicherweise eine Stromverbindung. (1)
{ .annotate }

1. <img src="https://pbs.twimg.com/media/GnCqHVlWgAAVGqY?format=jpg&name=small" alt="" style="max-width: 180px; vertical-align: middle;" onerror="this.style.display='none'"><img src="https://pbs.twimg.com/media/GnCqGa8WQAAOr6m?format=jpg&name=small" alt="" style="max-width: 180px; vertical-align: middle;" onerror="this.style.display='none'"><br> *Dies ist ein Beispiel für ein Setup, bei dem das USB-Kabel nicht eingesteckt war*

??? info "Schritte, um das VGA-zu-HDMI-Kabel zum Laufen zu bringen"

    1. **USB-Strom anschließen**  
    - Unsere VGA-zu-HDMI-Kabel enthalten einen USB-Stecker, der an einen mit Strom versorgten USB-Anschluss (entweder am wechselbaren USB-Anschluss des Mini-KVM oder am Zielcomputer) angeschlossen werden muss. Dies versorgt den VGA-zu-HDMI-Konvertierungschip mit Strom.

    2. **Auflösung bestätigen**  
    - Stellen Sie sicher, dass der Zielcomputer eine unterstützte Auflösung verwendet, wie 1280x1024 oder 1024x768 bei 60Hz.  
    - Auflösungen außerhalb des unterstützten Bereichs können einen schwarzen oder verzerrten Bildschirm erzeugen.

    3. **Einen anderen Adapter ausprobieren**  
    - Wenn möglich, testen Sie mit einem anderen VGA-zu-HDMI-Adapter oder -Kabel. Einige Konverter haben möglicherweise nicht den richtigen Stromverbrauch und können zu schwarzen Bildschirmen führen.

    Immer noch kein Glück? Machen Sie ein Foto von Ihrem Setup (einschließlich Kabel) und senden Sie es an unser Support-Team. Wir helfen Ihnen bei der Fehlersuche oder arrangieren gegebenenfalls einen Ersatz.

### :fontawesome-solid-book: Mehr

#### :material-chat-question:{ .faq } Wie kann ich zu diesem Projekt beitragen? {: #contribute }

Absolut! Es gibt viele Möglichkeiten, wie Sie sich einbringen können:

- Wenn Sie gerne programmieren, helfen Sie uns, indem Sie Fehler melden und beheben. 
- Gut mit Worten und Technik? Sie könnten bei unserer Dokumentation helfen. 
- Und wenn Sie ein Sprachgenie sind, warum nicht helfen, unsere Dokumente zu übersetzen, um mehr Menschen den Einstieg zu erleichtern?
- Wenn Design Ihr Ding ist, suchen wir immer nach frischen Ideen für Grafikdesign, App-UI und die Benutzerfreundlichkeit unseres Geräts. 
- Möchten Sie helfen, unsere Community lebendig zu halten? Wir könnten auch Ihre Fähigkeiten dort gebrauchen.

Ihre Unterstützung und [Beiträge](/contributing/) sind es, die das Openterface Mini-KVM wachsen lassen. Vielen Dank, dass Sie Teil unseres Abenteuers sind! 🚀 Haben Sie den Drang zu helfen, aber sehen Sie kein perfektes Passstück? Schicken Sie uns einfach eine E-Mail!

#### :material-chat-question:{ .faq } Möchten Sie unser Gadget testen? {: #review-request }

Hey, wir lieben es, Lärm zu machen und das Wort über unser Mini-KVM zu verbreiten! Wenn Sie aus der Presse kommen oder in sozialen Medien aktiv sind und unser Produkt ausprobieren möchten, sind wir ganz Ohr. Egal, ob Sie detaillierte Bewertungen, Unboxing-Videos oder einfach nur einen Shoutout geben möchten, wir sind dafür da und lassen Sie uns gemeinsam Wellen schlagen! 🎉 Schicken Sie uns JETZT eine E-Mail!

#### :material-chat-question:{ .faq } Welche fortgeschrittenen Funktionen sind geplant? {: #future-features }

Wir sind begeistert von dem Potenzial des Mini-KVM und verpflichten uns, alle unsere aktuellen Ideen in einem umfassenden Fahrplan zu dokumentieren. Dieser Fahrplan wird fortgeschrittene Funktionen und zukünftige Entwicklungen skizzieren, die wir für das Gerät envisionieren. Wir freuen uns darauf, diese Funktionen in Zusammenarbeit mit unserer Community zu entwickeln. Bleiben Sie dran für weitere Updates, während wir weiterhin gemeinsam wachsen und innovieren.

#### :material-chat-question:{ .faq } Wie integriert es sich mit KI? {: #ai-integration }

Unsere langfristige Vision ist es, dass das Openterface Mini-KVM als physische Schnittstelle zwischen KI-Agenten und realen Computern dient. Inspiriert von frühen Projekten wie [OthersideAI’s selbstbetriebenem Computer](https://github.com/OthersideAI/self-operating-computer) und jetzt weiter validiert durch jüngste Durchbrüche wie [Anthropic’s Claude 3.5 Modelle](https://www.anthropic.com/news/3-5-models-and-computer-use), wird diese Vision schnell greifbarer.

Das Mini-KVM fungiert als die "Augen" und "Hände" — es erfasst Echtzeit-Video von einer Zielmaschine und ermöglicht die Eingabe von Tastatur/Maus über USB. In Kombination mit einem fähigen Host-Computer, der einen KI-Agenten ausführt, könnte dieses Setup es LLMs ermöglichen, vollständige Desktops zu beobachten, zu interpretieren und zu steuern — sogar plattformübergreifend — ohne dass Software auf dem Zielgerät installiert werden muss.

Wir befinden uns noch in den frühen Phasen dieser Integration, aber die Möglichkeiten erweitern sich schnell. Wenn Sie mit KI-Agenten experimentieren und diesen Raum gemeinsam erkunden möchten, würden wir uns freuen, von Ihnen zu hören!

#### :material-chat-question:{ .faq } Welche Zubehörteile sind verfügbar? {: #mini-kvm-accessories }

Wir bieten eine Reihe von [Zubehörteilen](/product/accessories/) an, um Ihre Erfahrung mit dem Openterface Mini-KVM zu verbessern. Schauen Sie sich unseren [TxA Shop](https://shop.techxartisan.com/) für weitere Details zu verfügbaren Produkten an, einschließlich unseres VGA-zu-HDMI-Adapterkabels.

---

Ihre Neugier und Unterstützung treiben unseren Fortschritt voran, und wir möchten sicherstellen, dass jede Ihrer Fragen eine Antwort findet. Bitte beachten Sie, dass der Inhalt oben in unseren FAQs im Laufe der Zeit veraltet sein kann. Wenn Ihre Anfrage in dieser FAQ nicht behandelt wird, überprüfen Sie immer unsere Website [openterface.com](/) für die aktuellsten Informationen. Zögern Sie auch nicht, unserer begeisterten Community beizutreten. Wir sind aktiv in unserem Subreddit unter [/r/Openterface_miniKVM/](/reddit) und unserem [Discord Openterface](/dicord) Server, wo Sie Fragen stellen, Ideen teilen oder einfach über alles Technische plaudern können.

Darüber hinaus können Sie sich gerne direkt an unser engagiertes Team wenden, indem Sie eine E-Mail an info@openterface.com senden. Wir freuen uns, von Ihnen zu hören und sind immer hier, um zu helfen!

---

**Haben Sie Feedback zu dieser Seite?** [Lassen Sie es uns hier wissen.](https://forms.gle/wmxoR2C1VdG36mT69)