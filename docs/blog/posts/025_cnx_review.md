---
date: 2024-05-09
authors:
  - CNXSOFT
categories:
  - Tech Review
---

# Produktbewertung von CNX Software: Openterface Mini-KVM - Ein erschwingliches KVM-over-USB-Gerät (Crowdfunding)

Dieser Beitrag wurde basierend auf dem Originalartikel des Autors neu formuliert: [Openterface Mini-KVM ist ein erschwingliches KVM-over-USB-Gerät (Crowdfunding), 9. Mai 2024 von Jean-Luc Aufranc (CNXSOFT)](https://www.cnx-software.com/2024/05/09/openterface-mini-kvm-affordable-kvm-over-usb-device/)

<!-- more -->

Das **Openterface Mini-KVM** ist ein kompaktes Open-Source-KVM-over-USB-Hardwaregerät mit HDMI- und Audioeingängen, das über einen USB-C-Anschluss mit dem Host-Computer verbunden wird.

Wir haben im Laufe der Jahre verschiedene erschwingliche [KVM-over-IP](https://www.cnx-software.com/2023/04/18/blikvm-open-source-kvm-over-ip-raspberry-pi-cm4-raspberry-pi-hat-pcie-board-allwinner-h616/)-Lösungen basierend auf Einplatinencomputern gesehen. Das **Openterface Mini-KVM** sticht jedoch als günstigeres, plug-and-play, netzunabhängiges KVM-over-USB-Gerät hervor, das eine direkte HDMI- und USB-Verbindung zwischen dem Host-Computer und dem Zielgerät herstellt. Es unterstützt viele der gleichen Funktionen wie KVM-over-IP-Lösungen, außer einigen Funktionen wie ATX-Unterstützung, die in der [PiKVM v4 Plus](https://docs.pikvm.org/v4/) oder dem [Pi-Cast KVM](https://www.cnx-software.com/2023/12/24/pi-cast-portable-kvm-switch-raspberry-pi-cm4/) mit einer Erweiterungsplatine vorhanden sind, die das Ausschalten des Zielgeräts vom Host-Gerät aus ermöglicht.

![Openinterface-Mini-KVM-1](https://www.cnx-software.com/wp-content/uploads/2024/05/Openinterface-Mini-KVM-1.jpg)

## Mini-KVM-Spezifikationen (Modell LIG03D01):
- **Steuerungsmethode**: KVM-over-USB
- **Videoaufnahme**: Bis zu 1920×1080 @ 30 Hz mit weniger als 140ms Latenz über HDMI oder VGA (letzteres erfordert ein zusätzliches VGA-zu-HDMI-Kabel)
- **Audioaufnahme**: Über HDMI
- **Textübertragung**: Text kann vom Host zum Zielgerät mithilfe der emulierten Tastaturausgabe gesendet werden, nützlich zum Kopieren von Benutzernamen, Passwörtern oder Codeschnipseln
- **USB-Anschluss**: Geschalteter USB 2.0 Typ-A Anschluss zum Host oder Zielgerät für den Dateitransfer von/zu einem USB-Laufwerk oder zum Teilen anderer USB-Geräte
- **BIOS-Zugriff**: Direkter Zugriff auf das BIOS des Zielgeräts für Firmware-Updates und Boot-Management
- **Stromversorgung**: Über USB-C vom Host-Computer
- **Abmessungen**: 61 x 53 x 13,5 mm
- **Gewicht**: 48 Gramm

![KVM-over-USB-Raspberry-Pi-target-laptop-guest.webp](https://www.cnx-software.com/wp-content/uploads/2024/05/KVM-over-USB-Raspberry-Pi-target-laptop-guest.webp)

Die Host-Anwendung wird bald für **macOS, Windows, Linux und Android** verfügbar sein. Sie können die Entwicklung jeder Anwendung verfolgen und auf die Hardware-Design-Dateien auf [GitHub](https://github.com/TechxArtisanStudio) in den folgenden Repositories zugreifen (derzeit leer):
- **Openterface_MacOS** – Host-Anwendungen für MacOS
- **Openterface_QT** – Host-Anwendungen für Windows und Linux
- **Openterface_Android** – Host-Anwendungen für Android-Unterstützung
- **Openterface_Mini-KVM_Hardware** – Hardware-Design, Schaltpläne und Komponenten

Das Unternehmen (TECHxARTISAN) gibt an, dass die KVM-over-USB-Lösung nützlich sein kann für:
- IT-Profis, die Server warten
- Techniker, die Geldautomaten, VLTs und Kioske reparieren
- Entwickler, die Edge-Computing-Geräte verwalten
- Technikbegeisterte, die mit Einplatinencomputern experimentieren
- Fachleute, die sichere lokale Operationen in Netzwerktrennungen benötigen, wie z.B. bei der Verwaltung von Krypto-Assets
- Jeden, der häufig integrierte Workflows zwischen persönlichen und Arbeitscomputern benötigt

Es scheint besonders nützlich zu sein, um auf headless Hardware mit einem Laptop zuzugreifen, ohne zusätzliche Bildschirme, Tastaturen und Mäuse zu benötigen.

![Mini-KVM-vs-StarTech-Crash-Cart-NOTECONS02-KVM-over-USB](https://www.cnx-software.com/wp-content/uploads/2024/05/Mini-KVM-vs-StarTech-Crash-Cart-NOTECONS02-KVM-over-USB.webp)

Das Mini-KVM-Kit ist erheblich günstiger als das StarTech Crash Cart NOTECONS02 KVM-over-USB-Gerät, das VGA-Eingang unterstützt und [etwa 400 US-Dollar kostet](https://amzn.to/4boOmXw), sowie KVM-over-IP-Lösungen, obwohl es nicht genau [die günstigste Option](https://www.cnx-software.com/2023/04/18/blikvm-open-source-kvm-over-ip-raspberry-pi-cm4-raspberry-pi-hat-pcie-board-allwinner-h616/) in dieser Vergleichstabelle ist...

Das Unternehmen hat gerade das Mini-KVM [auf Crowd Supply](https://www.crowdsupply.com/techxartisan/openterface-mini-kvm) mit einem Ziel von 12.000 US-Dollar gestartet, das bereits überschritten wurde. Es gibt zwei Hauptbelohnungen:

- **79 US-Dollar**: Openterface Mini-KVM mit Schnellstartanleitung
- **99 US-Dollar**: Openterface Mini-KVM Toolkit mit den gleichen Gegenständen wie die 79-Dollar-Belohnung, plus ein 30cm HDMI-Kabel (Stecker zu Stecker), ein 30cm USB-C-Stecker zu USB-A-Stecker Kabel mit einem USB-A-Buchse zu USB-C-Stecker Adapter, ein 1,5m USB-C-Stecker zu USB-C-Stecker Kabel und eine Werkzeugtasche.

Zusätzlich gibt es einen VGA + Audio zu HDMI-Konverter, der für ältere Serversysteme oder Systeme, die nur über einen VGA-Anschluss verfügen, nützlich sein könnte. Der Versand kostet 8 US-Dollar in die USA und 18 US-Dollar in den Rest der Welt. Unterstützer sollten damit rechnen, dass ihre Belohnungen bis Ende September 2024 verschickt werden, wenn alles nach Plan verläuft. Weitere Details finden Sie auch auf der [Projektwebsite](http://openterface.com/).

<iframe width="560" height="315" src="https://www.youtube.com/embed/6OWaVIRXCaw?si=KpzsXY0ET8KnG8qT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
