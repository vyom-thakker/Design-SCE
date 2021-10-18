** new matrix, for max recycled content in bags

sets
	i substances /E1*E134/
	j activities /P1*P143/
	k impacts /I1*I2913/
    	l MPindicators /MPI1*MPI10/
	losses(i) /E97/
	intermediates(i) /E1*E77,E78*E82,E89,E91*E96,E107,E113,E115,E117*E122,E124*E126,E128,E132,E133/
	homes(j) homesubsets /P87/
	supplies(i) bagsperhome /E84*E88,E127/
	sortedStuff(i) sortedbagsweights /E92*E96,E128/
	sortedStuffJ(j) sortedbagsweights /P138*P143/
	unextrudedAmnts(j) bagspermake /P77*P81,P132/
    	bagAmnts(j) extruded plastic /P82*P86,P132/;

set ij(i,j)/#i.#j/;
set HCon(i,j) /#supplies.#homes/;
set SWast(i,j) /#sortedStuff.P92/;

parameter A(i,j),B(k,j),C(l,k);
parameter s1(j);

$GDXIN techMatrix3.gdx
$LOAD A
$GDXIN

set ecoinventI(i) /E1*E77/;
A(ecoinventI,'P131')=0;
A(ecoinventI,'P133')=0;
A(ecoinventI,'P80')=0;


*A('E132',j)=0;
A('E132',j)$bagAmnts(j)=1;
A('E132','P87')=-1;
A('E83','P87')=0;
*A('E97','P87')=0.1186;


A('E133','P92')=-1;
A('E133',j)$sortedstuffJ(j)=1;

A('E92','P138')=1;
A('E93','P139')=1;
A('E94','P140')=1;
A('E95','P141')=1;
A('E96','P142')=1;
A('E128','P143')=1;



$GDXIN intMatrix5.gdx
$LOAD B
$GDXIN
B(k,j) = round(B(k,j), 4);

$GDXIN CharacFactors3.gdx
$LOAD C
$GDXIN
C(l,k) = round(C(l,k), 2);

*$GDXIN scalingVector.gdx
*$LOAD s1
*$GDXIN

*A('E97','P91')=0.08825;
*A('E97','P89')=-1.0968;


*No Caps on Recycled Content
*A('E79','P93')=0.55;
*A('E78','P94')=0.55;
*A('E80','P95')=0.55;
*A('E81','P96')=0.15;
*A('E97','P93')=0.026;
*A('E97','P94')=0.026;
*A('E97','P95')=0.025;
*A('E97','P96')=0.018;
*A('E79','P93')=1;
*A('E78','P94')=1;
*A('E80','P95')=1;
*A('E81','P96')=1;
*A('E117','P93')=0.0;
*A('E118','P94')=0;
*A('E119','P95')=0.0;
*A('E120','P96')=0.0;
*A('E121','P96')=0.0;
*A('E127','P87')=-10;
*A('E126','P134')=0;


$if not set q1 $set q1 1
$if not set q2 $set q2 1
$if not set q3 $set q3 1
$if not set q4 $set q4 1
$if not set q5 $set q5 1
$if not set q6 $set q6 1
$if not set q7 $set q7 1
$if not set q8 $set q8 1
$if not set q9 $set q9 1
$if not set q10 $set q10 1
$if not set q11 $set q11 1
$if not set q12 $set q12 1
$if not set q13 $set q13 1
$if not set q14 $set q14 1
$if not set q15 $set q15 1
$if not set q16 $set q16 1
$if not set rL $set rL 10
$if not set rpp $set rpp 20
$if not set rpla $set rpla 1

set bagvolumes_utilities(j) /P81*P84,P134/;
parameter 
	bagVolumesJ(j) volume /P81 13.75, P82 [29.3*%rL%], P83 [43.3*%rpp%], P84 [14*%rpla%], P134 22.5/;


A('E134','P81')=bagVolumesJ('P81')*131.23;
A('E134','P82')=bagVolumesJ('P82')*23.15;
A('E134','P83')=bagVolumesJ('P83')*4.425;
A('E134','P84')=bagVolumesJ('P84')*83.33;
A('E134','P85')=14*125;
A('E134','P134')=bagVolumesJ('P134')*1;

A(i,j)$Hcon(i,j)=0;
A(i,j)$Swast(i,j)=0;
*A('E88','P87')=-3878;


