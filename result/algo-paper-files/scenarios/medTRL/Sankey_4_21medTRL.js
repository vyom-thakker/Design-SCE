let dataV={"nodes": [
{"name":"Landfill"},
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
 {"source":"HDPE", "target":"Households", "value":0.059000000000000004, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.25, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":2.6107, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":1.4389, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":1.4807, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":1.3119, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.1158, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.2316, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":0.0218, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.0925, "optimal":"yes"} , 
{"source":"Segregation", "target":"Me-Lactate from alcoholysis", "value":0.9661, "optimal":"yes"} , 
{"source":"rHDPE", "target":"HDPE", "value":0.012, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Lumber", "value":0.0079, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Losses", "value":0.002, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.0509, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.0314, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0102, "optimal":"yes"} ]}; 