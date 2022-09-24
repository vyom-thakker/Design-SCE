let dataV={"nodes": [
{"name":"Pyrolysis"},
{"name":"Landfill"},
{"name":"LDPE"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rLDPE"},
{"name":"Lumber"},
{"name": "Losses"}
],
 "links": [
 {"source":"LDPE", "target":"Households", "value":0.7147, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.469, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.2457, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.4276, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0377, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.0755, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.3522, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Pyrolysis", "value":0.0657, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.1937, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.054000000000000006, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0387, "optimal":"yes"} ]}; 