parameter 
	bagVolumes(i) volume /E84 13.75, E85 [29.3*%rL%], E86 [43.3*%rpp%], E87 [14*%rpla%], E88 14, E127 22.5/
	stockAttributes(bagAmnts) wt of bags;


*variable techMat(i,j);
*techMat.fx(i,j)=A(i,j);
*techMat.l(i,j)$(HCon(i,j)+SWast(i,j))=A(i,j);
*techMat.up(i,j)$HCon(i,j)=0;
binary variable epsilons1(i,j);
*epsilons1.fx(i,j)$(HCon(i,j)+SWast(i,j))=0;
epsilons1.fx(i,j)$(A(i,j)=0)=0;

binary variable epsilons2(i,j);
*epsilons2.fx(i,j)$(HCon(i,j)+SWast(i,j))=0;
epsilons2.fx(i,j)$(A(i,j)=0)=0;

$if not set limEpsilon $set limEpsilon 5
$if not set delta $set delta 0.1

set restrictEpsilons(j) /P81*P143/;
epsilons1.fx(i,j)$restrictEpsilons(j)=0;
epsilons2.fx(i,j)$restrictEpsilons(j)=0;

parameter techMat(i,j);
techMat(i,j)=A(i,j);

$onText
variable techMat(i,j);
equation declareTechMat(i,j);
equation declareTechMat1(i,j);

declareTechMat(i,j)$(not A(i,j)=0)..techMat(i,j)=e=A(i,j)*(1+%delta%*epsilons1(i,j)-%delta%*epsilons2(i,j));
declareTechMat1(i,j)$(A(i,j)=0)..techMat(i,j)=e=A(i,j);

$offText

$ontext
techMat.fx('E97','P92')=0;
set makezerolosses(j) /P93*P97/;
techMat.fx('E97',j)$makezerolosses(j)=0;
$offtext
positive variables
	s(j) scaling factors;

variables
	f(i) final demand;	

s.l(j)=0;
s.lo(j)=0;
*s.up(j)=50;
*f.lo(i)=0;
*f.up(i)=4000;


$onText

*type of bags
*s.fx('P82')=0;
*s.fx('P83')=0;
*s.fx('P84')=0;
*s.fx('P85')=0;
*s.fx('P86')=0;

$offText
set paperJ(j) /P131*P137/;
A(i,paperJ)=0;
s.fx('P131')=0;



*s.fx('P130')=0;
*s.fx('P115')=0;

$ontext
equation litt;
litt.. s('P88')=e=0.75*s('P87');
$offtext
equations
	
	processLCA fundamental equation
	zeroIntermediates(i); 
*	stockEqns percent stock constraint;

*	homeDemand(homes) home demand constraint

    
    	zeroIntermediates(i) $ (intermediates(i)).. f(i)=e=0;
*	homeDemand(homes(j))..-3878=e=sum(i $ supplies(i), techMat(i,j)*s(j)*bagVolumes(i)*0.8);  
*	stockEqns.. sum(j$homes(j),s(j)*(1+techMat('E97',j)))=e=sum(j $ bagAmnts(j), s(j)); 

f.fx('E134')=3878;

*equation wasteall;
*wasteall.. s('P88')=e=s('P87');



*****************************Downstream equations**************************
*sorting
equations eqs1,eqs2,eqs3,eqs4,eqs5,eqs6,eqs7;
eqs1.. s('P138')*sum(j$bagAmnts(j),s(j))=e=s('P82')*(1-techMat('E97','P92'))*s('P92');
eqs2.. s('P139')*sum(j$bagAmnts(j),s(j))=e=s('P83')*(1-techMat('E97','P92'))*s('P92');
eqs3.. s('P140')*sum(j$bagAmnts(j),s(j))=e=s('P84')*(1-techMat('E97','P92'))*s('P92');
eqs4.. s('P141')*sum(j$bagAmnts(j),s(j))=e=s('P85')*(1-techMat('E97','P92'))*s('P92');
eqs5.. s('P142')*sum(j$bagAmnts(j),s(j))=e=s('P86')*(1-techMat('E97','P92'))*s('P92');
eqs6.. s('P143')*sum(j$bagAmnts(j),s(j))=e=s('P132')*(1-techMat('E97','P92'))*s('P92');
eqs7..907.18*s('P106')=e=5*s('P92')*(1-techMat('E97','P92'));

variable pchoiceitems(j);
equation eqnPchoiceitems(j);
set bags(j) /P82*P86,P134/;
eqnPchoiceitems(j)$bags(j).. pchoiceitems(j)=e=sum(i$supplies(i),techMat(i,j)*s(j));



