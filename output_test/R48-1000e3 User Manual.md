# Chunk 1
Vertiv logo



# Chunk 2
# NetSure™



# Chunk 3
## Rectifier Module

User Manual (UM1R48100003 / 11MB4705YO), Revision B

Specification Number: 1R48100003
Model Number: R48-100003

[Line drawing of a rectifier module showing a rectangular unit with a fan at one end and mounting holes]



# Chunk 4
Vertiv |  NetSure Rectifier Module User Manual (UM1R481000e3 / 11MB4705YO) |  Rev. B

The information contained in this document is subject to change without notice and may not be suitable for all applications. While every precaution has been taken to ensure the accuracy and completeness of this document, Vertiv Group Corporation assumes no responsibility and disclaims all liability for damages resulting from use of this information or for any errors or omissions. Refer to other local practices or building codes as applicable for the correct methods, tools, and materials to be used in performing procedures not specifically described in this document.

This document may contain confidential and/or proprietary information of Vertiv Group Corporation, and its receipt or possession does not convey any right to reproduce, disclose its contents, or to manufacture or sell anything that it may describe. Reproduction, disclosure, or use without specific authorization from Vertiv Group Corporation is strictly prohibited.

Vertiv and the Vertiv logo are trademarks or registered trademarks of Vertiv Group Corporation. NetPerform™, NetReach™, NetSure™ and NetXtend™ are trademarks of Vertiv Energy Systems, Inc. All other trademarks are the property of their respective owners.

© 2017 Vertiv Energy Systems, Inc. All rights reserved.



# Chunk 5
# Vertiv | NetSure Rectifier Module User Manual (UM1R481000e3 / 11MB4705YO) | Rev. B



# Chunk 6
# TABLE OF CONTENTS

- Admonishments Used in this Document .............................4
- Important Safety Instructions .........................................5
- - General Safety .................................................................................5
- Voltages...........................................................................................5
- - AC Input Voltages ............................................................................... 5
- DC Output and Battery Voltages......................................................... 5

Hazardous Voltage ..........................................................................5
- Handling Equipment Containing Static Sensitive Components .......5
- Static Warning...........................................................6

Introduction .............................................................7
- - Overview .........................................................................................7
- Specifications ..................................................................................7

Operation .............................................................. 19
- - AC Input Protection Device Requirements/Recommendations......19
- Local Indicators..............................................................................19
- Rectifier High Voltage Shutdown and Lockout Restart..................19
- Rectifier Current Limit ...................................................................19
- Installing Rectifiers ....................................................................... 20

Troubleshooting and Repair ......................................... 22



# Chunk 7
# 3



# Chunk 8
# ADMONISHMENTS USED IN THIS DOCUMENT

| ![Yellow triangle warning icon](triangle_warning_icon.png)                    | **DANGER!** Warns of a hazard the reader *will* be exposed to that will *likely* result in death or serious injury if not avoided. (ANSI, OSHA)                                                                                                                                                                                            |
| ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ![Yellow triangle warning icon](triangle_warning_icon.png)                    | **WARNING!** Warns of a potential hazard the reader *may* be exposed to that *could* result in death or serious injury if not avoided. This admonition is not used for situations that pose a risk only to equipment, software, data, or service. (ANSI)                                                                                   |
| ![Yellow triangle warning icon](triangle_warning_icon.png)                    | **CAUTION!** Warns of a potential hazard the reader *may* be exposed to that *could* result in minor or moderate injury if not avoided. (ANSI, OSHA) This admonition is not used for situations that pose a risk only to equipment, data, or service, even if such use appears to be permitted in some of the applicable standards. (OSHA) |
| ![Red circle with slash icon](red_circle_slash_icon.png)                      | **ALERT!** Alerts the reader to an action that *must be avoided* in order to protect equipment, software, data, or service. (ISO)                                                                                                                                                                                                          |
| ![Blue circle with exclamation mark icon](blue_circle_exclamation_icon.png)   | **ALERT!** Alerts the reader to an action that *must be performed* in order to prevent equipment damage, software corruption, data loss, or service interruption. (ISO)                                                                                                                                                                    |
| ![Red fire icon](red_fire_icon.png)                                           | **FIRE SAFETY!** Informs the reader of fire safety information, reminders, precautions, or policies, or of the locations of fire-fighting and fire-safety equipment. (ISO)                                                                                                                                                                 |
| ![Green circle with exclamation mark icon](green_circle_exclamation_icon.png) | **SAFETY!** Informs the reader of general safety information, reminders, precautions, or policies not related to a particular source of hazard or to fire safety. (ISO, ANSI, OSHA)                                                                                                                                                        |


Vertiv | NetSure Rectifier Module User Manual (UM1R481000e3 / 11MB4705YO) | Rev. B 4



# Chunk 9
# IMPORTANT SAFETY INSTRUCTIONS



# Chunk 10
# General Safety

DANGER! YOU MUST FOLLOW APPROVED SAFETY PROCEDURES.

Performing the following procedures may expose you to hazards. These procedures should be performed by qualified technicians familiar with the hazards associated with this type of equipment. These hazards may include shock, energy, and/or burns. To avoid these hazards:

1. The tasks should be performed in the order indicated.
2. Remove watches, rings, and other metal objects.
3. Prior to contacting any uninsulated surface or termination, use a voltmeter to verify that no voltage or the expected voltage is present. Check for voltage with both AC and DC voltmeters prior to making contact.
4. Wear eye protection.
5. Use certified and well maintained insulated tools. Use double insulated tools appropriately rated for the work to be performed.



# Chunk 11
# Voltages



# Chunk 12
# AC Input Voltages

DANGER! This system operates from AC input voltage capable of producing fatal electrical shock.



# Chunk 13
# DC Output and Battery Voltages

