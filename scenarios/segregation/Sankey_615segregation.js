let dataV={"nodes": [
{"name":"LDPE"},
{"name":"PP"},
{"name":"PLA"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rLDPE"},
{"name":"rPP"},
{"name":"Lumber"},
{"name":"Lactic acid from acid hydrolysis"},
{"name":"Me-Lactate from alcoholysis"},
{"name": "Losses"}
],
 "links": [
 {"source":"LDPE", "target":"Households", "value":0.1099, "optimal":"yes"} , 
{"source":"PP", "target":"Households", "value":0.0128, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":3.4739999999999998, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":3.1697, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.42700000000000005, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":2.89, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.255, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.0883, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPP", "value":0.0103, "optimal":"yes"} , 
{"source":"Segregation", "target":"Lactic acid from acid hydrolysis", "value":2.4842, "optimal":"yes"} , 
{"source":"Segregation", "target":"Me-Lactate from alcoholysis", "value":0.3071, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.0486, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.03, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0097, "optimal":"yes"} , 
{"source":"rPP", "target":"PP", "value":0.0057, "optimal":"yes"} , 
{"source":"rPP", "target":"Lumber", "value":0.0038, "optimal":"yes"} , 
{"source":"rPP", "target":"Losses", "value":0.0008, "optimal":"yes"} ]}; 