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
 {"source":"LDPE", "target":"Households", "value":0.3141, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":2.3287, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":2.3292, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.3137, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":2.1236, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.1874, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.2524, "optimal":"yes"} , 
{"source":"Segregation", "target":"Me-Lactate from alcoholysis", "value":1.8712, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.1388, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.0858, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0278, "optimal":"yes"} ]}; 
