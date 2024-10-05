# Anleitung für Erweiterungspins

![change-cap](images/product/change-cap.svg#only-light){:style="height:300px"}
![change-cap](images/product/change-cap_1.svg#only-dark){:style="height:300px"}

Das Openterface Mini-KVM verfügt über Erweiterungspins für fortgeschrittene Entwicklungen und [Open Software](/app) Experimente. Diese Pins sind im Standardgehäuse nicht zugänglich.

### Zugriff auf die Erweiterungspins für die Entwicklung

Um die Erweiterungspins zu nutzen:

1. Zerlegen Sie das Gerät
2. Ersetzen Sie die originale Gehäuseabdeckung durch eine spezielle Erweiterungspin-Abdeckung
3. Laden Sie das 3D-Modell für die Erweiterungspin-Abdeckung aus unserem [GitHub-Repository](https://github.com/TechxArtisanStudio/Openterface_Mini-KVM_Hardware) herunter

!!! warnung "Garantie erlischt"
    Das Entfernen des Originalgehäuses führt zum Erlöschen der Produktgarantie. Alle Änderungen oder Demontagen erfolgen auf eigenes Risiko.

!!! hinweis "Experimentelle Funktionen"
    Funktionen, die mit diesen Pins entwickelt werden, sind experimentell und nicht vollständig getestet. Openterface haftet nicht für Schäden, Verletzungen oder Fehlfunktionen, die durch Modifikationen, das Freilegen der Erweiterungspins oder andere Änderungen am Gerät entstehen.

### Pinbelegung

![target-side](images/product/extension-pins-1.svg#only-light){:style="height:200px"}
![host-side](images/product/extension-pins-2.svg#only-light){:style="height:200px"}
![target-side](images/product/extension-pins-1_1.svg#only-dark){:style="height:200px"}
![host-side](images/product/extension-pins-2_1.svg#only-dark){:style="height:200px"}

Die Erweiterungspins bieten folgende Verbindungen:

1. USB 5V Stromversorgung für externe Komponenten
2. Daten positiv zum USB-Hub des Hosts
3. Daten negativ zum USB-Hub des Hosts
4. Daten positiv zum USB-Hub des Ziels
5. Daten negativ zum USB-Hub des Ziels
6. Masse

!!! gefahr "Falsche Verbindungen"
    Das Vertauschen von VCC und GND kann schwere Schäden am Gerät und an angeschlossenen Komponenten verursachen. Überprüfen Sie immer die Pin-Verbindungen, bevor Sie das Gerät einschalten.