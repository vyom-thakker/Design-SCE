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
 {"source":"LDPE", "target":"Households", "value":0.4564, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":1.5019999999999998, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":1.719, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.2394, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":1.5673, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.1383, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.3652, "optimal":"yes"} , 
{"source":"Segregation", "target":"Lactic acid from acid hydrolysis", "value":0.9942, "optimal":"yes"} , 
{"source":"Segregation", "target":"Me-Lactate from alcoholysis", "value":0.2078, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.2009, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.1242, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0402, "optimal":"yes"} ]}; 
