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
 {"source":"LDPE", "target":"Households", "value":0.545, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":0.9868, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":1.3499, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.1818, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":1.2308, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.1086, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.4379, "optimal":"yes"} , 
{"source":"Segregation", "target":"Me-Lactate from alcoholysis", "value":0.7929, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.2408, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.1489, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0482, "optimal":"yes"} ]}; 
