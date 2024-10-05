# Test & Entwicklung

## 💻 Kompatibilität

- **Betriebssystemunterstützung**: Überprüfen Sie, ob verschiedene Betriebssystemversionen die entsprechende Host-App verwenden können.
- **Leistungstests**: Bewerten Sie die Leistung auf verschiedenen Host-Systemen.
- **Betriebssystemversionstests**: Stellen Sie die Kompatibilität mit verschiedenen Betriebssystemversionen sicher.
- **Gerätespezifische Probleme**: Identifizieren und beheben Sie Probleme, die bei bestimmten Geräten oder Betriebssystemversionen auftreten.

## 🖱 Maussteuerung

<div class="annotate" markdown>

- **Bewegungslatenz**: Stellen Sie eine reibungslose und reaktionsschnelle Steuerung sicher.
- **Maustasten**: Testen Sie die linke, rechte und mittlere Maustaste; klicken und ziehen.
- **Scrollen**: Bewerten Sie die Scrollgeschwindigkeit und -richtung.
- **Genauigkeit** der Mauspositionszuordnung im *Absoluten* Modus (1)
- **Empfindlichkeit** der Mausbewegung im *Relativen* Modus (2)

</div>

1. Stellen Sie sicher, dass die Mausposition des Ziels genau auf die des Hosts abgebildet wird. Dies kann durch die Auflösung des Ziels und Änderungen der Anwendungsfenstergröße beeinflusst werden.
2. Stellen Sie sicher, dass die Mausbewegung den intuitiven Erwartungen entspricht.

## ⌨️ Tastatur

<div class="annotate" markdown>

- **Tippreaktion**: Stellen Sie sicher, dass sie den intuitiven Erwartungen entspricht.
- **Vollständige Tastaturzuordnung**: Besonders für verschiedene Sonderzeichen.
- **Modifikatoren**: Tasten wie `Strg`, `Umschalt`, `Alt` und `Cmd` oder `Win`.
- **Tastenkombinationen**: Technisch unterstützt bis zu 8 Modifikatortasten und 6 zusätzliche Tasten gleichzeitig.
- **Medien- & ACPI-Tasten**: Tasten wie `Lautstärke-`, `Lautstärke+`, `Stummschalten`, `Aufwecken`, `Schlafen` und `Power`.
- **Tastaturlayouts**: Stellen Sie eine konsistente Zuordnung für verschiedene Layouts sicher. (1)

!!! tip

    - **Tastaturtester**: Sie können ein Online-Tastaturtest-Tool sowohl auf dem Host- als auch auf dem Zielcomputer verwenden, um zu überprüfen, ob ihre Tastenanschläge synchronisiert sind.
    - **CH9329 Chip**: Überprüfen Sie [die Details](https://github.com/TechxArtisanStudio/Openterface_Mini-KVM_Hardware/tree/main/CH9329), um die Grenzen der Tastatur-/Maussteuerung im Openterface Mini-KVM zu verstehen.

</div>

1. ⌨️ 🌏 Tastaturlayouts variieren weltweit je nach Region und Sprache, mit beliebten Typen wie QWERTY, AZERTY, QWERTZ und Dvorak.

## ⚙️ BIOS-Zugriff

- **BIOS-Eintritt**: Testen Sie den Eintritt ins BIOS während der Startsequenz.
- **Funktionalität**: Stellen Sie die vollständige Tastatur- und Maussteuerung im BIOS sicher.
- **Kompatibilität**: Überprüfen Sie den BIOS-Zugriff auf verschiedenen Motherboard-Marken und -Modellen.

## 🔊 Ton

- **Tonqualität**: Bewerten Sie die Klarheit und Synchronisation der Audiowiedergabe.
- **Latenz**: Messen Sie Verzögerungen zwischen Aktionen und den entsprechenden Geräuschen.
- **Kompatibilität**: Testen Sie verschiedene Audioausgaben auf verschiedenen Betriebssystemen.

## 🎥 Video

- **Auflösungsunterstützung**: Testen Sie verschiedene Bildschirmauflösungen und Seitenverhältnisse.
- **Bildrate**: Bewerten Sie die Leistung bei verschiedenen Bildwiederholraten.
- **Bildqualität**: Überprüfen Sie auf visuelle Artefakte oder Latenzprobleme.

## 🔄 Umschaltbarer USB-Port

- **Schaltertests**: Testen Sie den Umschalter in verschiedenen Szenarien auf Zuverlässigkeit.
- **Port-Kompatibilität**: Stellen Sie sicher, dass der USB-A 2.0-Port verschiedene USB-Geräte wie Flash-Laufwerke und Webcams unterstützt.
- **Leistungsgrenzen**: Bestätigen Sie die Stromversorgungskapazität des Ports und deren Eignung für verschiedene Geräte.

## 🔌 Ein- und Ausstecken

- **Verbindungstests**: Testen Sie Szenarien mit verschiedenen Verbindungs- und Trennsequenzen.
- **Fehlerbehandlung**: Stellen Sie sicher, dass das Gerät unsachgemäße Verbindungen erkennt und sich davon erholt.
- **Stabilität**: Überprüfen Sie die Stabilität, wenn Geräte wiederholt ein- und ausgesteckt werden.

## 📝 Textübertragung

- **Funktionalitätstests**: Überprüfen Sie, ob die Host-Anwendung Text erfolgreich vom Host-Computer auf das Zielgerät übertragen kann, indem ASCII-Codes verwendet werden.

- **Inhaltsintegrität**: Stellen Sie sicher, dass der übertragene Textinhalt vom Host auf das Zielgerät intakt bleibt und genau wiedergegeben wird.

- **Sonderzeichenbehandlung**: Testen Sie die Textübertragungsfunktion mit verschiedenen ASCII-Zeichen, um eine ordnungsgemäße Handhabung und Wiedergabe auf dem Zielgerät sicherzustellen.

- **Textlängentests**: Testen Sie die Textübertragungsfunktion mit Texten unterschiedlicher Länge, um sicherzustellen, dass sie verschiedene Textgrößen ohne Probleme verarbeiten kann.

- **Fehlerbehandlung**: Testen Sie Fehlerszenarien, wie z. B. Verbindungsverlust oder Unterbrechung während der Textübertragung, um sicherzustellen, dass die Host-Anwendung diese Situationen elegant handhabt und dem Benutzer angemessenes Feedback gibt.

- **Leistungstests**: Bewerten Sie die Leistung der Textübertragungsfunktion unter verschiedenen Bedingungen, einschließlich auf älteren oder langsameren Computern, um potenzielle Probleme mit dem Empfang von HID-Eingangssignalen zu identifizieren und einen reibungslosen Betrieb sicherzustellen.

- **Benutzeroberflächentests**: Stellen Sie sicher, dass die Benutzeroberfläche der Host-Anwendung intuitive Steuerungen und Feedback für die Initiierung und Überwachung von Textübertragungsvorgängen bietet, sodass Benutzer diese Funktion effektiv verstehen und nutzen können.

## Zusätzliche Tests

- **Fehlerbehandlung**: Testen Sie Mechanismen zur Fehlerbehandlung für eine elegante Wiederherstellung nach Unterbrechungen.
- **Leistung**: Bewerten Sie die Leistung des Mini-KVM unter verschiedenen Arbeitslastszenarien.
- **Stabilität**: Führen Sie Stresstests für langfristige Stabilität und Zuverlässigkeit durch.