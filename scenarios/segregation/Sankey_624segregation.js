let dataV={"nodes": [
{"name":"LDPE"},
{"name":"PLA"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rLDPE"},
{"name":"Lumber"},
{"name":"Lactic acid from acid hydrolysis"},
{"name":"Me-Lactate from alcoholysis"},
{"name": "Losses"}
],
 "links": [
 {"source":"LDPE", "target":"Households", "value":0.2809, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":2.5221, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":2.4702, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.3327, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":2.2522, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.1988, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.2257, "optimal":"yes"} , 
{"source":"Segregation", "target":"Lactic acid from acid hydrolysis", "value":1.6133, "optimal":"yes"} , 
{"source":"Segregation", "target":"Me-Lactate from alcoholysis", "value":0.4132, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.1241, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.0767, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0248, "optimal":"yes"} ]}; 