*normalized cost
variable normalizedcostInput;
equation costInput;
set bagRatioProduction(i) /E92*E96,E128/;
parameter offsetCostInput(i) /E92 [800*%q1%],E93 [990*%q2%],E94 [1080*%q3%],E95 [1240*%q4%],E96 2500,E128 [445*%q5%]/;
costInput.. normalizedcostinput=e=sum(i$bagRatioProduction(i),techMat(i,'P92')*offsetCostInput(i)/(0.99));

positive variable productionCostResin;
equation pdtcost;
pdtcost.. productionCostResin=e=(normalizedCostInput*sum(j$unextrudedAmnts(j), s(j))/907.18)+sum(j$bagAmnts(j),s(j)*0.05);


*landfilling
set lfill_indices(j) /P98*P102,P136/;
variable lossLandfill;
equations eql1,eql2,eql3,eql4,eql5,eql6,eql7,loss_l;
eql1.. s('P98')*sum(j$bagAmnts(j), s(j))=e=s('P82')*sum(j$lfill_indices(j), s(j));
eql2.. s('P99')*sum(j$bagAmnts(j), s(j))=e=s('P83')*sum(j$lfill_indices(j), s(j));
eql3.. s('P100')*sum(j$bagAmnts(j), s(j))=e=s('P84')*sum(j$lfill_indices(j), s(j));
eql4.. s('P101')*sum(j$bagAmnts(j), s(j))=e=s('P85')*sum(j$lfill_indices(j), s(j));
eql5.. s('P102')*sum(j$bagAmnts(j), s(j))=e=s('P86')*sum(j$lfill_indices(j), s(j));
eql6.. s('P136')*sum(j$bagAmnts(j), s(j))=e=s('P132')*sum(j$lfill_indices(j), s(j));
eql7.. s('P103')=e=5*sum(j$lfill_indices(j), s(j));
loss_l.. lossLandfill=e=907.18*sum(j$lfill_indices(j),s(j));

s.fx('P81')=0;
*incineration
set ifill_indices(j) /P108*P112,P137/;
parameter offsetCost(j) /P108 [800*%q1%],P109 [990*%q2%],P110 [1080*%q3%],P111 [1240*%q4%], P112 2500,P137 [445*%q5%]/;
set ifill_indices_new(j) /P118*P121,P137/;
parameter offsetCost_new(j) /P118 [800*%q1%],P119 [990*%q2%],P120 [1080*%q3%],P121 [1240*%q4%], P137 [445*%q5%]/;
variable lossIncineration;
equations eqi1,eqi2,eqi3,eqi4,eqi5,eqi6,eqi7,loss_i;
eqi1.. s('P108')*sum(j$bagAmnts(j), s(j))=e=s('P82')*sum(j$ifill_indices(j), s(j));
eqi2.. s('P109')*sum(j$bagAmnts(j), s(j))=e=s('P83')*sum(j$ifill_indices(j), s(j));
eqi3.. s('P110')*sum(j$bagAmnts(j), s(j))=e=s('P84')*sum(j$ifill_indices(j), s(j));
eqi4.. s('P111')*sum(j$bagAmnts(j), s(j))=e=s('P85')*sum(j$ifill_indices(j), s(j));
eqi5.. s('P112')*sum(j$bagAmnts(j), s(j))=e=s('P86')*sum(j$ifill_indices(j), s(j));
eqi6.. s('P137')*sum(j$bagAmnts(j), s(j))=e=s('P32')*sum(j$ifill_indices(j), s(j));
eqi7.. s('P114')=e=5*sum(j$ifill_indices(j), s(j));
*loss_i.. lossIncineration*sum(j$ifill_indices(j),offsetCost(j))=e=sum(j$ifill_indices(j),s(j)*907.18*(offsetCost(j)-((techMat('E107',j))*6.7/360)));

Scalar elecCost /[10*%q11%]/;

loss_i.. lossIncineration=e=sum(j$ifill_indices(j),s(j)*907.18*(1-(((techMat('E107',j))*elecCost/360)/offsetCost(j))))+sum(j$ifill_indices_new(j),s(j)*907.18*(1-(((techMat('E107',j))*elecCost/360)/offsetCost_new(j))));

