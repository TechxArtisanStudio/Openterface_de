---
title: "Wie man verbindet"
description: "Schritt-für-Schritt-Anleitung zur Einrichtung des Openterface Mini-KVM. Erfahren Sie, wie Sie Ihren Host-Computer und das Zielgerät mit detaillierten Anweisungen für USB-C-, HDMI- und Peripherieverbindungen verbinden. Enthält Schnittstellenbeschreibungen und wichtige Einrichtungstipps."
keywords: "Mini-KVM Einrichtung, KVM Verbindungsanleitung, USB-C KVM Einrichtung, HDMI KVM Verbindung, KVM Installationsanleitung, Computerperipherie Einrichtung, USB-Geräteverbindung, KVM Schnittstellenanleitung, headless Computer Einrichtung, KVM Konfiguration"
---

# **Wie man verbindet** | Einrichtungsanleitung | Openterface Mini-KVM

## Verbindungs Schritte

![to-host](https://assets.openterface.com/images/product/to-host.svg#only-light){:style="height:260px"} ![to-host](https://assets.openterface.com/images/product/to-host_1.svg#only-dark){:style="height:260px"}
![to-target](https://assets.openterface.com/images/product/to-target.svg#only-light){:style="height:260px"} ![to-target](https://assets.openterface.com/images/product/to-target_1.svg#only-dark){:style="height:260px"}

Um Ihr Mini-KVM einzurichten, folgen Sie diesen Schritten in der angegebenen Reihenfolge:

1. **Verbindung zum Host-Computer** (Orangene Seite):
    - Verbinden Sie den Host-Computer mit dem Mini-KVM über das orange 1,5 m Type-C USB-Kabel. Stecken Sie es in den Type-C Female-Anschluss auf der orangenen Seite des Mini-KVM.

    !!! note "Host-App erforderlich"
        Der Host-Computer muss die Host-App installiert haben. Für weitere Informationen und Download-Links besuchen Sie bitte die [App](/app) Seite.

2. **Verbindung zum Zielgerät** (Schwarze Seite):
    - Verbinden Sie das Zielgerät mit dem Mini-KVM über das schwarze 0,3 m Type-C USB-Kabel. Stecken Sie es in den Type-C Female-Anschluss auf der schwarzen Seite des Mini-KVM.

3. **Verbindung zum Ziel-Videoausgang** (Schwarze Seite):
    - Verbinden Sie den Videoausgangsanschluss des Zielgeräts mit dem HDMI Female-Anschluss auf der schwarzen Seite des Mini-KVM. Verwenden Sie das schwarze 0,3 m HDMI-Kabel oder ein anderes geeignetes Videoquelle-zu-HDMI-Kabel, wie z.B. ein VGA-zu-HDMI-Konverterkabel.

    !!! note "Keine App erforderlich für das Ziel"
        Es sind keine Vorinstallationen oder Konfigurationen auf dem Zielgerät erforderlich. Solange das Zielgerät UI-Operationen mit Videoausgabe (HDMI, VGA usw.) unterstützt und einen USB-Anschluss hat, um emulierte Tastatur- und Maussteuerung (HID) Signale zu empfangen, kann es verwendet werden. Unterstützte Zielgerät-Plattformen sind Windows, macOS, Linux, Android und iOS.

4. **Verbindung zum umschaltbaren USB-A 2.0 Port** (Optional):
    - Wenn Sie ein USB-Gerät an den umschaltbaren USB-A 2.0 Port anschließen möchten, wird empfohlen, dies nach Abschluss der oben genannten drei Verbindungen und Sicherstellung, dass die Host-App geöffnet ist, zu tun.


## Schnittstellen

![host-side](https://assets.openterface.com/images/product/host-htc.svg#only-light){:style="width:360px"}

![target-side](https://assets.openterface.com/images/product/target-htc.svg#only-light){:style="width:360px"}

![host-side](https://assets.openterface.com/images/product/host-htc_1.svg#only-dark){:style="width:360px"}

![target-side](https://assets.openterface.com/images/product/target-htc_1.svg#only-dark){:style="width:360px"}

① ![Type-C zu Host](/images/shell-icons/host.svg#only-light){:style="height:15px"} ![Type-C zu Host](/images/shell-icons/host_1.svg#only-dark){:style="height:15px"} - **Host USB-C Port** (Weiblich): Als USB-Geräteanschluss, der mit dem Host-Computer für den Datentransfer über den integrierten USB-Hub verbunden ist

② ![Type-C zu Ziel](/images/shell-icons/target.svg#only-light){:style="height:18px"} ![Type-C zu Ziel](/images/shell-icons/target_1.svg#only-dark){:style="height:18px"} - **Ziel USB-C Port** (Weiblich): Als USB-Geräteanschluss, der mit dem Host-Computer verbunden ist, um die emulierte Tastatur- und Maus-HID-Ausgabe über den integrierten USB-Hub zu ermöglichen

③ ![HDMI Eingang](/images/shell-icons/input.svg#only-light){:style="height:18px"} ![HDMI Eingang](/images/shell-icons/input_1.svg#only-dark){:style="height:18px"} - **HDMI Eingang Port** (Weiblich): HDMI-Quelleingang vom Zielcomputer

④ ![USB-A Port](/images/shell-icons/switchable-usb.svg#only-light){:style="height:26px"} ![USB-A Port](/images/shell-icons/switchable-usb_1.svg#only-dark){:style="height:26px"} - **Umschaltbarer USB-A 2.0 Port** (Weiblich): Als USB-Hostanschluss, der entweder vom Host-Computer oder vom Zielcomputer zu einem bestimmten Zeitpunkt, jedoch nicht gleichzeitig, genutzt wird. Bitte überprüfen Sie den [USB-Port-Umschaltleitfaden](../usb-switch) für weitere Informationen.

!!! warning "USB-Strombeschränkungen"
    Die von dem USB-Port bereitgestellte Leistung hängt von der Hauptplatine des Hosts ab. Es wird nicht empfohlen, USB-Geräte anzuschließen, die viel Strom benötigen. Typischerweise sollte der Stromverbrauch 1,5 W nicht überschreiten. Das Anschließen von Hochleistungsgeräten kann zu instabilen Betrieb oder potenziellen Schäden führen.

!!! warning "USB-A Port hat festen Verriegelungsmechanismus"
    Der USB-A-Port enthält einen Verriegelungsmechanismus, der beim Einstecken oder Entfernen von Geräten zusätzlichen Druck erfordert. Dies ist beabsichtigt und sorgt für eine sichere Verbindung. **Vermeiden Sie die Verwendung von sehr kleinen USB-Geräten** (wie ultra-kompakten USB-Sticks), da sie schwer zu greifen und zu entfernen sein können, was potenziell zu Schäden führen kann.

!!! warning "Zusätzlicher USB-Hub benötigt externe Stromversorgung und kann die Kompatibilität beeinträchtigen"
    Das Mini-KVM enthält bereits einen integrierten USB-Hub, der sowohl mit dem Host- als auch mit dem Zielcomputer verbunden ist. Wenn Sie einen zusätzlichen externen USB-Hub an den USB-A-Port anschließen, funktionieren alle daran angeschlossenen USB-Geräte auf einer tieferen Ebene im USB-Gerätbaum. Einige Computer können Einschränkungen hinsichtlich der Tiefe des USB-Baums haben, was zu Kompatibilitätsproblemen führen oder verhindern kann, dass bestimmte Geräte korrekt funktionieren.

    Stellen Sie außerdem sicher, dass jeder angeschlossene USB-Hub extern mit Strom versorgt wird. Unpowered Hubs können Instabilität oder Fehlfunktionen des gesamten Mini-KVM-Setups verursachen.

⑤ ![Umschalter](/images/shell-icons/toggle-h-t.svg#only-light){:style="height:20px"} ![Umschalter](/images/shell-icons/toggle-h-t_1.svg#only-dark){:style="height:20px"} - **Umschalter**: Zum Umschalten der Verbindung des USB-A 2.0 Ports zwischen dem Host- und dem Zielcomputer

⑥ ![Erweiterungsstifte](/images/shell-icons/pins.svg#only-light){:style="height:15px"} ![Erweiterungsstifte](/images/shell-icons/pins_1.svg#only-dark){:style="height:15px"} - **Erweiterungsstifte**: Standardmäßig verborgen und nur zugänglich, indem die obere Abdeckung durch eine alternative Kappe ersetzt wird. Für weitere Informationen überprüfen Sie bitte die [Erweiterungsstifte](../extension-pins) für die Entwicklernutzung.