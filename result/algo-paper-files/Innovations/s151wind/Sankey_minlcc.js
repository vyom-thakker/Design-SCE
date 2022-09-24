let dataV={"nodes": [
{"name":"Pyrolysis"},
{"name":"PLA"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name": "Losses"}
],
 "links": [
 {"source":"Pyrolysis", "target":"Losses", "value":0.0006, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":4.155, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.0042, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":4.1508, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":0.0032, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0003, "optimal":"yes"} ]}; 