*biofuel
variable lossBioFuel;
scalar biofuelCost /[0.041*%q12%]/;
equation loss_b;
set bio_new(j) /P122*P125/;
loss_b.. lossBioFuel*normalizedCostInput=e=(((-1*s('P115')/techMat('E91','P115')+sum(j$bio_new(j),s(j)))*normalizedCostInput)-(s('P116')*biofuelCost));
lossBioFuel.lo=0;


*composting
variable costBenifitCompost,cbc2, lossCompost;
equation cost_c,cc2,loss_c;
scalar compostCost /[0.030183*%q13%]/;
cost_c.. costBenifitCompost=e=(s('P117')+s('P104')+s('P105'))*907.18*compostCost;
cc2.. cbc2=e=s('P104')*offsetCostInput('E95')+s('P105')*offsetCostInput('E96');
lossCompost.lo=0;
loss_c.. lossCompost*((s('P117')+s('P104'))*offsetCostInput('E95')+s('P105')*offsetCostInput('E96'))=e=((s('P117')+s('P104'))+s('P105'))*907.18*(((s('P117')+s('P104'))*offsetCostInput('E95')+s('P105')*offsetCostInput('E96'))-costBenifitCompost);
*loss_c.. lossCompost=e=(s('P105')+s('P104'))*907.18;


*s.fx('P113')=0;
s.fx('P89')=0;
*s.fx('P115')=0;
*s.fx('P92')=0;
*s.fx('P85')=0;
*s.fx('P86')=0;



processLCA(i).. f(i)=e=sum(j,techMat(i,j)*(1+%delta%*epsilons1(i,j)-%delta%*epsilons2(i,j))*s(j));

equation eqMaxFreq;
equation eachEpsilon(i,j);
eachEpsilon(i,j)..epsilons1(i,j)+epsilons2(i,j)=l=1;
eqMaxFreq.. sum(i,sum(j,epsilons1(i,j)+epsilons2(i,j)))=l=%limEpsilon%;


**************************************Objectives************************************************

variables DoC,Cost;
equations DoC_obj,Cost_obj;
*DoC.lo=0.55;
*DoC.up=1.2;

set inputs(j) /P1,P2,P7,P12,P14,P17,P18,P21,P26,P39,P42,P49,P52,P57,P58,P59, P76/;
parameter cost_inputs(j) /P1 0.0496,P2 0.01624,P7 0.1766,P12 0.559977,P14 0.12996,P17 0.067,P18 0.37725,P21 0.067,P26 0.0287605,P39 0.1766,P42 110.2293,P49 0.12,P52 80,P57 0.13227,P58 0.022046,P59 0.020923,P76 0.000000030442/;

	Cost_obj.. Cost =e=sum(j$inputs(j), s(j)*cost_inputs(j))-costBenifitCompost;

variable CostBag;
equation Cost_obj1;
parameter cost_bags(j) /P82 0.11, P83 0.18, P84 0.6, P85 0.14, P86 0.1, P134 0.2/;
Cost_obj1.. CostBag=e=sum(j$bags(j),-1*pchoiceitems(j)*cost_bags(j));




positive variable costRecycled;
equation costRecycled1;
costRecycled1.. costRecycled*0.90718=e=A('E81','P96')*s('P96')*[1.24*%q9%]+A('E80','P95')*s('P95')*[1.08*%q8%]+A('E79','P93')*s('P93')*[0.9*%q6%]+A('E78','P94')*s('P94')*[0.99*%q7%]+A('E129','P135')*s('P135')*[0.445*%q10%];

variable costIn,costPy,costCl,costLu;
equation costIn1,costPy1,costCl1,costLu1;

equation manufacturedPositive;
manufacturedPositive.. productionCostResin+costRecycled=g=0;



costIn1.. costIn=e=sum(j$ifill_indices(j),s(j)*techMat('E107',j)*elecCost/360)+sum(j$ifill_indices_new(j),s(j)*techMat('E107',j)*elecCost/360);
costPy1.. costPy=e=s('P116')*biofuelCost;
scalar clinkerCost /[34*%q14%]/;
scalar lumberCost /[0.036*%q14%]/;
costCl1.. costCl=e=s('P129')*clinkerCost/1000;
*clinker 34$/ton, lumber=45$/1000 board feet i.e. 2.35 m3 and 320 kg/m3 density
costLu1.. costLu=e=s('P130')*lumberCost;
*pyrolysis 0.044 kg biofuel generated, 7.3 lb/gal density, 3$/gal
*degreeofcircularity
*DoC_obj.. DoC*sum(j$unextrudedAmnts(j), s(j))=e=sum(j$unextrudedAmnts(j), s(j))-(f('E97')+lossLandfill);
*DoC_obj.. DoC*sum(j$bagAmnts(j), s(j))=e=sum(j$bagAmnts(j), s(j))-(f('E97')+lossLandfill+lossIncineration+lossBioFuel+lossCompost+costCl*s('P129')+costLu*s('P130'));
DoC_obj.. DoC*(productionCostResin+costRecycled) =e=costIn +costRecycled+costBenifitCompost+costCl+costLu+costPy;
*DoC_obj.. DoC=e=costIn;
*DoC_obj.. DoC*Cost =e=costIn +costRecycled+costBenifitCompost+costPy+costCl+costLu;