DANGER! This system produces DC power and may have a battery source connected to it. Although the DC voltage is not hazardously high, the rectifiers and/or battery can deliver large amounts of current. Exercise extreme caution not to inadvertently contact or have any tool inadvertently contact an output terminal or battery terminal or exposed wire connected to an output terminal or battery terminal. NEVER allow a metal object, such as a tool, to contact more than one termination or battery terminal at a time, or to simultaneously contact a termination or battery terminal and a grounded object. Even a momentary short circuit can cause sparking, explosion, and injury.



# Chunk 14
# Hazardous Voltage

DANGER! HAZARD OF ELECTRICAL SHOCK. More than one disconnect may be required to de-energize the system before servicing.



# Chunk 15
# Handling Equipment Containing Static Sensitive Components

ALERT! Installation or removal of equipment containing static sensitive components requires careful handling. Before handling any equipment containing static sensitive components, read and follow the instructions contained on the Static Warning Page.

Vertiv | NetSure Rectifier Module User Manual (UM1R481000e3 / 11MB4705YO) | Rev. B



# Chunk 16
Vertiv | NetSure Rectifier Module User Manual (UM1R481000e3 / 11MB4705YO) | Rev. B



# Chunk 17
# STATIC WARNING

This equipment contains static sensitive components. The warnings listed below must be observed to prevent damage to these components. Disregarding any of these warnings may result in personal injury or damage to the equipment.

1. Strictly adhere to the procedures provided in this document.
2. Before touching any equipment containing static sensitive components, discharge all static electricity from yourself by wearing a wrist strap grounded through a one megohm resistor. Some wrist straps have a built-in one megohm resistor; no external resistor is necessary. Read and follow wrist strap manufacturer’s instructions outlining use of a specific wrist strap.
3. Do not touch traces or components on equipment containing static sensitive components. Handle equipment containing static sensitive components only by the edges that do not have connector pads.
4. After removing equipment containing static sensitive components, place the equipment only on conductive or anti-static material such as conductive foam, conductive plastic, or aluminum foil. Do not use ordinary Styrofoam™ or ordinary plastic.
5. Store and ship equipment containing static sensitive components only in static shielding containers.
6. If necessary to repair equipment containing static sensitive components, wear an appropriately grounded wrist strap, work on a conductive surface, use a grounded soldering iron, and use grounded test equipment.



# Chunk 18
# INTRODUCTION



# Chunk 19
## Overview

The rectifier provides load power, battery float current, and battery recharge current during normal operating conditions. The rectifier is a constant power design. The rectifier is rated at its maximum output power. This means that, within the normal operating ambient temperature range and input voltage range, the maximum available output power is a constant 1000 W. Within these ranges, the rectifier operates in one of three modes, depending upon load demands. Transition between modes is completely automatic. If ambient temperature rises above or input voltage falls below acceptable values, the rectifier continues to operate but at derated output power levels.

- Constant Voltage Mode: For any initial output voltage setting from 42 VDC to 58 VDC, output voltage remains constant regardless of load. This is the normal operating condition, in which loads are being supplied and batteries are float charged. Rectifiers operate in the Constant Voltage Mode unless load increases to the point where the product of load current and output voltage is approximately 1000 W.

- Constant Power Mode: As load increases above approximately 1000 W (non-adjustable), output current continues to increase, but output voltage decreases as required to maintain constant output power. Rectifiers operate in the Constant Power Mode unless load continues to increase to the point where the current limit setting is reached.

- Constant Current Mode: If load increases to the current limit setting, output voltage decreases linearly to maintain output current at the current limit setting.



# Chunk 20
## Specifications



# Chunk 21
### DC Output Ratings

**NOTE!** A current limitation can be set by the User and the output voltage level is set through the controller.

- Voltage: Nominal -48 VDC, positive ground. Output voltage is adjustable from -42 VDC to -58 VDC via the associated controller.

- Output Power and Current: 1000 W (20.8 A) @ 120 VAC / 208 VAC / 240 VAC input and -48 VDC output.

- Output Characteristics: Refer to Figure 1 for a graph of output voltage vs. output current.



# Chunk 22
### Figure 1: Output Voltage vs. Output Current

