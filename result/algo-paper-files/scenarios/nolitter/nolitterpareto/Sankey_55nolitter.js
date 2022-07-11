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
 {"source":"LDPE", "target":"Households", "value":0.2597, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":2.6454, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":2.5602, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.3449, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":2.3343, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.20600000000000002, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.2086, "optimal":"yes"} , 
{"source":"Segregation", "target":"Me-Lactate from alcoholysis", "value":2.1256, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.1148, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.0709, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.023, "optimal":"yes"} ]}; 
