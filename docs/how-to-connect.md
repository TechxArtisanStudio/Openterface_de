# So verbinden Sie sich

## Schnittstellen

![host-side](images/product/host-htc.svg#only-light){:style="width:360px"}

![target-side](images/product/target-htc.svg#only-light){:style="width:360px"}

![host-side](images/product/host-htc_1.svg#only-dark){:style="width:360px"}

![target-side](images/product/target-htc_1.svg#only-dark){:style="width:360px"}

① ![Type-C zu Host](images/shell-icons/host.svg#only-light){:style="height:15px"} ![Type-C zu Host](images/shell-icons/host_1.svg#only-dark){:style="height:15px"} - **Host USB-C Anschluss** (Weiblich): Als USB-Geräteanschluss, der mit dem Host-Computer für die Datenübertragung über den integrierten USB-Hub verbunden wird

② ![Type-C zu Ziel](images/shell-icons/target.svg#only-light){:style="height:18px"} ![Type-C zu Ziel](images/shell-icons/target_1.svg#only-dark){:style="height:18px"} - **Ziel USB-C Anschluss** (Weiblich): Als USB-Geräteanschluss, der mit dem Host-Computer verbunden wird, um Tastatur- und Maus-HID-Ausgaben über den integrierten USB-Hub zu emulieren

③ ![HDMI Eingang](images/shell-icons/input.svg#only-light){:style="height:18px"} ![HDMI Eingang](images/shell-icons/input_1.svg#only-dark){:style="height:18px"} - **HDMI Eingang** (Weiblich): HDMI-Quelleingang vom Ziel-Computer

④ ![USB-A Anschluss](images/shell-icons/switchable-usb.svg#only-light){:style="height:26px"} ![USB-A Anschluss](images/shell-icons/switchable-usb_1.svg#only-dark){:style="height:26px"} - **Umschaltbarer USB-A 2.0 Anschluss** (Weiblich): Als USB-Host-Anschluss, der entweder vom Host-Computer oder vom Ziel-Computer genutzt wird, jedoch nicht gleichzeitig.

!!! warnung "Enger Sitz"
    Bitte beachten Sie, dass dieser USB-A-Anschluss mit einem Verriegelungsmechanismus ausgestattet ist, der etwas mehr Kraft erfordert, um Ihre USB-Geräte ein- und auszustecken.

⑤ ![Umschalter](images/shell-icons/toggle-h-t.svg#only-light){:style="height:20px"} ![Umschalter](images/shell-icons/toggle-h-t_1.svg#only-dark){:style="height:20px"} - **Umschalter**: Zum Umschalten der Verbindung des USB-A 2.0 Anschlusses zwischen dem Host- und dem Ziel-Computer

⑥ ![Erweiterungspins](images/shell-icons/pins.svg#only-light){:style="height:15px"} ![Erweiterungspins](images/shell-icons/pins_1.svg#only-dark){:style="height:15px"} - **Erweiterungspins**: Für weitere Informationen besuchen Sie bitte [Erweiterungspins](/extension-pin) für Entwickler.

## Verbindungsschritte

![to-host](images/product/to-host.svg#only-light){:style="height:260px"} ![to-host](images/product/to-host_1.svg#only-dark){:style="height:260px"}
![to-target](images/product/to-target.svg#only-light){:style="height:260px"} ![to-target](images/product/to-target_1.svg#only-dark){:style="height:260px"}

Um Ihr Mini-KVM einzurichten, folgen Sie diesen Schritten in der angegebenen Reihenfolge:

1. **Host-Computer-Verbindung** (Orange Seite):
    - Verbinden Sie den Host-Computer mit dem Mini-KVM über das orange 1,5m Type-C USB-Kabel. Stecken Sie es in den Type-C-Anschluss auf der orangefarbenen Seite des Mini-KVM.

    !!! hinweis "Host-App erforderlich"
        Der Host-Computer muss die Host-App installiert haben. Weitere Informationen und Download-Links finden Sie in der [App-Dokumentation](/app).

2. **Zielgerät-Verbindung** (Schwarze Seite):
    - Verbinden Sie das Zielgerät mit dem Mini-KVM über das schwarze 0,3m Type-C USB-Kabel. Stecken Sie es in den Type-C-Anschluss auf der schwarzen Seite des Mini-KVM.

3. **Ziel-Videoausgang-Verbindung** (Schwarze Seite):
    - Verbinden Sie den Videoausgang des Zielgeräts mit dem HDMI-Anschluss auf der schwarzen Seite des Mini-KVM. Verwenden Sie das schwarze 0,3m HDMI-Kabel oder ein anderes geeignetes Video-zu-HDMI-Kabel, wie z.B. ein VGA-zu-HDMI-Konverterkabel.

    !!! hinweis "Keine App für das Zielgerät erforderlich"
        Auf dem Zielgerät ist keine Vorinstallation oder Konfiguration erforderlich. Solange das Zielgerät UI-Operationen mit Videoausgang (HDMI, VGA, etc.) unterstützt und einen USB-Anschluss hat, um emulierte Tastatur- und Maussteuerungssignale (HID) zu empfangen, kann es verwendet werden. Unterstützte Zielgeräteplattformen sind Windows, macOS, Linux, Android und iOS.

4. **Umschaltbarer USB-A 2.0 Anschluss-Verbindung** (Optional):
    - Wenn Sie ein USB-Gerät an den umschaltbaren USB-A 2.0 Anschluss anschließen möchten, wird empfohlen, dies nach Abschluss der oben genannten drei Verbindungen und sicherzustellen, dass die Host-App geöffnet ist, zu tun.

