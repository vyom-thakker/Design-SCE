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
 {"source":"LDPE", "target":"Households", "value":0.4739, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":1.3997, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":1.6512, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.2224, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":1.5055, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.1329, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.3808, "optimal":"yes"} , 
{"source":"Segregation", "target":"Lactic acid from acid hydrolysis", "value":0.006999999999999999, "optimal":"yes"} , 
{"source":"Segregation", "target":"Me-Lactate from alcoholysis", "value":1.1177, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.2095, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.1295, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0419, "optimal":"yes"} ]}; 
