# Funktionsweise

## Prozessübersicht

- **Bildschirmübertragung**: Das mini-KVM erfasst den Bildschirmstream des Zielcomputers und zeigt ihn in der App auf dem Host-Computer an. So können Benutzer das Zielsystem direkt von ihrem Host-Gerät aus betrachten und steuern.
- **Maus- und Cursorsteuerung**: Durch Bewegen der Maus in das App-Fenster auf dem Host-Computer können Benutzer den Cursor auf dem Zielgerät steuern, als ob sie ein VNC verwenden würden. Diese Funktion ermöglicht die gleichzeitige Bedienung von zwei Systemen auf einem Bildschirm.
- **Tastatureingabe**: Wenn das App-Fenster aktiv ist, werden alle Tastatureingaben vom Host-Computer an das Zielgerät übertragen, was ein nahtloses Tippen und Eingeben von Befehlen ermöglicht.
- **HID-Signalumwandlung**: Alle Tastatur- und Mauseingaben innerhalb der App werden in Human Interface Device (HID) Steuersignale umgewandelt und an den Zielcomputer gesendet.
- **Synchronisation**: Die App stellt sicher, dass der Bildschirm und der Cursor des Zielcomputers mit der Anzeige des Host-Computers synchronisiert sind, was eine einheitliche Benutzererfahrung ermöglicht.

Weitere Details finden Sie in der Open-Source [Software](/app) und [Hardware](/open-hardware) von Openterface.