$ontext
equation dumm;
variable dum;
dumm.. dum=e=10;
	Model ToyProblem /ALL/;
	Option MINLP=BARON;
	Solve ToyProblem using MINLP maximizing dum; 
$offtext

variable pchoicemass(j);
equation totmassproduced(j);
variable totpdtmass;
equation eqtotpdtmass;
eqtotpdtmass.. totpdtmass=e=sum(j$bagAmnts(j),s(j));
totmassproduced(j)$bagAmnts(j).. pchoicemass(j)*totpdtmass=e=s(j);

set wasteMgmt /'Reprocess', 'Pyrolysis', 'Landfill', 'Incineration'/;
variable wasteMgmtValues (wasteMgmt);
equations eqw1,eqw2,eqw3,eqw4;
eqw1.. wasteMgmtValues('Reprocess')=e=s('P92')*(1-techMat('E97','p92'));
eqw2.. wasteMgmtValues('Pyrolysis')=e=(s('P115')*((-1)*techMat('E91','P115')-techMat('E97','P115')));
eqw3.. wasteMgmtValues('Landfill')=e=(sum(j$lfill_indices(j), s(j)*(907.18-techMat('E97',j))))+(s('P113')*907.18)-(s('P114')*45);
eqw4.. wasteMgmtValues('Incineration')=e=sum(j$ifill_indices(j), s(j)*(907.18-techMat('E97',j)))+sum(j$ifill_indices_new(j), s(j)*(907.18-techMat('E97',j)));




variable g(k);
equation impactValues(k);
impactValues(k).. g(k)=e=sum(j,B(k,j)*s(j));
variable mp_indicators(l);
equation eqMPI(l);
eqMPI(l).. mp_indicators(l)=e=sum(k,C(l,k)*g(k));

variable gwp;
equation eq_gwp;
eq_gwp.. gwp=e=mp_indicators('MPI4');
*$if not set constrVal $set constrVal=0;
*equation constrainttrial;
*constrainttrial.. wasteMgMtValues('Reprocess')=l=0.5;

positive variable slack1,slack2;

parameter gwpC,costC,docC;
$if not set gwpC $set gwpC -1;
gwpC=%gwpC%;
*slack1.lo=-1*gwpC*0;    
*slack1.up=gwpC*0;    
equation addCons1;
addCons1$(gwpC>0).. gwp+slack1=e=gwpC;
$if not set costC $set costC -1;
costC=%costC%;
*slack2.lo=-1*costC*0;    
*slack2.up=costC*0;
equation addCons2;
addCons2$(costC>0).. cost+slack2=e=costC;

$if not set docC $set docC -1;
docC=%docC%;
equation addCons3;
addCons3$(docC>0).. DoC=g=docC;


*Ellen Mcarthur Constraints

*equation elmc1;
*equation elmc2;
*equations elmc3;
*equations elmc4;
*elmc1.. sum(j$ifill_indices(j),s(j)*907.18)=g=0.14*(s('P90')+s('P91'));
*elmc2.. sum(j$lfill_indices(j),s(j)*907.18)=e=0.5*(s('P90')+s('P91'));
*elmc3.. s('P92')=e=0.14*(s('P90')+s('P91'));
*elmc4.. s('P115')=e=0.01*(s('P90')+s('P91'));

equation eps1;
variable epsObj;
eps1.. epsObj=e=DoC+eps*(slack1+slack2);

    Model ToyProblem /ALL/;
	Option MINLP=BARON;

$onecho > baron.opt
DoLocal 0
NumLoc 0
$offecho

option resLim=100;

variable dummy;
equation dummyeq;
dummyeq.. dummy=e=10;

