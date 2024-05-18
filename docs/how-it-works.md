---
comments: true
---

# Wie es funktioniert

## Prozessaufgliederung

- **Bildschirm-Streaming**: Der Mini-KVM erfasst den Bildschirmstrom vom Zielcomputer und zeigt ihn in der App des Host-Computers an. Dies ermöglicht es den Benutzern, das Zielsystem direkt von ihrem Host-Computer aus zu sehen und zu verwalten.
- **Cursor- und Maussteuerung**: Durch Bewegen der Maus in das App-Fenster auf dem Host-Computer können Benutzer den Cursor auf dem Zielgerät steuern, als ob sie einen VNC verwenden würden. Diese Funktionalität ermöglicht das gleichzeitige Bedienen von zwei Systemen auf einem Bildschirm.
- **Tastatureingabe**: Wenn das App-Fenster aktiv ist, werden alle Tastenanschläge auf der Tastatur des Host-Computers an das Zielgerät übertragen, wodurch ein nahtloses Tippen und Eingeben von Befehlen ermöglicht wird.
- **HID-Signalumwandlung**: Alle Tastatur- und Mauseingaben innerhalb der App werden in Human Interface Device (HID) Steuerungssignale umgewandelt, die dann an den Zielcomputer gesendet werden.
- **Synchronisation**: Die App sorgt dafür, dass der Bildschirm und der Cursor des Zielcomputers mit der Anzeige des Host-Computers synchronisiert sind, um ein einheitliches Benutzererlebnis zu gewährleisten.

## Erkundung der Hardwaredetails

- [Openterface_Mini-KVM_Hardware](https://github.com/TechxArtisanStudio/Openterface_Mini-KVM_Hardware): Erkunde unser umfassendes Hardware-Design, Schaltpläne und Komponenten.

![openterface-mini-kvm-product-with-PCB](/images/product/openterface-mini-kvm-product-with-PCB.jpg)