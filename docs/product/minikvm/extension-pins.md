---
title: "Erweiterungsstifte"
description: "Entdecken Sie das Potenzial der Erweiterungsstifte des Openterface Mini-KVM für die Entwicklung benutzerdefinierter Hardware und Open-Source-Projekte."
keywords: "Mini-KVM Erweiterungsstifte, benutzerdefinierte Entwicklung, Hardware-Modifikation, Open-Source KVM"
---

# **Erweiterungsstifte** | Entwicklermodus | Openterface Mini-KVM

![mini-kvm-pins-port](https://assets.openterface.com/images/product/mini-kvm-pins-port.png){:style="height:360px"}
![pin-cap](https://assets.openterface.com/images/product/part/pin-cap.jpg){:style="height:300px"}

Der Openterface Mini-KVM verfügt über Erweiterungsstifte für fortgeschrittene Entwicklungen und [Open Software](/app) Experimente. Diese Stifte sind in der Standardgehäusekonfiguration nicht zugänglich.

## So greifen Sie auf die Stifte zu

1. Zerlegen Sie das Gerät.
2. Ersetzen Sie die originale Gehäusedeckel durch eine spezialisierte Erweiterungsstiftkappe.
3. Laden Sie das [3D-Modell](https://github.com/TechxArtisanStudio/Openterface_Mini-KVM_Hardware/tree/main/models) für die Erweiterungsstiftkappe herunter.
4. Besuchen Sie unser [Hardware GitHub-Repository](https://github.com/TechxArtisanStudio/Openterface_Mini-KVM_Hardware).

![change-cap](https://assets.openterface.com/images/product/change-cap.svg#only-light){:style="height:300px"}
![change-cap](https://assets.openterface.com/images/product/change-cap_1.svg#only-dark){:style="height:300px"}

!!! warning "Garantie erlischt"
    Das Entfernen des originalen Gehäuses kann die Produktgarantie erlöschen. Alle Modifikationen oder Zerlegungen erfolgen auf eigenes Risiko des Benutzers.

!!! note "Experimentelle Funktionen"
    Funktionen, die mit diesen Stiften entwickelt wurden, sind experimentell und wurden nicht vollständig getestet. Openterface haftet nicht für Schäden, Verletzungen oder Fehlfunktionen, die aus Modifikationen, der Freilegung der Erweiterungsstifte oder anderen Änderungen am Gerät resultieren.

## Pin-Konfiguration

![target-side](https://assets.openterface.com/images/product/extension-pins-1.svg#only-light){:style="height:200px"}
![host-side](https://assets.openterface.com/images/product/extension-pins-2.svg#only-light){:style="height:200px"}
![target-side](https://assets.openterface.com/images/product/extension-pins-1_1.svg#only-dark){:style="height:200px"}
![host-side](https://assets.openterface.com/images/product/extension-pins-2_1.svg#only-dark){:style="height:200px"}

Die Erweiterungsstifte bieten die folgenden Verbindungen:

1. USB 5V Stromversorgung für externe Komponenten
2. Daten positiv zum USB-Hub des Hosts
3. Daten negativ zum USB-Hub des Hosts
4. Daten positiv zum USB-Hub des Ziels
5. Daten negativ zum USB-Hub des Ziels
6. Masse

!!! danger "Falsche Verbindungen verursachen Schäden"
    Das Verwechseln von VCC und GND kann zu schweren Schäden am Gerät und an angeschlossenen Komponenten führen. Überprüfen Sie immer die Pin-Verbindungen, bevor Sie das Gerät mit Strom versorgen.

## Erweiterungsstiftkappe

![pin-cap](https://assets.openterface.com/images/product/part/pin-cap.jpg){:style="height:360px"}

Diese 3D-gedruckte Erweiterungsstiftkappe ersetzt die originale Kappe des Openterface Mini-KVM und ermöglicht es fortgeschrittenen Benutzern, die Erweiterungsstifte freizulegen und darauf zuzugreifen. Sie können die 3D-Modell-Dateien aus unserem GitHub-Repository herunterladen und die Kappe selbst drucken.

- **Verwendung**: Bietet Zugang zu Erweiterungsstiften für fortgeschrittene Hardwareentwicklung.
- **Download**: [3D Modell Dateien](https://github.com/TechxArtisanStudio/Openterface_Mini-KVM_Hardware/tree/main/models)

## Beteiligen Sie sich an der Entwicklung

Während wir weiterhin entwickeln und experimentieren, werden wir diesen Abschnitt mit weiteren Informationen darüber aktualisieren, was diese Stifte tun können und wie sie kreativ genutzt werden können. Ihre Kreativität und Expertise können dazu beitragen, die Grenzen dessen, was mit dem Openterface Mini-KVM möglich ist, zu erweitern. Bitte beteiligen Sie sich:

1. **Teilen Sie Ihre Ideen**: Haben Sie ein cooles Konzept zur Nutzung dieser Stifte? Wir würden uns freuen, davon zu hören!
2. **Beitragen von DIY-Projekten**: Wenn Sie etwas Interessantes erstellt haben, ziehen Sie in Betracht, es mit unserer [Discord Openterface](/discord) Community zu teilen.
3. **Nehmen Sie an der Diskussion teil**: Verbinden Sie sich mit anderen Entwicklern und Enthusiasten, um Ideen auszutauschen und zusammenzuarbeiten.

Lassen Sie uns gemeinsam bauen und innovieren!