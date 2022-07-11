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
 {"source":"LDPE", "target":"Households", "value":0.6027, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":0.6509999999999999, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":1.1049, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.1488, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":1.0074, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0889, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.4843, "optimal":"yes"} , 
{"source":"Segregation", "target":"Me-Lactate from alcoholysis", "value":0.5231, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.2664, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.1647, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0533, "optimal":"yes"} ]}; 
