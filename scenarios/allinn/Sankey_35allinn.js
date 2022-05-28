let dataV={"nodes": [
{"name":"Landfill"},
{"name":"HDPE"},
{"name":"LDPE"},
{"name":"PP"},
{"name":"PLA"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rHDPE"},
{"name":"rLDPE"},
{"name":"rPP"},
{"name":"Lumber"},
{"name":"Lactic acid from acid hydrolysis"},
{"name":"Me-Lactate from alcoholysis"},
{"name": "Losses"}
],
 "links": [
 {"source":"HDPE", "target":"Households", "value":0.0018, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.3622, "optimal":"yes"} , 
{"source":"PP", "target":"Households", "value":0.0195, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":1.9827, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":2.0707, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.2954, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":1.8879, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.1666, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.3332, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":0.0012, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.23800000000000002, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPP", "value":0.0128, "optimal":"yes"} , 
{"source":"Segregation", "target":"Lactic acid from acid hydrolysis", "value":0.0374, "optimal":"yes"} , 
{"source":"Segregation", "target":"Me-Lactate from alcoholysis", "value":1.2653, "optimal":"yes"} , 
{"source":"rHDPE", "target":"HDPE", "value":0.0006, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Lumber", "value":0.0004, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Losses", "value":0.0001, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.1309, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.0809, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0262, "optimal":"yes"} , 
{"source":"rPP", "target":"PP", "value":0.006999999999999999, "optimal":"yes"} , 
{"source":"rPP", "target":"Lumber", "value":0.0047, "optimal":"yes"} , 
{"source":"rPP", "target":"Losses", "value":0.001, "optimal":"yes"} ]}; 