| \`\`\`mermaid graph LR style A fill:#fff,stroke:#fff style B fill:#fff,stroke:#fff A\[" "] --> B\[" "] B --> C\["Output Voltage vs. Output Current at Max. Power"] C --> D\["60"] D --> E\["50"] E --> F\["40"] F --> G\["30"] G --> H\["20"] H --> I\["10"] I --> J\["0"] J --> K\["0"] K --> L\["5"] L --> M\["10"] M --> N\["15"] N --> O\["20"] O --> P\["25"] classDef default fill:#fff,stroke:#333,stroke-width:1px; classDef data fill:#f9f9f9,stroke:#333,stroke-width:1px; class C,D,E,F,G,H,I,J,K,L,M,N,O,P data; \`\`\` |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |


Vertiv | NetSure Rectifier Module User Manual (UM1R481000e3 / 11MB4705YO) | Rev. B 7



# Chunk 23
• Power Derating Based on Input Voltage: The rectifier power varies with changes in input
voltage and output voltage. It uses an advanced power limitation method. The lower input
threshold is 85 VAC. The rectifier can provide its maximum rated power (1000 W) as long as the
input voltage is within the range of 176 VAC to 300 VAC. Below 176 VAC, and down to 85 VAC,
the rectifier will continue to operate normally but will be in a power derating mode. The
relationship between the output power and input voltage is illustrated in Figure 2.

Figure 2: Power Derating Based on Input Voltage

| Output Power vs. Input Voltage andVo > 48 VDC at Temp ≤ 45 °C | Output Power vs. Input Voltage andVo > 48 VDC at Temp ≤ 45 °C      | Output Power vs. Input Voltage andVo > 48 VDC at Temp ≤ 45 °C | Output Power vs. Input Voltage andVo > 48 VDC at Temp ≤ 45 °C | Output Power vs. Input Voltage andVo > 48 VDC at Temp ≤ 45 °C | Output Power vs. Input Voltage andVo > 48 VDC at Temp ≤ 45 °C | Output Power vs. Input Voltage andVo > 48 VDC at Temp ≤ 45 °C | Output Power vs. Input Voltage andVo > 48 VDC at Temp ≤ 45 °C |
| ------------------------------------------------------------- | ------------------------------------------------------------------ | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| % of output power                                             | 120.0%<br/>100.0%<br/>80.0%<br/>60.0%<br/>40.0%<br/>20.0%<br/>0.0% |                                                               |                                                               |                                                               |                                                               |                                                               |                                                               |
| Input Voltage (VAC)                                           | 0                                                                  | 50                                                            | 100                                                           | 150                                                           | 200                                                           | 250                                                           | 300                                                           |


NOTE! Blue Line: Linear derating from 85 VAC to 176 VAC;
      Green Line: Keeping constant power from 90 VAC to 132 VAC, the output power is 500W.

• Power Derating Based on Temperature: The rectifier delivers full power when operating at an
ambient temperature of +45 °C (+113 °F) or below. Each rectifier continuously monitors the
ambient temperature surrounding the power conversion circuit. If this temperature for any
reason (such as a high ambient temperature) increases above approximately +45 °C (+113 °F),
the rectifier will not shut down. Rather, the rectifier limits its maximum output power to
maintain the temperature of the power conversion circuit within design parameters. Operation
between +45 °C (+113 °C) and +75 °C (+167 °F) will result in output power being decreased. Full
power capability is restored when the temperature decreases to below approximately +45 °C
(+113 °F). Refer to Figure 3 to view the relationship between the output power and the
ambient temperature.

Other power rating values are as follows (refer to Figure 3):

a) At an ambient temperature of +55 °C (+131 °F), the power delivered by the rectifier is 888
   W.

b) At an ambient temperature of +65 °C (+149 °F), the power delivered by the rectifier is 776
   W.

c) At an ambient temperature of +70 °C (+158 °F), the power delivered by the rectifier is 720 W.

Vertiv | NetSure Rectifier Module User Manual (UM1R481000e3 / 11MB4705YO) | Rev. B                     8



# Chunk 24
VERTIV

⚠️ WARNING! The rectifier is rated for continuous operation at full output power up to +45 °C (+113 °F). Operation between +45 °C (+113 °F) and +75 °C (+167 °F) will result in output power decrease. Operation above 75 °C (+167 °F) is considered abnormal and should be used on a temporary¹ basis only.

¹ Temporary Operation at Abnormal Temperature: Temporary operation is defined as a period of not more than eight consecutive hours per day, and a total of not more than 15 days in a year. (This refers to a total of 120 hours in any given year, but no more than 15 occurrences in that one-year period.)

Figure 3: Power Derating Based on Temperature

| Output Power vs. Temperature at264 VAC ≥ Vin ≥ 176 VAC | Output Power vs. Temperature at264 VAC ≥ Vin ≥ 176 VAC |
| ------------------------------------------------------ | ------------------------------------------------------ |
| % of output power                                      | Temperature (°C)                                       |
| 120                                                    | -40                                                    |
| 100                                                    | -20 to 40                                              |
| 80                                                     | 60                                                     |
| 0                                                      | 80 to 100                                              |


🔍 NOTE! 1000 W @ +45 °C (+113 °F) and 176 VAC < Vin < 264 VAC and 50 VDC < Vout < 56 VDC.

- Regulation:
  a) Static: Steady state regulation is ±0.6 % as controlled within the rectifier for any and all combinations of load from no load to full load, input voltage, and input frequency at a constant ambient temperature. The associated system controller may provide increased regulation.
  
  b) Dynamic: Response time ≤200 microseconds and overshot ≤5 % for load changes at 50 % - 25 % - 50 % and 50 % - 75 % - 50% at rated output voltage and current.
  
  For any step load change within the range of 10 % to 90 % of full load within 50 milliseconds, the maximum voltage transient will not exceed 5 % of the initial steady state voltage within 50±10 microseconds. Recovery to within 1 % of the initial steady state voltage does not exceed 1 millisecond.

- Filtering:
  a) Voice Band Noise:
     1. Output noise is < 38 dBrnC typical at normal input (208 VAC / 240 VAC) and 30 % to 70 % of rated load for more than one rectifier.
     2. Psophometric noise is ≤ 2 mV typical at 30 % to 70 % of rated load for more than one rectifier.

Vertiv | NetSure Rectifier Module User Manual (UM1R481000e3 / 11MB4705YO) | Rev. B 9



# Chunk 25
# b) Wide Band Noise:

1. Wideband noise emission is &#x3C; 250 mV peak to peak between 0 Hz – 100 MHz, and &#x3C; 50 mV rms in any 3 kHz band 10 KHz – 20 MHz.



# Chunk 26
# AC Input Ratings

Voltage: Nominal 120 VAC / 208 VAC / 240 VAC, single phase, 3-wire, 50 Hz / 60 Hz, with an operating range of 100 VAC to 250 VAC. Acceptable input frequency range is 45 Hz to 65 Hz. Permitted Variation: 85 VAC to 300 VAC.

Harmonic Content (THD): ≤5 % from 50 % to 100 % of rated load. Meets EN61000-3-2.

Inrush Current: Peak does not exceed 1.5 times of the peak value of the maximum steady-state input current at full load, nominal input voltage, and for any duration of AC input interrupts. Under the above conditions, standard AC distribution circuit breakers will not trip.

Typical Input Data: 50 Hz input.

- a) Refer to Table 1.
- b) Maximum Input Current: Refer to Table 2.

Typical Input Data: 60 Hz input.

- a) Refer to Table 3.
- b) Maximum Input Current: Refer to Table 4.

Efficiency Curve: (Refer to Figure 4.)

Vertiv | NetSure Rectifier Module User Manual (UM1R481000e3 / 11MB4705YO) | Rev. B



# Chunk 27
VERTIV

Table 1: Typical Input Data in 50Hz Input

| Nominal Input Voltage | Percent of Full Load | Input Current (Amperes) | Input VA | Input Watts | Power Factor | Efficiency | Heat Dissipation BTU/Hr |
| --------------------- | -------------------- | ----------------------- | -------- | ----------- | ------------ | ---------- | ----------------------- |
| 200 VAC               | 0                    | 0.133                   | 26.65    | 10.84       | 0.407        | --         | 37.00                   |
|                       | 25                   | 1.412                   | 283.44   | 268.65      | 0.948        | 93.09      | 63.36                   |
|                       | 50                   | 2.678                   | 537.34   | 526.36      | 0.980        | 94.73      | 94.67                   |
|                       | 75                   | 4.004                   | 803.12   | 792.16      | 0.986        | 94.55      | 147.35                  |
|                       | 100                  | 5.387                   | 1079.82  | 1066.65     | 0.988        | 93.62      | 232.26                  |
|                       | 110                  | 5.942                   | 1190.78  | 1176.28     | 0.988        | 93.48      | 261.75                  |
|                       | 120                  | 6.374                   | 1277.21  | 1267.84     | 0.988        | 92.93      | 305.93                  |
| 250 VAC               | 0                    | 0.188                   | 47.08    | 10.09       | 0.214        | --         | 34.43                   |
|                       | 25                   | 1.146                   | 287.65   | 266.84      | 0.928        | 93.45      | 59.65                   |
|                       | 50                   | 2.164                   | 542.94   | 524.99      | 0.967        | 95.08      | 88.16                   |
|                       | 75                   | 3.202                   | 803.06   | 787.91      | 0.981        | 95.07      | 132.57                  |
|                       | 100                  | 4.281                   | 1073.51  | 1058.52     | 0.986        | 94.37      | 203.39                  |
|                       | 110                  | 4.713                   | 1181.57  | 1166.13     | 0.987        | 94.15      | 232.83                  |
|                       | 120                  | 5.052                   | 1266.51  | 1250.76     | 0.988        | 93.87      | 261.68                  |


NOTE! System output is initially adjusted to 53.5 VDC as measured at the system sense point at 50 % of full load and nominal input. "Percent of Full Load" refers to percent of 18.69 amperes.

Table 2: Maximum Input Current in 50Hz Input

| Nominal Input Voltage | Input Voltage | Input Current (Amperes) |
| --------------------- | ------------- | ----------------------- |
| 200 VAC / 250 VAC     | 176 VAC       | 6.16                    |


NOTE! At 100% of full load with output adjusted to 58 volts DC as measured at the shelf output terminals.

Vertiv | NetSure Rectifier Module User Manual (UM1R481000e3 / 11MB4705YO) | Rev. B                     11



# Chunk 28
Table 3: Typical Input Data in 60Hz Input

| Nominal Input Voltage | Percent of Full Load | Input Current (Amperes) | Input VA | Input Watts | Power Factor % | Efficiency % Heat | Heat Dissipation BTU/Hr |
| --------------------- | -------------------- | ----------------------- | -------- | ----------- | -------------- | ----------------- | ----------------------- |
| 200 VAC               | 0                    | 0.146                   | 29.23    | 10.76       | 0.368          | --                | 36.72                   |
|                       | 25                   | 1.431                   | 287.23   | 268.51      | 0.935          | 93.03             | 63.87                   |
|                       | 50                   | 2.690                   | 539.77   | 526.01      | 0.975          | 94.73             | 94.61                   |
|                       | 75                   | 4.015                   | 805.19   | 791.92      | 0.984          | 94.58             | 146.49                  |
|                       | 100                  | 5.397                   | 1081.85  | 1066.32     | 0.986          | 93.68             | 230.00                  |
|                       | 110                  | 5.951                   | 1192.59  | 1175.67     | 0.986          | 93.38             | 265.63                  |
|                       | 120                  | 6.376                   | 1277.71  | 1259.80     | 0.986          | 93.00             | 300.98                  |
| 250 VAC               | 0                    | 0.202                   | 50.80    | 9.93        | 0.195          | --                | 33.89                   |
|                       | 25                   | 1.176                   | 295.08   | 267.28      | 0.906          | 93.47             | 59.57                   |
|                       | 50                   | 2.186                   | 548.58   | 523.92      | 0.955          | 95.09             | 87.80                   |
|                       | 75                   | 3.223                   | 808.40   | 787.80      | 0.975          | 95.07             | 132.55                  |
|                       | 100                  | 4.300                   | 1078.26  | 1058.22     | 0.981          | 94.39             | 202.61                  |
|                       | 110                  | 4.732                   | 1186.44  | 1165.86     | 0.983          | 94.18             | 231.58                  |
|                       | 120                  | 5.063                   | 1269.25  | 1248.14     | 0.983          | 93.87             | 261.13                  |


NOTE! System output is initially adjusted to 53.5 VDC as measured at the system sense point at 50 % of full load and nominal input. "Percent of Full Load" refers to percent of 18.69 amperes.

Table 4: Maximum Input Current in 60Hz Input

| Nominal Input Voltage | Input Voltage | Input Current (Amperes) |
| --------------------- | ------------- | ----------------------- |
| 200 VAC / 250 VAC     | 176 VAC       | 6.17                    |


NOTE! At 100% of full load with output adjusted to 58 VDC as measured at the shelf output terminals.



# Chunk 29
Figure 4: Efficiency Curve

| \`\`\`mermaid graph LR A\[Efficiency Curve] style A fill:#f9f,stroke:#333,stroke-width:4px A --> B((98)) A --> C((96)) A --> D((94)) A --> E((92)) A --> F((90)) A --> G((88)) A --> H((86)) A --> I((84)) B --> J\[0] I --> K\[10] K --> L\[20] L --> M\[30] M --> N\[40] N --> O\[50] O --> P\[60] P --> Q\[70] Q --> R\[80] R --> S\[90] S --> T\[100] J --> U\[Load (% of rated load)] T --> U \`\`\` |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |


Environmental Ratings:
- Operating Ambient Temperature Range:
  a) +45 °C (+113 °F) to +75 °C (+176 °F) with derating output.
  b) -40 °C (-40 °F) to +45 °C (+113 °F) with full power performance.
- Temperature Coefficient: 0.02 % per degrees Celsius.
- Storage Ambient Temperature Range: -25 °C (-13 °F) to +55 °C (+131 °F).
- Relative Humidity: This rectifier is capable of operating in an ambient relative humidity range of 0 % to 90 %, non-condensing.
- Altitude: 2000 m (6560 ft) at full power (power limited for heights above 2000 m).
- Surge Protection: Compliance with EN61000-4-5 (4kV Line to Line, 4kV Line to Earth). Capable of withstanding surges per ANSI/IEEE C 62.41 1999 Category B3 across the input terminals.

NOTE! This level of protection is a widely used standard for telecommunications power equipment. As with all such equipment, it is the end user's responsibility to provide an adequately sized Surge Suppression Device at the commercial power service entrance of the building that reduces all incoming surges to levels below the classes/categories stated for the equipment.

- Ventilation Requirements: The rectifiers are fan cooled and utilize front to back forced ventilation. A rectifier must be mounted so ventilating openings are not blocked and temperature of the air entering the rectifier does not exceed the Operating Ambient Temperature Range stated above.
- Single Rectifier Audible Noise: At 25 °C ≤50 dB(A) with fan in high speed. Measurement made at 0.6m distance in front of rectifier and at same horizontal line of the middle of rectifier.
- Overvoltage Category: II
- Power Distribution System: TN/TT/IT



# Chunk 30
NOTE! The rectifier is recommended to be used in an environment with Pollution of Degree 2 or less. Pollution Degree 2 applies where there is only non-conductive pollution that might temporarily become conductive due to occasional condensation (such as the office environment).

- EMI/RFI Suppression:
  a) Rectifiers operating in an approved rectifier mounting shelf conform to the requirements of FCC rules Part 15, Class B for radiated and conducted emissions limits.
  b) Rectifiers operating in an approved rectifier mounting shelf conform to the requirements of European Norm, EN55022, Class B for radiated and conducted emissions limits.

Compliance Information
- EMC: ETSI EN 300 386, FCC CFR 47 Part 15 class B, Telcordia GR-1089-CORE.
- EMI Load Range: 10% to 100 %.
- Safety: IEC 60950, EN 60950, UL 60950.
- REACH, ROHS:

| Name of SVHC above 0.1% (w/w)           | CAS Number | Component                               |
| --------------------------------------- | ---------- | --------------------------------------- |
| Diboron trioxide                        | 1303-86-2  | Chip Resistors, Chip Ceramic Capacitors |
| Lead monoxide                           | 1317-36-8  | Chip Resistors                          |
| REACH SVHC Communication                |            |                                         |
| EU RoHS: Compliant, Lead Free Soldering |            |                                         |


Standard Features
- Type of Power Conversion Circuit: High frequency.
- Constant Voltage Mode: For any initial output voltage setting from 42 VDC to 58 VDC, output voltage remains constant regardless of load. This is the normal operating condition, in which loads are being supplied and batteries are float charged. Rectifiers operate in the Constant Voltage Mode unless load increases to the point where the product of load current and output voltage is approximately 1000 W.
- Constant Power Mode: As load increases above approximately 1000 W (non-adjustable), output current continues to increase, but output voltage decreases as required to maintain constant output power. Rectifiers operate in the Constant Power Mode unless load continues to increase to the point where the current limit setting is reached.

Vertiv | NetSure Rectifier Module User Manual (UM1R481000e3 / 11MB4705YO) | Rev. B 14



# Chunk 31
Vertiv | NetSure Rectifier Module User Manual (UM1R481000e3 / 11MB4705YO) | Rev. B



# Chunk 32
# Constant Current Mode

If load increases to the current limit setting, output voltage decreases linearly to maintain output current at the current limit setting.



# Chunk 33
# Input Protection:

1. Input Over/Under Voltage Protection: The rectifier will shut down at low or high voltage input; based on the following voltage levels:

1. Low Voltage Disable Point: 80 V, ±5 V; hysteresis is 15 VAC for restart.
2. High Voltage Disable Point: 305 V, ±5 V; hysteresis is 10 VAC for restart.
2. Between 85 V and 176 V the output power will be derated linearly based on the input voltage as follows:

1. At input voltage of 85 V with output >48 V, max output power is 200 W.
2. At input voltage of 90 V with output >48 V, max output power is 500 W.
3. At input voltage of 132 V with output >48 V, max output power is 750 W.
4. At input voltage of 176 V and output >48 V, max output power is 1000 W.



# Chunk 34
# Output Protection:

1. Overload / Reverse Current: The rectifier has a 63 A fuse in the negative output DC bus. This fuse is not customer replaceable. The rectifier can be plugged into or pulled out of a shelf while operating, without damage or opening the fuse.
2. Current Limiting: The rectifier has a current limit function. The current limit point can be set between the range of 4 A to 21 A, adjustable via the controller. The current limit accuracy is ±1 A when the output voltage ranges from 42 VDC to 58 VDC. Below 42 VDC the current will fold back to a lower value.
3. Advanced Current Limit Function: The rectifier has an advanced Current Limit Function. When a short circuit occurs at the rectifier output terminals, the rectifier will keep its output current at a value below the maximum current limit set point. This function effectively protects the rectifier and the equipment connected to the rectifier. When the short circuit fault is cleared, the rectifier will automatically restore back to normal operation.
4. High Voltage Shutdown:

1. Adjustable Control: If rectifier output voltage exceeds an adjustable preset value and the rectifier is delivering more than 10 % of its rated current, the rectifier shuts down. (Adjustable from 56 VDC to 59 VDC via the controller. The restart hysteresis is 0.5 V ±0.2 V.)

The rectifier then restarts and a HVSD restart timer starts (time value configurable via the controller, factory default is 5 minutes). If output voltage again exceeds the high voltage shutdown value before the HVSD restart timer expires, the rectifier shuts down and locks out. Manual restart is then required (by turning power to the rectifier off or by removing the rectifier, waiting until the LEDs on the rectifier extinguish, then turning power to the rectifier on or re-inserting the rectifier). If the rectifier does not experience a high voltage condition before the HVSD restart timer expires, the restart circuit is reset.

15



# Chunk 35
Vertiv | NetSure Rectifier Module User Manual (UM1R481000e3 / 11MB4705YO) | Rev. B



# Chunk 36
# 2. Backup

If rectifier output voltage exceeds 59.5 V ±0.5 V (non-adjustable) and the rectifier is delivering more than 10% of its rated current, the rectifier shuts down. The rectifier then restarts and a HVSD restart timer starts (time value configurable via the controller, factory default is 5 minutes). If output voltage again exceeds the high voltage shutdown value before the HVSD restart timer expires, the rectifier shuts down and locks out. Manual restart is then required (by turning power to the rectifier off or by removing the rectifier, waiting until the LEDs on the rectifier extinguish, then turning power to the rectifier on or re-inserting the rectifier).



# Chunk 37
# Over-Temperature Protection

The rectifier provides over temperature protection by derating output power and recovers automatically.



# Chunk 38
# Active Load Sharing

The rectifier uses advanced digital active load sharing technology that maintains balancing to within 5 % of rated current.



# Chunk 39
# Hot Swappable

The rectifier is designed to be plug-and-play. The rectifier can be inserted or removed from a live DC power system with no damage. When the rectifier is plugged into the system, the system output voltage will not be affected.



# Chunk 40
# Cooling

Each rectifier module contains a fan for front-to-back force air-cooling.

- a) Fan Fault Protection: The rectifier module shuts down and its alarm indicator (red) flashes if the fan fails. Fan failure is detected and reported to controller. The fan is not field replaceable.
- b) Fan Control: Fan speed is continuously variable. When input voltage is within normal range, the built-in processor adjusts fan speed according to the rectifier module’s internal temperature and output power. For example, a higher temperature or output power increases the fan speed. This feature can be disabled via the controller, allowing the fan to run at full speed regardless of temperature.



# Chunk 41
# Paralleling

Up to 16 rectifiers can be connected in parallel in one system.



# Chunk 42
# Communication Failure

The rectifier’s protection indicator (yellow) will flash should it experience a communication failure. The failure information will be reported to the controller and the controller will process the failure accordingly. During a communication failure, in order to protect the battery, the rectifier output voltage will automatically be adjusted as follows:

- The rectifier default factory output voltage is 53.5 V.
- Once power is applied to the rectifier and the rectifier is recognized by the controller, the output voltage is updated to the setting programmed into the controller.
- If communications with an SCU+ controller is lost, rectifier output voltage goes to a default value programmed into the controller (this is a separate programmable parameter from the output voltage setting).
- If communications with an ACU+ or NCU controller is lost, rectifier output voltage goes to the last communicated float output voltage setting in the controller (the last communicated float output voltage setting is stored in the rectifier).
- The rectifier will revert to normal operation once normal communication to the controller is restored.

16



# Chunk 43
• Rectifier Output Current Imbalance: When load sharing severe imbalance (output fuse open) and the output current drops to zero in average current >10 % system, then the red fault indicator will illuminate.

• Monitoring Function: The rectifier has a built-in advanced DSP that monitors and controls the operation of the rectifier. The DSP also communicates with the controller in real time through the CAN bus. Table 5 lists the different commands and information exchanged between the rectifier and the controller.

Table 5: Exchange of Information between Rectifier and Controller

| Commands / Signals that can be received by the Rectifier Module from the Controller.                                                        | Information Gathered by the Controller from the Rectifier Module.                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| • Turn On/Off<br/>• Current Walk-in On/Off<br/>• HVSD (High Voltage Shutdown) Reset<br/>• Current Limit Adjustment<br/>• Voltage Regulation | • Input Voltage<br/>• Output Voltage<br/>• Output Current<br/>• Current Limit Setting<br/>• Temperature<br/>• Over Voltage Setting<br/>• On/Off Status<br/>• Fault Alarms, such as:<br/>HVSD<br/>Fan Fail<br/>• Protection Alarms, such as:<br/>Input Voltage Protection<br/>Inner DC Bus Voltage Protection<br/>High Temperature Protection<br/>• Thermal Derating<br/>• AC Derating<br/>• AC Fail<br/>• Imbalance Output Current<br/>• Address<br/>• Code<br/>• Date<br/>• Software Version<br/>• Hardware Version |


Mechanical Specifications
• Dimensions:
  a) Millimeters: 43.6 (Height) X52 (Width) X 152 (Depth)



# Chunk 44
Vertiv | NetSure Rectifier Module User Manual (UM1R481000e3 / 11MB4705YO) | Rev. B



# Chunk 45
# Specifications

b) Inches: 1.7 (Height) X 2.0 (Width) X 6.0 (Depth)

Weight: 0.6 kg (1.3 lbs)



# Chunk 46
# Indicators:

a) Power (Green LED)

b) Protection (Yellow LED)

c) Alarm (Red LED)

18



# Chunk 47
# OPERATION



# Chunk 48
# AC Input Protection Device Requirements/Recommendations

Refer to the system documentation supplied with the system the rectifier is installed in.



# Chunk 49
# Local Indicators



# Chunk 50
# Location and Identification:

Refer to Figure 5.



# Chunk 51
# Description:

There are three (3) indicators located on the rectifier’s front panel. The functions of these indicators are as shown in Table 6.

NOTE! DC voltage must be present at the rectifier output terminals (from battery or an operating rectifier) or AC voltage at the input terminals.



# Chunk 52
# Rectifier High Voltage Shutdown and Lockout Restart Procedure

1. Turn the power to the rectifier off or remove the rectifier, wait 30 seconds or more (until the LEDs on the rectifier extinguish), then turn the power to the rectifier on or re-insert the rectifier.



# Chunk 53
# Rectifier Current Limit

When setting total rectifier current limit, the set point to each rectifier is the total set point divided by the number of rectifiers. For example, if the system contains five rectifiers and the current limit is set to 150 amps then each rectifier has a current limit set point of 30 amps. If one or more rectifiers are removed or fail it will take several seconds for the individual set points to the remaining rectifiers to be reset. In the example given, if one rectifier is removed the current limit set point will drop to 120 amps (30 amps times four remaining rectifiers) until the controller can send updated set points to the remaining rectifiers. This takes a couple communication cycles (several seconds) after which each rectifier would have a new set point of 37.5 amps for a total of 150 amps. The total current limit of the rectifiers should not be set such that the loss of the redundant rectifiers will cause this temporary set point to drop below the actual maximum expected load. If batteries are used on the rectifier output, the batteries should support the load until the current limit set points can be re-established due to loss of a rectifier.



# Chunk 54
# Figure 5: Local Indicator Locations

Power Indicator (Green)
Protection Indicator (Yellow)
Alarm Indicator (Red)



# Chunk 55
# Table 6: Rectifier Indicators

| Indicator                | Normal State | Alarm State | Alarm Cause                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ------------------------ | ------------ | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ⏻Power<br/>(Green)       | On           | Off         | No input voltage.<br/>Internal input fuse open.                                                                                                                                                                                                                                                                                                                                                                                                        |
|                          |              | Flashing    | The rectifier is being identified by the controller.                                                                                                                                                                                                                                                                                                                                                                                                   |
| ⚠Protection<br/>(Yellow) | Off          | On          | AC input under/over voltage.<br/>PFC output under/over voltage.<br/>Moderate load sharing imbalance.<br/>Rectifier not inserted into the slot completely.<br/>Rectifier over-temperature protection.<br/>Rectifiers are operating in an output power derating mode (rectifiers derate when rectifier temperature rises above or input voltage falls below acceptable values).<br/>Rectifier in ECO Standby Mode when ECO Mode is active in controller. |
|                          |              |             | Loss of communication with the controller (the rectifier can provide power).                                                                                                                                                                                                                                                                                                                                                                           |
|                          |              | Flashing    | Loss of communication with the controller (the rectifier can provide power).                                                                                                                                                                                                                                                                                                                                                                           |
| ⊗Alarm<br/>(Red)         | Off          | On          | Severe load sharing imbalance.<br/>Rectifier output disabled for any reason, including overvoltage shutdown and internal output fuse open.<br/>Rectifier addresses contradictory.                                                                                                                                                                                                                                                                      |
|                          |              |             | Rectifier addresses contradictory.                                                                                                                                                                                                                                                                                                                                                                                                                     |
|                          |              | Flashing    | Fan not operating (rectifier shuts down).                                                                                                                                                                                                                                                                                                                                                                                                              |



# Chunk 56
## Installing Rectifiers

Rectifiers can be inserted or removed with power applied (hot swappable).

🔍 NOTE! Each rectifier module locks into a module mounting shelf by means of a latch located on the bottom of the rectifier. The latch and rectifier handle are interactive. Pushing the handle up into the rectifier's front panel causes the latch to extend to the locking position; pulling the handle down out from the rectifier's front panel causes the latch to retract. See Figure 6.

⚠ CAUTION! This rectifier contains double pole fusing. Parts of the equipment that remain energized might represent a hazard during servicing after operation of the fuse. If the rectifiers are connected to a 3-phase system, the neutral line should also have a fuse.

⚠ WARNING! To prevent damage to the latching mechanism, ensure the handle is in the open position when installing or removing a rectifier module. NEVER hold the handle in the closed position when installing a rectifier module into a shelf.



# Chunk 57
VERTIV



# Chunk 58
## Procedure

**NOTE!** Refer to Figure 6 as this procedure is performed.

1. Unpack the rectifier.

2. Place the rectifier into an unoccupied mounting slot without sliding it in completely.

3. Loosen the captive screw on the rectifier's handle. Pull the handle down out from the rectifier's front panel (this will also retract the latch mechanism). See Figure 6.

4. Push the rectifier completely into the shelf.

5. Push the handle up into the rectifier's front panel. This will lock the rectifier securely to the shelf. Tighten the captive screw on the handle.

6. Repeat the above steps for each rectifier being installed in the system.

7. After the rectifiers are physically installed in the mounting shelf(s), they are ready for operation immediately after power is supplied to them.

8. Certain functions (i.e. rectifier current limit, rectifier addressing) may require adjustment when adding or replacing a rectifier module. Refer to "Rectifier Current Limit" on page 19 and the Power System documentation for instructions.



# Chunk 59
### Figure 6: Installing a Rectifier


[Diagram of a rectifier module shown from two angles]

                Captive Screw        Handle

                                            Latch


Vertiv | NetSure Rectifier Module User Manual (UM1R481000e3 / 11MB4705YO) | Rev. B 21



# Chunk 60
# TROUBLESHOOTING AND REPAIR



# Chunk 61
# Troubleshooting



# Chunk 62
# Rectifier Current Sharing Imbalance

When multiple rectifiers are operating in parallel and the load is greater than 10 %, if the current sharing imbalance among them is greater than 5 %, check if the rectifier is properly seated in the shelf. If the current sharing imbalance still persists following the verification suggested above, replace the rectifier exhibiting the current imbalance.



# Chunk 63
# Rectifier Fault Symptoms and Troubleshooting

The fault indicators that can be displayed by the rectifier are as follows. Refer to Table 7 for a list of possible causes and corrective actions.

Power Indicator (Green) Off
Protection Indicator (Yellow) ON
Protection Indicator (Yellow) Flashing
Alarm Indicator (Red) ON
Alarm Indicator (Red) Flashing

Vertiv | NetSure Rectifier Module User Manual (UM1R481000e3 / 11MB4705YO) | Rev. B

22



# Chunk 64
Table 7: Rectifier Troubleshooting

| Symptom                                                              | Possible Cause(s)                                                                                                                      | Suggested Action(s)                                                                                                                                                                                                                                                                                                |
| -------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Power Indicator (Green) Off                                          | No input voltage.                                                                                                                      | Make sure there is input voltage.                                                                                                                                                                                                                                                                                  |
|                                                                      | Internal input fuse open.                                                                                                              | Replace the rectifier.                                                                                                                                                                                                                                                                                             |
|                                                                      | AC input under/over voltage.                                                                                                           | Correct the AC input voltage to within the acceptable range.                                                                                                                                                                                                                                                       |
|                                                                      | PFC under/over voltage.                                                                                                                | Replace the rectifier.                                                                                                                                                                                                                                                                                             |
|                                                                      | Moderate load sharing imbalance.                                                                                                       | Check if the rectifier is properly seated in the shelf. If this does not correct the fault, replace the rectifier.                                                                                                                                                                                                 |
| Protection Indicator (Yellow) On                                     | Rectifier not inserted into the slot completely.                                                                                       | Remove and properly insert the rectifier.                                                                                                                                                                                                                                                                          |
|                                                                      | Rectifier over-temperature protection.                                                                                                 | Fan rotor blocked: remove any object that may be blocking the fan.                                                                                                                                                                                                                                                 |
|                                                                      |                                                                                                                                        | Ventilation blocked (inlet or outlet): remove any object that may be blocking the inlet or outlet.                                                                                                                                                                                                                 |
|                                                                      |                                                                                                                                        | Ambient temperature too high or rectifier inlet too close to a heat source: lower the ambient temperature or relocate the heat source.                                                                                                                                                                             |
| Rectifier in ECO Standby Mode when ECO Mode is active in controller. | --                                                                                                                                     |                                                                                                                                                                                                                                                                                                                    |
| Protection Indicator (Yellow) Flashing                               | Loss of communication with controller (the rectifier can provide power).                                                               | Check the communication cables. Remove and properly insert the rectifier.                                                                                                                                                                                                                                          |
| Alarm Indicator (Red) On                                             | Severe load sharing imbalance. Rectifier output disabled for any reason, including overvoltage shutdown and internal output fuse open. | Turn AC power to the rectifier off or remove the rectifier, wait 30 seconds or more (until the LEDs on the rectifier extinguish), then turn the AC power to the rectifier on or re-insert the rectifier. If rectifier fails to start, shuts down again, or load sharing imbalance persists; replace the rectifier. |
|                                                                      | Rectifier addresses contradictory.                                                                                                     | Replace the rectifier.                                                                                                                                                                                                                                                                                             |


Vertiv | NetSure Rectifier Module User Manual (UM1R481000e3 / 11MB4705YO) | Rev. B 23



# Chunk 65
# Alarm



# Chunk 66
# Fan not operating



# Chunk 67
# Indicator (rectifier shuts down)

Replace the rectifier.

Flashing



# Chunk 68
# Replacement Procedures



# Chunk 69
# Rectifier Module Replacement

Rectifiers can be inserted or removed with power applied (hot swappable).

NOTE! Each rectifier module locks into a module mounting shelf by means of a latch located on the bottom of the rectifier. The latch and rectifier handle are interactive. Pushing the handle up into the rectifier’s front panel causes the latch to extend to the locking position; pulling the handle down out from the rectifier’s front panel causes the latch to retract. See Figure 6.

DANGER! Take care when removing a rectifier that was in operation, as rectifier surfaces could be very hot.

WARNING! To prevent damage to the latching mechanism, ensure the handle is in the open position when installing or removing a rectifier. NEVER hold the handle in the closed position when installing a rectifier into a shelf.



# Chunk 70
# Procedure

NOTE! Refer to Figure 6 as this procedure is performed.

1. Performing this procedure may activate external alarms. Do one of the following. If possible, disable these alarms. If these alarms cannot be easily disabled, notify the appropriate personnel to disregard any alarms associated with this system while this procedure is performed.
2. On the rectifier to be removed, loosen the captive screw on the rectifier’s handle. Pull the handle down out from the rectifier’s front panel (this will also retract the latch mechanism). See Figure 6.
3. Grasp the handle and pull firmly to remove the rectifier from the shelf.
4. Place the replacement rectifier into the mounting position without sliding it in completely.
5. Loosen the captive screw on the rectifier’s handle. Pull the handle down out from the rectifier’s front panel (this will also retract the latch mechanism). See Figure 6.
6. Push the rectifier completely into the shelf.
7. Push the handle up into the rectifier’s front panel. This will lock the rectifier securely to the shelf. Tighten the captive screw on the handle.
8. Certain functions (i.e. rectifier current limit, rectifier addressing) may require adjustment when adding or replacing a rectifier. Refer to “Rectifier Current Limit” on page 19 and the Power System documentation for instructions.



# Chunk 71
Vertiv | NetSure Rectifier Module User Manual (UM1R481000e3 / 11MB4705YO) | Rev. B



# Chunk 72
# 9.

After the rectifier are physically installed in the mounting shelf(s), they are ready for operation immediately after power is supplied to them. Verify that the rectifiers are operating normally.



# Chunk 73
# 10.

Enable the external alarms, or notify appropriate personnel that this procedure is finished.



# Chunk 74
# 11.

Ensure that there are no local or remote alarms active on the system.

25



# Chunk 75
VertivCo.com |  Vertiv Headquarters, 1050 Dearborn Drive, Columbus, OH, 43085, USA

UM1R481000e3 / 11MB4705YO (RB 08/17)



