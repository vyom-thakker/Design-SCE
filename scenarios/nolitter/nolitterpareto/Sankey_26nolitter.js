let dataV={"nodes": [
{"name":"LDPE"},
{"name":"PLA"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rLDPE"},
{"name":"Lumber"},
{"name":"Lactic acid from acid hydrolysis"},
{"name":"Me-Lactate from alcoholysis"},
{"name": "Losses"}
],
 "links": [
 {"source":"LDPE", "target":"Households", "value":0.0573, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":3.8222, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":3.4189, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.4605, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":3.1172, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.2751, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.046, "optimal":"yes"} , 
{"source":"Segregation", "target":"Lactic acid from acid hydrolysis", "value":1.8848, "optimal":"yes"} , 
{"source":"Segregation", "target":"Me-Lactate from alcoholysis", "value":1.1864, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.0253, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.0156, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0051, "optimal":"yes"} ]}; 