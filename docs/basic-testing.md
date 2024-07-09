# Grundlegende Betriebstests

<iframe width="560" height="315" src="https://www.youtube.com/embed/m7OpUem0zqY?si=3kHl1kmk6VQRnPu7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/ERzpGtRvP2o?si=2DQrHqk-GhzvvL24" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


## Maus 🖱

- Absoluter & Relativer Modus
    - Bewegungslatenz, um eine reibungslose und reaktionsschnelle Steuerung zu gewährleisten.
    - Genauigkeit der Mauspositionszuordnung
    - Klicktest (Einzelklick, Doppelklicks)
    - Drag-Test

## Tastatur ⌨️
- Tastaturzuordnungstest, insbesondere für verschiedene Sonderzeichen
- Tippreaktionstest
- Mehrfach-Tastendrucktest
- Funktionstastentest
- Testen mit verschiedenen Ländereinstellungen der Tastatur, um eine konsistente Zuordnung zu gewährleisten

!!! Tipp

    Sie können ein Online-Tastaturtesttool sowohl auf dem Host- als auch auf dem Zielcomputer verwenden, um zu überprüfen, ob ihre Tastatureingaben synchronisiert sind.

## Textübertragung 📝
- Textübertragungsfunktion: Überprüfen Sie, ob die Host-Anwendung Text erfolgreich vom Host-Computer auf das Zielgerät übertragen kann, indem Sie [ASCII-Codes](https://theasciicode.com.ar/) verwenden.
- Inhaltsintegrität: Stellen Sie sicher, dass der übertragene Text vom Host zum Zielgerät intakt bleibt und genau reproduziert wird.
- Handhabung von Sonderzeichen: Testen Sie die Textübertragungsfunktion mit verschiedenen ASCII-Zeichen, einschließlich Symbolen, Satzzeichen und nicht-alphanumerischen Zeichen, um eine ordnungsgemäße Handhabung und Reproduktion auf dem Zielgerät zu gewährleisten.
- Textlängentests: Testen Sie die Textübertragungsfunktion mit Text unterschiedlicher Länge, von kurzen Zeichenfolgen bis hin zu längeren Absätzen, um sicherzustellen, dass sie verschiedene Textgrößen ohne Probleme bewältigen kann.
- Fehlerbehandlung: Testen Sie Fehlerszenarien wie Verbindungsverlust oder Unterbrechung während der Textübertragung, um sicherzustellen, dass die Host-Anwendung diese Situationen angemessen handhabt und dem Benutzer entsprechendes Feedback gibt.
- Leistungstests: Bewerten Sie die Leistung der Textübertragungsfunktion unter verschiedenen Bedingungen, einschließlich älterer oder langsamerer Computer, um potenzielle Probleme mit falsch empfangenen HID-Eingangssignalen zu identifizieren und einen reibungslosen Betrieb zu gewährleisten.
- Benutzeroberflächentests: Stellen Sie sicher, dass die Benutzeroberfläche der Host-Anwendung intuitive Steuerungen und Feedback für die Initiierung und Überwachung von Textübertragungsvorgängen bietet, sodass Benutzer diese Funktion effektiv verstehen und nutzen können.

!!! Hinweis
    Die Textübertragungsfunktion ist so konzipiert, dass sie das Tippverhalten emuliert, um Textinhalte auf dem Zielcomputer zu reproduzieren. Sie unterstützt keine Zwischenablage-Integration und kann daher keine nicht-textuellen Inhalte wie Bilder übertragen. Diese Funktion unterstützt ausschließlich die Übertragung von Text basierend auf ASCII-Codes. Daher werden Sprachen, die nicht auf ASCII-Codes basieren, wie chinesische, japanische oder koreanische Zeichen, nicht unterstützt. Es wird außerdem nicht empfohlen, zu viel Text auf einmal zu übertragen.

## BIOS-Zugriff ⚙️
- Überprüfen, ob die App Zugriff auf das BIOS verschiedener Zielgeräte hat.

## Ton 🔊
- Überprüfen, ob der Ton vom Zielcomputer normal auf dem Steuercomputer abgespielt werden kann.

## Video 🎥
- Überprüfen, ob die App den Zielcomputer mit verschiedenen Auflösungen und Frequenzen korrekt anzeigen kann.

## Ein- und Ausstecken 🔌
- Empfohlene Gerätekonnektionsreihenfolge
- Unterbrechung der Reihenfolge gemäß den obigen Empfehlungen, verschiedene Szenarien testen, um den normalen Betrieb sicherzustellen

## Umschaltbarer USB-Port & dessen Kippschalter 🔄
- Kippschalter-Test: Testen des Kippschalters in verschiedenen Szenarien, um sicherzustellen, dass er zuverlässig funktioniert und effektiv zwischen Host- und Zielcomputerverbindungen wechselt.
- Port-Kompatibilität: Überprüfen, ob der USB-A 2.0-Port die Verbindung mit sowohl dem Host- als auch dem Zielcomputer wie vorgesehen für verschiedene USB-Geräte, wie einen USB-Stick oder eine Webcam, unterstützt.

!!! Hinweis

    Nur ein Computer kann den Port gleichzeitig nutzen. Wenn der Port von einem USB-Stick verwendet wird, stellen Sie sicher, dass der USB-Stick ausgeworfen wird, bevor Sie den Schalter umlegen, um die Nutzung des Ports auf einen anderen Computer umzuschalten.

!!! Warnung
    Der USB-Port kann einem externen USB-Gerät 5V Strom liefern, hat jedoch eine sehr begrenzte Stromversorgungskapazität von etwa 10W. Beachten Sie, dass dies möglicherweise nicht ausreicht, um bestimmte externe Geräte wie ein Jetson Nano, das GPU-intensive Aufgaben ausführt, mit Strom zu versorgen.

## Unterschiedliche Zielgeräte 💻🎯
- Testen verschiedener Zielgeräte, wie verschiedene Versionen von macOS, Windows, Linux, Android, iOS usw.

## Unterschiedliche Hosts 💻👑
- Testen unserer derzeit veröffentlichten internen Testsoftware, wie unterstützte Versionen für macOS, Windows oder Linux
- Überprüfen, ob verschiedene Betriebssystemversionen die entsprechende Host-App verwenden können

# Zusätzliche Tests
- Benutzeroberflächentests: Überprüfen Sie, ob die Benutzeroberfläche der Host-Anwendungen intuitiv und benutzerfreundlich ist und einfachen Zugriff auf wesentliche Funktionen und Einstellungen bietet.
- Fehlerbehandlungstests: Testen Sie die Fehlerbehandlungsmechanismen, um sicherzustellen, dass sie unerwartete Situationen wie Verbindungsunterbrechungen oder Gerätefehler problemlos bewältigen.
- Dokumentationsprüfung: Überprüfen Sie Benutzerhandbücher und Dokumentationen, um sicherzustellen, dass sie umfassend, genau und leicht verständlich sind und klare Anweisungen für Einrichtung, Betrieb und Fehlerbehebung bieten.
- Leistungstests: Bewerten Sie die Leistung des Mini-KVM-Geräts unter verschiedenen Arbeitslastszenarien, um sicherzustellen, dass es die erforderlichen Leistungsstandards erfüllt und die Systemleistung während des Betriebs nicht beeinträchtigt.
- Stabilitätstests: Führen Sie Stresstests und Langzeittests durch, um die Stabilität und Zuverlässigkeit des Mini-KVM-Geräts unter kontinuierlicher Nutzung zu beurteilen.
