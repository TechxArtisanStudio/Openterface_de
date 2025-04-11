---
date: 2024-08-22
authors:
  - Openterface
categories:
  - Updates
---
# Hürden überwinden: Fortschrittsupdate & neuer Zeitplan

Hallo zusammen,

ich hoffe, es geht euch allen gut. Es ist eine Weile her seit unserem letzten Update. Ich wünschte, ich könnte sagen, dass bei Openterface alles reibungslos verlaufen ist, aber wir sind auf ein paar Hindernisse gestoßen, die unseren Lieferzeitplan verzögern werden. Obwohl dies nicht das war, was wir erwartet hatten, stellen wir uns diesen Herausforderungen und machen stetige Fortschritte mit vielen guten Nachrichten, die wir teilen möchten. Dieser Beitrag ist etwa **7 Minuten lang**, also lasst uns in die Details eintauchen, damit ihr genau wisst, wo wir stehen und was als Nächstes kommt.

## Regulierung, Produktion und Qualität

Bevor wir mit der Produktion beginnen konnten, mussten wir die notwendigen Qualitätstests gemäß den Vorschriften bestehen, insbesondere die CE-Zertifizierung. Da unsere Werkzeugversion nicht nur das Mini-KVM, sondern auch mehrere Zubehörteile umfasst, musste jedes Teil die CE-Prüfung durchlaufen. Diese Tests dauerten länger als erwartet (es stellte sich heraus, dass Kabel ziemlich wählerisch sein können), aber die gute Nachricht ist, dass **wir die CE-Zertifizierung für unser Mini-KVM und alle seine Komponenten bestanden haben!** Unten ist eine Übersicht der Zertifizierungen für alle unsere Teile: Mini-KVM, HDMI-Kabel, orangefarbenes Type-C-Kabel, schwarzes kurzes Type-C-Kabel und VGA2HDMI-Kabel. Mit der Zertifizierung in der Hand ist unser Produktionszeitplan jetzt sicher, und unsere Hersteller **produzieren derzeit alle Teile**, während ich spreche.

![240823-0](../pic/240823-0.jpg)
*Die Anforderungen von UKCA und CE sind für unsere elektronischen Produkte gleich, wobei CE auch die RoHS-Konformität abdeckt.*

Vor zwei Wochen besuchten wir einen unserer Hersteller, um deren Linienmanager in der Qualitätskontrolle für die orangefarbenen Kabel zu schulen, bevor sie sie an uns versendeten. Jetzt sind ALLE orangefarbenen Kabel produziert und stehen in einer Ecke unseres Studios.
![240823-1](../pic/240823-1.jpg)
*Kevin und Shawn erklärten die Testmethoden, um sicherzustellen, dass das orangefarbene Kabel ordnungsgemäß mit unserem Openterface Mini-KVM funktioniert.*

Diese Woche werden wir die gleiche Aufgabe übernehmen, um die QA an der Produktionsfront für andere Teile zu schulen. Hier sind Muster zusätzlicher Kabel.
![240823-2](../pic/240823-2.jpg)
*Stolz mit unserem TechxArtisan-Logo versehen, sind dies Muster des HDMI-Kabels, des kurzen Type-C-Kabels und des VGA-zu-HDMI-Kabels.*

Wir erwarten, dass die anderen Teile und Mini-KVMs bald von unseren Herstellern eintreffen, zu welchem Zeitpunkt wir die Qualität jeder Komponente noch einmal überprüfen und sie in unserem Studio ordnungsgemäß verpacken werden, bevor sie versendet werden. Mit anderen Worten, **unser Team wird persönlich die Qualität sicherstellen**, bevor es in eure Hände gelangt.

## Versand, mögliche Verzögerungen und neue ETA

**Die aktuelle Unsicherheit liegt im Versandprozess**. Nach der Untersuchung mehrerer Versandunternehmen haben wir festgestellt, dass der Versand zusätzliche Zeit in Anspruch nehmen wird, da wir die Pakete wahrscheinlich durch ein Lagerhaus transportieren werden, bevor sie das Lager von Crowd Supply erreichen. Wir diskutieren noch, ob wir See- oder Luftfracht wählen sollen – bitte habt noch ein paar Tage Geduld, während wir die Arrangements klären.

