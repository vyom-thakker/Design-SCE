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
 {"source":"LDPE", "target":"Households", "value":0.1689, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":3.1733, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":1.5246, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":1.8176, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":1.39, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.1227, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.0702, "optimal":"yes"} , 
{"source":"Segregation", "target":"Me-Lactate from alcoholysis", "value":1.3198, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.0386, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.0239, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0077, "optimal":"yes"} ]}; 
