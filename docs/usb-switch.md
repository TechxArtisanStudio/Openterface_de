# Umschaltbare USB-Port-Mechanik

![switch-graphics](images/product/switch-graphics.svg#only-light){:style="width:460px"}
![switch-graphics](images/product/switch-graphics_1.svg#only-dark){:style="width:460px"}

Das Mini-KVM-Gerät verfügt über einen umschaltbaren USB-A 2.0-Port, der zwischen dem Host- und dem Zielcomputer umgeschaltet werden kann, jedoch nicht gleichzeitig für beide. Diese Funktion wird sowohl durch einen physischen Kippschalter als auch durch einen Software-Schalter in der Host-Anwendung gesteuert. Dieses Dokument erklärt die Mechanik und Logik hinter diesen Schaltern.

## Schaltertypen

- **Software-Schalter**: Ein Umschaltknopf in der Host-Anwendung.
      - Schaltet die USB-Port-Verbindung zwischen Host- und Zielcomputern um

- ![Toggle Switch](images/shell-icons/toggle-h-t.svg#only-light){:style="height:20px"} ![Toggle Switch](images/shell-icons/toggle-h-t_1.svg#only-dark){:style="height:20px"} **Hardware-Schalter**: Ein physischer Zweipositionen-Kippschalter am Gerät.
      - Innenposition: Verbindung zum Host-Computer
      - Außenposition: Verbindung zum Zielcomputer

## Ersteinrichtung und Synchronisation

Wenn das Mini-KVM korrekt angeschlossen ist und die Host-App gestartet wird:

1. Die tatsächliche USB-Port-Verbindung des Geräts (Schaltung) wird zunächst standardmäßig auf die Host-Verbindung eingestellt.
2. Die Host-App erkennt die aktuelle Position des Hardware-Schalters, der entweder auf den Host- oder den Zielcomputer eingestellt ist.
3. Der Software-Schalter synchronisiert sich mit der Position des Hardware-Schalters.
4. Die tatsächliche Schaltungsverbindung wird aktualisiert, um mit den Schalterpositionen übereinzustimmen.

!!! warning "Hardware-Einschränkung"
    Wenn ein USB-Laufwerk bereits vor dem Einschalten oder Starten der Host-Anwendung an das Gerät angeschlossen ist, gibt der Host-Computer eine Warnung über unsicheres Entfernen des USB-Geräts aus. Dies ist eine Hardware-Einschränkung für v1.9. Daher wird empfohlen, vor dem Einschalten des Geräts oder dem Starten unserer Host-App kein USB-Gerät anzuschließen.

## Betriebszustände

Aufgrund der Anwesenheit von sowohl Hardware- als auch Software-Schaltern können vier mögliche Zustände auftreten:

- **Zustand 1** (Synchronisiert, verbunden mit Host):
      - Hardware-Schalter: Zeigt auf Host ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}
      - Software-Schalter: Zeigt auf Host ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}
      - USB-Port-Verbindung: Verbunden mit Host ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}

- **Zustand 2** (Synchronisiert, verbunden mit Ziel):
      - Hardware-Schalter: Zeigt auf Ziel ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}
      - Software-Schalter: Zeigt auf Ziel ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}
      - USB-Port-Verbindung: Verbunden mit Ziel ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}

- **Zustand 3** (Nicht synchronisiert, USB verbunden mit Host):
      - Hardware-Schalter: Zeigt auf Ziel ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}
      - Software-Schalter: Zeigt auf Host ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}
      - USB-Port-Verbindung: Verbunden mit Host ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}

- **Zustand 4** (Nicht synchronisiert, USB verbunden mit Ziel):
      - Hardware-Schalter: Zeigt auf Host ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}
      - Software-Schalter: Zeigt auf Ziel ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}
      - USB-Port-Verbindung: Verbunden mit Ziel ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}

## Zustandsübergänge und Logik

### Von **Zustand 1** (Synchronisiert mit Host)

- ^^***Szenario 1a***^^: Benutzer bewegt Hardware-Schalter auf Ziel
      - Aktualisiere interne Zustandsvariable auf Ziel ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}
      - Aktualisiere Anzeige der Host-Anwendung auf Ziel ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}
      - Schalte tatsächliche Schaltungsverbindung auf Ziel ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}
      - Übergang zu Zustand 2, synchronisiert

- ***Szenario 1b***: Benutzer klickt Software-Schalter auf Ziel
      - Aktualisiere interne Zustandsvariable auf Ziel ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}
      - Hardware-Schalterposition bleibt unverändert (zeigt auf Host ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"})
      - Schalte tatsächliche Schaltungsverbindung auf Ziel ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}
      - Übergang zu Zustand 3, nicht synchronisiert

### Von **Zustand 2** (Synchronisiert mit Ziel)

