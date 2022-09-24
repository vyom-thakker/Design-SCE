let dataV={"nodes": [
{"name":"HDPE"},
{"name":"LDPE"},
{"name":"PLA"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rHDPE"},
{"name":"rLDPE"},
{"name":"Lumber"},
{"name":"Me-Lactate from alcoholysis"},
{"name": "Losses"}
],
 "links": [
 {"source":"HDPE", "target":"Households", "value":0.0004, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.3453, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":2.147, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":2.1968, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.2959, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":2.0029, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.1768, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":0.0003, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.2775, "optimal":"yes"} , 
{"source":"Segregation", "target":"Me-Lactate from alcoholysis", "value":1.7252, "optimal":"yes"} , 
{"source":"rHDPE", "target":"HDPE", "value":0.0002, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Lumber", "value":0.0001, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.1526, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.0943, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0305, "optimal":"yes"} ]}; 
