---
description: "Vollständiger Leitfaden zu den grundlegenden Steuerungen des Openterface Mini-KVM: Mausmodi, Tastatureingabe, BIOS-Zugriff, Audio-/Video-Unterstützung und USB-Umschaltung. Kompatibel mit mehreren Betriebssystemen und Geräten, unterstützt bis zu 4K@30Hz Videoeingang."
keywords: "Mini-KVM-Steuerungen, Maussteuerungsmodi, Tastatureingabe, BIOS-Zugriff, Audioübertragung, Videoanzeige, USB-Umschaltung, Gerätekompatibilität, KVM-Setup, Hardwaresteuerung, 4K-Unterstützung, HID-Signale, Steuerung des Zielgeräts, Host-Software, HDMI-Eingang"
---

# Grundsteuerung für Host-Apps

![use-case-pc-angled-view](https://assets.openterface.com/images/product/use-case-pc-angled-view.webp){ width=600 }

## 💻 Kompatibilität

- **Host-Software**: Installieren Sie unsere [Host-App](/app) für macOS, Windows und Linux, um Ihre Zielgeräte zu steuern. Stellen Sie sicher, dass Ihr Host-System mit der entsprechenden App-Version kompatibel ist.
- **Kompatibilität des Zielgeräts**: Es sind keine Vorinstallationen oder Konfigurationen auf dem Zielgerät erforderlich. Solange das Zielgerät UI-Operationen mit Videoausgabe (z. B. HDMI, VGA) unterstützt und einen USB-Anschluss hat, um emulierte Tastatur- und Maussteuerung (HID) Signale zu empfangen, kann es verwendet werden. Unterstützte Zielplattformen sind Windows, macOS, Linux, Android und iOS.

## 🖱 Maussteuerung

- **Absoluter Modus**: Der Mauszeiger des Ziels wird direkt auf eine bestimmte Position auf dem Bildschirm des Hosts über unsere App abgebildet. Das bedeutet, dass der Mauszeiger des Ziels der gleichen Bewegung folgt, wo immer Sie die Maus des Hosts innerhalb unserer App bewegen. Beachten Sie, dass es zu einer leichten Verzögerung bei den Cursorbewegungen kommen kann. Sie können wählen, ob Sie den Mauszeiger des Hosts ausblenden oder anzeigen möchten, während er sich in unserer App befindet.

- **Relativer Modus**: Die Mausbewegung des Ziels ist relativ zur aktuellen Position der Maus des Hosts. Das bedeutet, dass das Bewegen der Maus des Hosts den Cursor des Ziels um eine bestimmte Distanz in die gleiche Richtung verschiebt, ohne einen festen Start- oder Endpunkt. Sie können diesen relativen Modus mit einer bestimmten Tastenkombination verlassen.

## ⌨️ Tastatur

Wenn die App im Fokus ist, können Sie direkt alles eingeben, und diese Tastenanschläge werden an den Computer des Ziels weitergeleitet.

## ⚙️ BIOS-Zugriff

- **BIOS-Zugriff**: Verwenden Sie unsere App, um auf das BIOS Ihrer Zielgeräte zuzugreifen. Dies ermöglicht es Ihnen, Einstellungen direkt aus dem BIOS zu steuern und zu konfigurieren.

??? tip "Tastenkombinationen zum Betreten des BIOS für verschiedene Motherboards"

    - F2: Dell, Lenovo, ASUS, Acer, Toshiba, Samsung, Sony
    - F1: Lenovo
    - Del: ASUS, Acer, Gigabyte, MSI
    - F10: HP
    - Assist-Taste: Sony
    - Option (⌥) Taste: Apple (um auf den Startmanager zuzugreifen)

## 🔊 Ton

- **Audioübertragung**: Der Ton des Zielcomputers wird über den HDMI-Eingangsport des Mini-KVM übertragen. Bei Verwendung unserer App wird der Ton des Zielcomputers über den Host-Computer wiedergegeben, sodass Sie alles nahtlos hören können.

## 🎥 Video

- **Videoanzeige**: Unsere App ermöglicht es Ihnen, den Bildschirm des Zielcomputers nahtlos anzuzeigen. Sie unterstützt Videoauflösungen von bis zu 1920x1080 bei 30Hz für die Anzeige innerhalb der App. Der maximal unterstützte Videoeingang beträgt bis zu 3840x2160 bei 30Hz über HDMI. Darüber hinaus kann sie mit einem Adapter auch VGA, Micro HDMI, DVI und andere Videoeingangsquellen unterstützen.

## 🔄 Umschaltbarer USB-Port

- **Verwendung des USB-Ports**: Der Mini-KVM verfügt über einen umschaltbaren USB-A 2.0-Port, der zwischen den Host- und Zielcomputern umgeschaltet werden kann, jedoch nicht gleichzeitig.
- **Umschaltmethoden**: 
    - Hardware-Umschalter: Ein physischer Schalter am Gerät
    - Software-Umschalter: Eine Schaltfläche in der Host-Anwendung
- **Umschaltlogik**: Für detailliertere Informationen zur Logik, wie der umschaltbare USB-Port funktioniert, einschließlich der Interaktion zwischen Hardware- und Software-Umschaltern, der Ersteinrichtung, Betriebszuständen und Zustandsübergängen, siehe die [USB-Umschalter-Dokumentation](/usb-switch).

!!! warning "Wichtig"
    - Denken Sie daran, alle angeschlossenen USB-Laufwerke vor dem Umschalten der Verbindung des Ports auszuwerfen.
    - Der USB-Port hat Leistungsbeschränkungen. Schließen Sie keine Geräte an, die viel Strom benötigen, da dies zu instabilen Betrieb oder potenziellen Schäden führen kann.
