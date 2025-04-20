---
title: "Switchable USB Port"
description: "Erfahren Sie mehr über das duale Hardware-Software-USB-Umschaltungssystem im Openterface Mini-KVM. Verstehen Sie die vier Betriebszustände, Sicherheitsrichtlinien und zukünftige Remote-Zugriffsmöglichkeiten."
keywords: "USB-Umschaltung, KVM-Umschalter, Hardware-Umschalter, Software-Umschalter, USB-Port-Steuerung, KVM über USB, KVM über IP, Remote-Zugriff, USB-Geräteverwaltung, Computerperipheriegeräte, USB-Stromverwaltung"
---

# **USB-Port-Umschaltanleitung** | Openterface Mini-KVM

Das Mini-KVM-Gerät verfügt über einen einzelnen USB-A 2.0-Port, der **entweder** mit dem Host oder dem Zielcomputer **verbunden werden kann**, jedoch **niemals beide gleichzeitig**. 

Die Steuerung erfolgt über zwei Schalter:

- **Hardware-Umschalter**: Ein physischer Zwei-Positionen-Umschalter am Gerät ![Toggle Switch](https://assets.openterface.com/images/shell-icons/toggle-h-t.svg#only-light){:style="height:20px"} ![Toggle Switch](https://assets.openterface.com/images/shell-icons/toggle-h-t_1.svg#only-dark){:style="height:20px"} (nach innen = Host, nach außen = Ziel).  
- **Software-Umschalter**: Eine Umschalttaste in der Host-App, die den USB-Port sofort entweder auf Host oder Ziel umleitet.

## Betriebszustände

Die Verbindung des USB-A-Ports hängt sowohl von den Positionen des **Hardware-Umschalters** als auch des **Software-Umschalters** ab. Die folgende Tabelle fasst die vier möglichen Zustände zusammen:

| **Zustand** | **Hardware-Umschalter** | **Software-Umschalter** | **Port verbunden mit** | **Sync-Status**       |
|-------------|--------------------------|--------------------------|-------------------------|------------------------|
| 1           | Host                     | Host                     | Host                    | Synchronisiert         |
| 2           | Ziel                     | Ziel                     | Ziel                    | Synchronisiert         |
| 3           | Ziel                     | Host                     | Host                    | Nicht synchronisiert (→ Host)  |
| 4           | Host                     | Ziel                     | Ziel                    | Nicht synchronisiert (→ Ziel) |

- **Synchronisiert** bedeutet, dass die Hardware- und Softwareeinstellungen übereinstimmen.  
- **Nicht synchronisiert** bedeutet, dass die Software den Hardware-Umschalter vorübergehend außer Kraft setzt, bis der Hardware-Umschalter erneut bewegt wird.

Jede manuelle Bewegung des Hardware-Umschalters aktualisiert die Softwareanzeige und kehrt in einen synchronisierten Zustand zurück.

Beim Starten wird das Gerät standardmäßig mit der Host-Verbindung verbunden. Die Software erkennt die Position des Hardware-Umschalters und synchronisiert entsprechend.

!!! warning "Denken Sie daran, das Flash-Laufwerk vor dem Umschalten des Schalters auszuwerfen"
    Wenn der USB-Port von einem Flash-Laufwerk verwendet wird, stellen Sie sicher, dass Sie das Flash-Laufwerk auswerfen, bevor Sie den Schalter umschalten, um die Nutzung des Ports auf einen anderen Computer zu übertragen.

??? note "Wie kann man einen USB-Stick/disk zwischen den Host- und Zielgeräten teilen?"
    Dateien können zwischen dem Host und dem Ziel übertragen werden, indem Sie die folgenden Schritte ausführen:

    1. Mounten Sie ein USB-Stick-Laufwerk am Host, wenn der kleine schwarze Schalter auf die Seite des Type-C-Ports des Hosts eingestellt ist.
    2. Kopieren Sie die Dateien auf dieses gemountete Laufwerk.
    3. Nach dem Kopieren das Laufwerk auswerfen, ohne es physisch zu trennen.
    4. Drehen Sie den kleinen schwarzen Schalter auf die andere Seite. Diese Aktion wechselt die Verbindung des USB-A-Ports zum Ziel.
    5. Mounten Sie den USB-Stick am Zielgerät und kopieren/bewegen Sie die Dateien vom Laufwerk, um den Übertragungsprozess von Dateien vom Host zum Ziel abzuschließen.

    Diese Methode kann auch in die entgegengesetzte Richtung verwendet werden.

!!! Note "Benutzeranleitung"
    - **Priorität des Software-Umschalters**: Unabhängig von der Position des Hardware-Umschalters ändert das Klicken auf den Software-Umschalter sofort die Schaltkreisrichtung.

    - **Synchronisation des Hardware-Umschalters**: Jede manuelle Betätigung des Hardware-Umschalters wird seinen Zustand mit dem Software-Umschalter in Einklang bringen und von den nicht synchronisierten Zuständen 3 oder 4 in die Zustände 1 oder 2 übergehen. Diese Synchronisation ändert jedoch nicht unbedingt die tatsächliche Schaltkreisverbindung.

    - **Überwachung des Hardware-Umschalters**: Der Hardware-Umschalter, obwohl physisch, wird von der Software überwacht und steuert nicht direkt die Schaltkreisrichtung. Stattdessen interpretiert die Software die Schalterposition und verwaltet das tatsächliche Schalten des Schaltkreises.