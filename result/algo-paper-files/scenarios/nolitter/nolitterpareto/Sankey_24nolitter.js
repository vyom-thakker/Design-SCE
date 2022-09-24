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
{"name":"Lactic acid from acid hydrolysis"},
{"name":"Me-Lactate from alcoholysis"},
{"name": "Losses"}
],
 "links": [
 {"source":"HDPE", "target":"Households", "value":0.0007, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.41200000000000003, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":1.7586, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":1.9136, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.2578, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":1.7447, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.154, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":0.0006, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.3311, "optimal":"yes"} , 
{"source":"Segregation", "target":"Lactic acid from acid hydrolysis", "value":1.1542, "optimal":"yes"} , 
{"source":"Segregation", "target":"Me-Lactate from alcoholysis", "value":0.2588, "optimal":"yes"} , 
{"source":"rHDPE", "target":"HDPE", "value":0.0003, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Lumber", "value":0.0002, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Losses", "value":0.0001, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.1821, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.1126, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0364, "optimal":"yes"} ]}; 