- ^^***Szenario 2a***^^: Benutzer bewegt Hardware-Schalter auf Host ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}:
      - Aktualisiere interne Zustandsvariable auf Host ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}
      - Aktualisiere Anzeige des Software-Schalters auf Host ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}
      - Schalte tatsächliche Schaltungsverbindung auf Host ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}
      - Übergang zu Zustand 1, synchronisiert

- ***Szenario 2b***: Benutzer klickt Software-Schalter auf Host ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}:
      - Aktualisiere interne Zustandsvariable auf Host ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}
      - Hardware-Schalterposition bleibt unverändert (zeigt auf Ziel ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"})
      - Schalte tatsächliche Schaltungsverbindung auf Host ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}
      - Übergang zu Zustand 4, nicht synchronisiert

### Von **Zustand 3** (Nicht synchronisiert, USB verbunden mit Host)

- ^^***Szenario 3a***^^: Benutzer bewegt Hardware-Schalter auf Ziel ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}:
      - Keine Änderungen an Variablen
      - Übergang zu Zustand 2, synchronisiert

- ***Szenario 3b***: Benutzer klickt Software-Schalter auf Host ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}:
      - Aktualisiere interne Zustandsvariable auf Host ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}
      - Hardware-Schalterposition bleibt unverändert (zeigt auf Ziel ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"})
      - Schalte tatsächliche Schaltungsverbindung auf Host ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}
      - Übergang zu Zustand 1, synchronisiert

### Von **Zustand 4** (Nicht synchronisiert, USB verbunden mit Ziel)

- ^^***Szenario 4a***^^: Benutzer bewegt Hardware-Schalter auf Host ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}:
      - Keine Änderungen an Variablen
      - Übergang zu Zustand 1, synchronisiert

- ***Szenario 4b***: Benutzer klickt Software-Schalter auf Ziel ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}:
      - Aktualisiere interne Zustandsvariable auf Ziel ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}
      - Hardware-Schalterposition bleibt unverändert (zeigt auf Host ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"})
      - Schalte tatsächliche Schaltungsverbindung auf Ziel ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}
      - Übergang zu Zustand 2, synchronisiert

!!! warning "Denken Sie daran, das Flash-Laufwerk vor dem Umschalten auszuwerfen"
    Wenn der USB-Port von einem Flash-Laufwerk verwendet wird, stellen Sie sicher, dass Sie das Flash-Laufwerk auswerfen, bevor Sie den Schalter umlegen, um die Nutzung des Ports auf einen anderen Computer zu übertragen.

!!! warning "USB-Strombegrenzungen"
    Die vom USB-Port bereitgestellte Leistung hängt vom Host-Motherboard ab. Es wird nicht empfohlen, USB-Geräte anzuschließen, die viel Strom benötigen. Typischerweise sollte der Stromverbrauch 1,5 W nicht überschreiten. Das Anschließen von Hochleistungsgeräten kann zu instabilem Betrieb oder möglichen Schäden führen.

!!! Note "Benutzeranleitung"
    - **Priorität des Software-Schalters**: Unabhängig von der Position des Hardware-Schalters ändert das Klicken auf den Software-Schalter sofort die Schaltungsrichtung.

    - **Synchronisation des Hardware-Schalters**: Jeder manuelle Umschaltvorgang des Hardware-Schalters wird seinen Zustand mit dem Software-Schalter abgleichen und entweder zu Zustand 1 oder Zustand 2 aus dem nicht synchronisierten Zustand 3 oder Zustand 4 übergehen. Diese Synchronisation ändert jedoch nicht unbedingt die tatsächliche Schaltungsverbindung.

    - **Überwachung des Hardware-Schalters**: Der Hardware-Schalter, obwohl physisch, wird von der Software überwacht und steuert nicht direkt die Schaltungsrichtung. Stattdessen interpretiert die Software die Schalterposition und verwaltet das tatsächliche Schaltungsumschalten.

## Warum softwaregesteuertes USB-Umschalten wichtig ist

Die in v1.9 eingeführte Verbesserung des softwaregesteuerten USB-Umschaltens ist eine entscheidende Funktion für unsere zukünftigen Entwicklungspläne, insbesondere zur Unterstützung von KVM-over-IP-Lösungen wie VNC (die wir noch nicht implementiert haben). Diese Fähigkeit ermöglicht es Benutzern, den USB-Port aus der Ferne zwischen dem Ziel- und dem Host-Computer umzuschalten und zu teilen, was besonders wichtig für die Ermöglichung von Dateiübertragungen in einer Remote-Umgebung ist.

Diese Funktion eröffnet eine Welt voller Möglichkeiten für das Remote-Management und die Steuerung. Beispielsweise ermöglicht sie Dateiübertragungen zwischen Geräten ohne physische Eingriffe, was die Effizienz bei der Fernwartung und Systemverwaltung erhöht.

Haben Sie kreative Ideen, wie Sie diese Funktion nutzen können? Wir würden uns freuen, mit Ihnen zu sprechen! Treten Sie der Openterface [Community](/community/) bei und teilen Sie Ihre Gedanken 😃