*	ToyProblem.OptFile=1;
*	Option limrow=120;
*    Option resLim=5000;
*    Option optcr=0.1;
parameter zD,zG,zC;
*******************************************Objectives**********************************************
DoC.lo=0;
*DoC.up=2;


If(docC<0, Solve ToyProblem Using MINLP maximizing DoC; 
zD = DoC.l;
DoC.lo=zD;
zG = gwp.l;
gwp.l=zG;
*Solve ToyProblem Using MINLP minimizing gwp;
zG = gwp.l;
gwp.up=zG;
*Solve ToyProblem Using MINLP minimizing Cost;
zC=cost.l;
cost.up=zC;


Elseif (gwpC<0), Solve ToyProblem Using MINLP minimizing gwp;
zG = gwp.l;
gwp.up=zG;
*Solve ToyProblem Using MINLP minimizing Cost;
zC=Cost.l;
Cost.up=zC;
*Solve ToyProblem Using MINLP maximizing DoC;
zD = DoC.l;
DoC.fx=zD;

else Solve ToyProblem Using MINLP minimizing Cost;
zC = Cost.l;
Cost.up=zC;
*Solve ToyProblem Using MINLP maximizing DoC;
zD = DoC.l;
DoC.lo=zD;
*Solve ToyProblem Using MINLP minimizing gwp;
zG=gwp.l;
gwp.fx=zG;
);

$ontext

$GDXIN intMatrix1.gdx
$LOAD B
$GDXIN
B(k,j) = round(B(k,j), 4);

$GDXIN CharacFactors.gdx
$LOAD C
$GDXIN
C(l,k) = round(C(l,k), 4);


variable g(k);
*equation impactValues(k);
*impactValues(k).. g(k)=e=sum(j,B(k,j)*s(j));
g.fx(k)=sum(j,B(k,j)*s.l(j));
variable mp_indicators(l);
*equation eqMPI(l);
mp_indicators.l(l)=0.05;
mp_indicators.fx(l)=sum(k,C(l,k)*g.l(k));
$offtext

Display pchoiceitems.l,pchoicemass.l,wasteMgmtValues.l;
Display DoC.l;
Display Cost.l;
Display s.l;
Display g.l;
Display cbc2.l,costBenifitCompost.l,lossCompost.l,lossIncineration.l,lossBiofuel.l,lossLandfill.l;
Display productionCostResin.l;
Display mp_indicators.l;



$if not set file $set file 0

File pareto /pareto%file%.txt/;
pareto.ap=1;
pareto.nd=4;
put pareto"";
put Cost.l",";
put DoC.l",";
put totpdtmass.l",";
loop(j$bagAmnts(j),put s.l(j)",");
loop(wasteMgmt,put wasteMgmtValues.l(wasteMgmt)",");
*loop(l,put mp_indicators.l(l)",");
put mp_indicators.l('MPI4')"";
put /;

set from /'HDPE','LDPE','PP','PLA','Paper','Households','Curbside Collection','Dropoff','Segregation','rHDPE','rLDPE','rPP','rPLA','rPaper','Compost','Landfill','Incineration','Pyrolysis','Clinker','Lumber','Losses'/;
*set to /HDPE,LDPE,PP,PLA,Paper,Households,Curbside Collection,Dropoff,Segregation,rHDPE,rLDPE,rPP,rPLA,rPaper,Compost,Landfill,Incineration,Pyrolysis,Losses/;
set to /'HDPE','LDPE','PP','PLA','Paper','Households','Curbside Collection','Dropoff','Segregation','rHDPE','rLDPE','rPP','rPLA','rPaper','Compost','Landfill','Incineration','Pyrolysis','Clinker','Lumber','Losses'/;



variable cD(from,to);
cd.l(from,to)=0.0000;
cd.fx('HDPE','Households')=s.l('P82');
cd.fx('LDPE','Households')=s.l('P83');
cd.fx('PP','Households')=s.l('P84');
cd.fx('PLA','Households')=s.l('P85');
cd.fx('Paper','Households')=s.l('P132');
cd.fx('Households','losses')=s.l('P87')*techMat('E97','P87')+s.l('P88');
cd.fx('Households','Curbside Collection')=-1*s.l('P90')*techMat('E89','P90');
cd.fx('Households','Dropoff')=s.l('P91')*(-1)*techMat('E89','P91');
cd.fx('Curbside Collection','losses')=s.l('P90')*techMat('E97','P90');
cd.fx('Dropoff','losses')=s.l('P91')*techMat('E97','P91');
cd.fx('Curbside Collection','Segregation')=s.l('P90')*s.l('P92')/(s.l('P90')+s.l('P91'));
cd.fx('Dropoff','Segregation')=s.l('P91')*s.l('P92')/(s.l('P90')+s.l('P91'));
set repr_lfill(j) /P92*P97/;
cd.fx('Segregation','Landfill')=s.l('P92')*techMat('E97','P92')+sum(j$repr_lfill(j),s.l(j)*techMat('E113',j));

