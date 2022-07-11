let dataV={"nodes": [
{"name":"Landfill"},
{"name":"PP"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name": "Losses"}
],
 "links": [
 {"source":"PP", "target":"Households", "value":1.2651, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":1.1149, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.1502, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":1.0165, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0897, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.1794, "optimal":"yes"} , 
{"source":"Segregation", "target":"C4 Gas Mixture Pyrolysis", "value":0.1256, "optimal":"yes"} , 
{"source":"Segregation", "target":"Light Liquid Fuel Pyrolysis", "value":0.5357, "optimal":"yes"} ]}; 
