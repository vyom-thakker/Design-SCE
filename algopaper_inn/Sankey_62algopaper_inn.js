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
 {"source":"HDPE", "target":"Households", "value":0.0111, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.5944, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":0.6824, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":1.135, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.1529, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":1.0349, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0913, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":0.009000000000000001, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.4776, "optimal":"yes"} , 
{"source":"Segregation", "target":"Me-Lactate from alcoholysis", "value":0.5483, "optimal":"yes"} , 
{"source":"rHDPE", "target":"HDPE", "value":0.0049, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Lumber", "value":0.0032, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Losses", "value":0.0008, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.2627, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.1624, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0525, "optimal":"yes"} ]}; 