Die Zollabfertigung ist ein weiteres potenzielles Hindernis, das unerwartete Verzögerungen verursachen könnte. Sobald unsere Produkte im Lager von Crowd Supply in den USA ankommen, dauert es ein bis zwei Wochen, bis sie weltweit basierend auf jeder Bestellung versendet werden. Für Unterstützer außerhalb der USA müssen die einzelnen Pakete noch durch den globalen Versand und die Zollabfertigung im Zielland gehen.

Unter Berücksichtigung der aktuellen Situation und unter Hinzufügung einer Pufferzeit bleibe ich vorsichtig optimistisch, dass wir die Lieferung vor Ende dieses Jahres abschließen werden, mit **einer neuen ETA Mitte Januar**. Es tut mir wirklich leid für die Unannehmlichkeiten und ich schätze eure Unterstützung und Geduld während dieser Änderung.

## Finalisierte Hardware V1.9

Wie ihr vielleicht aus unserem vorherigen [Reddit-Beitrag](https://www.reddit.com/r/Openterface_miniKVM/comments/1e25pco/openterface_minikvm_v19_with_pins_for_more/) wisst, haben wir beschlossen, **unsere Hardware auf V1.9 aufzurüsten**, einschließlich eines Satzes hackbarer Erweiterungspins. Dies war nicht Teil des ursprünglichen Plans für die Crowdfunding-Kampagne, aber wir glauben, dass es die Hardware erheblich verbessert und **das Potenzial für eine breitere Nutzung** erhöht.

![240823-3](../pic/240823-3.jpg)
*Die VCC-, GND-, Target D+-, Target D--, Host D+-, und Host D--Pins – wobei 'D' für USB-Daten steht.*

Ein Hauptmotiv war es, **den USB-Schalter auf Softwareebene umschalten zu können**. Warum ist das wichtig? Auf unserer Roadmap planen wir, in Zukunft eine KVM-over-IP-Lösung wie VNC zu unterstützen. Die Idee ist, die lokale KVM-Steuerung mit dem VNC-Protokoll abzugleichen, sodass Benutzer den Zielcomputer über den Host-Computer fernsteuern können. In einem solchen Fernszenario ist die Fähigkeit der Benutzer, den USB-Port umzuschalten, unerlässlich, insbesondere wenn Dateitransfers zwischen dem Host und dem Ziel erforderlich sind.

**Die Erweiterungspins eröffnen auch weitere Möglichkeiten**, wie die Integration mit iPadOS, ATX-Steuerung, Netzwerkbrücke und Audio-Bypass. Obwohl ich hier nicht auf alle Details eingehen werde, ermutige ich euch, unserer Openterface-Community beizutreten, um weiter mit uns zu diskutieren.

Dieses Hardware-Upgrade könnte potenziell unsere Openterface-Lösung erweitern, um über IP zu arbeiten und fortschrittlichere Funktionen zu integrieren, während es seine Kernstärke als Plug-and-Play-KVM-over-USB-Tool beibehält – perfekt für IT-Profis, die sich in unsicheren IT-Umgebungen wie unbekannten Rechenzentren zurechtfinden müssen.

Ich freue mich, berichten zu können, dass V1.9 unsere internen Basistests bestanden hat und als offizielle Version für alle unsere Unterstützer finalisiert wird. Dieses Hardware-Upgrade erfordert jedoch weitere Tests, und jede Entwicklung basierend auf diesen Erweiterungspins wird experimentell sein und wahrscheinlich Fehler aufweisen. Hier könnt ihr einen Beitrag leisten. Wir zählen auf die Open-Source-Community, um Openterface gemeinsam mit uns zu verbessern.

## Weitere Software-Updates

Auf der Softwareseite machen wir spannende Fortschritte. Wir tauchen jetzt in die **Openterface Android-App** ein! Schaut euch diesen [Tweet](https://x.com/TechxArtisan/status/1825460088922071398) für eine frühe Demo an, die eine reibungslose KVM-Steuerung, Mausbewegungen und Klicks in Aktion zeigt. Weitere Funktionen sind in Arbeit, und wie immer, sobald wir den Code etwas mehr poliert haben, **wird diese App auch auf unserem GitHub-Repo [Openterface_Android](https://github.com/TechxArtisanStudio/Openterface_Android) open-sourced**.
![240823-4](../pic/240823-4.jpg)
*Mit nur unseren Fingerspitzen steuern wir einen Linux-Computer von einem Android-Tablet aus. Schön!*

Unsere QT-Version hat gerade ein praktisches Update erhalten – ihr könnt jetzt [Text vom Host zum Ziel übertragen](https://x.com/TechxArtisan/status/1825919721960780131)! Diese Funktion wird jetzt auf macOS-, Windows- und Linux-Host-Apps unterstützt.

Außerdem planen wir, eine lustige Funktion hinzuzufügen – [eine automatische Mausbewegung, um zu verhindern, dass euer Zielcomputer in den Schlafmodus wechselt](https://x.com/TechxArtisan/status/1825471186668847241). Sollten wir den Ping-Pong-Ball wählen, der über den Bildschirm springt, oder den klassischen DVD-Bildschirmschoner-Effekt? Stimmt ab und kommentiert den [Tweet](https://x.com/TechxArtisan/status/1825470086800691459) 😃

## Verpackungsdesign, Etikettierung und Handbuch

Wir haben [mit verschiedenen Mock-ups und Verpackungsdesigns experimentiert](https://www.reddit.com/r/Openterface_miniKVM/comments/1elm4vq/almost_ready_to_finalize_our_package_design/), um das perfekte Gleichgewicht zwischen mehreren Schlüsselfaktoren zu finden:

- Auswahl von Materialien, die robust genug sind, um das Produkt und seine Teile während des Versands zu schützen,
- Erstellung informativer Etiketten, die den Benutzern helfen, das Produkt auf einen Blick zu verstehen,
- Sicherstellung der Einhaltung von Vorschriften,
- Gestaltung einer optisch ansprechenden Verpackung,
- Und umweltfreundlich zu sein, indem der Plastikverbrauch so weit wie möglich minimiert wird.

Darüber hinaus haben wir mehrere Verbesserungen an der alten Werkzeugtasche vorgenommen, darunter:

- Größerer Stauraum,
- Ein stilvoller orangefarbener Reißverschluss,
- Verbesserte Außen- und Innenmaterialien,
- Und eine super dehnbare Netz-Tasche.

Wir haben dieses Material gewählt, weil es das ideale Gleichgewicht zwischen kostengünstig, angenehm zu berühren und langlebig genug ist, um die darin enthaltenen Gegenstände zu schützen. **Wir sind zuversichtlich, dass ihr es lieben werdet**.

![240823-5](../pic/240823-5.jpg)

Wir aktualisieren auch die Etiketten auf dem Aluminiumgehäuse, um sie so informativ und optisch ansprechend wie möglich zu gestalten. Wir hoffen, dass diese Verbesserungen eure Benutzererfahrung verbessern und es euch erleichtern, mit Openterface zu beginnen.

![240823-6](../pic/240823-6.jpg)

Wir finalisieren das Openterface-Handbuch, das in Englisch, Deutsch, Französisch, Japanisch und Chinesisch verfügbar sein wird. Entschuldigung, wenn wir eure Sprache verpasst haben – unsere Box ist nicht TARDIS-groß (die Polizeibox von Doctor Who)! Aber wir werden unser Bestes tun, um weitere Übersetzungen auf unserer Website hinzuzufügen.

![240823-7](../pic/240823-7.jpg)

## Community-Sprachüberprüfung

Ich habe ChatGPT verwendet, um bei den Übersetzungen zu helfen, aber es kann manchmal bei der Formulierung und Wortwahl danebenliegen. Wenn es keine Umstände macht, würde ich jede Hilfe bei der Überprüfung der Inhalte in anderen Sprachen sehr schätzen, insbesondere für die gedruckten Materialien, die wir gerade finalisieren. Ich habe den gesamten Textinhalt für die Verpackung in unserem GitHub-Ordner [product-printed-materials](https://github.com/TechxArtisanStudio/Openterface/tree/main/product-printed-materials) aktualisiert, wo ihr ihn überprüfen und Verbesserungen einreichen könnt. Ihr könnt mir auch direkt eine DM senden. Danke!

## Abschließende Bemerkungen und laufender Fortschritt

Wir entschuldigen uns erneut für die Verzögerungen und die Änderung des ETA unseres Produkts. Vielen Dank für eure Geduld und dafür, dass ihr bei uns bleibt – wir arbeiten hart daran, dies so schnell wie möglich zu euch zu bringen! Ich werde euch sofort aktualisieren, sobald unser Versand arrangiert ist. Weitere Updates sind unterwegs, also tretet unserer Openterface-Community bei und bleibt dran!

Viele Grüße,

Billy Wang  
Produktmanager  
Openterface Team | TechxArtisan