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
 {"source":"LDPE", "target":"Households", "value":0.4584, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":1.49, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":1.7171, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.2313, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":1.5656, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.1382, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.3683, "optimal":"yes"} , 
{"source":"Segregation", "target":"Me-Lactate from alcoholysis", "value":1.1973, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.2026, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.1252, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0405, "optimal":"yes"} ]}; 
