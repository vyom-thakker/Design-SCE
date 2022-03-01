
*E133 is LABS
*E134 is Toluene
*E135 is c3 gas
*E136 is liq subs
*E137 is lactic acid monomer

*LABS from recycled LDPE P138
A('E93','P138')=-1;
A('E133','P138')=0.69;
A('E35','P138')=0.036*100;
A('E134','P138')=-0.14;
A('E136','P138')=0.24;
*mol wt for enthalpy is 18.4kg

*LABS from recycled HDPE P139
A('E92','P139')=-1;
A('E133','P139')=0.54;
A('E35','P139')=0.04*100;
A('E134','P139')=-0.16;
A('E136','P139')=0.3;
*mol wt for enthalpy is 24kg


*LABS substituted product P140
A('E133','P140')=-1;
B('I7','P140')=-1.97;
B('I10','P140')=-0.017;

*Toluene product P141
A('E134','P141')=1;
B('I7','P141')=1.45;
B('I10','P141')=0.0005;


*pyrolysis of LDPE P142
A('E93','P142')=-1;
A('E135','P142')=0.055;
A('E136','P142')=0.721;
A('E35','P142')=-11;
B('I7','P142')=0.03;

*pyrolysis of hDPE P143
A('E92','P143')=-1;
A('E135','P143')=0.033;
A('E136','P143')=0.44;
A('E35','P143')=-8;
B('I7','P143')=0.004;

*pyrolysis of PP P144
A('E94','P144')=-1;
A('E135','P144')=0.15;
A('E136','P144')=0.64;
A('E35','P144')=-6;
B('I7','P144')=0.0064;

*C3 gas substituted product p145
A('E135','P145')=-1;
B('I7','P145')=-0.723;
B('I10','P145')=-0.006;

* Liquid fuel substituted product p146
A('E136','P146')=-1;
B('I7','P146')=-0.4357;
B('I10','P146')=-0.005;

*PLA recycling using mononitrile k10 toulene p147
A('E95','P147')=-1;
A('E81','P147')=0.63;
A('E35','P147')=6.62;
A('E134','P147')=-0.34;
B('I7','P147')=0.48;
*2 times impact of clay which is 0.24 

*PLA recycling hydrolysis p149
A('E81','P149')=0.92;
A('E95','P149')=-1;
A('E31','P149')=-0.04;
A('E30','P149')=-0.12;
A('E35','P149')=-1.6;
B('I7','P149')=-3.09;
B('I10','P149')=-0.025;
*0.92 times impact saving due to lactic acid =4.1 but reduced for reality

*PLA recycling alcoholysis p150
*A('E81','P150')=0.76;
A('E95','P150')=-1;
B('I7','P150')=-2.84;
B('I10','P150')=0.004;
*-0.76 times impact saving of solvent pdt kg + 10 times impact of 1 kg methanol =3.94 but reduced for reality