cd.fx('Curbside Collection','Landfill')=s.l('P90')*(sum(j$lfill_indices(j), s.l(j)*(907.18-techMat('E97',j))))/(s.l('P90')+s.l('P91'));
cd.fx('Dropoff','Landfill')=s.l('P91')*(sum(j$lfill_indices(j), s.l(j)*(907.18-techMat('E97',j))))/(s.l('P90')+s.l('P91'));

cd.fx('Curbside Collection','Incineration')=s.l('P90')*sum(j$ifill_indices(j), s.l(j)*(907.18-techMat('E97',j)))/(s.l('P90')+s.l('P91'));
cd.fx('Dropoff','Incineration')=s.l('P91')*sum(j$ifill_indices(j), s.l(j)*(907.18-techMat('E97',j)))/(s.l('P90')+s.l('P91'));
cd.fx('Incineration','Landfill')=sum(j$ifill_indices(j),s.l(j)*techMat('E113',j));
cd.fx('Incineration','losses')=sum(j$ifill_indices(j),s.l(j)*techMat('E97',j));

cd.fx('Curbside Collection','Pyrolysis')=s.l('P90')*(s.l('P115')*((-1)*techMat('E91','P115')-techMat('E97','P115')))/(s.l('P90')+s.l('P91'));
cd.fx('Dropoff','Pyrolysis')=s.l('P91')*(s.l('P115')*((-1)*techMat('E91','P115')-techMat('E97','P115')))/(s.l('P90')+s.l('P91'));
cd.fx('Pyrolysis','losses')=s.l('P115')*techMat('E97','P115');

cd.fx('Segregation','rHDPE')=s.l('P93');
cd.fx('Segregation','rLDPE')=s.l('P94');
cd.fx('Segregation','rPP')=s.l('P95');
cd.fx('Segregation','rPLA')=s.l('P96');
cd.fx('Segregation','rPaper')=s.l('P135');
cd.fx('Segregation','Compost')=907.18*(s.l('P117')+s.l('P104')+s.l('P105'));
cd.fx('Segregation','Incineration')=sum(j$ifill_indices(j), s.l(j)*(907.18-techMat('E97',j)));



cd.fx('rHDPE','HDPE')=s.l('P93')*techMat('E79','P93');
cd.fx('rHDPE','Incineration')=s.l('P118')*(907.18-techMat('E79','P118'));
cd.fx('rHDPE','Pyrolysis')=s.l('P122');
cd.fx('rHDPE','Clinker')$(s.l('P129')>0 or s.l('P130')>0)=s.l('P126')*(s.l('P129')/(s.l('P129')+s.l('P130')));
cd.fx('rHDPE','Lumber')$(s.l('P129')>0 or s.l('P130')>0)=s.l('P126')*(s.l('P130')/(s.l('P129')+s.l('P130')));
cd.fx('rLDPE','LDPE')=s.l('P94')*techMat('E78','P94');
cd.fx('rLDPE','Incineration')=s.l('P119')*(907.18-techMat('E79','P119'));
cd.fx('rLDPE','Pyrolysis')=s.l('P123');
cd.fx('rLDPE','Clinker')$(s.l('P129')>0 or s.l('P130')>0)=s.l('P127')*(s.l('P129')/(s.l('P129')+s.l('P130')));
cd.fx('rLDPE','Lumber')$(s.l('P129')>0 or s.l('P130')>0)=s.l('P127')*(s.l('P130')/(s.l('P129')+s.l('P130')));
cd.fx('rPP','PP')=s.l('P95')*techMat('E80','P95');
cd.fx('rPP','Incineration')=s.l('P120')*(907.18-techMat('E79','P118'));
cd.fx('rPP','Pyrolysis')=s.l('P124');
cd.fx('rPP','Clinker')$(s.l('P129')>0 or s.l('P130')>0)=s.l('P128')*(s.l('P129')/(s.l('P129')+s.l('P130')));
cd.fx('rPP','Lumber')$(s.l('P129')>0 or s.l('P130')>0)=s.l('P128')*(s.l('P130')/(s.l('P129')+s.l('P130')));
cd.fx('rPLA','PLA')=s.l('P96')*techMat('E81','P96');
cd.fx('rPLA','Incineration')=s.l('P121')*(907.18-techMat('E79','P118'));
cd.fx('rPLA','Pyrolysis')=s.l('P125');
cd.fx('rPLA','Compost')=s.l('P117')*(907.18);
cd.fx('rPaper','Paper')=s.l('P135')*techMat('E125','P135');
cd.fx('rHDPE','Losses')=s.l('P93')*techMat('E97','P93');
cd.fx('rLDPE','Losses')=s.l('P94')*techMat('E97','P94');
cd.fx('rPP','Losses')=s.l('P95')*techMat('E97','P95');
cd.fx('rPLA','Losses')=s.l('P96')*techMat('E97','P96');
cd.fx('rPaper','Losses')=s.l('P135')*techMat('E97','P135');
*cd.fx('Segregation','Landfill')=sum(j$repr_lfill(j),s.l(j)*techMat('E113',j));

