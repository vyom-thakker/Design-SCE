*E139 is co2 captured
*E140 is methanol

*electrolytic co2 to ethylene
A('E139','P158')=-12.52;
A('E64','P158')=1;
A('E17','P158')=-31.98;

*Methanol to Olefins
A('E140','P159')=-2.67;
A('E64','P159')=-0.4737;
A('E76','P159')=-0.5263;

*two step electrochemical CO2 to methanol
A('E139','P160')=-0.87;
A('E140','P160')=1;

*carbon capture from electricity generation
A('E17','P161')=-0.8112;
*B('I7','P161')=-1;
A('E139','P161')=1;
