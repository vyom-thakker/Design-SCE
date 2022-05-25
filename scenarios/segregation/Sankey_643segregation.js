let dataV={"nodes": [
{"name":"LDPE"},
{"name":"PLA"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rLDPE"},
{"name":"Lumber"},
{"name":"Me-Lactate from alcoholysis"},
{"name": "Losses"}
],
 "links": [
 {"source":"LDPE", "target":"Households", "value":0.4455, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":1.5651, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":1.7719, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.2387, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":1.6156, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.1426, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.358, "optimal":"yes"} , 
{"source":"Segregation", "target":"Me-Lactate from alcoholysis", "value":1.2576, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.1969, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.1217, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0394, "optimal":"yes"} ]}; 
