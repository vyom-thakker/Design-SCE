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
 {"source":"LDPE", "target":"Households", "value":0.1667, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":3.1860000000000004, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":1.3753, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":1.9774, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":1.2539, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.1107, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.0623, "optimal":"yes"} , 
{"source":"Segregation", "target":"Me-Lactate from alcoholysis", "value":1.1916, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.0343, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.0212, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0069, "optimal":"yes"} ]}; 
