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
 {"source":"LDPE", "target":"Households", "value":0.2278, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":2.8304, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":2.6952, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.363, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":2.4573, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.2169, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.1831, "optimal":"yes"} , 
{"source":"Segregation", "target":"Lactic acid from acid hydrolysis", "value":1.9418, "optimal":"yes"} , 
{"source":"Segregation", "target":"Me-Lactate from alcoholysis", "value":0.3324, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.1007, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.0622, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0201, "optimal":"yes"} ]}; 
