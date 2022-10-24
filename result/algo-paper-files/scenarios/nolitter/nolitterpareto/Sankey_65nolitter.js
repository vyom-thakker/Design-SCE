let dataV={"nodes": [
{"name":"Pyrolysis"},
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
 {"source":"Pyrolysis", "target":"Losses", "value":0.0004, "optimal":"yes"} , 
{"source":"HDPE", "target":"Households", "value":0.0012, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.2581, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":2.6528, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":2.5664, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.3457, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":0.0019, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":2.3376, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.2065, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":0.0009, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.2072, "optimal":"yes"} , 
{"source":"Segregation", "target":"Me-Lactate from alcoholysis", "value":2.1295, "optimal":"yes"} , 
{"source":"rHDPE", "target":"HDPE", "value":0.0005, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Lumber", "value":0.0003, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Losses", "value":0.0001, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.1139, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.0704, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0228, "optimal":"yes"} ]}; 