cd.fx(from,to) = round(cd.l(from,to), 4);
parameter recyclevalLDPE,recyclevalPLA,recyclevalPP,recyclevalHDPE;
recyclevalPLA$(s.l('P80')>0)=A('E81','P96')*s.l('P96')/(s.l('P80')+A('E81','P96')*s.l('P96'));
recyclevalPP$(s.l('P79')>0)=A('E80','P95')*s.l('P95')/(s.l('P79')+A('E80','P95')*s.l('P95'));
recyclevalHDPE$(s.l('P77')>0)=A('E79','P93')*s.l('P93')/(s.l('P77')+A('E79','P93')*s.l('P93'));
recyclevalLDPE$(s.l('P78')>0)=A('E78','P94')*s.l('P94')/(s.l('P78')+A('E78','P94')*s.l('P94'));
Display recyclevalLDPE,recyclevalHDPE,recyclevalPP,recyclevalPLA;
*chordDiag.nd=4;
*put chordDiag"";
*loop(to, put to.tl);
*loop(from, loop(to, put cd.l(from,to)); put /;);
*put /;
*Display from;

parameter epsilons(i,j);
epsilons(i,j)=epsilons1.l(i,j)+epsilons2.l(i,j);

execute_unload 'Sankey_%fileS%.gdx', cD,from; 
execute_unload 'epsilons_%fileS%.gdx', epsilons; 
execute 'gdxdump Sankey_%fileS%.gdx output=Sankey_%fileS%.csv symb=cD format=csv'
execute 'gdxdump epsilons_%fileS%.gdx output=epsilons_%fileS%.csv symb=epsilons format=csv'
execute 'rm Sankey_%fileS%.gdx'
execute 'sh removeUndf.sh Sankey_%fileS%.csv'
execute 'python3 finalJSConstructor.py Sankey_%fileS%.csv'
execute 'mv Sankey_%fileS%.* ./%file%/'
execute 'mv epsilons_%fileS%.* ./%file%/'
execute 'rm scalingVector.csv'
execute_unload 'scalingVector.gdx', s; 
execute 'gdxdump scalingVector.gdx output=scalingVector.csv symb=s format=csv'
*execute 'rm scalingVector.gdx'
execute 'python3 hotspotFinder.py scalingVector.csv'
execute 'mv fig.png ./%file%/hotspot_%fileS%.png'
execute 'mv fig.svg ./%file%/hotspot_%fileS%.svg'
*execute_unload 'Intervention.gdx', g; 
*execute 'gdxdump Intervention.gdx output=Intervention.csv symb=g format=csv'
*execute 'rm Intervention.gdx'

*execute 'cd ~/Data/GAMS_Codes/LCD-Plastics/Graphics/Sankey/'
*execute 'python finalJSConstructor.py Sankey_%fileS%.csv'
Display cd.l;
*execute_unload "pareto%filename%.gdx", techMat,s,f,Cost,DoC,productionCostResin, pchoiceitems, pchoicemass, wasteMgmtValues,mp_indicators;
*execute_unload 'Find.gdx', techMat,s,f,Cost,DoC,productionCostResin, pchoiceitems, pchoicemass, wasteMgmtValues,mp_indicators;
*execute 'gdxdump Find.gdx output=Find.csv symb=techMat format=csv'
